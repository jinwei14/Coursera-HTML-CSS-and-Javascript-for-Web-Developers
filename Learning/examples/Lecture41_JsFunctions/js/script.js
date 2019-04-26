

var message = "in global";
console.log("global: message = " + message);

// function a (){
//
// }

// var a = function () {
//   var message = "inside a";
//   console.log("a: message = " + message);
//
//   function b () {
//     console.log("b: message = " + message);
//   }
//
//   b();
// }


function a () {
  var message = "inside a";
  console.log("a: message = " + message);

  function b () {
    console.log("b: message = " + message);
  }

  b();
}

a();
