// Object literals and "this"
var literalCircle = { //new object
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
      //this.radius = 20; will not work
      //inner function this point to the gloable object (windows.radius = 20)
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
