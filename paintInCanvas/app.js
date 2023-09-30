class DrawingApp {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.painting = false;
        this.#init();
        this.#initEvents()
    }

    #init(){
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d')
        this.ctx.strokeStyle = "white"; //defaultowo jest czarna więc nie byłoby nic widać i trzeba zrobić biały
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        
    }

    #initEvents() {
        //metody na myszkę
        this.canvas.addEventListener('mousedown', (e) =>{
        this.#startPosition(e);
        }); //jest użyta funkcja strzałkowa bo metoda this.#startPosition wskazuje na kliknięty element a nie obiekt(klasa). W tym przypadku F strzałkoa ignotuje thisa z elementu więc zostaje this z obiektu
        this.canvas.addEventListener('mouseup', this.#endPosition.bind(this)); //bindowanie thisa zamiast funkcji strzalkowej jak przy mousedown
        this.canvas.addEventListener('mousemove', this.#draw.bind(this)); //bindowanie thisa zamiast funkcji strzalkowej jak przy mousedown

        //metody na mobile
            this.canvas.addEventListener('touchstart', this.#startPosition.bind(this)); //jest użyta funkcja strzałkowa bo metoda this.#startPosition wskazuje na kliknięty element a nie obiekt(klasa). W tym przypadku F strzałkoa ignotuje thisa z elementu więc zostaje this z obiektu
            this.canvas.addEventListener('touchend', this.#endPosition.bind(this)); //bindowanie thisa zamiast funkcji strzalkowej jak przy mousedown
            this.canvas.addEventListener('touchmove', this.#draw.bind(this)); //bindowanie thisa zamiast funkcji strzalkowej jak przy mousedown
    
    }

    #startPosition(e) {
        console.log('start rysowania');
        this.painting = true;
        this.#draw(e);
    
    }

    #endPosition() {
        console.log('koniec rysowania');
        this.painting = false;
        this.ctx.beginPath(); //kończy starą i zaczyna nową ścieżkę

    }

    #draw(e) {
        if (!this.painting) return;
            console.log('rysowanie')
            this.ctx.beginPath(); //kończy starą i zaczyna nową ścieżkę
            console.log(e);

            let x = e.clientX || e.touches[0].clientX;
            let y = e.clientY || e.touches[0].clientY;
            console.log(x +" "+ y);

            this.ctx.lineTo(x, y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);




    }

    changeColor(color){
        this.ctx.strokeStyle = color;
        console.log(color);
    }
}

const app = new DrawingApp();