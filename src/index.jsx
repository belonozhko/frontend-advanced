import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TodoItem } from './components/TodoItem.jsx';
import {Game} from "./game/Game.jsx";
import {agent} from "./utils/agent.jsx";
import {Players} from "./components/Players.jsx";

class App extends React.Component {

    constructor(props, state) {
        super(props, state);

        this.game = new Game();

        this.state = {
            list: [
                { name: 'aaaa', color: 'red' },
                { name: 'bbbb', color: 'green', bold: true },
            ]
        };
    }

    render() {
        return (
            <div>
                <div class="container">
                <Players/>
                </div>
            </div>
        )
    }

    storeData(userName) {
        window.localStorage.setItem('config', JSON.stringify({userName, aaa: 1111}));
        window.sessionStorage.setItem('config', JSON.stringify({userName, aaa: 1111}));
    }

    playGame() {

    }

    newColor() {
        // this.game.changeColor();
    }

    addItem() {
        this.setState({list: [
            ...this.state.list,
            {name: 'cccc', color: 'pink'}
        ]});
    }

    removeItem(i) {
        this.state.list.splice(i, 1);
        this.setState({list: [...this.state.list]})
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));