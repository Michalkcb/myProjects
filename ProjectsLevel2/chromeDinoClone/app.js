import { updateGround, setupGround } from './ground.js';
import { updateDino, setupDino } from './dino.js';

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
    updateSpeedScale(timeDelta);
    updateScore(timeDelta);

    lastTime = time;
window.requestAnimationFrame(update);
}

function updateSpeedScale(timeDelta) {
    speedScale += timeDelta * speedScaleIncrease;
}

function updateScore(timeDelta) {
    score += timeDelta * 0.02;
    scoreElement.textContent = Math.floor(score);

}

function handleStart(e) {
    lastTime = null;
    speedScale = 1;
    score = 0;
    setupGround()
    setupDino()
    startScreenElement.classList.add("hide");
    window.requestAnimationFrame(update);

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