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

    render = () => (
        <div>
            <h4 className="bg-primary text-white text-center p-2">{this.state.username}'s To-do List</h4>
        </div>
    )
}

export default App
