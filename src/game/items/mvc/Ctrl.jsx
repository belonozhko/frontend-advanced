/** Root controller implementation. */
export class Ctrl {
    /**
     * Default constructor.
     * @param model Model in MVC pattern.
     * @param view View in MVC pattern.
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.setDefaultValues();
        this.view.setModel(this.model);
    }

    /**
     * Animate function which calls 60 times per sec.
     * @param ctx Canvas context.
     */
    animate(ctx) {
        this.view.animate(ctx)
    }

}