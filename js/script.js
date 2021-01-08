function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("close");
    var z = document.getElementById("bar");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.style.display = "block";
        z.style.display = "none";
        y.style.animationName = "crossAnimation";
        y.style.animationDuration = "1s";
    } else {
        x.className = "topnav";
        y.style.display = "none";
        z.style.display = "block";
        z.style.animationName = "fadein";
        z.style.animationDuration = "1s";
    }
}

function generate() {
    let request = new XMLHttpRequest();
    let url = "https://api.github.com/users/NishanthPrajith18/repos";
    console.log("checker");
    request.open("GET", url, true);
    request.onload = function() {
        let data = JSON.parse(this.response);
        var txt = "";
        if(request.status >=200 && request.status < 400) {
            txt += "<table>"
            console.log(txt);
            txt += "<tr><th>Project Name</th><th>Description</th><th>Language</th><th>Creation Date</th></tr>";
            console.log(txt);
            for (x in data) {
                txt += "<tr><td><a href='" + data[x].html_url + "' target='_blank'>" + data[x].name + "</a></td>";
                txt += "<td>" + data[x].description + "</td>";
                txt += "<td>" + data[x].language + "</td>";
                var create = data[x].created_at;
                var final = "";
                for (var j = 0; j < create.length; j++ ) {
                    if (create[j] == "T") {
                        break;
                    } else {
                        final += create[j];
                    }
                }
                txt += "<td>" + final + "</td></tr>";
            }
            txt += "</table>"
            document.getElementById("demo").innerHTML = txt;
        } else {
            console.log("Error!!");
        }
    }
    request.send();
}


// Image Modal script
function trigger(imageId, modalImagePos, CaptionId) {
    var modal = document.getElementById("myModal");
    console.log("check");
	var img = document.getElementById(imageId);
    var modalImg = document.getElementById(modalImagePos);
    var captionText = document.getElementById(CaptionId);
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      modalImg.style.maxWidth = "360px";
      captionText.innerHTML = this.alt;
      document.body.style.overflow = "hidden";
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
      document.body.style.overflow = "initial";
    }
}