/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navItems = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Begin Main Functions
*/

// build the nav
function buildNav(){
    sections.forEach((section)=> {
        const listItem = document.createElement("li");
        listItem.innerHTML =`<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navItems.appendChild(listItem);
    })
}

// Add class 'active' to section when near top of viewport
function activeSection(){
    window.onscroll = function (){
        sections.forEach((section) =>{
            const size = section.getBoundingClientRect();
            if (size.top >= -150 && size.top <=150){
                section.classList.add("your-active-class");
            }
            else{
                section.classList.remove("your-active-class");
            }
        })
    }
}

// Scroll to anchor ID using scrollTO event
function scroll(ev){
    ev.preventDefault();
    const sectionId = ev.target.dataset.nav
    if (sectionId){
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
    }
}

/**
 * End Main Functions
*/

buildNav();

activeSection()

navItems.addEventListener("click", function(ev){
    scroll(ev)   
})

