// sticky nav
$(window).on('scroll',function(){
    if($(window).scrollTop()) {
        $('nav').addClass('black');
}
             else{
             $('nav').removeClass('black')
             }
});

// resize the page
$("#toggle").click(function(){
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

// slideshow //

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "block";  
  
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}