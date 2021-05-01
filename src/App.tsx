import React, { Component } from 'react'

interface AppState {
    username: string
}

class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            username: "Alex",
        }
    }

    changeStateData = () => {
        this.setState({ username: this.state.username === "Alex" ? "Johnny" : "Alex"})
    }

    render = () => (
        <div>
            <h4 className="bg-primary text-white text-center p-2">{ this.state.username }'s To-do List</h4>
            <button className="btn btn-primary m-2" onClick={ this.changeStateData }>Change</button>
        </div>
    )
}

export default App
