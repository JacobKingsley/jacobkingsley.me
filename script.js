//code largely adapted from the script file for jordansanz.me since
//I had not learned js but wanted this functionality
//adapted to fit this website

function scrollOffClickSamples(){
  document.querySelector('.bio-container').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickPictures(){
  document.querySelector('.skills-container').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickReviews(){
  document.querySelector('.portfolio-container').scrollIntoView({ 
    behavior: 'smooth' 
  }) 
}
function scrollOffClickContactMe(){
    document.querySelector('.contact-container').scrollIntoView({ 
      behavior: 'smooth' 
    }) 
  }