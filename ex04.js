const cartItems = [
    {
        title: 'MacBook', quantity: 29
    },
    {
        title: 'Acer', quantity: 59
    },
    {
        title: 'HP', quantity: 79
    }
]

const deleteProduct = function (cart, productTitle) {
    let indexValue = cart.findIndex((item, index) => {
        return item.title === productTitle
    })
    // console.log(indexValue)
    if (indexValue == -1) {
        console.log('product not find')
        return;
    }

    return cart.splice(indexValue, 1)
}
let res = deleteProduct(cartItems, 'Acer')
console.log(cartItems)
