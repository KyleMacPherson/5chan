console.log('do the funk');

  var allPosts = []

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
    xhttpGet.send();
    return xhttpGet;
  };

  function displayOnPage() {
    document.getElementById("posts").innerHTML = JSON.parse(postDisplay());
  };
