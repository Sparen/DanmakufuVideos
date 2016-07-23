# DanmakufuVideos
Hello, viewers, and welcome to the DanmakufuVideos repository!

This database holds links to the videos made by the danmakufu community. Looking for videos of a particular script? Want to see flashy danmaku or find Let's Plays? That's what this database is for.

This database is live at https://sparen.github.io/DanmakufuVideos/ 

Of course, the database is incomplete, and that's where you come in!

## Submitting a new scripter
To add a new scripter, there are a few key points:
* **Consent from the scripter in question is required to create or delete a user page.** This means that a scripter must personally make their page or contact Sparen to add them. Please note that this only refers to the _creation_ and _deletion_ of pages.
* There needs to be a link to their page in index.html. This ensures that it is possible to navigate to the user page.
* A new file must be created in /scripter. It is prefixed with a number and an underscore, and is followed by the name of the scripter in lowercase, with no spaces. For example: 1_sparenofiria.html. Please copy and paste the template, and update the title, meta description, keywords, and header with the scripter's name. If the scripter has a website/Youtube/etc, that should be linked. If they lack it, the div should be removed. Remember that Bootstrap requires the col-md-* to add up to 12 - adjust the columns appropriately. Additionally, in body's onload, update the json filepath so that the .html and .json have the same name (excluding the file extension). See 1_sparenofiria.html for more examples
* If the scripter has a Youtube channel, in addition to the Youtube link, it is also recommended that a subscribe button be added as well. See 1_sparenofiria.html for an example. If the channel has a long ID instead of a name, use data-channelid instead of data-channel
* Please log the new html file in the sitemap
* A new file needs to be created in /scripter - the json file. Naming conventions are stated above, but for clarity, if I have 1_sparenofiria.html, there should be a 1_sparenofiria.json corresponding to it.
* Please follow the steps for formatting the .json file below

## Adding to the json file
To add scripts, consent from the scripter is required, like above. **If a script was released for a public contest, it is assumed that consent has been provided.** However, there is no such restriction for adding a video to an existing script.

As for the JSON itself, see the template. The JSON object contains a field called scripts, which is an array of all of the scripts, which are all individual objects in the array. They have a name field, a download field (for the download url), a release date (if applicable), as well as a videos field.

The videos field is an array of objects, each with a youtube ID (when you see a link like https://www.youtube.com/watch?v=XNFWNmbuA_I, the part after the v= is the ID. In this case, XNFWNmbuA_I). Additionally, the uploader's name, the uploader's channel url, and the type of the video should be specified. If the uploader is the same person as the scripter, please use boldface. Ex: `"<b>Sparen</b>"` instead of just "Sparen".

* **Let's Play** refers to a run of the script with voiced commentary. 
* **Unvoiced Commentary** refers to a standard run of the script with text commentary. 
* **Standard** contains no commentary and simply showcases the script. 
* **No Sound** refers to a run without any sound.
* **No Sound Effects** refers to a run without sound effects.

And finally, the divid field is used for a unique ID that will be used to link to a certain part of the html file (in this case, link to the box for a given script). Contest names are preferred if available (see 1_sparenofiria.json).

## General Guidelines
* Make sure that your submission actually renders correctly and works.
* Make sure your json is valid and you haven't forgotten or left a random comma somewhere
* Outdated information should be removed whenever possible
* Scripts are in reverse order of release, with **newer projects at the top**. 

And yes, I will revise all of your pull requests...

...and speaking of pull requests, that's how you should submit things! If you want to submit new stuff, send a pull request! If you want additions to the system or the like, submit an issue!

I hope this database serves as a helpful tool!
