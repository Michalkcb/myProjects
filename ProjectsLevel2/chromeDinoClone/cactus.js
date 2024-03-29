import { 
    incrementCustomProperty, 
    setCustomProperty, 
    getCustomProperty 
} from "./updateCustomProperty.js";

const speed = .05
const cactusIntervalMin = 500
const cactusIntervalMax = 2000
const worldElement = document.querySelector('[data-world]');

let nextCactusTime
export function setupCactus(){
    nextCactusTime = cactusIntervalMin
    document.querySelectorAll('[data-cactus]').forEach( cactus => {
        cactus.remove()
})
}
export function updateCactus(timeDelta, speedScale) { 
    document.querySelectorAll('[data-cactus]').forEach( cactus => {
        incrementCustomProperty(cactus, "--left", timeDelta *speedScale * speed * -1)
        if (getCustomProperty(cactus, "--left") <= -100) {
            cactus.remove()
          }
    })

    if (nextCactusTime <= 0){
        createCactus()
        nextCactusTime = randomNumberBetween(cactusIntervalMin, cactusIntervalMax) / speedScale

    }
    nextCactusTime -= timeDelta
}

export function getCactusRectangle(){
    return [...document.querySelectorAll('[data-cactus]')].map(cactus => {
        return cactus.getBoundingClientRect()
    })
}

function createCactus(){
    const cactus = document.createElement("img")
    cactus.dataset.cactus = "true"
    cactus.src = 'img/cactus.png'
    cactus.classList.add('cactus')
    setCustomProperty(cactus, "--left", 100)
    worldElement.append(cactus)
}

function randomNumberBetween(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

document.querySelectorAll('[data-cactus')