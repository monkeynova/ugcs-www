package Wizard;

use strict;
no strict 'refs';

use vars qw( $DEFAULTTEMPLATE );

$DEFAULTTEMPLATE = "./wizard.html";

sub new {
  my $self = shift;
  my $class = ref( $self ) || $self;
  my %args = @_;
  my $ret = {
	     WizardTemplate => $args{ WizardTemplate } || $DEFAULTTEMPLATE,
	     Pages => $args{ Pages },
	     Data => $args{ Defaults } || {},
	     Fields => $args{ Fields },
	     State => undef,
	     StartState => $args{ StartState },
	     Errors => [],
	     Action => $args{ Action } || $0,
	     PrevStates => undef,
	    };

  return bless $ret, $class;
}

sub loadCGI {
  my $self = shift;
  my ($query) = @_;

  my ($tmp, @tmparr);

  return undef
    if ( ref( $query ) ne "CGI" );

  $self->{PrevStates} = $query->param( "__BACK__" );

  if ( ! defined( $self->{State} = $query->param( "__STATE__" ) )) {
    return undef
      if ( ! defined $self->{Pages}->{$self->{StartState}} );

    $self->{ State } = $self->{ StartState };
    
    return 1;
  }
  
  foreach (@{$self->{Fields}}) {
    $self->{Data}->{$_} = $query->param( $_ );
  }

  if ( defined( $query->param( "__GO_BACK__" ) ) ) {
    @tmparr = split( / /, $self->{PrevStates} );
    $tmp = pop @tmparr;
    $self->{PrevStates} = join( " ", @tmparr );

    return undef
      if ( ! defined $self->{Pages}->{$tmp} );

    $self->{ State } = $tmp;

    return 1;
  }
  
  return undef
    if ( ! defined( $self->{Pages}->{$self->{State}}) );

  if ( $tmp = &{$self->{Pages}->{ $self->{State}}->[1]}( 
							$self->{ State }, 
							$self->{ Data } 
						       ) ) {
    push @{$self->{Errors}}, $tmp;

    return 1;
  }

  $tmp = &{$self->{Pages}->{ $self->{State}}->[2]}( 
						   $self->{State}, 
						   $self->{Data}
						  );
  return undef
    if ( ! defined( $self->{Pages}->{$tmp} ) );
  $self->{ PrevStates } .= " ". $self->{State};
  $self->{ State } = $tmp;
    
  if ( ref( $self->{Pages}->{ $self->{State}}->[2] ) ne "CODE" ) {
    $self->{ Action } = $self->{Pages}->{ $self->{State}}->[2];
  }
    
  return 1;
}

