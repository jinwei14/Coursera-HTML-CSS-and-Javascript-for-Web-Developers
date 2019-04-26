// Closures
//when a function is executed it get a this variable
//get a reference outside the
function makeMultiplier (multiplier) {
  // var multiplier = 2;
  function b() {
    console.log("Multiplier is: " + multiplier);
  }
  b();


  return (
      function (x) {
        return multiplier * x; //how can I know what is multiplier
      } //object

    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // its own exec env
