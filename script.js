button = document.getElementById("go-up");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 


function scrollOffClickSamples(){
  document.querySelector('.experience-background').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickPictures(){
  document.querySelector('.portfolio-subtitle').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickReviews(){
  document.querySelector('#contact').scrollIntoView({ 
    behavior: 'smooth' 
  }) 
}
function scrollOffClickContactMe(){
    document.querySelector('#contact').scrollIntoView({ 
      behavior: 'smooth' 
    }) 
  }