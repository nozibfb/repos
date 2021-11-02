// var firstHeading = document.getElementsByClassName("hello")[0];
// var myButton = document.getElementById("button");
// var myText = "Hello World x";
// var myNumber = 2;
//
// function changeTheText() {
//   if(firstHeading.innerHTML == "Hello World!") {
//     firstHeading.innerHTML = myText + myNumber;
//   } else {
//     firstHeading.innerHTML = "Texten stämde ionte överens med Hello World! Så jag ändrar den till detta istället";
//
//     }
//  }
//
// changeTheText();

// var ux = ["User research", "Information architecture", "Interaction design", "Interface design"];
// var arrayLength = ux.length;
// var myList = "<ul>";
//
// for(var i = 0; i < arrayLength; i++) {
//   myList += "<li>" + ux[i] + "</li>";
// }
//
// myList +="</ul>";
//
// document.getElementById("minArrayDiv").innerHTML = myList;


// var text ="";
// var i = 0;
//
// while (i < 10) {
//   text +="<br>Siffran är" + i;
//   i++;
// }
//
// document.getElementById("minArrayDiv").innerHTML = text;

var images = ["User research", "Information architecture", "Interaction design", "Interface design"];
var arrayLength = images.length;
var imageContainer = "<ul>";


for (var i= 0; < arrayLength; i++) {
  myList += "<img src=" + images[i] + "class='images'>";
}

imageContainer.innerHTML = myList;

var myButton = document.getElementById("button");
var imageOne = document.getElementsByTagName("img[0]")
var imageThree = document.getElementsByTagName("img[2]")

document.getElementById("minArrayDiv").innerHTML = myList;
