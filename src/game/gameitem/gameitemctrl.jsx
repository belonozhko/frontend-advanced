import { GameModel } from "./gamemodel.jsx";
import { GameView } from "./gameview.jsx";

export class GameItemCtrl{
    constructor(type, rectParams){
        this.model = new GameModel();
        this.view = new GameView(this.model);

        this.model.setType(type);
    }

    setNewColor(){
        this.model.setRandomColor();
    }

    animate(ctx){
      this.view.animate(ctx);
    }
}