#!/usr/ug/bin/perl

&ParseForm;    

@DayNames = ( "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" );
%DayLookup = ( 'M' => 0, 'T[^H]' => 1, 'W' => 2, "TH" => 3, "F" => 4 );
$lastpm = 7; # last hout to assume that "blah" means "blah pm"
$earlyhour = 9;
$concolor   = "#FF7D00"; # Orange
$okcolor    = "#0099DD"; # Steel Blue (?)
$usrcolor   = "#AAAAEE"; # Lavendar
$earlycolor = "#FFDD00"; # Yellow - Like the sun
$bgcolor1   = "#AAAAAA"; # Darker Grey
$bgcolor2   = "#CCCCCC"; # Lighter Grey

foreach $_ (split /\n/, $FORM{"TEXT"}) {
  if ( !/^#/ ) { # Class - Lookup in schedule
       tr/a-z/A-Z/;
       ($dep, $num, $sec) = split /\s+/;
       $dep = (split( /\//, $dep))[0];
       $courses{"$dep $num $sec"}->{name} = "$dep $num $sec";
    } else { # User defined Stuff
	s/^#//;
	@arr = split /\s+/;
	($courses{$arr[0]}->{fullname} = $arr[0]) =~ s/_/ /g;
	$arr[1] =~ tr/a-z/A-Z/;
	$courses{$arr[0]}->{time}      = $arr[1];
	($courses{$arr[0]}->{place}    = $arr[2]) =~ s/_/ /g;
	$courses{$arr[0]}->{units}     = ($arr[3] || 0);
	$courses{$arr[0]}->{user}      = 1;
    }
}

$count = UpdateCounter( "count" );

&ParseSchedule( \%courses );

# This foreach creates the $week variable which stores all the data
# in half hour chunks
$week = &CreateWeek( %courses );

print <<EOF;
Content-type: text/html

<HTML>
<HEAD>
  <TITLE>Your Schedule</TITLE>
</HEAD>
<BODY BGCOLOR="#FFFFFF">
<CENTER>
EOF

if ( defined $FORM{ME} ) {
    print "<H1>Schedule for $FORM{ME}</H1>\n"
} else {
    print "<H1>Your schedule</H1>\n";
}

# Show what weird happened
&PrintNotesAndErrors;

#
# Print the Tables
#
print "<TABLE><TR><TD COLSPAN=2><CENTER>\n";
&PrintWeekTable( $week );
print "</CENTER></TD></TR>\n<TR><TD VALIGN=TOP>\n";
&PrintKeyTable();
print "</TD><TD VALIGN=TOP>\n";
&PrintClassTable();
print "</TD></TR></TABLE>\n";

# Finish up loose ends
print <<EOF;
</CENTER>
</BODY>
</HTML>
EOF

sub PrintNotesAndErrors {
    print "<H2>\n";
    foreach $not (@notess) {
	print $not, "<BR>\n";
    }
    print "<FONT COLOR=\"$concolor\">";
    foreach $err (@errors) {
	print "Error: ", $err, "<BR>\n";
    }
    print "</FONT>\n";
    print "</H2>\n";
}

sub PrintHeader {
    my ( $w ) = @_;

    print "<TR>\n";
    print "<TD BGCOLOR=\"$bgcolor1\">&nbsp</TD>\n";

    for ( $i = 0; $i <= $#DayNames; $i++ ) {
	print "<TH COLSPAN=", $w->{s}->[$i]->{cons} + 1;
	print " BGCOLOR=\"$bgcolor1\">$DayNames[$i]</TH>\n";
    }

    print "<TD BGCOLOR=\"$bgcolor1\">&nbsp</TD>\n";

    print "<TR>\n";
}

sub conflict {
    my ( $dr, $t, $i ) = @_;
    my $tmp, $j;

    $ret = 0;
    $tmp = $dr->{$t}->[$i]->{course};

    ($tmp eq "" ) and return 0;

    for( ;defined $dr->{$t} && $tmp eq $dr->{$t}->[$i]->{course}; $t += .5 ) {
	for ( $j = 0; $j <= $#{$dr->{$t}}; $j++ ) {
	    ($j != $i) && ($dr->{$t}->[$i]->{course} ne "") && return 1;
	}
    }

    return 0;
}

sub PrintWeekTable {
    my ( $w ) = @_;
    
    # Start the table...
    print "<TABLE BORDER=3>\n";

    &PrintHeader( $w );

    for ( $t = $w->{early} - .5; $t <= $w->{late}; $t += .5 ) {
	print "<TR>\n";

	$hour = $t; 
	$hour == int( $hour ) and $hour .= ":00";
	$hour =~ s/\.5/:30/;

	$hour =~ /:30/ || ($bgcolor = $bgcolor1);
	$hour =~ /:30/ && ($bgcolor = $bgcolor2);


	print "<TD BGCOLOR=\"$bgcolor\">", $hour, "</TD>\n";

	for ( $day = 0; $day <= $#DayNames; $day++ ) {
	    for ( $i = 0; $i <= $w->{s}->[$day]->{cons}; $i++ ) {
		if ( $w->{s}->[$day]->{$t}->[$i]->{course} ne "" ) {
		    $conflict = conflict( $w->{s}->[$day], $t, $i );
		    
		    ($w->{s}->[$day]->{$t}->[$i]->{first} == 2) && next;

		    if ( ! $conflict ) {
			$tmp = $w->{s}->[$day]->{$t}->[$i]->{course};
			for ( $j = $i + 1; 
			     $w->{s}->[$day]->{$t}->[$j]->{course} eq "" &&
			     $j <= $w->{s}->[$day]->{cons}; 
			     $j++ ) {
			    for( $ttmp = $t;
				$tmp eq $w->{s}->[$day]->{$ttmp}->[$i]->{course}; 
				$ttmp += .5 ) {
				$w->{s}->[$day]->{$ttmp}->[$j]->{course} = $tmp;
				$w->{s}->[$day]->{$ttmp}->[$j]->{first} = 2;
			    }
			}
		    } else {
			$j = $i + 1;
		    }

		    print "<TD BGCOLOR=\"";

		    if ( $conflict ) {
			print $concolor;
		    } elsif ( $courses{$w->{s}->[$day]->{$t}->[$i]->{course}}->{user} ) {
			print $usrcolor;
		    } elsif ( $t <= $earlyhour ) {
			print $earlycolor;
		    } else {
			print $okcolor;
		    }

		    print "\" ROWSPAN=", $w->{s}->[$day]->{$t}->[$i]->{rspan};
		    print " COLSPAN=", $j - $i;
		    print ">";

		    print "<CENTER>";
		    print $w->{s}->[$day]->{$t}->[$i]->{course};
		    print " ", $courses{$w->{s}->[$day]->{$t}->[$i]->{course}}->{info};
		    print "<HR NOSHADE WIDTH=65%>";
		    print $courses{$w->{s}->[$day]->{$t}->[$i]->{course}}->{place};
		    print "</CENTER>";

		    $i = $j - 1;

		    print "</TD>\n";
		} else {
		    for ( $j = $i + 1; 
			 $w->{s}->[$day]->{$t}->[$j]->{course} eq "" &&
			 $j <= $w->{s}->[$day]->{cons}; 
			 $j++ )
		    {}
		    
		    print "<TD COLSPAN=",$j - $i," BGCOLOR=\"$bgcolor\"> &nbsp</TD>\n";
		    $i = $j - 1;
		}
	    }
	}
	print "<TD BGCOLOR=\"$bgcolor\">", $hour, "</TD>\n";

	print "</TR>\n";
    }

    print "</TABLE>\n";
}

sub PrintKeyTable {

    print <<EOF;
<TABLE>
<TR><TH>Color</TH><TH>Meaning</TH></TR>
<TR><TD BGCOLOR="$usrcolor">&nbsp</TD><TD>User defined class</TD>
<TR><TD BGCOLOR="$okcolor">&nbsp</TD><TD>Nothing wrong with this class time</TD>
<TR><TD BGCOLOR="$earlycolor">&nbsp</TD><TD>Warning...Early class (<= ${earlyhour}AM)</TD>
<TR><TD BGCOLOR="$concolor">&nbsp</TD><TD>A conflict exists at this time</TD>
</TABLE>
EOF

}

sub PrintClassTable {
    my $total_units;

    print "<TABLE>\n";
    print "<TR><TH>Class</TH><TH>Full Description</TH><TH>Units</TH></TR>\n";
    foreach $k (sort keys %courses) {
	print "<TR><TD>$k</TD><TD>$courses{$k}->{fullname}</TD><TD ALIGN=RIGHT>";
	print "$courses{$k}->{units}</TD>\n";
	$total_units += $courses{$k}->{units};
    }
    print "<TR><TH COLSPAN=3 ALIGN=RIGHT>Total Units - $total_units</TH></TR>\n";
    print "</TABLE>";
}

sub CreateWeek {
    my %courses = @_;
    my $ret;

    for ( $day = 0; $day <= $#DayNames; $day++ ) {
	$ret->{s}->[$day]->{cons} = 0;
    }

    foreach $c (keys %courses) {
	if ( $courses{$c}->{time} =~ /OM,/ ) {
	    $courses{$c}->{time} =~ s/OM,//;
	    $courses{$c}->{info} = "(OM)";
	}
	foreach $time ( split /,/, $courses{$c}->{time} ) {
	    ($t1, $t2, $daymask) = &ParseTime( $time, $c );

	    $t1 == 0 && next;
	    $t2 == 0 && next;

	    for ( $day = 0; $day <= $#DayNames; $day ++ ) {
		! ($daymask & (1 << $day)) and next;

		$cons = 0;
		for ( $t = $t1; $t < $t2; $t += .5 ) {
		    $cons <= $#{$ret->{s}->[$day]->{$t}} and 
			$cons = $#{$ret->{s}->[$day]->{$t}} +1;
		}
		$ret->{s}->[$day]->{cons} < $cons and
		    $ret->{s}->[$day]->{cons} = $cons;
		
		for ( $t = $t1; $t < $t2; $t += .5 ) {
		    $ret->{s}->[$day]->{$t}->[$cons]->{course} = $c;
		    $ret->{s}->[$day]->{$t}->[$cons]->{rspan} = 2*($t2 - $t1);
		    $ret->{s}->[$day]->{$t}->[$cons]->{first} = 2;
		}
		$ret->{s}->[$day]->{$t1}->[$cons]->{first} = 1;

		! defined $ret->{early} and $ret->{early} = $t1;
		! defined $ret->{late} and $ret->{late} = $t2;
		$t1 < $ret->{early} and $ret->{early} = $t1;
		$t2 > $ret->{late} and $ret->{late} = $t2;
	    }
	}
    }

    return $ret;
}

sub ParseSchedule {
    my ( $ref ) = @_;

    open SCHEDULE, "./rawdata.html" or Error( "Could not open schedule file!" );

    while( <SCHEDULE> ) {
	chop;
	$_ =~ tr/a-z/A-Z/;
	@arr = split /\s+/;
	@areas = split /\//, $arr[0];
	$num = $arr[1];
	if ( / $num [0-9]/ ) {
	    $sec = $arr[2];
	} else {
	    $sec = "";
	}
	foreach $a (@areas) {
            @classes = grep( /^$a $num $sec/, keys %{$ref});
            foreach $key (@classes) {
		$ref->{$key}->{fullname} =  substr( $_, 20, 25 );
		$ref->{$key}->{time}     =  substr( $_, 72, 13 );
		$ref->{$key}->{place}    = substr( $_, 86, 7  );
		$ref->{$key}->{units}    = substr( $_, 15, 4 );
		$ref->{$key}->{user}     = 0;
	    } 
            if ( defined $ref->{"$a $num "} && ! $ref->{"$a $num "}->{Error} &&
                $sec ne "" ) {
		Error( "Class $a $num requires a section number!" );
		$ref->{"$a $num "}->{Error} = 1;
	    }
	}
    }
    
    close SCHEDULE;

    foreach $k (keys %{$ref}) {
	defined $ref->{$k}->{fullname} || $ref->{$k}->{Error} ||
	    Error( "Could not find class $k!\n" );
    }
}

sub ParseTime {
    my ( $str, $class ) = @_;
    my @ret = (0,0,0);

    foreach $day (keys %DayLookup) {
	$str =~ /$day/ and $ret[2] |= (1 << $DayLookup{$day});
    }

    if ( $str =~ /[0-9:]+-[0-9:]+/ ) {
	($ret[0], $ret[1]) = split( '-', $& );

	for( $i = 0; $i <= $#ret; $i++ ) {
	    $ret[$i] =~ s/:[3-5][0-9]/.5/;
	    $ret[$i] =~ s/:[0-2][0-9]//;
	    $ret[$i] =~ /:/ && Error( "Parsing time \"$str\" for class $class!" );
	}

	if ( int($ret[0]) <= $lastpm ) {
	    $ret[0] += 12;
	    $ret[1] += 12;
	}
    } elsif ( $str =~ /([0-9]+)/ ) {
	$ret[0] = $1;
	$ret[0] <= $lastpm and $ret[0] += 12;
	$ret[1] = $ret[0] + 1;
    } else {
	if ( $str =~ /^\s*A\s*$/ ) {
	    Note( "Time for class $class has yet to be arranged." );
	} else {
	    Error( "Parsing time \"$str\" for class $class!" );
	}
    }

    @ret;
}

sub Error { push @errors, @_; }
sub Note { push @notess, @_; }

sub UpdateCounter {
    my $file = shift;
    my $ret = 0;

    open FILE, $file or return $ret;
    $ret = <FILE>;
    close FILE;

    open FILE, ">$file" or return $ret;
    print FILE $ret + 1;
    close FILE;

    return $ret;
}

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
