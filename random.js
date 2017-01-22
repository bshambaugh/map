var triplearray = ["subject","predicate"];
var a = Math.random();
console.log(a);
var ra = [Math.random(), Math.random()];
console.log(ra[0]);

var points = triplearray.map(function(elem) {
    return [Math.random(), Math.random()];
});

console.log(points[0][0],points[0][1],points[1][0],points[1][1]);



