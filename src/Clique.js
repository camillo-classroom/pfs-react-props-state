import React from 'react';

class Clique extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cliques: 0};
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({cliques: this.state.cliques + 1})}>Clique aqui</button>
                <p>Cliques: {this.state.cliques}</p>
            </div>
        );
    }
}

export default Clique;
