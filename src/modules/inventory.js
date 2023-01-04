export default class Inventory {
    constructor(bag) {
        this.bag = []
    }

    showKeys() {
        return this.bag.map(keys => keys.getNumber())
    }

    addKey(keyNumber) {
        this.bag.push(keyNumber)
    }

    removeKey(key) {
        const indexOfKeyToRemove = this.bag.indexOf(key)
        this.bag.splice(indexOfKeyToRemove, 1)
    }
}