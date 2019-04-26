// Function constructors
function Circle (radius) {
  this.radius = radius;
  //this is will be execute the function over and over.
  // this.getArea = function(){
  //   return Math.PI * Math.pow(this.radius, 2);
  // }
}

//when create a new object this has the same location address as the previous one
Circle.prototype.getArea =
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


//if we forget to put a new this become a normal function
var myCircle = new Circle(10);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
