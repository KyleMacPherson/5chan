console.log('do the funk');

  function postSubmit() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/json", true);
    xhttp.send(postCapture());
  };

  function postCapture() {
    var message = document.getElementById("message").value;
    return JSON.stringify({"post" : message});
  }

  function postDisplay() {
    var xhttpGet = new XMLHttpRequest();
    xhttpGet.open("GET", "/json", true);
    xhttpGet.send(null);
  };

  function displayOnPage() {
    var display = JSON.parse(xhttpGet.responseText);
    document.getElementById("posts").innerHTML = "<li>" + display + "</li>";
  };
