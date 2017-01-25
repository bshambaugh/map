var primatives = require('./create-primatives.js');
var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]];
var width = 400;
var height = 400;
var radius = 25;
var tw = 10;

constructPrimatives = new primatives;

var Primates = constructPrimatives.constructPrimatives(triples,width,height);
console.log(Primates.nodes);
console.log(Primates.edges);

for(var i = 0; i < Primates.nodes.length; i++) {
 var x = Primates.nodes[i].x;
 var y = Primates.nodes[i].y;
 var node_name = Primates.nodes[i].node_name;
 console.log(x + ' , ' + y + ': ' + node_name);
 // ellipse(Primates.nodes[i].x,Primates.nodes[i].y,radius,radius);
 // text(Primates.nodes[i].node_name, Primates.nodes[i].x - Primates.nodes[i].node_name - tw, Primates.nodes[i].y + 0.5 * tw, tw); 
}

for(var i = 0; i < Primates.edges.length; i++) {
  var point1 = Primates.edges[i].point1;
  var point2 = Primates.edges[i].point2;
  var point1_name = Primates.edges[i].point1_name_and_subject;
  var point2_name = Primates.edges[i].point2_name_and_object;
  console.log(point1 + ' : ' + point2 + ' : ' + point1_name + ' , ' + point2_name);
  console.log(point1[0] + ' , ' + point1[1] + ' : ' + point2[0] + ' , ' + point2[1]);
  console.log(Primates.edges[i].point1[0] + ' , ' + Primates.edges[i].point1[1] + ' : ' + Primates.edges[i].point2[0] + ' , ' + Primates.edges[i].point2[1]);
//  line(Primates.edges[i].point1[0],Primates.edges[i].point1[1],Primates.edges[i].point2[0],Primates.edges[i].point2[1]);
}

