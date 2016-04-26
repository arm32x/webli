var currentUser = null;

function displayLists (listsObj) {
    if (currentUser != null) {
        
    } else {
        $ (".your-lists .not-signed-in.msg").css ("opacity", "0.38");
    }
}

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
            displayLists ();
        }
        if (xhr.readyState == 4 && xhr.status != 200) {
            $ (".your-lists .spinner-container").css ("opacity", "0");
            $ (".your-lists .could-not-load.msg").css ("opacity", "0.38");
        }
    }
    xhr.open ("GET", "../data/lists.json?requestid=" + Math.random (), true);
    xhr.send ();
});