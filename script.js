/* =========================
   FEDERAL REPUBLIC OF HUGUMA
   SCRIPT.JS
========================= */

// Mobile Navigation

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if(menuButton){
    menuButton.addEventListener("click", ()=>{
        navMenu.classList.toggle("active");
    });
}

// Close menu after clicking link

document.querySelectorAll("#navMenu a").forEach(link=>{
    link.addEventListener("click", ()=>{
        navMenu.classList.remove("active");
    });
});

// Footer Year

const footerYear = document.getElementById("year");

if(footerYear){
    footerYear.textContent = new Date().getFullYear();
}

// Smooth fade-in animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".section,.government-card,.department,.vision-card,.info-card,.symbol-card")
.forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});
