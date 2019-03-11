export class GameModel{
    constructor(){
        this.type = '';
    }

    setType(type){
        this.type = type;
    }

    setRandomColor(){
        const color = Math.floor(Math.random()*1000000);
        
        this.type = `#${color}`;
    }
    
}
