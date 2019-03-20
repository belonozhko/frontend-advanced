import {View} from "../mvc/View";

export class TextView extends View {
    /** @inheritDoc */
    animate(ctx) {
        ctx.font = "30px Arial";
        ctx.strokeText(this.model.text, this.model.w, this.model.h);
    }
}