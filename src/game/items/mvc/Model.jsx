import {gameLogic} from "../../GameLogic";

/** Model implementation in MVC. */
export class Model {

    constructor() {
        this.WIDTH = gameLogic.FULL_WIDTH;
        this.HEIGH = gameLogic.FULL_HEIGH;
    }

    /** Set default model values. */
    setDefaultValues() {}
}