let active = false;
const draw = function(e) {
    if(active == false) return;
    

    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    const div = document.createElement('div');
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.appendChild(div);
}

const drawActive = function(e) {
    active = true;
}

const drawCancel = function(e) {
    active = false;
    // active = !active;
}

document.body.addEventListener('mousemove', draw);
document.body.addEventListener('mousedown', drawActive);
document.body.addEventListener('mouseup', drawCancel);
// document.body.addEventListener('mouseup', adawActive); //metoda wykorzystywana do odwracania stanu active na przeciwny. Jeśli jest uo to zmienia na down i na odwrów
