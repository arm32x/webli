$ (document).ready (function () {
  var xhr;
  var yourListsLoaded = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest ();
  } else {
    xhr = new ActiveXObject ("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      $ (".your-lists .spinner-container").css ("opacity", "0");
      yourListsLoaded = true;
      console.log ("Your Lists XHR returned successfully");
    }
    if (xhr.readyState == 4 && xhr.status != 200) {
      $ (".your-lists .spinner-container").css ("opacity", "0");
      $ (".your-lists .could-not-load.msg").css ("opacity", "0.38");
      console.log ("XHR pointed at " + xhr. + " returned with error " + xhr.status);
    }
  }
  xhr.open ("GET", "../data/lists.json?requestid=" + Math.random (), true);
  xhr.send ();
});