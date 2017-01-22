var triples = [["<subject>", "<predicate>", "<object>"],["<subject-one>", "<predicate-two>", "<object-two>"]];
var points = [[56, 45],[185, 175],[185, 45],[255,145],[45, 175],[145,56]];
console.log(triples[1][1]);
var accumulator = [];
for(var i = 0; i < triples.length; i++) {
 var pointstwo = triples[i].map(function(elem) {
    return [Math.random(), Math.random()];
 });
 Array.prototype.push.apply(accumulator, pointstwo);
 console.log("Start of Points two");
 console.log(pointstwo);
}

console.log(triples[0][0]);

console.log("The accumulator is");
console.log(accumulator);

