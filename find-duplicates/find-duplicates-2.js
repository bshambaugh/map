var _ = require('./libraries/lodash');
var a = ['apple','banana','grape','cherry','watermelon'];
var b = ['plum','banana','grape','blueberry','watermelon'];
var e = [];

// This code is the same as intersection in lodash
for (var i = 0; i < a.length; i++) {
  for (var j = 0;j < b.length; j++) {  
//     console.log(a[i] + ' ' + b[j]);
     if ( a[i] === b[j]) {
//        console.log('we are the same' + ' for ' + i);
        e.push(a[i]);        
      } else {
//        console.log('we are not the same' + ' for ' + i);
     } 
  }
}

console.log(a);
console.log(b);
console.log(e);
console.log(_.difference(a,b));
console.log(_.intersection(a,b));
// check to see if custom code produces the same result 
// as lodash for array intersection
console.log(_.isEqual(e.sort(),_.intersection(a,b).sort()));
// https://lodash.com/docs#intersection
// http://stackoverflow.com/questions/29951293/using-lodash-to-compare-arrays
// http://www.w3schools.com/jsref/jsref_push.asp

