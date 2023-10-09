const world_width = 100
const world_height = 30

const worldElement = document.querySelector('[data-world]');



setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale);

let lastTime
function update(time) {
    if (lastTime === null) {
        lastTime = time;
        window.requestAnimationFrame(update)
        return;
    }
    const timeDelta = time - lastTime;
    console.log(timeDelta);

    lastTime = time;
window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);

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