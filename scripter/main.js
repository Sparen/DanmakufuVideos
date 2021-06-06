"use strict";

var database_obj;

//Map of contest IDs (used in divid field) to website for contest
//All links are from http://sparen.github.io/projects/contestdatabase.html - Official Thread/equivalent link
var contestmap = {
    "range1" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_1", "Danmakufu Contest 1 - Halloween"],
    "range2" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_2", "Danmakufu Contest 2 - Dead Simple"],
    "range3" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_3", "Danmakufu Contest 3 - Survival Card"],
    "range4" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_4", "Danmakufu Contest 4 - Laser Light Show"],
    "range5" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_5", "Danmakufu Contest 5 - Who are these people?"],
    "range6" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_6", "Danmakufu Contest 6 - Blinded by the Light!"],
    "range7" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_7", "Danmakufu Contest 7 - All Hallow's Even 2!"],
    "range8" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_8", "Danmakufu Contest 8 - This Ain't Space Invaders!"],
    "range9" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE1_9", "Danmakufu Contest 9 - Perfect Memento in Self-insert Sense"],
    "range10" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_10", "RaNGE 10 - Youkai Exterminator Extermination!"],
    "range10.5" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_10_1", "Halloween Contest! (2013)"],
    "range11" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_11", "RaNGE 11 - Apprehensive Adherent Abasement!"],
    "range12" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_12", "RaNGE 12 - Incident Causer Mayhem!"],
    "range13" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_13", "RaNGE 13 - Contradictory Catastrophe!"],
    "range14" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_14", "RaNGE 14 - Popular Popularity!"],
    "range15" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_15", "RaNGE 15 - Trick or Shoot!"],
    "range16" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_16", "RaNGE 16 - Unexpected Master Mind"],
    "range17" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_17", "RaNGE 17 - Laser Light Show Redux!"],
    "range18" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_18", "RaNGE 18 - Extra Love"],
    "range19" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_19", "RaNGE 19 - Stolen Artifact: Reisen"],
    "range20" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_20", "RaNGE 20 - New Stars of Four Seasons"],
    "range21" : ["https://sparen.github.io/projects/contestdatabase.html#subRANGE2_21", "RaNGE 21 - Beast-expelling Geometric Creatures"],
    "locaa1" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_1", "Borderlands Contest 1"],
    "locaa2" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_2", "Borderlands Contest 2"],
    "locaa3" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_3", "LOCAA 3"],
    "curse1" : ["https://sparen.github.io/projects/contestdatabase.html#subCURSE_1", "CURSE01 - Overused All-Stars"],
    "locaa4" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_4", "LOCAA 4 - Unlikely Pairs"],
    "locaa5" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_5", "LOCAA 5 - Fury of the Rivals"],
    "locaa6" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_6", "LOCAA 6 - Troll Scripts"],
    "locaa7" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_7", "LOCAA 7 - Outsider Occupation!"],
    "locaa8" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_8", "LOCAA 8 - Pure Gensokyo!"],
    "locaa9" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_9", "LOCAA 9 - Miracle Mallet Contest"],
    "lenen1" : ["https://sparen.github.io/projects/contestdatabase.html#subLENEN_1", "Len'en Contest 01: Kill Two Birds With One Stone"],
    "locaa10" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_10", "LOCAA 10 - Insider Obfuscation!"],
    "locaa11" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_11", "LOCAA 11 - Perfect Possession Incident"],
    "locaa12" : ["https://sparen.github.io/projects/contestdatabase.html#subLOCAA_12", "LOCAA 12 - Make the Old New"],
    "artifact1" : ["https://sparen.github.io/projects/contestdatabase.html#subARTIFACT_1", "Artifact Contest 1: The Pagoda of Bishamonten"],
    "artifact2" : ["https://sparen.github.io/projects/contestdatabase.html#subARTIFACT_2", "Artifact Contest 2: Augmented Magic"],
    "artifact3" : ["https://sparen.github.io/projects/contestdatabase.html#subARTIFACT_3", "Artifact Contest 3: Time is of the Essence!"],
    "uwom1" : ["https://sparen.github.io/projects/contestdatabase.html#subUWOM_1", "Len’en Contest #1 - Monochromatic Madness"],
    "bha1" : ["https://sparen.github.io/projects/contestdatabase.html#subBHE_1", "BULLET HELL ARTISTRY Contest #1: Elemental Carnival!"],
    "bha2" : ["https://sparen.github.io/projects/contestdatabase.html#subBHE_2", "BULLET HELL ARTISTRY Contest #2: Unlikely Allies"],
    "bha3" : ["https://sparen.github.io/projects/contestdatabase.html#subBHE_3", "BULLET HELL ARTISTRY Contest #3: Unexpected Mastermind 2"]
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
            
                    //If the user wanted to access a specific entry, scroll them down.
                    //Note the timeout - we need the Bootstrap animations to play first.
                    //Collapse.js (Bootstrap) hardcodes 350ms for their animation.
                    setTimeout(function () {
                        var destid = location.hash.substring(1);
                        if (destid != null && destid != undefined && destid != "") {
                            document.getElementById(destid).scrollIntoView();
                        }
                    }, 400);
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
    tableofcontents += '<h2>Script Listing</h2>';
    tableofcontents += "<p>Quickly jump to the script you'd like to see videos for~</p>";
    tableofcontents += '<a class="btn btn-primary btn-sm" role="button" data-toggle="collapse" href="#toccontents" aria-expanded="false" aria-controls="toccontents">Toggle Script Listing</a>';
    tableofcontents += '<div class="collapse in" id="toccontents"><br><ul>';

    var i; //used to iterate through scripts
    for (i = 0; i < scripts.length; i++) {
        tableofcontents += '<li><a href="#' + scripts[i].divid + '">' + scripts[i].name + '</a></li>';
        outputstring += '<div class="scriptdiv" id="' + scripts[i].divid + '">';
        outputstring += '<h1><a href="#' + scripts[i].divid + '"style="text-decoration: none"> ' + scripts[i].name + '</a></h1>';
        outputstring += '<p><a target="_blank" href="' + scripts[i].download + '" class="btn btn-primary btn-sm" role="button">Download Link</a>&nbsp;';
        //'Link to this Entry' currently disabled since the local # link doesn't work due to the dynamic nature of the page. Can still be used, but no need to confuse visitors.
        //outputstring += '<a href="#' + scripts[i].divid + '" class="btn btn-info btn-sm" role="button">Link to this Entry</a>&nbsp;'; 
        //If contest is in list of contests, also link to contest:
        if (contestmap.hasOwnProperty(scripts[i].divid)) {
            outputstring += '<a href="' + contestmap[scripts[i].divid][0] + '" class="btn btn-success btn-sm" role="button">Contest Information</a>&nbsp;';
        }
        outputstring += '</p>';
        outputstring += '<p>Release Date: ' + scripts[i].releasedate + '</p>';
        //If contest is in list of contests, also note contest name:
        if (contestmap.hasOwnProperty(scripts[i].divid)) {
            outputstring += '<p>This script was submitted as an entry for the following contest: ' + contestmap[scripts[i].divid][1] + '</p>';
        }
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

    tableofcontents += '</div></ul></div>';

    return tableofcontents + outputstring;
}