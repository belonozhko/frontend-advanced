import * as React from 'react';
import {agent} from "../utils/agent";
import "./players/Players.scss";

export class Players extends React.Component {
    constructor(p, s) {
        super(p, s);

        this.state = {
            newPlayer: {name: '', age: '77'},
            players: []
        };

        this.loadAll();
    }

    render() {
        return (
            <div id="players">
                {JSON.stringify(this.state.newPlayer)}
                <div >
                    <label>Name: </label>
                    <input type="text" onChange={(e) => this.changeNewPlayerName(e.target.value)}/>
                </div>

                <div>
                    <label>Age: </label>
                    <input type="text" onChange={(e) => this.changeNewPlayerAge(e.target.value)}/>
                </div>

                <button onClick={() => this.addNewPlayer()}>Add</button>

                <ul>
                    {this.state.players.map((player, i) => {
                        return (<li key={i}>name: {player.name}, age: {player.age}
                            <button onClick={() => {this.deletePlayer(i)}}>x</button>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }

    changeNewPlayerName(name) {
        this.setState({
            newPlayer: Object.assign(this.state.newPlayer, {name} )
        })
    }

    changeNewPlayerAge(age) {
        this.setState({
            newPlayer: Object.assign(this.state.newPlayer, {age} )
        })
    }

    addNewPlayer() {
        agent.Player.add(
            this.state.newPlayer,
            this.state.players.length,
            () => {
               this.loadAll();
            }
        )
    }

    deletePlayer(index) {
        this.state.players.splice(index, 1);
        agent.Player.delete(this.state.players, () => {
            this.loadAll();
        })
    }

    async loadAll() {
        const players = await agent.Player.getAll();
        this.setState({players});
    }
}