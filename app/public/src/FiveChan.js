window.onload = function () {
  var response = postDisplay();
  var x = JSON.parse(response);
  for (var i=0; i < x.length; i++){
    document.getElementById("posts").innerHTML += "<li>" + x[i] + "</li>"
  }
}

function postSubmit () {
  var xhttp = new XMLHttpRequest()
  xhttp.open('POST', '/json', true)
  xhttp.send(postCapture());
  var new_response = addNewPost();
  var parsed = JSON.parse(new_response)
  document.getElementById("posts").innerHTML += "<li>" + parsed + "</li>"
};

function postCapture () {
  var message = document.getElementById("message").value;
  return JSON.stringify({"post" : message});
};

function postDisplay () {
  var xhttpGet = new XMLHttpRequest();
  xhttpGet.open("GET", "/json", false);
  xhttpGet.send(null);
  return xhttpGet.responseText;
};

function displayOnPage () {
  var display = JSON.parse(xhttpGet.responseText);
};

function addNewPost () {
  var xhttpGet = new XMLHttpRequest();
  xhttpGet.open("GET", "/json/new", false);
  xhttpGet.send(null);
  return xhttpGet.responseText;
};
