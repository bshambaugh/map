var _ = require('./find-duplicates/libraries/lodash');
var triples = [["d", "i", "q"],["a", "f", "c"],["c", "g", "d"],["e", "h", "c"],["c", "i", "q"]];
//subject array
var subjects = [];
//object array
var objects = [];
// extract the subject
console.log('extract the subject');
for (var i = 0; i < triples.length; i++) {
  console.log(triples[i][0]);
  subjects.push(triples[i][0]);
}
// extract the object
console.log('extract the object');
for (var i = 0; i < triples.length; i++) {
  console.log(triples[i][2]);
  objects.push(triples[i][2]);
}
console.log('the subjects are');
console.log(subjects);
console.log('the objects are');
console.log(objects);

// combine the subject and object arrays and sort and find uniq elements
console.log('concatenate and sort and find uniq elements');
//console.log(_.uniq(_.concat(subjects,objects).sort()));
var uniqNodes = _.uniq(_.concat(subjects,objects).sort());
console.log(uniqNodes);
// convert each of the uniq elements to a point

// now that I have the points...find the predicates that correspond to these...

 var points = uniqNodes.map(function(elem) {
    return [Math.random(), Math.random()];
 });
 
console.log(points);
// plot the points here..

// line dq, ac, cd, ec, cq
console.log(triples);

var lines = [];

for(var i = 0; i < triples.length; i++) {
  for(var j = 0; j < uniqNodes.length; j++) { 

    if(triples[i][0] == uniqNodes[j]) {
      console.log('S:We are the same for ' + triples[i][0] + ' and ' + uniqNodes[j] + ' at ' + j + ' and the point is ' + points[j]); 
      var a = points[j];
    }

//  var a =  returnPoint(triples[i][0],uniqNodes[j]);

    if(triples[i][2] == uniqNodes[j]) {
       console.log('O:We are the same for ' + triples[i][2] + ' and ' + uniqNodes[j] + ' at ' + j + ' and the point is ' + points[j]);       var b = points[j];
    }

//   var b = returnPoint(triples[i][2],uniqNodes[j]);
//     console.log(a + ' : ' + b);
  }

     console.log('line ab is : ' + a + ' to ' + b + ' for ' + triples[i][1]);
     lines.push([a],[b]); 
}

/*
function returnPoint(a,b) {
   if(a == b) {
     var c = points[j];
   }
  if (typeof c !== 'undefined') {
    return c;
  }
}
*/
