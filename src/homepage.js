import Inventory from "./modules/inventory"
import key from "./modules/keyMaker"

const dom = (() => {
    const inventoryBag = new Inventory

    const newKey = key("One", 1)
    const secondKey = key("Two", 2)
    const thirdKey = key("Three", 3)
    const fourthKey = key("Four", 4)

    inventoryBag.addKey(newKey)
    inventoryBag.addKey(secondKey)
    inventoryBag.addKey(thirdKey)
    inventoryBag.addKey(fourthKey)

    const main = document.createElement('div')
    main.classList.add('main-box')
    document.body.appendChild(main)

    const logBox = document.createElement('div')
    logBox.classList.add('log-box')
    main.appendChild(logBox)


    //create a 'page' for inventory menu
    const inventoryBox = document.createElement('div')
    inventoryBox.classList.add('inventory-box')
    logBox.appendChild(inventoryBox)

    //show keys on logbox
    //

    const commandTextBox = document.createElement('input')
    commandTextBox.classList.add('command-box')
    logBox.appendChild(commandTextBox)


})()

export default dom