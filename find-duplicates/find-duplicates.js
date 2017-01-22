var a = ['apple','banana','grape','cherry','watermelon'];
var b = ['plum','banana','grape','blueberry','watermelon'];
var e = [];

console.log(a);
console.log(b);

var c = a.map(function(elem) {
    return elem;
 });

var d = b.map(function(elem) {
    return elem;
});

console.log(c);

for (var i = 0; i < a.length; i++) {
  for (var j = 0;j < b.length; j++) {  
     console.log(a[i] + ' ' + b[j]);
     if ( a[i] === b[j]) {
        console.log('we are the same' + ' for ' + i);
        e.push(a[i]);        
/*       if( i < a.length - 1) {
         c.splice(i,1);
       } else {
         c.pop();
       } */ 
      } else {
        console.log('we are not the same' + ' for ' + i);
     } 
  }
}

console.log(c);
console.log(e);

/*$a = ['apple','banana','grape'];
$b = ['plum','banana','grape'];

foreach($array_three_rebased_map as $i => $value_one) {
foreach($array_three_ext as $j => $value_two) {
  if($array_three_rebased_map[$i] == $array_three_ext[$j]) {
    if($dbg == 1){
      echo("We are equal for ".$array_three_rebased_map[$i]." and ".$array_three_ext[$j]);
      echo("\r\n");
    }
     unset($array_three_rebased[$i]);
  } elseif ($array_three_rebased_map[$i] !== $array_three_ext[$j]) {
    if($dbg == 1){
    echo("We are not equal for ".$array_three_rebased_map[$i]." and ".$array_three_ext[$j]);
    echo("\r\n");
   }
  }
} */
