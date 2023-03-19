
const products = [
    {
        title: 'book1',
        exist: true
    },
    {
        title: 'book2',
        exist: false
    },
    {
        title: 'book3',
        exist: true
    },
    {
        title: 'book4',
        exist: false
    },
]

const filters = {
    searchItem: '',
    availableProduts: false
}
const renderProducts = function (products, filters) {
    let filteredProducts = products.filter(function (item) {
        return item.title.toLowerCase().includes(filters.searchItem)
    })
    //checkbox
    filteredProducts=filteredProducts.filter(function (item) {
        if (filters.availableProduts){
            return item.exist
        }
           
        else {
            return true
        }
    })
    //productTitle
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function (item) {
        const productEl = document.createElement('p')
        productEl.textContent = item.title
        document.querySelector('#products').appendChild(productEl)
    })
}

renderProducts(products, filters)

document.querySelector('#searchProducts').addEventListener('input', function (e) {
    filters.searchItem = e.target.value
    renderProducts(products, filters)
})
document.querySelector('#Add-product-form').addEventListener('submit', function (e) {
    e.preventDefault()
    products.push({
        title: e.target.elements.ProductTitle.value
    })
    renderProducts(products, filters)
    e.target.elements.value = ''
})
// checkbox event
document.querySelector('#checkbox').addEventListener('change', function (e) {
    filters.availableProduts = e.target.checked
    renderProducts(products, filters)
})


