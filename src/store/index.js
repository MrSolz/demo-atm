import { makeAutoObservable, runInAction, reaction } from "mobx"
export class RootStore {
    constructor() {
        this.userStore = new UserStore(this)
        this.mainStore = new MainStore(this)
        this.timer = new Timer(this)
    }
}

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }

    getTodos(user) {
        // Access todoStore through the root store.
        return this.rootStore.todoStore.todos.filter(todo => todo.author === user)
    }
}

class MainStore {
    env = { API_URL: "" }
    list = []
    rootStore

    constructor(rootStore) {
        makeAutoObservable(this)
    }
    setENV(value) {
        this.env = value
    }
    getENV() {
        return this.env;
    }
    setList(value) {
        let send_note = { value };
        this.list.push(send_note)
    }
}
class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

export const rootStore = new RootStore()