import { 
    setCustomProperty,
    getCustomProperty, 
    incrementCustomProperty 
} from './updateCustomProperty.js';

const speed = 0.05
const groundElems = document.querySelectorAll('[data-ground]');
const groundElements =[...groundElems]

export function setupGround() {
        setCustomProperty(groundElements[0], "--left", 0);
        setCustomProperty(groundElements[1], "--left", 300);
    }

export function updateGround(timeDelta, speedScale) {
    groundElements.forEach( ground => {
        incrementCustomProperty(ground, "--left", timeDelta *speedScale * speed * -1)
        if (getCustomProperty(ground, "--left") <= -300) {
            incrementCustomProperty(ground, "--left", 600)
          }

     
    });
}