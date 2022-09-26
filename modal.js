
// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myPhoto");
// var modalImg = document.getElementById("Ph001");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
  }

var captionText = document.getElementById("caption");
function onClick(element) {
    document.getElementById("photo").src = element.src;
    document.getElementById("myModal").style.display = "block";
    captionText.innerHTML = element.alt;
  }