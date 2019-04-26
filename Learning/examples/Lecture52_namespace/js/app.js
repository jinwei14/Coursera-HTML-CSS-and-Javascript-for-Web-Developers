yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");

(function () {
  console.log("Hello " + "baba");
})();

// function a(){
//   console.log("hello jinwei");
// }
//
// var a  = function(){
//   console.log("Hello jinwei");
// }
//
// a();
