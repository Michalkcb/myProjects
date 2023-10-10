import { updateGround, setupGround } from './ground.js';
import { updateDino, setupDino, getDinoRectangle, setDinoLose } from './dino.js';
import { updateCactus, setupCactus, getCactusRectangle } from './cactus.js';

const world_width = 100
const world_height = 30
const speedScaleIncrease = 0.00001

const worldElement = document.querySelector('[data-world]');
const scoreElement = document.querySelector('[data-score]');
const startScreenElement = document.querySelector('[data-start-screen]');



setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale);
document.addEventListener('keydown', handleStart, {once: true});


let lastTime
let speedScale
let score
function update(time) {
    if (lastTime == null) {
        lastTime = time;
        window.requestAnimationFrame(update)
        return;
    }
    const timeDelta = time - lastTime;
    updateGround(timeDelta, speedScale);
    updateDino(timeDelta, speedScale);
    updateCactus(timeDelta, speedScale);
    updateSpeedScale(timeDelta);
    updateScore(timeDelta);
    if (checkLose()) return handleLose();

    lastTime = time;
window.requestAnimationFrame(update);
}

function checkLose(){
    const dinoRectangle = getDinoRectangle()
    return getCactusRectangle().some(rect => isCollision(rect,  dinoRectangle))
}

function isCollision(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function updateSpeedScale(timeDelta) {
    speedScale += timeDelta * speedScaleIncrease;
}

function updateScore(timeDelta) {
    score += timeDelta * 0.01;
    scoreElement.textContent = Math.floor(score);

}

function handleStart(e) {
    lastTime = null;
    speedScale = 1;
    score = 0;
    setupGround()
    setupDino()
    setupCactus()
    startScreenElement.classList.add("hide");
    window.requestAnimationFrame(update);

}

function handleLose() {
setDinoLose()
setTimeout(()=> {
    document.addEventListener("keydown", handleStart, {once: true});
    startScreenElement.classList.remove("hide");
},100)
}

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < world_width / world_height) {
        worldToPixelScale = window.innerWidth / world_width
    } else {
        worldToPixelScale = window.innerHeight / world_height
    }
    worldElement.style.width = `${world_width * worldToPixelScale}px`;
    worldElement.style.height  = `${world_height * worldToPixelScale}px`;
};