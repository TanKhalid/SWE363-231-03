
window.addEventListener('load', () => {
  const preload = document.querySelector('.preloader');
  setTimeout( function() {
      preload.classList.add('preloader-finish');
  }, 2000 );
});


let slideIndex = 1;
showSlides(slideIndex);




// JS 2 EXERCISE 1 IS WRITTEN AT THE END OF SWS363.HTML //


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";



}



// JS 2 EXERCISE 1 IS WRITTEN AT THE END OF SWS363.HTML //

