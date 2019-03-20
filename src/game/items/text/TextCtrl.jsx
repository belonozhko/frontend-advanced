import {TextModel} from "./TextModel.jsx";
import {TextView} from "./TextView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";
import {stateMachine} from "../../utils/StateMachine.jsx";

/** Text controller class which shows text on win or lose. */
export class TextCtrl extends Ctrl {
    /**
     * Default constructor.
     */
    constructor() {
        super(new TextModel(), new TextView());

        stateMachine.observe('onStart', () => {
            this.model.setText('');
        });

        stateMachine.observe('onWin', () => {
            this.model.setText('Win');
        });

        stateMachine.observe('onLose', () => {
            this.model.setText('Lose');
        });
    }
}