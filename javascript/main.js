var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];
var queryString = function () 
{
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) 
  {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") 
    {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") 
    {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
  return query_string;
}();
//document.getElementById("birthday-banner").getElementByTagName("h1").innerHTML= queryString.name;
document.getElementById("birthday-banner").getElementsByTagName("h1")[0].innerHTML = "Happy Birthday " + queryString.name;

var bifdate = queryString.birthday;
//convert to JSDate
bifdate = new Date (bifdate)
var formattedDate = monthNames[bifdate.getMonth()] + " " + bifdate.getDate() + " " + bifdate.getFullYear()
 

document.getElementById("date-banner").getElementsByTagName("h1")[0].innerHTML = "On " + formattedDate + "...";

