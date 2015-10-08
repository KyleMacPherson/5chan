
function postSubmit () {
  var xhttp = new XMLHttpRequest()
  xhttp.open('POST', '/json', true)
  xhttp.send(postCapture());
  var response = postDisplay();
  var x = JSON.parse(toString(response))
  console.log('here')
  document.getElementById('test').innerHTML = x;
};

function postCapture () {
  var message = document.getElementById("message").value;
  return JSON.stringify({"post" : message});
};

function postDisplay () {
  var xhttpGet = new XMLHttpRequest();
  xhttpGet.open("GET", "/json", true);
  xhttpGet.send(null);
  return xhttpGet.responseText;
};

function displayOnPage () {
  var display = JSON.parse(xhttpGet.responseText);
};
