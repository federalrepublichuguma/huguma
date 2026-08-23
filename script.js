/* =====================================================
   HUGUMA GOVERNMENT WEBSITE
   MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const isOpen =
                navMenu.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a link */

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =================================================
       ACTIVE NAVIGATION LINK
    ================================================= */

    const currentPage =
        window.location.pathname.split("/").pop()
        || "index.html";

    const allNavLinks =
        document.querySelectorAll("#navMenu a");

    allNavLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage &&
            !linkPage.startsWith("#") &&
            linkPage === currentPage
        ) {

            link.classList.add("active");

        }

    });


    /* =================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ================================================= */

    document.addEventListener("click", function (event) {

        if (!navMenu || !menuButton) {
            return;
        }

        const clickedInsideNavbar =
            event.target.closest(".navbar");

        if (!clickedInsideNavbar) {

            navMenu.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* =================================================
       LUCIDE ICONS
    ================================================= */

    if (typeof lucide !== "undefined") {

        lucide.createIcons();

    }


    /* =================================================
       SEARCH SYSTEM
    ================================================= */

    const searchButton =
        document.getElementById("searchButton");

    const searchPanel =
        document.getElementById("searchPanel");

    const closeSearch =
        document.getElementById("closeSearch");

    const searchInput =
        document.getElementById("searchInput");

    const searchResults =
        document.getElementById("searchResults");


    /*
       Huguma website pages available
       to the search engine.
    */

    const hugumaPages = [

        {
            title: "About Huguma",
            description:
                "Learn about the Federal Republic of Huguma, its history, identity and national characteristics.",
            keywords:
                "about huguma republic history capital flag national identity",
            url:
                "./about.html"
        },

        {
            title: "Government of Huguma",
            description:
                "Learn about the Federal Government and the leadership of Huguma.",
            keywords:
                "government president vice president prime minister ministries federal",
            url:
                "./government.html"
        },

        {
            title: "Jemaah EXCO",
            description:
                "Information about the Executive Council of the Federal Republic of Huguma.",
            keywords:
                "exco executive council ministers government departments",
            url:
                "./exco.html"
        },

        {
            title: "HUGUMA NAHDAH 2034",
            description:
                "Huguma's long-term national development vision towards 2034.",
            keywords:
                "nahdah 2034 development sustainability innovation economy citizens government",
            url:
                "./vision2034.html"
        },

        {
            title: "Diplomacy",
            description:
                "Huguma's international relations, diplomatic partnerships and friendship.",
            keywords:
                "diplomacy foreign affairs international relations treaties friendship countries",
            url:
                "./diplomacy.html"
        },

        {
            title: "Citizenship",
            description:
                "Information about Huguma's E-Citizenship programme.",
            keywords:
                "citizenship e-citizenship ecitizen citizen application registration",
            url:
                "./citizenship.html"
        },

        {
            title: "Constitution",
            description:
                "The Constitution of the Federal Republic of Huguma.",
            keywords:
                "constitution law federal law rights government republic",
            url:
                "./constitution.html"
        },

    ];


    /* =================================================
       OPEN SEARCH
    ================================================= */

    if (
        searchButton &&
        searchPanel &&
        searchInput
    ) {

        searchButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                searchPanel.classList.add("active");

                /*
                   Close mobile navigation
                   when opening search.
                */

                if (navMenu) {

                    navMenu.classList.remove("open");

                }

                if (menuButton) {

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

                setTimeout(function () {

                    searchInput.focus();

                }, 100);

            }
        );

    }


    /* =================================================
       CLOSE SEARCH
    ================================================= */

    if (closeSearch && searchPanel) {

        closeSearch.addEventListener(
            "click",
            function () {

                searchPanel.classList.remove("active");

            }
        );

    }


    /* =================================================
       CLICK OUTSIDE SEARCH WINDOW
    ================================================= */

    if (searchPanel) {

        searchPanel.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === searchPanel
                ) {

                    searchPanel.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =================================================
       ESCAPE KEY CLOSES SEARCH
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                searchPanel
            ) {

                searchPanel.classList.remove(
                    "active"
                );

            }

        }
    );


    /* =================================================
       SEARCH FUNCTION
    ================================================= */

    if (searchInput && searchResults) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value
                    .toLowerCase()
                    .trim();

                searchResults.innerHTML = "";


                /*
                   Don't show anything
                   when search box is empty.
                */

                if (!query) {

                    return;

                }


                /*
                   Search title,
                   description and keywords.
                */

                const matches =
                    hugumaPages.filter(
                        function (page) {

                            return (

                                page.title
                                    .toLowerCase()
                                    .includes(query)

                                ||

                                page.description
                                    .toLowerCase()
                                    .includes(query)

                                ||

                                page.keywords
                                    .toLowerCase()
                                    .includes(query)

                            );

                        }
                    );


                /* =====================================
                   NO RESULTS
                ===================================== */

                if (matches.length === 0) {

                    searchResults.innerHTML = `

                        <div class="search-no-results">

                            No results found for
                            "<strong>${query}</strong>".

                        </div>

                    `;

                    return;

                }


                /* =====================================
                   DISPLAY RESULTS
                ===================================== */

                matches.forEach(
                    function (page) {

                        const result =
                            document.createElement("div");

                        result.className =
                            "search-result";


                        result.innerHTML = `

                            <h3>
                                ${page.title}
                            </h3>

                            <p>
                                ${page.description}
                            </p>

                            <a href="${page.url}">
                                View page →
                            </a>

                        `;


                        searchResults.appendChild(
                            result
                        );

                    }
                );

            }
        );

    }


    /* =================================================
       SMOOTH ANCHOR LINKS
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        link.getAttribute("href");

                    if (
                        !targetID ||
                        targetID === "#"
                    ) {

                        return;

                    }

                    const target =
                        document.querySelector(
                            targetID
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior:"smooth",
                            block:"start"
                        });

                    }

                }
            );

        });


    /* =================================================
       YEAR AUTOMATICALLY
    ================================================= */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach(
        function (element) {

            element.textContent =
                new Date().getFullYear();

        }
    );


});
