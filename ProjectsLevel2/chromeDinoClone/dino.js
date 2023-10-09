// import {
//     incrementCustomProperty,
//     setCustomProperty,
//     getCustomProperty,
// } from './updateCustopProperty.js'

const dinoElement = document.querySelector('[data-dino]');
const jumpSpeed = .4
const gravity = .002
const dinoFrameCount = 2
const frameTime = 100

let isJumping
let dinoFrame
let currentFrameTime

export function setupDino() {
    isJumping = false;
    dinoFrame = 0;
    currentFrameTime = 0

}

export function updateDino(timeDelta, speedScale) {
    console.log(dinoElement)

    handleRun(timeDelta, speedScale)
    handleJump(timeDelta)
}

function handleRun(timeDelta, speedScale) {

    if (isJumping) {
        dinoElement.src = `img/dino-stationary.png`
         
         return
    }
    if (currentFrameTime >=frameTime){
        dinoFrame = (dinoFrame + 1) % dinoFrameCount;
        dinoElement.src = `img/dino-run-${dinoFrame}.png`
        currentFrameTime -= timeDelta * speedScale
    }
    currentFrameTime += timeDelta * speedScale
}

function handleJump(timeDelta, scoreScale) {

}
