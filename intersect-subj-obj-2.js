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

// combine the subject and object arrays and sort and find uniq elements
console.log('concatenate and sort and find uniq elements');
console.log(_.uniq(_.concat(subjects,objects).sort()));
// convert each of the uniq elements to a point

// now that I have the points...find the predicates that correspond to these...


