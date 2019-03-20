import {PlayerModel} from "./PlayerModel.jsx";
import {PlayerView} from "./PlayerView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";
import {stateMachine} from "../../utils/StateMachine.jsx";

/** Player controller class which controls main player. */
export class PlayerCtrl extends Ctrl {
    /**
     * Default constructor.
     * @param type Player type (ex. 'red')
     */
    constructor(type) {
        super(new PlayerModel(), new PlayerView());

        this.model.setType(type);

        // Listen for keydown events
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 87) {
                this.model.moveUp();
            }
            if (e.keyCode === 83) {
                this.model.moveDown();
            }
            if (e.keyCode === 65) {
                this.model.moveLeft();
            }
            if (e.keyCode === 68) {
                this.model.moveRight();
            }
            // space button
            if (e.keyCode === 32) {
                this.model.fire();
            }

            if (stateMachine.can('start')) {
                stateMachine.start();
            }

            if (stateMachine.can('resetWin')) {
                stateMachine.resetWin();
            }

            if (stateMachine.can('resetLose')) {
                stateMachine.resetLose();
            }

        });

        stateMachine.observe('onWin', () => {
            this.model.setDefaultValues();
        });

        stateMachine.observe('onLose', () => {
            this.model.setDefaultValues();
        });
    }
}