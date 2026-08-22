/* ==========================================
   FEDERAL REPUBLIC OF HUGUMA
   OFFICIAL SCRIPT.JS
========================================== */

// ===== Mobile Navigation =====

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Tutup menu selepas pilih link (mobile)
    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// ===== Footer Year =====

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ===== Fade-in Animation =====

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".section, .info-card, .government-card, .department, .vision-card, .symbol-card, .flag-card"
).forEach(item => {
    item.classList.add("hidden");
    observer.observe(item);
});

// ===== Active Navbar Link =====

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#navMenu a").forEach(link => {
    const page = link.getAttribute("href");

    if (page === currentPage || (currentPage === "" && page === "index.html")) {
        link.classList.add("active-link");
    }
});

// ===== Scroll to Top Button (optional) =====

const scrollButton = document.createElement("button");
scrollButton.innerHTML = "⬆";
scrollButton.id = "scrollTopBtn";
document.body.appendChild(scrollButton);

scrollButton.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:45px;
height:45px;
border:none;
border-radius:50%;
background:linear-gradient(135deg,#0066cc,#00c9b7);
color:white;
font-size:20px;
cursor:pointer;
display:none;
box-shadow:0 6px 20px rgba(0,0,0,.25);
z-index:9999;
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
