
/** Simple observer pattern. */
export class Observer {

    /** Default constructor. */
    constructor () {
        this.list = [];
    }

    /**
     * Subscribe on event.
     * @param name Event name.
     * @param fn Callback function.
     */
    observe (name, fn) {
        this.list.push({name, fn})
    }

    /**
     * Fire event by name.
     * @param name Event name.
     */
    fire (name) {
        this.list.forEach((item) => {
            if (item.name === name) {
                item.fn();
            }
        })
    }

    /**
     * Unsubscribe event by name.
     * @param name Event name.
     * @param fn Callback function.
     */
    off (name, fn) {
        this.list.forEach((item, index) => {
            if (item.name === name && item.fn === fn) {
                this.list.splice(index, 1);
            }
        })
    }
}