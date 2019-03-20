import {Model} from "../mvc/Model.jsx";
import {gameLogic} from "../../GameLogic";

export class PlayerModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.position = {x: 0, y: this.HEIGH/2};
        this.width = this.height = 10;

        this.fired = false;
        this.fireEl = gameLogic.fireEl;
    }

    /** Sets player type. */
    setType(type) {
        this.type = type;
    }

    /** Move up. */
    moveUp() {
        this.position.y -= 1;
    }

    /** Move down. */
    moveDown() {
        this.position.y += 1;
    }

    /** Move left. */
    moveLeft() {
        this.position.x -= 1;
    }

    /** Move right. */
    moveRight() {
        this.position.x += 1;
    }

    /** Enable fire animation. */
    fire() {
        this.fired = true;
        this.fireEl.x = this.position.x;
        this.fireEl.y = this.position.y;
    }

    /** Updates fire el pos. */
    runFire() {
        gameLogic.update();
    }
}