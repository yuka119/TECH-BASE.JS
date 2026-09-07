function omikujishow(){
  var omikuji = new Array("大吉","中吉","小吉");
  var j = Math.random() * 3;
  var i = Math.floor(j);

  var message = omikuji[i];

  var object = document.getElementById("omikuji");
  object.innerText = message;
}