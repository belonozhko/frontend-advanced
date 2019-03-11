import * as React from 'react';

export class TodoItem extends React.Component {
    render() {

        let color = {'color': this.props.color};

        // if (this.props.bold) {
        //     color['font-weight'] = 'bold';
        // }

        return (
            <li>
                <span style={ this.props.bold ? {'fontWeight': 'bold'} : {}} >{this.props.name}</span>
                <button onClick={() => this.props.onRemove()}>x</button>
            </li>
        );
    }
}