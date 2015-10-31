#!/usr/ug/bin/perl5

print <<EOF;
Content-type: text/html

<HTML>
  <HEAD>
    <TITLE> First page for scheduler </TITLE>
  </HEAD>
  <BODY>
    <H2> Select Departments </H2><BR>
    Please select the Departments from which you will be taking classes.<BR>
    This is to make the rest of the process easier on you.
    <HR>
    <FORM ACTION="/cgi-bin/createlist.pl">
      <SELECT NAME="DEPTS" MULTIPLE SIZE=10>
EOF

open SCEDULE, "./rawdata.html" or die "Could not load rawdata!!";

while( <SCEDULE> ) {
  if ( /<H2>(.*)<\/H2><PRE>/ ) {
    print "<OPTION VALUE=\"$1\">$1\n";
  }
}

close SCHEDULE;

print <<EOF;
      </SELECT>
      <BR>
      <INPUT TYPE="SUBMIT" VALUE="Next>">
     </FORM>
  </BODY>
</HTML>
EOF

 
