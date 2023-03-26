

//function for get products from localstorage
const getSavedProducts = function () {
    const productsJSON = localStorage.getItem('product')
    if (productsJSON !== null)
        return JSON.parse(productsJSON);
    else {
        return [];
    }
}

// function for save products in localStorage
const saveProducts = function (products) {
    localStorage.setItem('product', JSON.stringify(products))
}
//function for delete product
const removeProduct = function (id) {
    const producindex = products.findIndex(function (item) {
        return item.id == id
    })

    if (producindex == -1)
        return;

    products.splice(producindex, 1)
}
// function for to taggle property exist
const toggleProduct = function (id) {
    const productIndex = products.find(function (item) {
        return item.id == id
    })
    if (productIndex == undefined || productIndex == null)
        return
    productIndex.exist = !productIndex.exist
    saveProducts(products)
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
//function for create span,remove and checkbox
const createProductDom = function (product) {
    const productEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const productItem = document.createElement('a')
    const removeButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked= !product.exist
    productEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleProduct(product.id)
    })

    productItem.textContent = product.title
    productItem.setAttribute('href',`./edit-product.html#${product.id}`)
    productEl.appendChild(productItem)

    productEl.appendChild(removeButton)
    removeButton.textContent = 'Remove'

    removeButton.addEventListener('click', function () {
        removeProduct(product.id)
        renderProducts(products, filters)
    })
    return productEl
}
