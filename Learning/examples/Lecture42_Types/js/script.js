// should be undefined
var x;
console.log(x);

// undefinded mean it has been declear but had not been assign into anyvalues
if (x == undefined) {
  console.log("x is undefined");
}

x = 5;
if (x == undefined) {
  console.log("x == 5 is undefined");
}
else {
  console.log("x ==5  has been defined");
}


// 1. objects

// 2. primitive types: single value, immutable.
//such as boolean, undefinded,null, number (no interger), string, Symbol
//
