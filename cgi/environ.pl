#!/usr/bin/perl

print <<EOF;
Content-type: text/html

<HTML>
<HEAD><TITLE>The envioronment</TITLE></HEAD>
<BODY>
<H2> The Environment setup </H2>
<TABLE>
EOF

foreach $k (sort keys %ENV) {
  print "<TR><TD>$k</TD><TD>$ENV{$k}</TD></TR>\n";
}
print <<EOF;
</TABLE>
</BODY>
</HTML>
EOF
