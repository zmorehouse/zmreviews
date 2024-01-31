
// First we use addEventListener('DomContentLoaded) to ensure the elements are in the DOM before running the js.
document.addEventListener('DOMContentLoaded', function() {

// Here, I am assigning different JS Variables based on the relevant CSS classes for use later on.
var filmShot = document.querySelectorAll('.filmshot');
var expanded = document.querySelector('.expanded');
var expandedImg = document.querySelector('.expanded-img');
var expandedCaption = document.querySelector('.expanded-caption');
var expandedTitle = document.querySelector('.expanded-title');
var prev = document.querySelector('.previousarrow');
var next = document.querySelector('.nextarrow');
var close = document.querySelector('.close');

// Here, we give currentIndex the value of 0. This will be used to work out which image is being displayed. 
let currentIndex = 0;

// Display the expanded view when an image is clicked
// Using .forEach, we can iterate over each element with the filmshot class 
filmShot.forEach((item, index) => {
    // Using the click event listener, we can run two things
  item.addEventListener('click', () => {
    // Firstly, we set the currentIndex to the index number, this allows the program to keep track of which shot is currently being displayed
    currentIndex = index;
    // We also place the image in 'Expanded View' using the below function. This will be outlined further down the track
    showExpandedView();
  });
});

// Show the previous image in the expanded view when the left icon is clicked
// Again, using the click event listener, we can reduce the currentIndex - making the gallery show the previous image
prev.addEventListener('click', () => {
  currentIndex--;
  // We must add an if statement to ensure the currentIndex does not reach 0. This will 'loop' the gallery, by re-setting the current index to the final image.
  if (currentIndex < 0) {
    currentIndex = filmShot.length - 1;
  }
  showExpandedView();
});

// Show the next image in the expanded view when the right icon is clicked
// This works exactly the same as the above, but by increasing the currentIndex rather than decreasing
next.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= filmShot.length) {
    currentIndex = 0;
  }
  showExpandedView();
});

// Close the expanded view when the close icon is clicked
close.addEventListener('click', () => {
  hideExpandedView();
});

// Our function to show the Expanded View
function showExpandedView() {
// First, we retrieve the relevant image by using our 'currentIndex' value that has been set previously
  var currentItem = filmShot[currentIndex];
// Then, we retrieve the image data (src url and alt text)
  var imgSrc = currentItem.querySelector('img').getAttribute('src');
  var altText = currentItem.querySelector('img').getAttribute('alt');
// We then pass these attributes to the expanded Image 
  expandedImg.setAttribute('src', imgSrc);
  expandedImg.setAttribute('alt', altText);

// Similarly, we also get the content of the 'movietitle' and 'caption' paragraphs
  var movieTitle = currentItem.querySelector('.movietitle').textContent;
  var captionText = currentItem.querySelector('.caption').textContent;
// Again passing these to the expanded Captions and Titles
  expandedCaption.textContent = captionText;
  expandedTitle.textContent = movieTitle;
// Finally, we enable the expanded view by making it all 'display:block;' rather than 'display:none;'
  expanded.style.display = 'block';
}

// Our function to hide the Expanded View
function hideExpandedView() {
// 'display:none;' all expanded items again
  expanded.style.display = 'none';
}
});