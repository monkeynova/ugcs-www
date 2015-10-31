var tv_shows = new Array();

function createShow( i, name, have, total, url ) {
  tv_shows[i] = new Object;
  tv_shows[i].name  = name;
  tv_shows[i].have  = have;
  tv_shows[i].total = total;
  tv_shows[i].url = url;
}

function makeDiv( show ) {
  var ret = "";

  ret += "<div class=showbox>\n";
  if ( show.url != "" ) {
    ret += "<a href=\"" + show.url + "\">" + show.name + "</a> ";
    ret += "<a class=cached href=\"http://google.com/search?q=cache:" + show.url + "\">(Cached)</a> "
  } else {
    ret += show.name;
  }
  ret += " (" + show.have + "/" + show.total + ")\n";
  ret += "  <div class=pbar>&nbsp;\n"
  ret += "    <div class=progress style=width:";
  ret += 100 * show.have / show.total;
  ret += "%>&nbsp</div>";
  ret += "    <div class=progresspercent>";
  ret += Math.floor( 100 * show.have / show.total ) + "%";
  ret += "</div>\n";
  ret += "  </div>\n";
  ret += "</div>";

  return ret;
}

createShow( 0, "Total", 0, 0, "" );
createShow( 1, "Family Guy", 42, 49, "http://www.epguides.com/FamilyGuy/" );
createShow( 2, "Friends", 199, 218, "http://www.epguides.com/Friends/" );
createShow( 3, "Futurama", 52, 72, "http://www.epguides.com/Futurama/" );
createShow( 4, "Good Eats", 48, 91, "http://www.goodeatsfanpage.com/EpisodeInfo/EpisodeByOrder.htm" );
createShow( 5, "Samurai Jack", 40, 42, "http://www.epguides.com/SamuraiJack/" );
createShow( 6, "The Simpsons", 171, 313, "http://www.epguides.com/Simpsons/" );
createShow( 8, "Cowboy Bebop", 26, 26, "http://www.epguides.com/CowboyBebop/" );
createShow( 9, "24", 24, 48, "http://www.epguides.com/24/" );
createShow( 10, "The Twilight Zone (1959)", 77, 156, "http://www.epguides.com/TwilightZone" );
createShow( 11, "Gargoyles", 34, 65, "http://www.epguides.com/Gargoyles/" );
createShow( 7, "The Critic", 7, 23, "http://www.epguides.com/Critic/" );

function nameCompare(a,b) {
  if ( a.name == "Total" ) return -1;
  if ( b.name == "Total" ) return 1;
  if ( a.name < b.name ) return -1;
  if ( a.name > b.name ) return 1;
  return 0;
}

tv_shows.sort( nameCompare );

for( i = 1; i <= tv_shows.length; i++ ) {
  tv_shows[0].have += tv_shows[i].have;
  tv_shows[0].total += tv_shows[i].total;
}
