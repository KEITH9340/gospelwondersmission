/* =====================================================
   GOSPEL WONDERS MISSION
   MOBILE NAVIGATION SCRIPT
===================================================== */


// Select elements

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".navbar a");

const header = document.querySelector(".header");





// MOBILE MENU OPEN / CLOSE

if(menuToggle){

menuToggle.addEventListener("click",()=>{


navbar.classList.toggle("active");



// Change icon

if(navbar.classList.contains("active")){

menuToggle.innerHTML="✕";

}

else{

menuToggle.innerHTML="☰";

}


});


}





// CLOSE MENU AFTER CLICKING A LINK

navLinks.forEach(link=>{


link.addEventListener("click",()=>{


navbar.classList.remove("active");


if(menuToggle){

menuToggle.innerHTML="☰";

}


});


});







// CHANGE HEADER WHEN SCROLLING


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.classList.add("scrolled");


}


else{


header.classList.remove("scrolled");


}



});







// SMOOTH SCROLL FOR INTERNAL LINKS


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target=document.querySelector(
this.getAttribute("href")
);


if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});








// GALLERY IMAGE POPUP EFFECT


const galleryImages=document.querySelectorAll(".gallery-card img");


galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


image.classList.toggle("zoom");


});


});








// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE


document.addEventListener("click",(event)=>{


if(

navbar &&

menuToggle &&

!navbar.contains(event.target) &&

!menuToggle.contains(event.target)

){


navbar.classList.remove("active");


menuToggle.innerHTML="☰";


}


});








// MOBILE SCREEN OPTIMIZATION


function mobileCheck(){


if(window.innerWidth <= 768){


document.body.classList.add("mobile");


}


else{


document.body.classList.remove("mobile");


}


}



window.addEventListener(
"resize",
mobileCheck
);


mobileCheck();
/* =====================================================
          DARK MODE FUNCTION
===================================================== */


const themeToggle = document.getElementById(
"themeToggle"
);



const body = document.body;



// Load saved theme


if(localStorage.getItem("theme") === "dark"){


body.classList.add("dark");


themeToggle.innerHTML="☀️";


}




if(themeToggle){


themeToggle.addEventListener("click",()=>{


body.classList.toggle("dark");



if(body.classList.contains("dark")){


localStorage.setItem(
"theme",
"dark"
);



themeToggle.innerHTML="☀️";


}

else{


localStorage.setItem(
"theme",
"light"
);



themeToggle.innerHTML="🌙";


}



});


}
