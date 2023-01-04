export default class Inventory {
    constructor(bag) {
        this.bag = []
    }

    addKey(keyNumber) {
        this.bag.push(keyNumber)
    }

    removeKey(key) {
        const indexOfKeyToRemove = this.bag.indexOf(key)
        this.bag.splice(indexOfKeyToRemove, 1)
    }
}