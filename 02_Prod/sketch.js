// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/kKT0v3qhIQY



// Créer une connexion WebSocket
//var socket = new WebSocket('ws://192.168.8.200:1880/humidity');



//socket.onmessage = function(event) {
//  console.log('Message du serveur : ', event.data);
  
//  // Convertir la chaîne en nombre et l'assigner à min_dist
//  min_dist = Number(event.data);
//};
 
var tree;
var max_dist = 100;
var min_dist = 10;

function setup() {
//  createCanvas(1000, 1000, SVG);
  createCanvas(window.innerWidth, window.innerHeight);
  tree = new Tree();
}
 
function draw() {
  background(0, 0);
  tree.show();
  tree.grow();
  
//  text.socket;
   // give file name
//  print("saved svg");
//  noLoop(); // we just want to export once
//    
}

function saveSVG() {
  save('mySVG.svg');
}

function keyTyped() {
 if (key == "s") {
 save('mySVG.svg');
 }
}

//function saveSVG() {
//  var svgElement = document.getElementById("defaultCanvas0").elt;
//  var svgContent = svgElement.html();
//  var blob = new Blob([svgContent], { type: 'image/svg+xml;charset=utf-8' });
//  var url = URL.createObjectURL(blob);
//  var link = document.createElement('a');
//  link.setAttribute('href', url);
//  link.setAttribute('download', 'mySVG.svg');
//  link.click();
//}
//
setInterval(saveSVG, 50000);



setTimeout(function(){
    location.reload();
}, 4000);
