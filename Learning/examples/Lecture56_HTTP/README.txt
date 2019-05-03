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
      ->sends data to server as part of the URL

  POST: Sends the data to the server in order to be processed
        Data is send in the message body
        -> sends data as part of the message body

Many more.....


HTTP request structure (POST):
_________________________________________
POST/index.html HTTP/1.1 (no query string)
HOST: Coursera.org
Accept-Charset: utf-8
firstName = Jinwei (messgae body)
...
...
_________________________________________

HTTP response structure
_________________________________________
HTTP/1.1 200 OK (HTTP version) (Response status code) (English phrase describing status code)

Date: Tue, 11 Aug 2004 19;00:01 GMT
content-type: text/html
<html>
(this can also be json etc)
...
</html>


Response status code:
200 OK:
ok here is the content you requested

404 Not Found:
server can not find the resource request

403 Forbidden:
Unauthenticated client tried to access a secure resource

500 Internal Server Error:
Some unhandled error was raised on the server
