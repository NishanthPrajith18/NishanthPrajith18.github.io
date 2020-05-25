function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
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