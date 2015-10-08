console.log('do the funk');

  function postSubmit() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/json", true);
    xhttp.send(postCapture());
    var response = postDisplay();
    document.getElementById('test').innerHTML = response[0].post;
  };

  function postCapture() {
    var message = document.getElementById("message").value;
    return JSON.stringify({"post" : message});
  };

  function postDisplay() {
    var xhttpGet = new XMLHttpRequest();
    xhttpGet.open("GET", "/json", true);
    xhttpGet.send(null);
  };

  function displayOnPage() {
    var display = JSON.parse(xhttpGet.responseText);

  };
