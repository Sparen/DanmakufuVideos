var database_obj;

function setup(filepath) {
    var client = new XMLHttpRequest();
    client.open("GET", filepath, true);
    client.onreadystatechange = function () { //callback
        if (client.readyState == 4) {
            if (client.status == 200 || client.status == 0) {
                database_obj = JSON.parse(client.responseText);
                document.getElementById("maindiv").innerHTML = parse();
                document.getElementById("footer").innerHTML = '<p><a href="./../index.html">Return to Scripter Select</a></p>' +
                    '<p><a href="http://sparen.github.io">sparen.github.io</a></p>' + 
                    '<p>This page was generated from a local database that may not be up to date. Want to add to the database? See the repository on Github, linked below.</p>' +
                    '<p><a target="_blank" href="https://github.com/Sparen/DanmakufuVideos">Github repository</a></p>';
            }
        }
    };

    client.send();
}

function parse() {
    var tableofcontents = ""; //Table of contents
    var outputstring = ""; //concatenate the entire HTML block here
    var scripts = database_obj.scripts;

    //Add initial table of contents structure
    tableofcontents += '<div class="scriptdiv" id="toc">';
    tableofcontents += '<h2>Table of Contents</h2>';
    tableofcontents += '<ul>';

    var i; //used to iterate through scripts
    for (i = 0; i < scripts.length; i++) {
        tableofcontents += '<li><a href="#' + scripts[i].divid + '">' + scripts[i].name + '</a></li>';
        outputstring += '<div class="scriptdiv" id="' + scripts[i].divid + '">';
        outputstring += '<h1>' + scripts[i].name + '</h1>';
        outputstring += '<p><a target="_blank" href="' + scripts[i].download + '" class="btn btn-primary" role="button">Download Link</a>&nbsp;';
        outputstring += '<a href="#' + scripts[i].divid + '" class="btn btn-info" role="button">Link to this Entry</a></p>'
        outputstring += '<p>Release Date: ' + scripts[i].releasedate + '</p>';
        var numvideos = scripts[i].videos.length;
        if (numvideos == 0) {
            outputstring += '<p>There are no videos available for this script. If there are videos and you would like to contribute them, please consider sending in a pull request.</p>';
        } else {
            outputstring += '<table class="table table-condensed table-bordered">';
            outputstring += '<tr><th>Uploader</th><th>Link</th><th>Video Type</th><th>Notes</th></tr>';
            var j; //used to iterate through videos
            for (j = 0; j < numvideos; j++) {
                outputstring += '<tr>';
                outputstring += '<td><a target="_blank" href="' + scripts[i].videos[j].channelurl + '">' + scripts[i].videos[j].uploader + '</a></td>';
                outputstring += '<td><a target="_blank" href="https://www.youtube.com/watch?v=' + scripts[i].videos[j].youtubeid + '">Video</a><br><img src="http://img.youtube.com/vi/' + scripts[i].videos[j].youtubeid + '/2.jpg"></td>';
                outputstring += '<td>' + scripts[i].videos[j].type + '</td>';
                outputstring += '<td>' + scripts[i].videos[j].notes + '</td>';
                outputstring += '</tr>';
            }
            outputstring += '</table>';
        }
        outputstring += '</div>';
    }

    tableofcontents += '</ul></div>';

    return tableofcontents + outputstring;
}