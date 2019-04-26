// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
    //// this is the same as the previous line
    // if (sideDish == undefined){
    //   sideDish = "whatever"
    // }
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
