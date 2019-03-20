import {View} from "../mvc/View.jsx";

export class PlayerView extends View {
    /** @inheritDoc */
    animate(ctx) {
        ctx.fillStyle = this.model.type;
        ctx.fillRect.apply(ctx, [this.model.position.x, this.model.position.y, this.model.width, this.model.height]);

        if (this.model.fired) {
            this.model.runFire();

            ctx.fillRect.apply(ctx, [this.model.fireEl.x, this.model.fireEl.y, this.model.fireEl.w, this.model.fireEl.h]);
        }
    }
}