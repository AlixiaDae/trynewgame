const doorMaker = (number, id) => {
    const getNumber = () => number
    const getId = () => id
    return {
        getNumber,
        getId
    }
}

export default doorMaker