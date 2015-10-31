var lastDiv = null;

var nimages = 75;

var images = new Array( nimages );
var i = 0;
images[i++] = { file : "pic0061.jpg", thumbfile : "thumb_pic0061.jpg" };
images[i++] = { file : "pic0060.jpg", thumbfile : "thumb_pic0060.jpg" };
images[i++] = { file : "pic0059.jpg", thumbfile : "thumb_pic0059.jpg" };
images[i++] = { file : "pic0058.jpg", thumbfile : "thumb_pic0058.jpg" };
images[i++] = { file : "pic0057.jpg", thumbfile : "thumb_pic0057.jpg" };
images[i++] = { file : "pic0056.jpg", thumbfile : "thumb_pic0056.jpg" };
images[i++] = { file : "pic0055.jpg", thumbfile : "thumb_pic0055.jpg" };
images[i++] = { file : "pic0054.jpg", thumbfile : "thumb_pic0054.jpg" };
images[i++] = { file : "pic0053.jpg", thumbfile : "thumb_pic0053.jpg" };
images[i++] = { file : "pic0052.jpg", thumbfile : "thumb_pic0052.jpg" };
images[i++] = { file : "pic0051.jpg", thumbfile : "thumb_pic0051.jpg" };
images[i++] = { file : "pic0050.jpg", thumbfile : "thumb_pic0050.jpg" };
images[i++] = { file : "pic0049.jpg", thumbfile : "thumb_pic0049.jpg" };
images[i++] = { file : "pic0048.jpg", thumbfile : "thumb_pic0048.jpg" };
images[i++] = { file : "pic0047.jpg", thumbfile : "thumb_pic0047.jpg" };
images[i++] = { file : "pic0046.jpg", thumbfile : "thumb_pic0046.jpg" };
images[i++] = { file : "pic0045.jpg", thumbfile : "thumb_pic0045.jpg" };
images[i++] = { file : "pic0044.jpg", thumbfile : "thumb_pic0044.jpg" };
images[i++] = { file : "pic0043.jpg", thumbfile : "thumb_pic0043.jpg" };
images[i++] = { file : "pic0042.jpg", thumbfile : "thumb_pic0042.jpg" };
images[i++] = { file : "pic0041.jpg", thumbfile : "thumb_pic0041.jpg" };
images[i++] = { file : "pic0040.jpg", thumbfile : "thumb_pic0040.jpg" };
images[i++] = { file : "pic0039.jpg", thumbfile : "thumb_pic0039.jpg" };
images[i++] = { file : "pic0038.jpg", thumbfile : "thumb_pic0038.jpg" };
images[i++] = { file : "pic0037.jpg", thumbfile : "thumb_pic0037.jpg" };
images[i++] = { file : "pic0036.jpg", thumbfile : "thumb_pic0036.jpg" };
images[i++] = { file : "pic0035.jpg", thumbfile : "thumb_pic0035.jpg" };
images[i++] = { file : "pic0034.jpg", thumbfile : "thumb_pic0034.jpg" };
images[i++] = { file : "pic0033.jpg", thumbfile : "thumb_pic0033.jpg" };
images[i++] = { file : "pic0032.jpg", thumbfile : "thumb_pic0032.jpg" };
images[i++] = { file : "pic0031.jpg", thumbfile : "thumb_pic0031.jpg" };
images[i++] = { file : "pic0030.jpg", thumbfile : "thumb_pic0030.jpg" };
images[i++] = { file : "pic0029.jpg", thumbfile : "thumb_pic0029.jpg" };
images[i++] = { file : "pic0028.jpg", thumbfile : "thumb_pic0028.jpg" };
images[i++] = { file : "pic0027.jpg", thumbfile : "thumb_pic0027.jpg" };
images[i++] = { file : "pic0026.jpg", thumbfile : "thumb_pic0026.jpg" };
images[i++] = { file : "pic0025.jpg", thumbfile : "thumb_pic0025.jpg" };
images[i++] = { file : "pic0024.jpg", thumbfile : "thumb_pic0024.jpg" };
images[i++] = { file : "pic0023.jpg", thumbfile : "thumb_pic0023.jpg" };
images[i++] = { file : "pic0022.jpg", thumbfile : "thumb_pic0022.jpg" };
images[i++] = { file : "pic0021.jpg", thumbfile : "thumb_pic0021.jpg" };
images[i++] = { file : "pic0020.jpg", thumbfile : "thumb_pic0020.jpg" };
images[i++] = { file : "pic0019.jpg", thumbfile : "thumb_pic0019.jpg" };
images[i++] = { file : "pic0018.jpg", thumbfile : "thumb_pic0018.jpg" };
images[i++] = { file : "pic0017.jpg", thumbfile : "thumb_pic0017.jpg" };
images[i++] = { file : "pic0016.jpg", thumbfile : "thumb_pic0016.jpg" };
images[i++] = { file : "pic0015.jpg", thumbfile : "thumb_pic0015.jpg" };
images[i++] = { file : "pic0014.jpg", thumbfile : "thumb_pic0014.jpg" };
images[i++] = { file : "pic0013.jpg", thumbfile : "thumb_pic0013.jpg" };
images[i++] = { file : "pic0012.jpg", thumbfile : "thumb_pic0012.jpg" };
images[i++] = { file : "pic0011.jpg", thumbfile : "thumb_pic0011.jpg" };
images[i++] = { file : "pic0010.jpg", thumbfile : "thumb_pic0010.jpg" };
images[i++] = { file : "pic0009.jpg", thumbfile : "thumb_pic0009.jpg" };
images[i++] = { file : "pic0008.jpg", thumbfile : "thumb_pic0008.jpg" };
images[i++] = { file : "pic0007.jpg", thumbfile : "thumb_pic0007.jpg" };
images[i++] = { file : "pic0006.jpg", thumbfile : "thumb_pic0006.jpg" };
images[i++] = { file : "pic0005.jpg", thumbfile : "thumb_pic0005.jpg" };
images[i++] = { file : "pic0004.jpg", thumbfile : "thumb_pic0004.jpg" };
images[i++] = { file : "pic0003.jpg", thumbfile : "thumb_pic0003.jpg" };
images[i++] = { file : "pic0002.jpg", thumbfile : "thumb_pic0002.jpg" };
images[i++] = { file : "pic0001.jpg", thumbfile : "thumb_pic0001.jpg" };
images[i++] = { file : "667C.jpg", thumbfile : "thumb_667C.jpg" };
images[i++] = { file : "6442.jpg", thumbfile : "thumb_6442.jpg" };
images[i++] = { file : "643D.jpg", thumbfile : "thumb_643D.jpg" };
images[i++] = { file : "630C.jpg", thumbfile : "thumb_630C.jpg" };
images[i++] = { file : "583A.jpg", thumbfile : "thumb_583A.jpg" };
images[i++] = { file : "4E82.jpg", thumbfile : "thumb_4E82.jpg" };
images[i++] = { file : "3CB4.jpg", thumbfile : "thumb_3CB4.jpg" };
images[i++] = { file : "36AE.jpg", thumbfile : "thumb_36AE.jpg" };
images[i++] = { file : "36AC.jpg", thumbfile : "thumb_36AC.jpg" };
images[i++] = { file : "36A7.jpg", thumbfile : "thumb_36A7.jpg" };
images[i++] = { file : "1B23.jpg", thumbfile : "thumb_1B23.jpg" };
images[i++] = { file : "1687.jpg", thumbfile : "thumb_1687.jpg" };
images[i++] = { file : "1683.jpg", thumbfile : "thumb_1683.jpg" };
images[i++] = { file : "13F.jpg", thumbfile : "thumb_13F.jpg" };

