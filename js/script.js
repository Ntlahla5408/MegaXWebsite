/*
    Mega X Industries
    Main JavaScript File
*/


/* =========================================
   Mobile Navigation
========================================= */

const navigation = document.querySelector(".navigation");
const navbar = document.querySelector(".navbar");


/*
    Create mobile menu button
*/

const mobileMenuButton = document.createElement("button");

mobileMenuButton.className = "mobile-menu-button";
mobileMenuButton.setAttribute(
    "aria-label",
    "Open navigation menu"
);

mobileMenuButton.innerHTML = "☰";

navbar.querySelector(".navbar-content").appendChild(
    mobileMenuButton
);


/*
    Open and close mobile navigation
*/

mobileMenuButton.addEventListener(
    "click",
    function () {

        navigation.classList.toggle(
            "navigation-open"
        );

    }
);


/*
    Close navigation when a link is selected
*/

const navigationLinks =
    document.querySelectorAll(
        ".navigation a"
    );

navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "navigation-open"
                );

            }
        );

    }
);


/* =========================================
   Scroll Reveal Animation
========================================= */

const sections =
    document.querySelectorAll(
        ".section"
    );


const sectionObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "section-visible"
                        );

                        sectionObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(
    function (section) {

        section.classList.add(
            "section-hidden"
        );

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================
   Current Year
========================================= */

const copyright =
    document.querySelector(
        ".copyright"
    );


if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.textContent =
        `© ${currentYear} Mega X Industries. All rights reserved.`;

}