# Danmakufu Video Database for the Western Touhou Community
Hello, viewers, and welcome to the DanmakufuVideos repository!

This database holds links to the videos made by the Western Touhou Community's danmakufu scripters. Looking for videos of a particular script? Want to see flashy danmaku or find Let's Plays? That's what this database is for.

This database is live at https://sparen.github.io/DanmakufuVideos/ 

Of course, the database is incomplete, and that's where you come in!

## Scripter Pages - Creation
* From index.html, there is a link to each scripter page in alphabetical order of preferred nickname/handle.  
* Each scripter has a file/page in /scripter, prefixed with a number and an underscore, followed by the name of the scripter in lowercase with no spaces. For example: 1_sparenofiria.html. These are adjusted from the template - changes are made to the title, meta description, keywords, and header, so that the scripter's name is correct.  
* In their pages, a scripter's website/Youtube/etc. are linked - those with no other sites of interest lack the div containing the links. The div itself supports factors of 12 numbers of links - 1, 2, 3, 4, and 6, essentially (due to Bootstrap).  
* In their pages, the body's onload() calls the json file with the same name as the scripter's page. See 1_sparenofiria.html for more examples.  
* If the scripter has a Youtube channel, in addition to the Youtube link, it is also recommended that a subscribe button be added as well. See 1_sparenofiria.html for an example. If the channel has a long ID instead of a name, use data-channelid instead of data-channel.  
* New scripter pages (html only) must be logged in the sitemap.  
* Another file needs to be created in /scripter - the json file. Naming conventions are stated above, but for clarity, if I have 1_sparenofiria.html, there should be a 1_sparenofiria.json corresponding to it.  

## Adding to the json file/Updating a scripter's scripts and videos
For the JSON itself, see the template. The JSON object contains a field called scripts, which is an array of all of the scripts, which are all individual objects in the array. They have a name field, a download field (for the download url), a release date (if applicable), as well as a videos field. Date is <tt>Month Day, Year</tt> - ex: September 04, 2017.

The videos field is an array of objects, each with a youtube ID (when you see a link like https://www.youtube.com/watch?v=XNFWNmbuA_I, the part after the v= is the ID. In this case, XNFWNmbuA_I). Additionally, the uploader's name, the uploader's channel url, and the type of the video should be specified. If the uploader is the same person as the scripter, please use boldface. Ex: `"<b>Sparen</b>"` instead of just "Sparen".

* **Let's Play** refers to a run of the script with voiced commentary.  
* **Unvoiced Commentary** refers to a standard run of the script with text commentary.  
* **Standard** contains no commentary and simply showcases the script.  
* **No Sound** refers to a run without any sound.  
* **No Sound Effects** refers to a run without sound effects.  

Order is the scripter first if they have uploaded videos of their own script, and then other videos in alphabetical order by video uploader's name (see the scripter/yt_name.txt document).

The divid field is used for a unique ID that will be used to link to a certain part of the html file (in this case, link to the box for a given script). Contest names are preferred if available (see 1_sparenofiria.json). This can be used to link to a certain entry from an external site (whether or not it works is a different story).  

In regards to the uploader's name and channel url, refer to scripter/yt_name.txt for copy-pastable data.

## General Notes
* Scripts are in reverse order of release, with **newer projects at the top**. 
* Compilation and Collaboration videos are not to be included UNLESS the collab is part of a team with multiple videos - these will be reviewed on a case-by-case basis.

All pull requests will be revised.

Speaking of pull requests, that's how you should submit new things (unless you are going through me)! If you want to submit new stuff, send a pull request! If you want additions to the system or the like, submit an issue!

I hope this database serves as a helpful tool!
