import {Model} from "../mvc/Model.jsx";
import {gameLogic} from "../../GameLogic";

export class EnemyModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.position = {x: gameLogic.enemyEl.x, y: gameLogic.enemyEl.y};
        this.width = gameLogic.enemyEl.w;
        this.height = gameLogic.enemyEl.h;
        this.win = false;
    }

    /** Sets player type. */
    setType(type) {
        this.type = type;
    }

    /** Sets win state. */
    setWin() {
        this.win = true;
    }
}