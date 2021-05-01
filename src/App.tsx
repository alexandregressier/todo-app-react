import React, { Component } from 'react'
import TodoItem from "./TodoItem"

interface AppState {
    username: string
    todoItems: TodoItem[]
    newItemText: string
}

export default class App extends Component<{}, AppState> {

    constructor(props: {}) {
        super(props)
        this.state = {
            username: "Alex",
            todoItems: [
                { action: "Buy Flowers", done: false },
                { action: "Get Shoes", done: false },
                { action: "Collect Tickets", done: true },
                { action: "Call Joe", done: false },
            ],
            newItemText: "",
        }
    }

    createNewTodo = () => {
        if (!this.state.todoItems.find(x => x.action === this.state.newItemText)) {
            this.setState({
                todoItems: [...this.state.todoItems, { action: this.state.newItemText, done: false }],
                newItemText: ""
            })
        }
    }

    render = () => (
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                { this.state.username }'s To-do List
                ({ this.state.todoItems.filter(x => !x.done).length} items to do)
            </h4>
            <div className="my-1">
                <input className="form-control" value={ this.state.newItemText }
                       onChange={ e => this.setState({ newItemText: e.target.value }) }/>
                <button className="btn btn-primary mt-1" onClick={ this.createNewTodo }>Add</button>
            </div>
        </div>
    )
}