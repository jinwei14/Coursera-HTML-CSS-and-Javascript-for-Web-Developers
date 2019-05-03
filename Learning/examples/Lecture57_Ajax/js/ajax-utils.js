(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  // check which
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  }
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  }
  else {
    global.alert("Ajax is not supported!");
    return(null);
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest =
  function(requestUrl, responseHandler) {
    var request = getRequestObject();
    // you might not use this as golable cuz
    //it is executing Asynchronouly and some other function might call
    //this as well. it will be a gantic mess
    request.onreadystatechange =
      function() {
        handleResponse(request, responseHandler);
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };




// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    responseHandler(request);
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);



// **Q: I am getting XMLHttpRequest cannot load file:///somepath error. What am I doing wrong?
//
// A: XMLHttpRequest signifies an Ajax request that your code is attempting to make through the browser. Most, if not all, browsers do not support Ajax requests made through the file protocol, which is what file:///somepath specifies. Instead, the browser expects an HTTP protocol, which looks like http://somepath.
//
// In order for your Ajax request to work you need to serve your web site to the browser through a server. You can deploy it on GitHub as explained in Module 1 to solve the issue. However, the easiest way of having a server while your are developing is to get a local one on your machine. This is why we are pretty much always using Browser Sync.
//
// Browser Sync, among other things, provides a local server option. So, simply navigate to the root directory of your web site on your machine (either through terminal program on Mac/Linux or through CMD program on Windows) and execute the following command:
//
// browser-sync start --server --directory --files "**/*"
// Of course, this assumes you installed browser-sync as was instructed in Module 1.
