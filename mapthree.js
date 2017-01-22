var triples = [["<subject>", "<predicate>", "<object>"],["<subject-one>", "<predicate-two>", "<object-two>"]];
var accumulator = [];

for(var i = 0; i < triples.length; i++) {
 var pointstwo = triples[i].map(function(elem) {
    return [Math.random(), Math.random()];
 });
 Array.prototype.push.apply(accumulator, pointstwo);
}

console.log("The accumulator is");
console.log(accumulator);

// Match the random numbers in the array if a subject matches an object, a subject matches a subject, or an object matches an object
