
let products = getSavedProducts()

const filters = {
    searchItem: '',
    availableProduts: false
}

renderProducts(products, filters)
//input event for searchProducts
document.querySelector('#searchProducts').addEventListener('input', function (e) {
    filters.searchItem = e.target.value
    renderProducts(products, filters)
})
// event for add products
document.querySelector('#Add-product-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const id = uuidv4()
    products.push({
        id: id,
        title: e.target.elements.ProductTitle.value,
        exist: true

    })
    saveProducts(products)
    renderProducts(products, filters)
    e.target.elements.value = ''
})
// checkbox event for available products
document.querySelector('#checkbox').addEventListener('change', function (e) {
    filters.availableProduts = e.target.checked
    renderProducts(products, filters)

})


