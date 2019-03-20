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
            <div id="players" class="alert alert-primary col-sm-7 col-lg-4" role="alert" >
                <h1 class="alert alert-success" role="alert">Hello, it's me</h1>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button> 
                </div>

                <form onSubmit={() => this.addNewPlayer()} action="#">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Your name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name"
                        onChange={(e) => this.changeNewPlayerName(e.target.value)}></input>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Your age</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter age"
                        onChange={(e) => this.changeNewPlayerAge(e.target.value)}/>
                    </div>

                    <button type="submit" class="btn btn-primary" 
                    onClick={() => this.addNewPlayer()}>Add</button>
                </form>

                {JSON.stringify(this.state.newPlayer)}

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