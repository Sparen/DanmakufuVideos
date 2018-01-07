"use strict";

var database_obj;

//Map of contest IDs (used in divid field) to website for contest
//All links are from http://sparen.github.io/projects/contestdatabase.html - Official Thread/equivalent link
var contestmap = {
    "range1" : "https://www.shrinemaiden.org/forum/index.php/topic,3276.0.html",
    "range2" : "https://www.shrinemaiden.org/forum/index.php/topic,3665.0.html",
    "range3" : "https://www.shrinemaiden.org/forum/index.php/topic,4630.0.html",
    "range4" : "https://www.shrinemaiden.org/forum/index.php/topic,5038.0.html",
    "range5" : "https://www.shrinemaiden.org/forum/index.php/topic,5322.0.html",
    "range6" : "https://www.shrinemaiden.org/forum/index.php/topic,6456.0.html",
    "range7" : "https://www.shrinemaiden.org/forum/index.php/topic,7359.0.html",
    "range8" : "https://www.shrinemaiden.org/forum/index.php/topic,8772.0.html",
    "range9" : "https://www.shrinemaiden.org/forum/index.php/topic,10426.0.html",
    "range10" : "https://www.shrinemaiden.org/forum/index.php/topic,15432.0.html",
    "range10.5" : "https://www.shrinemaiden.org/forum/index.php/topic,15734.0.html",
    "range11" : "https://www.shrinemaiden.org/forum/index.php/topic,16636.0.html",
    "range12" : "https://www.shrinemaiden.org/forum/index.php/topic,17453.0.html",
    "range13" : "https://www.shrinemaiden.org/forum/index.php/topic,17893.0.html",
    "range14" : "https://www.shrinemaiden.org/forum/index.php/topic,18639.0.html",
    "range15" : "https://www.shrinemaiden.org/forum/index.php/topic,18947.0.html",
    "range16" : "https://www.shrinemaiden.org/forum/index.php/topic,19158.0.html",
    "range17" : "https://www.shrinemaiden.org/forum/index.php/topic,20892.0.html",
    "range18" : "https://www.shrinemaiden.org/forum/index.php/topic,21068.0.html",
    "locaa1" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subLOCAA_1",
    "locaa2" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subLOCAA_2",
    "locaa3" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subLOCAA_3",
    "curse1" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subCURSE_1",
    "locaa4" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subLOCAA_4",
    "locaa5" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subLOCAA_5",
    "locaa6" : "",
    "locaa7" : "https://docs.google.com/document/d/1hW-v_sm33ctFA0vuErETm4xqg9Q6zk1FHsqyChw-yf0",
    "locaa8" : "https://docs.google.com/document/d/1gzafv0mX6FhoofjrUAeCi8a-TMeYF8YILCzMlpkYKLQ",
    "locaa9" : "https://docs.google.com/document/d/17Yrt9Pbm2UFlXzZ3qo5qxVXapjC5vVJrwi5f6VRKaiA",
    "lenen1" : "https://docs.google.com/document/d/1bgTU78UCv_P0n7512AZWb3hzDKS52gEErpXpw0wi18Y",
    "locaa10" : "https://docs.google.com/document/d/1gUb_us2bECLwnypxyKXNyQFqiQLga5N47nRbJAC9nOQ",
    "artifact1" : "https://www.shrinemaiden.org/forum/index.php/topic,16046.0.html",
    "artifact2" : "http://sparen.github.io/projects/contest/contestlocalbackup.html#subARTIFACT_2",
    "artifact3" : "http://pastebin.com/meD0BQdZd"
};

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
        outputstring += '<p><a target="_blank" href="' + scripts[i].download + '" class="btn btn-primary btn-sm" role="button">Download Link</a>&nbsp;';
        outputstring += '<a href="#' + scripts[i].divid + '" class="btn btn-info btn-sm" role="button">Link to this Entry</a>&nbsp;';
        //If contest is in list of contests, also link to contest:
        if (contestmap.hasOwnProperty(scripts[i].divid)) {
            outputstring += '<a href="' + contestmap[scripts[i].divid] + '" class="btn btn-success btn-sm" role="button">Contest Information</a>&nbsp;';
        }
        outputstring += '</p>';
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