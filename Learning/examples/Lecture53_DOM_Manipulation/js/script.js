// DOM manipulation (document object Module)

/*
// NOTE:
document object represents the entire HTML document, the document object model

window obj

try this in the console:  window.document
document.getElementById("title")

get the element in the HTML
return back to the front end


*/

console.log(document.getElementById("title"));
console.log(document.getElementById("name").value
            + " Coursera!");
console.log(document.querySelector("#name").value
            + " Coursera!");
console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";
 // this will print  the hello name directly
  // document
  //   .getElementById("content")
  //   .textContent = message;

// this will interprete as html
  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    // also can use getElementById
    var title =
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    // first h1 element
    document
        .querySelector("h1")
        .textContent = title;
  }
}
