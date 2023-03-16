const producs = [
    {
        title: '1- Node.js Design Patterns',
    },
    {
        title: '3- You Dont Know js: this & Object Prototype',
    },
    {
        title: '4- Functional React',
    },
    {
        title: '3- You Dont Know js:Async & Performance',
    },
]

const filters = { searchitem: '' }
const renderProducts = function (producs, filters) {
    const filteredProducts = producs.filter(function (item) {
        return item.title.toLowerCase().includes(filters.searchitem.toLowerCase())
    })
    
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function (item) {
        const productEl = document.createElement('p')
        productEl.textContent = item.title
        document.querySelector('#products').appendChild(productEl)

    })
}
renderProducts(producs, filters)

document.querySelector('#search-products').addEventListener('input', function (e) {
    filters.searchitem = e.target.value
    renderProducts(producs, filters)
})