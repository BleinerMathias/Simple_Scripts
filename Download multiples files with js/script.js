// find by div elements containing the class "blcsDown" and get all elements <a>
var divsDown = document.getElementsByClassName("blcsDown");
var tagsA = divsDown[0].getElementsByTagName("a");
 
 function donwloadNextItem(i) {
    var item = TagsA[i];

    if (i >= tagsA.length) {
      console.log("Foram realizados o download de " +i+ " arquivos!"); 
      return;
    }
    
    // check if innerText of element A contains "DOWNLOAD FILE" - button text on html page
    if(item.innerText == "BAIXAR ARQUIVO"){
	item.click();
    }
    
    // call the function in a 200ms interval
    setTimeout(function() {
      donwloadNextItem(i + 1);
    }, 200);
  }

  // Start.
  donwloadNextItem(0);