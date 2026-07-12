// ===============================
// THE SHUBHAM STORIES
// script.js
// ===============================

// Navbar shadow on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.style.background = "#000";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    } else {
        nav.style.background = "rgba(0,0,0,.85)";
        nav.style.boxShadow = "none";
    }
});

// Scroll animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";
    observer.observe(section);
});

// Typing Effect
const heading = document.querySelector(".hero-left h1");

const text = "THE SHUBHAM STORIES";

let i = 0;

heading.innerHTML = "";

function typing(){

    if(i < text.length){

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);

    }

}

typing();

// Footer Year
const footer = document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} THE SHUBHAM STORIES<br>Designed by SHUBHAM YADAV`;

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#d4af37";
topBtn.style.color = "#000";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "22px";
topBtn.style.fontWeight = "bold";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Welcome Message
window.addEventListener("load",()=>{

    console.log("Welcome to THE SHUBHAM STORIES");

});
// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},1500);

});

// Counter Animation

const numbers=document.querySelectorAll(".counter");

numbers.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const inc=target/100;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});
