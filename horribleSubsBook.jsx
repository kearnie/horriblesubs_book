#includepath "~/Documents/;%USERPROFILE%Documents";
#includepath "d:\\Documents";
#include "basiljs/bundle/basil.js";

// Load a data file containing your book's content. This is expected
// to be located in the "data" folder adjacent to your .indd and .jsx. 
// In this example (an alphabet book), our data file looks like:
// [
//    {
//      "title": "A",
//      "image": "a.jpg",
//      "caption": "Ant"
//    }
// ]
var jsonString = b.loadString("finalsubs.json");
var jsonData;


//--------------------------------------------------------
function setup() {
  var pageFlip = 0;
  // Clear the document at the very start. 
  b.clear (b.doc());

  // Make a title page. 
  b.fill(0,0,0);
  b.textSize(24);
  b.textFont("Calibri"); 
  b.textAlign(Justification.LEFT_ALIGN); 
  b.text("A Basil.js Alphabet Book", 72,72,360,36);
  b.text("Golan Levin, Fall 2016", 72,108,360,36);

  
  // Parse the JSON file into the jsonData array
  jsonData = b.JSON.decode( jsonString );
  b.println("Number of elements in JSON: " + jsonData.length);


  // Initialize some variables for element placement positions.
  // Remember that the units are "points", 72 points = 1 inch.
  var titleX = 72; 
  var titleY = 72;
  var titleW = 72;
  var titleH = 72;

  var captionX = 38; 
  var captionY = b.height - 115;
  var captionW = 500;
  var captionH = 36;

  var imageX = 38; 
  var imageY = 72; 
  var imageW = 500; 
  var imageH = 288; 


  // Loop over every element of the book content array
  // (Here assumed to be separate pages)
  for (var i = 0; i < jsonData.length; i++) {

    // Create the next page. 
    b.addPage();
    b.println(pageFlip);
    if (pageFlip == 0) {
        b.println("*******");
        // Load an image from the "images" folder inside the data folder;
        // Display the image in a large frame, resize it as necessary. 
        b.noStroke();  // no border around image, please.
        var anImageFilename = "images/" + b.floor(b.random(0,40)) + ".png"
        var anImage = b.image(anImageFilename, imageX, imageY, imageW, imageH);
        anImage.fit(FitOptions.PROPORTIONALLY);
        pageFlip = 1;
        b.println("*")
    }
    
    if (pageFlip == 1) {
    // Create textframes for the "title" field.
    // Draw an ellipse with a random color behind the title letter.
    /*b.noStroke(); 
    b.fill(b.random(180,220),b.random(180,220),b.random(180,220)); 
    b.ellipseMode(b.CORNER);
    b.ellipse (titleX,titleY,titleW,titleH);

    b.fill(255);
    b.textSize(56);
    b.textFont("Calibri"); 
    b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN );
    b.text(jsonData[i].title, titleX,titleY,titleW,titleH);*/

    // Create textframes for the "caption" fields
    b.stroke(0);
    b.fill(255);
    b.textSize(20);
    b.textFont("Calibri"); 
    b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.TOP_ALIGN );
    b.text(jsonData[i].caption, captionX,captionY,captionW,captionH);
    
    pageFlip = 0;
    
    }
  };
}

// This makes it all happen:
b.go(); 