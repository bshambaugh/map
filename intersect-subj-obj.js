var _ = require('./find-duplicates/libraries/lodash');
var triples = [["<subject>", "<predicate>", "<object>"],["<subject-two>", "<predicate-two>", "<subject>"]];
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

//combine the subject and object arrays
console.log('concatente the subject and object arrays');
console.log(_.concat(subjects,objects));
//combine the subject and object arrays and sort
console.log('concatenate and sort');
console.log(_.concat(subjects,objects).sort());
// combine the subject and object arrays and sort and find uniq elements
console.log('concatenate and sort and find uniq elements');
console.log(_.uniq(_.concat(subjects,objects).sort()));
// ------------------------------------

//console.log(_.intersection(subjects,objects));
// check to see if a subject matches an object
console.log(_.intersection(subjects,objects));
// check to see if there are duplicate subjects and objects
//---
// ehh...but I am checking to see if things are repeated more than once...
console.log(_.flattenDeep(triples));
