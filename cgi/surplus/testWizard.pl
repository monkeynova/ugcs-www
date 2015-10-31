#!/usr/bin/perl

use Wizard;
use CGI qw( :standard );

%nextPage = ( 
	     Welcome => "WhoAreYou",
	     WhoAreYou => "ContactInfo",
	     ContactInfo => "SiteCustomization",
	     SiteCustomization => "Password"
	    );

$pages = {
	  Welcome => ["welcome.html", \&noverify, \&simplenext ],
	  WhoAreYou => ["whoru.html", \&whovrfy, \&simplenext ],
	  ContactInfo => ["contact.html", \&contvrfy, \&simplenext ],
	  SiteCustomization => ["site.html", \&noverify, \&simplenext ],
	  Password => ["password.html", \&passvrfy, "/cgi-bin/environ.pl", \&vendortag ]
	 };

@fields = qw( NAME BUISTYPE EMAIL PHONE FAX BILLING ALLOWLISTING PASS1 PASS2 );

$wiz = new Wizard( 
		  Pages => $pages, 
		  Fields => \@fields,
		  StartState => "Welcome",
		  Action => "/cgi-bin/surplus/testWizard.pl"
		 );

$query = new CGI;
$wiz->loadCGI( $query );
print $query->header(), $wiz->toString();

sub noverify {
  my ($currpage, $forminfo) = @_;

  return "";
}

sub whovrfy {
  my ($currpage, $forminfo) = @_;

  return ($forminfo->{ NAME } eq "")?"You must specify a name":undef;
}

sub contvrfy {
  my ($currpage, $forminfo) = @_;

  if ( ($forminfo->{ EMAIL } eq "") || ($forminfo->{ EMAIL } !~ /\@/) ) {
    return "You must enter a valid e-mail address";
  }

  return undef;
}

sub passvrfy {
  my ($currpage, $forminfo) = @_;

  if ( $forminfo->{ PASS1 } ne $forminfo->{ PASS2 } ) {
    return "The passwords you typed were not the same";
  }

  return undef;
}

sub simplenext {
  my ($currpage, $forminfo) = @_;

  return $nextPage{ $currpage };
}

sub vendortag {
  my ($currpage, $forminfo, $text) = @_;

  $$text =~ s/<!--VENDOR-->/vnd3\$5\#/g;
}
