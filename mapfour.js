var triples = [["<subject>", "<predicate>", "<object>"],["<subject-one>", "<predicate-two>", "<object-two>"]];
var accumulator = [];
var width = 400;
var height = 400;

for(var i = 0; i < triples.length; i++) {
 var pointstwo = triples[i].map(function(elem) {
    return [Math.random() * width, Math.random() * height];
 });
 Array.prototype.push.apply(accumulator, pointstwo);
}

console.log("The accumulator is");
console.log(accumulator);

// Match the random numbers in the array if a subject matches an object, a subject matches a subject, or an object matches an object
