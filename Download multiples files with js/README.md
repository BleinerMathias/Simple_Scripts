# Download multiples files with js in html

This script was written after asking me to download several one-page pdf that contained music scores!


<h3> 1º Problem: </h3>
The site that contained the documents, doesn't have an api, so I could make requests.

<h3> Resolve </h3>
Therefore, I filtered the elements by the "A" tag, inside a DIV that had the "blcsDown" class.
With the list of "A" tag elements, I asked to click on the one that had the text "BAIXAR ARQUIVO".


<h3> 2º Problem: </h3>
While scripting, I had problems downloading multiple files. For this, I used setTimout to delay time between downloads

:white_check_mark: Test:
For this site, I managed to download a download every 100ms.

<h3> Run </h3>
Run the script by pasting and running it in the browser's own development console

<h3> Modify </h3>
You can adapt by locating the tags with the download links

<h3> P.s </h3>
The site may have a download limiter that will make it impossible to download multiple files over a period of time.