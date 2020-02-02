
const choice = (items) => {
    let random = Math.floor(Math.random() * items.length) + 1
    return items[random]
}

const remove = (items, item = choice(items)) => {
    let index = items.findIndex(choice)
    console.log(index)
    console.log(items.length)
    if(!items.length) return undefined
    if ((index === 0) && (items.length === 1)) {
        return item = items.pop()
    }
    if (index === 0 && items.length > 1) {
        items = items.slice(1)
        console.log(items)
        console.log('i am in here')
        return item = items[index]
    } else {
        items = items.slice(0, index).concat(items.slice(index + 1))
        console.log(items)
        console.log("🍇")
        return item = items[index]
    }
}

export {choice, remove}
