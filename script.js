// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Background Maps
const backgroundMaps = {
    "1880": "https://tile.loc.gov/image-services/iiif/service:gmd:gmd376:g3764:g3764b:ct006028/full/pct:25/0/default.jpg",
    "1900": "https://wardmaps.com/cdn/shop/products/wmark-boston_harbor_1900_bmrr.jpg?v=1578056211&width=1800",
    "1920": "https://live.staticflickr.com/3291/2674599776_eb04121d55_k.jpg",
    "1940": "https://mbtagifts.com/cdn/shop/products/bery1940-4th-ed.jpg?v=1493319687&width=2890",
    "1960": "https://i.postimg.cc/cLYTtDbn/Boston-1970.jpg"
};

// Background Overlay Element
const backgroundOverlay = document.querySelector('.background-overlay');

// Header Elements
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const whatWhy = document.querySelector('.what-why');

// Change Background on Button Hover
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const year = button.getAttribute('data-year');
        backgroundOverlay.style.backgroundImage = `url('${backgroundMaps[year]}')`;
        backgroundOverlay.style.opacity = 1; // Fade in the new background
        cursor.style.backgroundColor = 'red';

        // Change text color to black
        title.style.color = 'black';
        subtitle.style.color = 'black';
        whatWhy.style.color = 'black';
    });

    button.addEventListener('mouseleave', () => {
        backgroundOverlay.style.opacity = 0; // Fade out the overlay
        cursor.style.backgroundColor = 'transparent';

        // Change text color back to white
        title.style.color = 'white';
        subtitle.style.color = 'white';
        whatWhy.style.color = 'white';
    });
});