// *****************************************************
// *****************  STICKY NAV BAR  ******************
// *****************************************************

const nav = document.querySelector('#navdesktop')
let topOfNav = nav.offsetTop;

const fixNav = () => {
  if(window.scrollY > topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav')
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', fixNav);


// *****************************************************
// *************   BACK TO THE TOP BUTTON    ***********
// *****************************************************

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// *****************************************************
// ****************  SOCIAL SOCIALBOX  *****************
// *****************************************************

const socialBox = document.getElementById('socialBox');
const closeSocial = document.getElementById('closeSocial');

closeSocial.addEventListener('click', () => {
    socialContact.style.display = 'none';
})


setTimeout(() => {
    socialBox.style.display = 'block';
}, 3000);

setInterval(() => {
    socialBox.style.display = 'block';
}, 16000);

