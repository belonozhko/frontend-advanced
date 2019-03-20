import {EnemyModel} from "./EnemyModel.jsx";
import {EnemyView} from "./EnemyView.jsx";
import {Ctrl} from "../mvc/Ctrl.jsx";
import {stateMachine} from "../../utils/StateMachine.jsx";

/** Enemy controller class which controls main player. */
export class EnemyCtrl extends Ctrl {
    /**
     * Default constructor.
     * @param type Player type (ex. 'red')
     */
    constructor(type) {
        super(new EnemyModel(), new EnemyView());

        this.model.setType(type);

        stateMachine.observe('onWin', () => {
            this.model.setWin();
        });

        stateMachine.observe('onStart', () => {
            this.model.setDefaultValues();
        });
    }
}