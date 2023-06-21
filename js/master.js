// Check if a main color exists in the local storage
let mainColors = localStorage.getItem("color_option");

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
        localStorage.setItem("color_option", e.target.dataset.color);

        // Remove the active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
            ele.classList.remove("active");
        });

        // Add the active class to the clicked li
        e.target.classList.add("active");
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

// Loop on all spans
randomBackgroundEle.forEach((span) => {
    // Click on every span
    span.addEventListener("click", (e) => {
        // Remove the active class from all spans
        e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
            ele.classList.remove("active");
        });

        // Add the active class to the clicked span
        e.target.classList.add("active");

        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomizeImgs();
        } else {
            backgroundOption = false;
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

allBullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
        });
    });
});

/* ------------------------------------------------------------------------------------------------------------------------- */
