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

// Change Background Image Url Every 5 Seconds
setInterval(() => {
    // Get Random Number
    let rand = Math.floor(Math.random() * imgsArray.length);

    landingPage.style.backgroundImage = "url(" + imgsArray[rand] + ")";
}, 5000);
