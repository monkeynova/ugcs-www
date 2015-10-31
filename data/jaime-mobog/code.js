var lastDiv = null;

var nimages = 34;

var images = new Array( nimages );
var i = 0;
images[i++] = { file : "pic0130.jpg", thumbfile : "thumb_pic0130.jpg" };
images[i++] = { file : "pic0129.jpg", thumbfile : "thumb_pic0129.jpg" };
images[i++] = { file : "pic0128.jpg", thumbfile : "thumb_pic0128.jpg" };
images[i++] = { file : "pic0127.jpg", thumbfile : "thumb_pic0127.jpg" };
images[i++] = { file : "pic0126.jpg", thumbfile : "thumb_pic0126.jpg" };
images[i++] = { file : "pic0125.jpg", thumbfile : "thumb_pic0125.jpg" };
images[i++] = { file : "pic0124.jpg", thumbfile : "thumb_pic0124.jpg" };
images[i++] = { file : "pic0123.jpg", thumbfile : "thumb_pic0123.jpg" };
images[i++] = { file : "pic0122.jpg", thumbfile : "thumb_pic0122.jpg" };
images[i++] = { file : "pic0121.jpg", thumbfile : "thumb_pic0121.jpg" };
images[i++] = { file : "pic0120.jpg", thumbfile : "thumb_pic0120.jpg" };
images[i++] = { file : "pic0119.jpg", thumbfile : "thumb_pic0119.jpg" };
images[i++] = { file : "pic0118.jpg", thumbfile : "thumb_pic0118.jpg" };
images[i++] = { file : "pic0117.jpg", thumbfile : "thumb_pic0117.jpg" };
images[i++] = { file : "pic0116.jpg", thumbfile : "thumb_pic0116.jpg" };
images[i++] = { file : "pic0115.jpg", thumbfile : "thumb_pic0115.jpg" };
images[i++] = { file : "pic0114.jpg", thumbfile : "thumb_pic0114.jpg" };
images[i++] = { file : "pic0113.jpg", thumbfile : "thumb_pic0113.jpg" };
images[i++] = { file : "pic0112.jpg", thumbfile : "thumb_pic0112.jpg" };
images[i++] = { file : "pic0111.jpg", thumbfile : "thumb_pic0111.jpg" };
images[i++] = { file : "pic0110.jpg", thumbfile : "thumb_pic0110.jpg" };
images[i++] = { file : "pic0109.jpg", thumbfile : "thumb_pic0109.jpg" };
images[i++] = { file : "pic0108.jpg", thumbfile : "thumb_pic0108.jpg" };
images[i++] = { file : "pic0107.jpg", thumbfile : "thumb_pic0107.jpg" };
images[i++] = { file : "pic0106.jpg", thumbfile : "thumb_pic0106.jpg" };
images[i++] = { file : "pic0105.jpg", thumbfile : "thumb_pic0105.jpg" };
images[i++] = { file : "pic0104.jpg", thumbfile : "thumb_pic0104.jpg" };
images[i++] = { file : "pic0103.jpg", thumbfile : "thumb_pic0103.jpg" };
images[i++] = { file : "pic0102.jpg", thumbfile : "thumb_pic0102.jpg" };
images[i++] = { file : "pic0101.jpg", thumbfile : "thumb_pic0101.jpg" };
images[i++] = { file : "pic0100.jpg", thumbfile : "thumb_pic0100.jpg" };
images[i++] = { file : "pic0099.jpg", thumbfile : "thumb_pic0099.jpg" };
images[i++] = { file : "pic0098.jpg", thumbfile : "thumb_pic0098.jpg" };
images[i++] = { file : "pic0097.jpg", thumbfile : "thumb_pic0097.jpg" };

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
