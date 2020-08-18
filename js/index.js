const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//navbar
const navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

//--------- Hero Header ---------

//cta-h1
const ctah1 = document.querySelector('h1');
ctah1.textContent = siteContent['cta']['h1'];

//cta-button
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//cirlce Image
const largeImg = document.getElementById('cta-img');
largeImg.setAttribute('src', siteContent['cta']['img-src']);

//-----------------------------------

//------- Main Content --------------

//Content Headings
const headings = document.querySelectorAll('.text-content > h4');
headings[0].textContent = siteContent['main-content']['features-h4'];
headings[1].textContent = siteContent['main-content']['about-h4'];
headings[2].textContent = siteContent['main-content']['services-h4'];
headings[3].textContent = siteContent['main-content']['product-h4'];
headings[4].textContent = siteContent['main-content']['vision-h4'];

//Content Content
const content = document.querySelectorAll('.text-content > p');
content[0].textContent = siteContent['main-content']['features-content'];
content[1].textContent = siteContent['main-content']['about-content'];
content[2].textContent = siteContent['main-content']['services-content'];
content[3].textContent = siteContent['main-content']['product-content'];
content[4].textContent = siteContent['main-content']['vision-content'];

//Middle Img
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Contact Header
const contactHead = document.querySelector('.contact > h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

//Contact Content
const contactContent = document.querySelectorAll('.contact > p');
contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

//-----------------------------------

//Footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

//Task 3 - New Nav Items

const home = document.createElement('a');
const careers = document.createElement('a');

home.textContent = 'Home';
home.href = 'index.html';
careers.textContent = 'Careers';
careers.href = '#';

let newNavItem = document.querySelector('header > nav');
newNavItem.prepend(careers);
newNavItem.prepend(home);

//Nav Color

const navColor = document.querySelectorAll('header > nav > a');
navColor.forEach(navBar => {
  navBar.style.color = 'green';
});

//STRETCH Colors

function changeFunction(){
  const navColor = document.querySelectorAll('nav > a');
navColor.forEach(navBar => {
  navBar.style.color = 'white';
});

const navLogo = document.querySelectorAll('header > img');
navLogo.forEach(logo => {
  logo.style.filter = 'invert(1)';
});

const h1Color = document.querySelectorAll('.cta-text > h1');
h1Color.forEach(color => {
  color.style.color = 'white';
});

// const ctaLogo = document.querySelectorAll('.cta > img');
// ctaLogo.forEach(logo => {
//   logo.style.filter = 'invert(1)';
// });

const textColor = document.querySelectorAll('.text-content');
textColor.forEach(Color => {
  Color.style.color = 'white';
});

// const middleLogo = document.querySelectorAll('.main-content > img');
// middleLogo.forEach(logo => {
//   logo.style.filter = 'invert(1)';
// });

const contactColor = document.querySelectorAll('.contact');
contactColor.forEach(Color => {
  Color.style.color = 'white';
});

const footerColor = document.querySelectorAll('footer');
footerColor.forEach(Color => {
  Color.style.color = 'white';
});

const backgroundColor = document.querySelectorAll('body');
backgroundColor.forEach(bckClr => {
  bckClr.style.background = 'black';
})
}