var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celsius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 

for(var i = 0; i < celsius.length; i++) {
  console.log(celsius[i]);
}
