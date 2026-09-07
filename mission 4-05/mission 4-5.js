function omikujishow(){
  var omikuji = new Array("大凶","凶","末吉","小吉","中吉","吉","大吉");

  var i = Math.random();
  var number;
  
  if (i < 0.1) number = 0;
  else if (0.1 <= i && i < 0.25) number = 1;
  else if (0.25 <= i && i < 0.4) number = 2;
  else if (0.4 <= i && i <= 0.6) number = 3;
  else if (0.6 < i && i <= 0.75) number = 4;
  else if (0.75 < i && i <= 0.9) number = 5;
  else if (0.9 < i) number = 6;

  var message = omikuji[number];

  var object = document.getElementById("omikuji");
  object.innerText = message;
}