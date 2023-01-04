import dom from "./homepage";
import Inventory from "./modules/inventory";
import key from "./modules/keyMaker";


const inventoryBag = new Inventory()

const newKey = key("One", 1)
const secondKey = key("Two", 2)
const thirdKey = key("Three", 3)

inventoryBag.addKey(newKey)
inventoryBag.addKey(secondKey)
inventoryBag.addKey(thirdKey)

console.log(inventoryBag.bag.map(key => key.getNumber()))

inventoryBag.removeKey(thirdKey)

console.log(inventoryBag.bag.map(key => key.getNumber()))


dom