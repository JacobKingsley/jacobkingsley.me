//code largely adapted from the script file for jordansanz.me since
//I had not learned js but wanted this functionality
//adapted to fit this website

function scrollOffClickBio(){
  document.querySelector('.bio-container').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickSkills(){
  document.querySelector('.skills-container').scrollIntoView({ 
    behavior: 'smooth' 
  }) 
}
function scrollOffClickPortfolio(){
  document.querySelector('.portfolio-container').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickContactMe(){
    document.querySelector('.contact-container').scrollIntoView({ 
      behavior: 'smooth' 
    }) 
  }