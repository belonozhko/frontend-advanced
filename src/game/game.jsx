import {PlayerCtrl} from "./items/player/PlayerCtrl.jsx";
import {EnemyCtrl} from "./items/enemy/EnemyCtrl";
import {gameLogic} from "./GameLogic";
import {TextCtrl} from "./items/text/TextCtrl";

/**
 * General game class which creates simple canvas 2D context.
 */
export class Game {
    /** Default constructor. */
    constructor() {
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = gameLogic.FULL_WIDTH;
        this.canvas.height = gameLogic.FULL_HEIGH;

        this.items = [
            new PlayerCtrl('blue'),
            new EnemyCtrl('red'),
            new TextCtrl()
        ];

        this.draw();
    }

    /** Draw function which calls 60 times per sec. */
    draw() {
        this.ctx.clearRect(0, 0, gameLogic.FULL_WIDTH, gameLogic.FULL_HEIGH);
        this.items.forEach((item) => item.animate(this.ctx));

        requestAnimationFrame(() => this.draw());
    }
}