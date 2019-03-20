import {stateMachine} from "./utils/StateMachine";

class GameLogic {
    constructor() {
        this.FULL_WIDTH = 300;
        this.FULL_HEIGH = 300;

        this.setDefault();
    }

    setDefault() {
        this.fireEl = {
            x: 0,
            y: 0,
            w: 10,
            h: 10
        };

        this.enemyEl = {
            x: this.FULL_WIDTH - 50,
            y: this.FULL_HEIGH / 2 - 25,
            w: 30,
            h: 50
        };
    }

    update() {
        this.fireEl.x += 2;

        if (
            (this.fireEl.x + this.fireEl.w) > this.enemyEl.x &&
            (this.fireEl.x + this.fireEl.w) < (this.enemyEl.x + this.enemyEl.w) &&
            (this.fireEl.y + this.fireEl.h) > this.enemyEl.y &&
            (this.fireEl.y + this.fireEl.h) < (this.enemyEl.y + this.enemyEl.h)
        ) {
            if (stateMachine.can('playWin')) {
                stateMachine.playWin();
            }
        }

        if (
            this.fireEl.x < 0 ||
            this.fireEl.x > this.FULL_WIDTH ||
            this.fireEl.y < 0 ||
            this.fireEl.x > this.FULL_HEIGH
        ) {
            if (stateMachine.can('playLose')) {
                stateMachine.playLose();
            }
        }
    }


}

export const gameLogic = new GameLogic();