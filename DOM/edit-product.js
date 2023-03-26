const titleElement = document.querySelector('#product-title')
const priceElement = document.querySelector('#product-price')
const removeElement = document.querySelector('#remove-button')
const dateElement = document.querySelector('#last-edit');

const productId = location.hash.substring(1)
let products = getSavedProducts()
let product = products.find(function (item) {
    return item.id === productId
})
if (product === undefined || null) {
    location.assign('/index.html')
}

titleElement.value = product.title
priceElement.value = product.price
let updated = moment(product.updated)
dateElement.textContent = updated.format('MMM Do YYYY')

//update product info 
titleElement.addEventListener('input', function (e) {
    e.preventDefault()
    product.title = e.target.value; 
    saveProducts(products)
})

priceElement.addEventListener('input', function (e) {
    e.preventDefault()
    product.price = e.target.value;
})

//remove button for redirect 
removeElement.addEventListener('click', function (e) {
    // product.title = ""
    removeProduct(product.id)
    saveProducts(products)
    location.assign('./index.html')
})
//sync data between pages
window.addEventListener('storage', function (e) {
    if (e.key === 'product') {
        const products = JSON.parse(e.newValue);
        product = products.find(function (item) {
            return item.id === productId
        })
        if (product === undefined || null) {
            location.assign('/index.html')
        }

        titleElement.value = product.title
        priceElement.value = product.price
    }
})
