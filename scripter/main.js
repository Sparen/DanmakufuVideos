var database_obj;

function setup(filepath) {
    var client = new XMLHttpRequest();
    client.open("GET", filepath, true);
    client.onreadystatechange = function () { //callback
        if (client.readyState == 4) {
            if (client.status == 200 || client.status == 0) {
                database_obj = JSON.parse(client.responseText);
                document.getElementById("maindiv").innerHTML = parse();
            }
        }
    };

    client.send();
}

function parse() {
    var outputstring = ""; //concatenate the entire HTML block here
    var scripts = database_obj.scripts;

    var i; //used to iterate through scripts
    for (i = 0; i < scripts.length; i++) {
        outputstring += '<div class="scriptdiv">';
        outputstring += '<h1>' + scripts[i].name + '</h1>';
        outputstring += '<p><a target="_blank" href="' + scripts[i].download + '">Download Link</a></p>';
        outputstring += '<p>Release Date: ' + scripts[i].releasedate + '</p>';
        var numvideos = scripts[i].videos.length;
        if (numvideos == 0) {
            outputstring += '<p>There are no videos available for this script. If there are videos and you would like to contribute them, please consider sending in a pull request.</p>';
        } else {
            outputstring += '<table class="table table-condensed table-bordered">';
            outputstring += '<tr><th>Uploader</th><th>Link</th><th>Video Type</th></tr>';
            var j; //used to iterate through videos
            for (j = 0; j < numvideos; j++) {
                outputstring += '<tr>';
                outputstring += '<td><a target="_blank" href="' + scripts[i].videos[j].channelurl + '">' + scripts[i].videos[j].uploader + '</a></td>';
                outputstring += '<td><a target="_blank" href="https://www.youtube.com/watch?v=' + scripts[i].videos[j].youtubeid + '">Video</a></td>';
                outputstring += '<td>' + scripts[i].videos[j].type + '</td>';
                outputstring += '</tr>';
            }
            outputstring += '</table>';
        }
        outputstring += '</div>';
    }

    return outputstring;
}