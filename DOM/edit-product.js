const titleElement = document.querySelector('#product-title')
const priceElement = document.querySelector('#product-price')

const productId = location.hash.substring(1)
const products = getSavedProducts()
const product = products.find(function (item) {
    return item.id === productId
})
if (product === undefined || null) {
    location.assign('/index.html')
}

titleElement.value = product.title
priceElement.value = product.price

//update product info 
titleElement.addEventListener('input',function(e){
    e.preventDefault()
    product.title = titleElement.value;
    product.price = priceElement.value;
    saveProducts(products)
})
