import {Model} from "../mvc/Model.jsx";
import {gameLogic} from "../../GameLogic";

export class TextModel extends Model {
    /** @inheritDoc */
    setDefaultValues() {
        this.text = '';
        this.w = gameLogic.FULL_WIDTH / 2;
        this.h = gameLogic.FULL_HEIGH / 2;

    }

    /** Sets text. */
    setText(text) {
        this.text = text;
    }
}