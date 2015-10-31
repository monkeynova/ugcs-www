#!/usr/ug/bin/perl5

use constant BoxLoc => "/home/peters/www/cgi/boxes/";

use strict;

use CGI;
my $query = new CGI;

my ( $what ) = $query->param( "what" );

print "Content-type: text/html\n\n";

if ( $what ) { print_small_box( $what ); }

exit;

sub print_small_box {
  my ( $what ) = @_;

  my ( $header );

  open TXT,  BoxLoc . "/$what" or return;

  $header = <TXT>;
  chomp $header;

  print <<EOF;
<div class=box>
  <div class=header>$header</div>
  <div class=info>
EOF

  while( <TXT> ) {
    chomp;
    next unless $_;
    print "    ", $_, "\n";
  }

  print <<EOF;
  </div>
</div>
EOF
}
