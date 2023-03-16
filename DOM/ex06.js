const productItems = [
    {
        title: 'book1',
        exist: 'true'
    },
    {
        title: 'book2',
        exist: 'false'
    },
    {
        title: 'book3',
        exist: 'true'
    },
    {
        title: 'book4',
        exist: 'false'
    },
]
const getAvailableProducts = function (productItems) {
    let availableProducts = productItems.filter(function (item, index) {
        return item.exist == 'true'

    })
    const message = document.createElement('h1')
    message.textContent = ` Number of Available Books: ${availableProducts.length}`
    document.querySelector('body').appendChild(message)

    productItems.forEach(function (item) {
        const p = document.createElement('p')
        p.textContent = item.title
        document.querySelector('body').appendChild(p)
    })
}
getAvailableProducts(productItems)