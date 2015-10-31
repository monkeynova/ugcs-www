#!/usr/ug/bin/perl

ParseForm();

@tmp = split( /\0/, $FORM{"DEPTS"} );
foreach $a ( @tmp ) { $show{ $a } = 1; }

print <<EOF;
Content-type: text/html

<HTML>
  <HEAD>
    <TITLE> Scheduler for 2nd term 98-99 </TITLE>
    
    <SCRIPT Language="JavaScript">
      
      <!--
      function addToList( list, string ) {
        var tmp = document.mainform.TEXT;
        if ( string != "" ) {
          if ( tmp.value == "" )
            tmp.value = string;
          else
            tmp.value = tmp.value + "\\n" + string;
        }
        if ( list != "" )
  	  list.selectedIndex = 0;
      }
      
      function clearText() {
	document.mainform.TEXT.value = "";	
      }

      function addUserDefine( name, time, place, units ) {
        addToList( "", "#" + name.value + " " + time.value + " " + place.value + " " + units.value );
        name.value = "";
        time.value = "";
        place.value = "";
        units.value = "";
      }

      //-->
      
    </SCRIPT>
  </HEAD>
  <BODY BGCOLOR="#FFFFFF">
    <H2> The Scheduler </H2>
    Here is a nifty cgi script that will create a schedule for you in a
    usable format. <BR>
    To use it, just type in your classes, seperated by new-lines, or use the lists to the right<BR>
    <HR>
    <FORM ACTION="/cgi-bin/make_sched.pl"
      NAME="mainform"
      METHOD="POST">
      <TABLE>
	<TR>
	  <TD>
	    <TEXTAREA NAME="TEXT" COLS=20 ROWS=10></TEXTAREA>
            <BR>
	    <INPUT TYPE="SUBMIT" VALUE="Next>">
            <INPUT TYPE="BUTTON" NAME="button" Value="Clear" onClick="clearText()">
	  </TD>
	  <TD>
            User defined class:<BR>
            Name: <INPUT TYPE="TEXT" NAME="username" SIZE=10>
            Time: <INPUT TYPE="TEXT" NAME="usertime" SIZE=15>
            Place: <INPUT TYPE="TEXT" NAME="userplace" SIZE=10>
            Units: <INPUT TYPE="TEXT" NAME="userunit" SIZE=3>
            <INPUT TYPE="BUTTON" Value="Add" onClick="addUserDefine( username, usertime, userplace, userunit )"><BR>
EOF

open SCEDULE, "./rawdata.html" or die "Could not load rawdata!!";

$dept = "";
$select = 0;
while( <SCEDULE> ) {
  chop;

  if ( /<H2>(.*)<\/H2><PRE>/ ) {
    $dept = $1;
    ( ! $show{ $dept } ) &&
      next;

    $select && print "</SELECT><BR>";
    $select++;
    print "<SELECT NAME=$dept\n";
    print "  OnChange=\"addToList( this, this.options[ this.selectedIndex ].value )\">\n";
    print "<OPTION VALUE=\"\">$dept\n";
  } elsif ( /^([A-Z].*?)  +/ ) {
    ( ! $show{ $dept } ) &&
      next;

    print "<OPTION VALUE=\"$1\">", $1, " - ", substr( $_, 20, 25 ), "\n";
  }
}
$select && print "</SELECT>";

close SCHEDULE;

print <<EOF;
	  </TD>
	</TR>	
      </TABLE>
    </FORM>
    <HR>
    Information comes from this <A HREF="rawdata.html">schedule</A>.<P>
      Questions or comments can be sent to <A HREF="mailto:peters\@ugcs.caltech.edu">
	me.</A>
  </BODY>
</HTML>
EOF


sub ParseForm {

    local (*in) = @_ if @_;
    local ($i, $loc, $key, $val);

    # Read in text
    if ($ENV{'REQUEST_METHOD'} eq "GET") {
        $in = $ENV{'QUERY_STRING'};
    } elsif ($ENV{'REQUEST_METHOD'} eq "POST") {
        read(STDIN,$in,$ENV{'CONTENT_LENGTH'});
    }
    @FORM = split(/&/,$in);

    foreach $i (0 .. $#FORM) {
        # Convert plus's to spaces
        $FORM[$i] =~ s/\+/ /g;
        # Split into key and value.
        ($key, $val) = split(/=/,$FORM[$i],2); # splits on the first =.
        # Convert %XX from hex numbers to alphanumeric
        $key =~ s/%(..)/pack("c",hex($1))/ge;
        $val =~ s/%(..)/pack("c",hex($1))/ge;
        # Associate key and value
        $FORM{$key} .= "\0" if (defined($FORM{$key})); # \0 is the multiple separator
        $FORM{$key} .= $val;
    }
    return $in; # just for fun
}
