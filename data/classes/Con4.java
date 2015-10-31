import java.applet.*;
import java.awt.*;

public class Con4 extends Applet {
  public static final int Human = 1;
  public static final int Computer = 2;
  public static final int width = 8;
  public static final int height = 8;
  private static final Color BoardColor = Color.yellow;
  private static final Color[] BoardColors = { Color.black, Color.red, 
					       Color.blue, Color.black };
  private int[][] board = new int[width][height];
  private Dimension size;
  private boolean GameOver;

  public Con4( ) {
    init();
  }

  public void init( ) {
    int i, j;
    for ( i = 0; i < width; i++ )
      for ( j = 0; j < height; j++ )
	board[i][j] = 0;

    GameOver = false;
    size = size();
  }

  public boolean mouseDown( Event e, int x, int y ) {
    if ( GameOver ) {
      init();
      paint( getGraphics() );
      return true;
    }

    if ( gameMove( Human, x / (size.width / width ) ) ) {
      paint( getGraphics() );

      gameMove( Computer, aiMove() );
      paint( getGraphics() );
    }

    return true;
  }

  public boolean gameMove( int player, int position ) {
    int j, f;

    if ( board[position][0] != 0 || GameOver ) return false;
   
    f = fallDown( position );
    board[position][f] = player;

    if ( longestStreak( position, f, player ) >= 4 ) {
      GameOver = true;
      paint( getGraphics() );
    }
    
    return true;
  }

  private int fallDown( int position ) {
    int j;

    for ( j = 1; j < height; j++ ) {
      if ( board[position][j] != 0 ) {
	return j - 1;
      }
    }

    return height - 1;
  }

  private int aiMove( ) {
    int i, j;
    int hls, cls, ls = 0, ret = -1;

    for ( i = 0; i < width; i++ ) {
      if ( board[i][0] != 0 ) continue;

      j = fallDown( i );

      cls = longestStreak( i, j, Computer );
      hls = longestStreak( i, j, Human );

      if ( cls == 4 ) return i;
      if ( hls == 4 ) return i;

      if ( cls > ls && (j == 0 || longestStreak( i, j - 1, Human ) < 4) ) {
	ls = cls;
	ret = i;
      }
      if ( hls > ls && (j == 0 || longestStreak( i, j - 1, Human ) < 4) ) {
	ls = hls;
	ret = i;
      }
    }

    return ret;
  }

  private int longestStreak( int x, int y, int player ) {
    int s = 0;
    int tmp, ts;

    // Vertical streak
    ts = 1;
    for ( tmp = x + 1; tmp < width && board[tmp][y] == player; tmp++ )
      ts++;
    for ( tmp = x - 1; tmp >= 0 && board[tmp][y] == player; tmp-- )
      ts++;
    s = ts;

    // Horizontal streak
    ts = 1;
    for ( tmp = y + 1; tmp < width && board[x][tmp] == player; tmp++ )
      ts++;
    for ( tmp = y - 1; tmp >= 0 && board[x][tmp] == player; tmp-- )
      ts++;
    s = (ts>s)?ts:s;

    // NE streak
    ts = 1;
    for ( tmp = 1; (x+tmp) < width && (y+tmp) < height && 
	    board[x+tmp][y+tmp] == player; tmp++ )
      ts++;
    for ( tmp = -1; (x+tmp) >= 0 && (y+tmp) >= 0 && 
	    board[x+tmp][y+tmp] == player; tmp-- )
      ts++;
    s = (ts>s)?ts:s;

    // NW streak
    ts = 1;
    for ( tmp = 1; (x+tmp) < width && (y-tmp) >= 0 && 
	    board[x+tmp][y-tmp] == player; tmp++ )
      ts++;
    for ( tmp = -1; (x+tmp) >= 0 && (y-tmp) < height && 
	    board[x+tmp][y-tmp] == player; tmp-- )
      ts++;
    s = (ts>s)?ts:s;

    return s;
  }

  public void paint( Graphics g ) {
    int i, j;
    int w = size.width / width;
    int h = size.height / height;

    g.setColor( BoardColor );
    g.fillRect( 0, 0, size.width, size.height );

    for ( i = 0; i < width; i++ ) {
      for ( j = 0; j < height; j++ ) {
	g.setColor( BoardColors[ board[i][j] ] );
	g.fillOval( i * w + 1, j * h + 1, w - 2, h - 2 );
      }
    }


    if ( GameOver ) {
      Font f = new Font( "Helvetica", Font.BOLD, 24 );
      FontMetrics fm = g.getFontMetrics( f );
      String str = "Game Over";

      g.setColor( Color.black );
      g.fillRect( 0, (size.height - fm.getHeight()) / 2, 
		  size.width, fm.getHeight() );

      g.setColor( Color.white );
      g.setFont( f );
      g.drawString( str, (size.width - fm.stringWidth( str )) / 2,
		    (size.height - fm.getHeight()) / 2 + fm.getAscent() );
    }
  }
}