sub toString {
  my $self = shift;

  my ($templateText, $replaceText);
  my $page = $self->{Pages}->{ $self->{State} };

  local( *TXT );
  
  open( TXT, $self->{WizardTemplate} ) || die "Can't read Wizard Template!\n";
  $templateText = join( "", <TXT> );
  close( TXT );

  open( TXT, $page->[0] ) || 
    die "Can't read page for " . $self->{State} . " !\n";
  $replaceText = join( "", <TXT> );
  close( TXT );

  if ( ref( $page->[3] ) eq "CODE" ) {
    &{$page->[3]}( $self->{State}, $self->{Data}, \$replaceText );
  }

  my $tmp = "\"" . $self->{Action} . "\"";
  $templateText =~ s/(<FORM.*?ACTION=)(\"[^\"]*\"|\S+)/$1$tmp/ig;

  my @usedfields = grabFields( \$replaceText, $self->{ Data } );
  
  my $formadder = "";
  $formadder .= hiddenTag( "__STATE__", $self->{State} );
  $formadder .= hiddenTag( "__BACK__", $self->{PrevStates} );
  
  foreach $tmp (keys %{$self->{Data}}) {
    $formadder .= hiddenTag( $tmp, $self->{Data}->{$tmp} )
      if ( scalar( grep( /$tmp/, @usedfields ) ) == 0 );
  }

  $templateText =~ s/<!--REPLACE-->/$formadder$replaceText/;
  my $errorstring = join( "<BR>\n", @{$self->{Errors}} );
  $templateText =~ s/<!--ERRORS-->/$errorstring/;

  return $templateText;
}

sub hiddenTag {
  my ($name, $value) = @_;
  return "<INPUT TYPE=HIDDEN NAME=\"" . $name . "\" VALUE=\"" . $value . "\">\n";
}

sub grabFields {
  my ($text, $data) = @_;

  # input select textarea

  my ($i, $str, $field, @inputadds, @ret, %tmphsh);
  my ( $TYPE, $NAME, $VALUE, $CHECKED, $SIZE );
  for( $i = 0; $$text =~ s/(<INPUT.*?>)/<!--$i-->/i; $i++ ) {
    $str = $1;

    foreach $field ( qw( TYPE NAME VALUE SIZE ) ) {
      $str =~ /$field=(\w+|\"[^\"]*\")/i;
      $tmphsh{$field} = $1;
      $tmphsh{$field} =~ s/\"//g;
    }

    $NAME = $tmphsh{ NAME }; $VALUE = $tmphsh{ VALUE }; 
    $SIZE = $tmphsh{ SIZE }; $TYPE  = $tmphsh{ TYPE };

    $TYPE =~ tr/a-z/A-Z/;

    $CHECKED = 0;

    if ( $TYPE eq "RADIO" ) {
      $CHECKED = 1
	if ( $data->{ $NAME } eq $VALUE );

    } elsif ( $TYPE eq "CHECKBOX" ) { 
      $VALUE = 1;
      $CHECKED = 1
	if ( $data->{ $NAME } ne "" );
      
    } else {
      $VALUE = $data->{ $NAME }
        if ( defined $data->{ $NAME } );
    }

    push @ret, $NAME
      if ( $NAME ne "" );
    
    $inputadds[$i] = "<INPUT TYPE=\"" . $TYPE . "\" NAME=\"" . $NAME . "\" " .
      "VALUE=\"" . $VALUE . "\" " . (($CHECKED)?"CHECKED":"") . 
      (($SIZE != 0)?"SIZE=\"" . $SIZE . "\"":"") . ">"; 
  }

  for(; $$text =~ s/(<SELECT.*?<\/SELECT.*?>)/<!--$i-->/i; $i++ ) {
    $str = $1;
    
    $str =~ /SELECT.*?NAME=(\w+|\"[^\"]*\")/;
    $NAME = $1;
    $NAME =~ s/\"//g;

    $str =~ />(.*)</;
    my @options = split( /<OPTION/i, $1 );
    shift @options;

    foreach (@options) {
      /VALUE=(\w+|\"[^\"]*\")/;
      $VALUE = $1;
      $VALUE =~ s/\"//g;

      if( $data->{$NAME} eq "$VALUE" ) {
	s/>/SELECTED>/
	  if ( ! /SELECTED/ );
      } else {
	s/SELECTED//;
      }
    }
    my $selectstring = join( "<OPTION", @options );
    $str =~ s/>.*</>$selectstring</;

    $inputadds[$i] = $str;
  }

  for(; $$text =~ s/(<TEXTAREA.*?<\/TEXTAREA.*?>)/<!--$i-->/i; $i++ ) {
    $str = $1;

    $str =~ /NAME=(\w+|\"[^\"]*\")/i;
    $NAME = $1;
    $NAME =~ s/\"//g;

    push @ret, $NAME
      if ( $NAME ne "" );

    $VALUE = $data->{ $NAME };

    print STDERR "$NAME#$VALUE\n";

    $str =~ s/>.*</>$VALUE</;

    $inputadds[$i] = $str;
  }

  for( $i = 0; $str = $inputadds[$i], $$text =~ s/<!--$i-->/$str/; $i++ )
    {
    }
  
  return @ret;
}

1;
