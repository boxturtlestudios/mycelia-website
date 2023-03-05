const scrollIndicator = document.getElementById("scrollIndicator");

const aboutSection = document.getElementById("about");

const gameImage = document.getElementById("gameImage");
const leavesImage = document.getElementById("leavesImage");
const gameStart = 100;
const leavesStart = 100;
const gameEnd = 112;
const leavesEnd = 175;
const logoImage = document.getElementById("logo");

const aboutInfo = document.getElementById("about-info");


addEventListener('scroll', e => {
    const scrollPercent = window.scrollY/window.innerHeight;
    scrollIndicator.innerText = Math.round(scrollPercent*100) + "%";

    if (scrollPercent < 1) {
        aboutSection.style.opacity = 1;
        leavesImage.style.backgroundSize = lerp(leavesStart, leavesEnd, scrollPercent) + "%";
        gameImage.style.backgroundSize = lerp(gameStart, gameEnd, scrollPercent) + "%";
        logoImage.style.opacity = lerp(1, -0.8, scrollPercent);
        aboutInfo.style.opacity = lerp(-1.2, 1, scrollPercent);
    }
    else if (scrollPercent < 2) {
        const scrollPercent2 = scrollPercent%1;

        aboutInfo.style.opacity = lerp(1, -3, scrollPercent2)
        aboutSection.style.opacity = lerp(1, 0, scrollPercent2);
    }

})

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}