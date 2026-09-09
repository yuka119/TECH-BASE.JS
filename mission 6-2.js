function foodshow(){
  var mainfood = new Array("野菜","魚","甲殻類","卵","キノコ","豚","牛","鶏");
  var j = Math.random() * 8;
  var i = Math.floor(j);

  var food = mainfood[i];

  var object = document.getElementById("food");
  object.innerText = food;

  var image = document.getElementById("foodimage");
  image.src = "img/" + food + ".png";

  document.cookie = "food=" + food;
}