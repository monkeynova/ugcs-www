#!/usr/bin/perl

use CGI qw(:standard);

$query = new CGI;

$width = $query->param( 'width' );
$height = $query->param( 'height' );
$rule = $query->param( 'rule' );
$maxcolor = 1;

for( $i = 0; $i < $width; $i++ ) {
  $pic[$i][0] = (rand() > .5)?1:0;
}

for( $j = 1; $j < $height; $j++ ) {
  for( $i = 0; $i < $width; $i++ ) {
    $sum = $pic[ ($i + $width - 2) % $width ][ $j - 1 ] +
      $pic[ ($i + $width - 1) % $width ][ $j - 1 ] +
	$pic[ $i ][ $j - 1 ] +
	  $pic[ ($i + 1) % $width ][ $j - 1 ] +
	    $pic[ ($i + 2) % $width ][ $j - 1 ];
    $pic[ $i ][ $j ] = ($rule & (1 << $sum)) >> $sum;
  }
}

open( TXT, "| ppmquant 256 | ppmtogif > tmp" ) || die "Arg\n";
print TXT "P3\n";
print TXT "$width $height\n";
print TXT "$maxcolor\n";
for( $j = 0; $j < $height; $j++ ) {
  for( $i = 0; $i < $width; $i++ ) {
    print TXT $pic[ $i ][ $j ], " ", $pic[ $i ][ $j ], " ", $pic[ $i ][ $j ], "\n";
  }
}
close( TXT );

print $query->header(-type=>'image/gif');

open( TXT, "./tmp" );
print join( "", <TXT> );
close( TXT );

