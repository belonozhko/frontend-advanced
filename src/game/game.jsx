import { GameItemCtrl } from "./gameitem/gameitemctrl.jsx";

export class Game{

    constructor(){
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = 300;
        this.canvas.height = 300;

        this.items = [];
        this.items.push(new GameItemCtrl('red', [0, 0, 10, 10]));

        this.draw();
    }

    changeColor(){
        this.items.forEach((item)=> item.setNewColor());
    }

    draw() {
        this.ctx.clearRect(0, 0, 300, 300);

        this.items.forEach((item)=> item.animate(this.ctx));

        requestAnimationFrame( ()=> this.draw());
    }
}