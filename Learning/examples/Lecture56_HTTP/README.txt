This lecture did not contain any coding examples. See video.

## HTTP

* Based on request/ response stateless protocol (does not remember who has just click the button to pay)

  client open connection to server
  client send HTTp request for a resource
  server send HTTP response to the client (w/resource)
  Client lose connection to the server

* URN uniform resource name

  Uniquely identifies resource or name of resource
  Does not tell us how to get the resource

  eg: "HTML/CSS/JAVAscripy/jinwei/"

* URI Uniform Resource Identifier
  Uniquely identifies resources or location of resource
  Does not necessarily tell us how to get the resource

  eg: /offical_web_site/index.html

* URL Uniform Resource Locator:
  Form if URI that provide info on how to get the resource
  eg: http://www.ysite.com/official_web_site/index.html

HTTP request structure:

GET /index.html?firstName=jinwei&lastName=Zhang HTTP/1.1
 Method/URI String/Query string/HHTP version

 Fist thing need to do connect.
 then request. start with the HTTP

 Methods:

  GET: retrieve the resources
      Data is passed to server as part of the URI (query string)
      The ways to tell the server to identify a particular resource in order to get the resource back

  POST: Sends the data to the server in order to be processed
        Data is send in the message body

Many more.....


HTTP request structure (POST)
POST/index.html HTTP/1.1 (no query string)
