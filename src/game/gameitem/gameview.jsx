export class GameView{
constructor(model){
    this.model = model;
}

    animate(ctx){
        ctx.fillStyle = this.model.type;
        ctx.fillRect.apply(ctx, [10, 10, 50, 60]);

    }
}