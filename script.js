const scrollIndicator = document.getElementById("scrollIndicator");

const aboutSection = document.getElementById("about");

const gameImage = document.getElementById("gameImage");
const leavesImage = document.getElementById("leavesImage");
const gameStart = 105;
const leavesStart = 100;
const gameEnd = 112;
const leavesEnd = 175;
const logoImage = document.getElementById("logo");
const navBar = document.getElementById("nav");

const aboutInfo = document.getElementById("about-info");

const animationElements = document.querySelectorAll(".slide-in");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
        else {
            //entry.target.classList.remove("animate");
        }
    })
}, {
    threshold: 0.2
})

for (let i = 0; i < animationElements.length; i++) {
    const el = animationElements[i];

    observer.observe(el);
}


addEventListener('scroll', e => {
    const scrollPercent = window.scrollY/window.innerHeight;
    scrollIndicator.innerText = Math.round(scrollPercent*100) + "%";

    if (scrollPercent < 1) {
        aboutSection.style.opacity = 1;
        leavesImage.style.backgroundSize = lerp(leavesStart, leavesEnd, scrollPercent) + "%";
        gameImage.style.backgroundSize = lerp(gameStart, gameEnd, scrollPercent) + "%";
        logoImage.style.opacity = lerp(1, -1.2, scrollPercent);
        aboutInfo.style.opacity = lerp(-0.8, 1, scrollPercent);
    }
    else if (scrollPercent < 2) {
        const scrollPercent2 = scrollPercent%1;

        logoImage.style.opacity = 0;
        aboutInfo.style.opacity = lerp(1, -3, scrollPercent2);
        aboutSection.style.opacity = lerp(1, 0, scrollPercent2);

        navBar.style.background = `rgba(0, 0, 0, ${lerp(-1, 1, scrollPercent2)})`;
    }
})

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}