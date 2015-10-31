var lastDiv = null;

var nimages = 154;

var images = new Array( nimages );
var i = 0;
images[i++] = { file : "pic0142.jpg", thumbfile : "thumb_pic0142.jpg" };
images[i++] = { file : "pic0141.jpg", thumbfile : "thumb_pic0141.jpg" };
images[i++] = { file : "pic0140.jpg", thumbfile : "thumb_pic0140.jpg" };
images[i++] = { file : "pic0139.jpg", thumbfile : "thumb_pic0139.jpg" };
images[i++] = { file : "pic0138.jpg", thumbfile : "thumb_pic0138.jpg" };
images[i++] = { file : "pic0137.jpg", thumbfile : "thumb_pic0137.jpg" };
images[i++] = { file : "pic0136.jpg", thumbfile : "thumb_pic0136.jpg" };
images[i++] = { file : "pic0135.jpg", thumbfile : "thumb_pic0135.jpg" };
images[i++] = { file : "pic0134.jpg", thumbfile : "thumb_pic0134.jpg" };
images[i++] = { file : "pic0133.jpg", thumbfile : "thumb_pic0133.jpg" };
images[i++] = { file : "pic0132.jpg", thumbfile : "thumb_pic0132.jpg" };
images[i++] = { file : "pic0131.jpg", thumbfile : "thumb_pic0131.jpg" };
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
images[i++] = { file : "pic0096.jpg", thumbfile : "thumb_pic0096.jpg" };
images[i++] = { file : "pic0095.jpg", thumbfile : "thumb_pic0095.jpg" };
images[i++] = { file : "pic0094.jpg", thumbfile : "thumb_pic0094.jpg" };
images[i++] = { file : "pic0093.jpg", thumbfile : "thumb_pic0093.jpg" };
images[i++] = { file : "pic0092.jpg", thumbfile : "thumb_pic0092.jpg" };
images[i++] = { file : "pic0091.jpg", thumbfile : "thumb_pic0091.jpg" };
images[i++] = { file : "pic0090.jpg", thumbfile : "thumb_pic0090.jpg" };
images[i++] = { file : "pic0089.jpg", thumbfile : "thumb_pic0089.jpg" };
images[i++] = { file : "pic0088.jpg", thumbfile : "thumb_pic0088.jpg" };
images[i++] = { file : "pic0087.jpg", thumbfile : "thumb_pic0087.jpg" };
images[i++] = { file : "pic0086.jpg", thumbfile : "thumb_pic0086.jpg" };
images[i++] = { file : "pic0085.jpg", thumbfile : "thumb_pic0085.jpg" };
images[i++] = { file : "pic0084.jpg", thumbfile : "thumb_pic0084.jpg" };
images[i++] = { file : "pic0083.jpg", thumbfile : "thumb_pic0083.jpg" };
images[i++] = { file : "pic0082.jpg", thumbfile : "thumb_pic0082.jpg" };
images[i++] = { file : "pic0081.jpg", thumbfile : "thumb_pic0081.jpg" };
images[i++] = { file : "pic0080.jpg", thumbfile : "thumb_pic0080.jpg" };
images[i++] = { file : "pic0079.jpg", thumbfile : "thumb_pic0079.jpg" };
images[i++] = { file : "pic0078.jpg", thumbfile : "thumb_pic0078.jpg" };
images[i++] = { file : "pic0077.jpg", thumbfile : "thumb_pic0077.jpg" };
images[i++] = { file : "pic0076.jpg", thumbfile : "thumb_pic0076.jpg" };
images[i++] = { file : "pic0075.jpg", thumbfile : "thumb_pic0075.jpg" };
images[i++] = { file : "pic0074.jpg", thumbfile : "thumb_pic0074.jpg" };
images[i++] = { file : "pic0073.jpg", thumbfile : "thumb_pic0073.jpg" };
images[i++] = { file : "pic0072.jpg", thumbfile : "thumb_pic0072.jpg" };
images[i++] = { file : "pic0071.jpg", thumbfile : "thumb_pic0071.jpg" };
images[i++] = { file : "pic0070.jpg", thumbfile : "thumb_pic0070.jpg" };
images[i++] = { file : "pic0069.jpg", thumbfile : "thumb_pic0069.jpg" };
images[i++] = { file : "pic0068.jpg", thumbfile : "thumb_pic0068.jpg" };
images[i++] = { file : "pic0067.jpg", thumbfile : "thumb_pic0067.jpg" };
images[i++] = { file : "pic0066.jpg", thumbfile : "thumb_pic0066.jpg" };
images[i++] = { file : "pic0065.jpg", thumbfile : "thumb_pic0065.jpg" };
images[i++] = { file : "pic0063.jpg", thumbfile : "thumb_pic0063.jpg" };
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