var curImage;

function prev() 
{
  setImage( (nimages + curImage - 1) % nimages );  
}

function next() 
{
  setImage( (curImage + 1) % nimages );  
}

function setImageByName( imgName )
{
  var i;

  for( i = 0; i < nimages; i++ )
  {
    if ( images[i].file == imgName )
    {
      setImage( i );
      return;
    }
  }
}
 
function setImage( img ) 
{
  var div = parent.main.document.getElementById( "div_" + images[img].file );
  var itag = parent.main.document.getElementById( "img_" + images[img].file );
 
  if ( lastDiv == div )
    return;

  if ( lastDiv != null ) {
    lastDiv.style.display = "none"
  }
  div.style.display = "block";
  itag.src = images[img].file;
 
  lastDiv = div;

  curImage = img;
}

var slideshowgoing = 0;
var delay = 0;
var delaytotal = 100;
var delaytime = 50;
var preload;

function updateslideshowbar()
{
  if ( ! slideshowgoing )
    return

  if ( delay == 0 )
  {
    preload = new Image();
    preload.src = images[(curImage + 1) % nimages].file;
  }

  var fill = parent.main.document.getElementById( "slideshowfill" );
  delay++;
  if ( delay == delaytotal )
  {
    delay = 0;
    next();
  }

  fill.style.width = (100 * delay / delaytotal) + "%";

  setTimeout( updateslideshowbar, delaytime );
}

function startslideshow()
{
  var progress = parent.main.document.getElementById( "slideshowprogress" );
  var start = parent.main.document.getElementById( "slideshowstart" );

  if ( ! progress || ! start )
    return;

  delay = -1;
  slideshowgoing = 1;

  updateslideshowbar();

  start.style.display = "none";
  progress.style.display = "block";
}

function stopslideshow()
{
  slideshowgoing = 0;

  var progress = parent.main.document.getElementById( "slideshowprogress" );
  var start = parent.main.document.getElementById( "slideshowstart" );

  if ( ! progress || ! start )
    return;

  progress.style.display = "none";
  start.style.display = "block";
}

function init()
{
  setImage( 0 );
  stopslideshow();
}
