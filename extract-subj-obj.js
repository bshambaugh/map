var _ = require('./find-duplicates/libraries/lodash');
var triples = [["<subject>", "<predicate>", "<object>"],["<subject-one>", "<predicate-two>", "<object-two>"]];
//subject array
var subjects = [];
//object array
var objects = [];
// extract the subject
for (var i = 0; i < triples.length; i++) {
  console.log(triples[i][0]);
  subjects.push(triples[i][0]);
}
// extract the object
for (var i = 0; i < triples.length; i++) {
  console.log(triples[i][2]);
  objects.push(triples[i][2]);
}

console.log(_.flattenDeep(triples));
console.log(triples);
console.log('subjects');
console.log(subjects);
console.log('objects');
console.log(objects);
