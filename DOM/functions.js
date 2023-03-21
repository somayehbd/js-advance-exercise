//function for get products from localstorage
const getSavedProducts = function () {
    const productsJSON = localStorage.getItem('product')
    console.log(productsJSON)
    if (productsJSON !== null)
        return JSON.parse(productsJSON)
    else {
        return []
    }
}
// function for save products in localStorage
const saveProducts = function (products) {
    localStorage.setItem('product', JSON.stringify(products))
}
//function for filter products
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
    // to display products
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach(function (item) {
    document.querySelector('#products').appendChild(createProductDom(item))

    })
}
//function for create p
const createProductDom = function (item) {
    const productEl = document.createElement('p')
    productEl.textContent = item.title
    return productEl
}