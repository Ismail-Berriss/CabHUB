/* ------------------------------------------------------------------------------------------------------------------------- */

// Check if a main color exists in the local storage
let mainColors = localStorage.getItem("colorOption");

if (mainColors !== null) {
    document.documentElement.style.setProperty("--main-color", mainColors);

    // Remove the active class from all the children
    document.querySelectorAll(".colors-list li").forEach((ele) => {
        if (ele.dataset.color === mainColors) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }
    });
}

/* ------------------------------------------------------------------------------------------------------------------------- */

// Toggle the open class on the settings box
document
    .querySelector(".settings-box .gear-container")
    .addEventListener("click", () => {
        document.querySelector(".settings-box").classList.toggle("open");
    });

/* ------------------------------------------------------------------------------------------------------------------------- */

// Switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on all list item
colorsLi.forEach((li) => {
    // Click on every list item
    li.addEventListener("click", (e) => {
        // Set color on root
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );

        // Set the color on the local storage
        localStorage.setItem("colorOption", e.target.dataset.color);

        handleActive(e);
    });
});

/* ------------------------------------------------------------------------------------------------------------------------- */
// Random background option
let backgroundOption = true;

// Variable to controle the background interval
let backgroundInterval;

// Switch random background option
const randomBackgroundEle = document.querySelectorAll(
    ".random-backgrounds span"
);

let backgroundLocalItem = localStorage.getItem("backgroundOption");

if (backgroundLocalItem !== null) {
    randomBackgroundEle.forEach((span) => {
        span.classList.remove("active");
    });

    if (backgroundLocalItem === "true") {
        backgroundOption = true;
        document
            .querySelector(".random-backgrounds .yes")
            .classList.add("active");
    } else {
        backgroundOption = false;
        document
            .querySelector(".random-backgrounds .no")
            .classList.add("active");
    }
}

// Loop on all spans
randomBackgroundEle.forEach((span) => {
    // Click on every span
    span.addEventListener("click", (e) => {
        handleActive(e);

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            localStorage.setItem("backgroundOption", "true");
            randomizeImgs();
        } else {
            backgroundOption = false;
            localStorage.setItem("backgroundOption", "false");
            clearInterval(backgroundInterval);
        }
    });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get The array of imgs
let imgsArray = [
    "../imgs/andrew-ruiz-bI2j1olMXUA-unsplash.jpg",
    "../imgs/baikang-yuan-6JgpJTUJphI-unsplash.jpg",
    "../imgs/decry-yae-WnoQ2nK0p_w-unsplash.jpg",
    "../imgs/ella-de-kross-6HHuEhgUXK0-unsplash.jpg",
    "../imgs/kai-pilger-3NMsCQr5m2g-unsplash.jpg",
    "../imgs/mattia-cioni-mbQZ_VA7V_s-unsplash.jpg",
    "../imgs/nick-fewings-MlZnEM4LUwY-unsplash.jpg",
];

// Function to randomize imgs
function randomizeImgs() {
    if (backgroundOption) {
        // Change Background Image Url Every 5 Seconds
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let rand = Math.floor(Math.random() * imgsArray.length);

            landingPage.style.backgroundImage = "url(" + imgsArray[rand] + ")";
        }, 3000);
    }
}

randomizeImgs();

/* ------------------------------------------------------------------------------------------------------------------------- */

// Select all bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

function scrollToSection(elements) {
    elements.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}

scrollToSection(allBullets);

/* ------------------------------------------------------------------------------------------------------------------------- */

// Handle Active State
function handleActive(eve) {
    // Remove the active class from all children
    eve.target.parentElement.querySelectorAll(".active").forEach((ele) => {
        ele.classList.remove("active");
    });

    // Add the active class to the clicked li
    eve.target.classList.add("active");
}

/* ------------------------------------------------------------------------------------------------------------------------- */

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bulletsOption");

if (bulletLocalItem !== null) {
    bulletsSpan.forEach((span) => {
        span.classList.remove("active");
    });

    if (bulletLocalItem === "block") {
        bulletsContainer.style.display = "block";
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletsSpan.forEach((span) => {
    span.addEventListener("click", (e) => {
        handleActive(e);
        if (span.dataset.display === "show") {
            bulletsContainer.style.display = "block";
            localStorage.setItem("bulletsOption", "block");
        } else {
            bulletsContainer.style.display = "none";
            localStorage.setItem("bulletsOption", "none");
        }
    });
});

/* ------------------------------------------------------------------------------------------------------------------------- */

// Reset Button
document.querySelector(".reset-options").onclick = () => {
    localStorage.removeItem("colorOption");
    localStorage.removeItem("backgroundOption");
    localStorage.removeItem("bulletsOption");

    // Reload the window
    window.location.reload();
};

/* ------------------------------------------------------------------------------------------------------------------------- */
