import {
  incrementCustomProperty,
  setCustomProperty,
  getCustomProperty,
} from "./updateCustopProperty.js";

const dinoElement = document.querySelector("[data-dino]");
const jumpSpeed = 0.45;
const gravity = 0.0015;
const dinoFrameCount = 2;
const frameTime = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;

export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  yVelocity = 0;
  setCustomProperty(dinoElement, "--bottom", 0);
  document.removeEventListener("keydown", onJump);
  document.addEventListener("keydown", onJump);
}

export function updateDino(timeDelta, speedScale) {
  handleRun(timeDelta, speedScale);
  handleJump(timeDelta);
}

function handleRun(timeDelta, speedScale) {
  if (isJumping) {
    dinoElement.src = `img/dino-stationary.png`;

    return;
  }
  if (currentFrameTime >= frameTime) {
    dinoFrame = (dinoFrame + 1) % dinoFrameCount;
    dinoElement.src = `img/dino-run-${dinoFrame}.png`;
    currentFrameTime -= timeDelta * speedScale;
  }
  currentFrameTime += timeDelta * speedScale;
}

function handleJump(timeDelta) {
    if (!isJumping) return
  
    incrementCustomProperty(dinoElement, "--bottom", yVelocity * timeDelta)
  
    if (getCustomProperty(dinoElement, "--bottom") <= 0) {
      setCustomProperty(dinoElement, "--bottom", 0)
      isJumping = false
    }
  
    yVelocity -= gravity * timeDelta
  }
  
  function onJump(e) {
    if (e.code !== "Space" || isJumping) return
  
    yVelocity = jumpSpeed
    isJumping = true
  }
