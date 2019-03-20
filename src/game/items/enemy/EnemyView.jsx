import {View} from "../mvc/View.jsx";

export class EnemyView extends View {
    /** @inheritDoc */
    animate(ctx) {
        if (!this.model.win) {
            ctx.fillStyle = this.model.type;
            ctx.fillRect.apply(ctx, [this.model.position.x, this.model.position.y, this.model.width, this.model.height]);
        }
    }
}