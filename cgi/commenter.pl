#!/usr/bin/perl

$COMMENT_FILE="./comments";
$LOCK_FILE="./lock";

use CGI;

$query = new CGI;
print $query->header;

$COMMENT_FILE .= "-" . $query->param( "id" );

if ( $comment = $query->param( "comment" ) ) {
  $comment .= "\n";
  $parent = $query->param( "parent" );

  while ( -e $LOCK_FILE ) { }
  
  `touch $LOCK_FILE`;

  if ( ! open( TXT, $COMMENT_FILE ) ) {
    @lines = ($comment);
  } else {
    @lines = <TXT>;
    close( TXT );
    
    if ( $parent ) {
      $lines[$parent] = /^( *)/;
      $comment = $1 . "  " . $comment;
      @lines = (@lines[0..$parent], $comment, @lines[$parent+1..$#parent] );
      
    } else {
      @lines = (@lines, $comment );
    }
  }    

  open( TXT, ">$COMMENT_FILE" ) || print STDERR "Could not write to comment file!";
  print TXT @lines;
  close( TXT );

  `rm -f $LOCK_FILE`;

  print @lines;
} else {
  open ( TXT, $COMMENT_FILE );
  print <TXT>;
  close( TXT );
}
