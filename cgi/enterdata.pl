#!/usr/bin/perl

use DBI;
use CGI;

$dbh = DBI->connect( "DBI:mysql:test:localhost:3301", 'nobody', '' );

$query = new CGI;
print $query->header;

print "<HTML><BODY>\n";

$command = "insert into twins VALUES ('" . $query->param( 'NAME' ) . 
  "','" . $query->param( 'YEAR' ) . "-" . $query->param( 'MONTH' ) .
  "-" . $query->param( 'DAY' ) . " " . $query->param( 'HOUR' ) .
  ":" . $query->param( 'MINUTE' ) . "','" . $query->param( 'EMAIL' ) .
  "','" . $query->param( 'INTERRESTS' ) . "', NULL )";

$dbh->do( $command );
if ( $DBI::errstr ne "" ) {
  print "<FONT COLOR=\"\#FF0000\">An error has ocurred:</FONT>\n";
  print $DBI::errstr;
  exit( 0 );
}

print "Your data has been entered successfully.\n";
print "Thank you for adding to our database.";
print "</BODY></HTML>\n";
