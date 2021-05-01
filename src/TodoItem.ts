export default class TodoItem {
    action: string
    done: boolean

    constructor(action: string, done: boolean) {
        this.action = action
        this.done = done
    }
}