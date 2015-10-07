console.log('do the funk');

  function postSubmit() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/json", true);
    xhttp.send(postCapture());
  };

  function postCapture() {
    var message = document.getElementById("message").value;
    return "post[message]=" + message;
  }
