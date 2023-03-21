
let products = getSavedProducts()

const filters = {
    searchItem: '',
    availableProduts: false
}
 const productsJSON=localStorage.getItem('product')
 console.log(productsJSON)
 if(productsJSON !==null)
 products=JSON.parse(productsJSON)

const renderProducts = function (products, filters) {
    let filteredProducts = products.filter(function (item) {
        return item.title.toLowerCase().includes(filters.searchItem)
    })
    //checkbox for availableProdutcs
    filteredProducts = filteredProducts.filter(function (item) {
        if (filters.availableProduts) {
            return item.exist
        }

        else {
            return true
        }
    })
    // create p to display products
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function (item) {
        const productEl = document.createElement('p')
        productEl.textContent = item.title
        document.querySelector('#products').appendChild(productEl)

    })
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

    products.push({
        title: e.target.elements.ProductTitle.value
        
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


