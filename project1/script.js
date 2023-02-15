
//multiple slideshows
let slideIndex =[1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

//for the dots to know which is the current slide
function currentSlide(n,no) {
    showSlides(slideIndex = n,no);
  }


  //displaay each slide depending on which slideshow we are clikcing on
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
    // dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex[no]-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}