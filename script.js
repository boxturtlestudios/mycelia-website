const heroSection = document.getElementById("hero");

const gameImage = document.getElementById("gameImage");
const leavesImage = document.getElementById("leavesImage");
const gameStart = 100;
const leavesStart = 100;
const gameEnd = 112;
const leavesEnd = 175;

const logoImage = document.getElementById("logo");


addEventListener('scroll', e => {
    const scrollPercent = window.scrollY/window.innerHeight;

    leavesImage.style.backgroundSize = lerp(leavesStart, leavesEnd, scrollPercent) + "%";
    gameImage.style.backgroundSize = lerp(gameStart, gameEnd, scrollPercent) + "%";

    logoImage.style.opacity = lerp(1, -0.8, scrollPercent);
})

function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}