// Event handling on the broswer life clcle
document.addEventListener("DOMContentLoaded",
  function (event) {

    function sayHello (event) {
      console.log(this);
      this.textContent = "Said it already!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title =
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);
// // this method will have soome convint point like change the button text after click
// // instead of using another selector API.

    // //we can use the object that we select
    // document.querySelector("button")
    //   .onclick = sayHello;
  }
);
