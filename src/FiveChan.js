  function postSubmit() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/json/new", true);
    xhttp.send(postCapture());
  };

  function postCapture() {
    var message = document.getElementById("post_submission").value;
    return message;
  }
