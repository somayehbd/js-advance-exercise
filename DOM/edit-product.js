const titleElement = document.querySelector('#product-title')
const priceElement = document.querySelector('#product-price')
const removeElement = document.querySelector('#remove-button')
const dateElement = document.querySelector('#last-edit');

const productId = location.hash.substring(1)
let products = getSavedProducts()
let product = products.find( item => item.id === productId)
if (product === undefined || null) {
    location.assign('/index.html')
}

titleElement.value = product.title
priceElement.value = product.price
dateElement.textContent=lastEditMessage(product.updated)

//update product info 
titleElement.addEventListener('input',  (e) =>{
    e.preventDefault()
    product.title = e.target.value; 
    product.updated=new Date()
    saveProducts(products)
})

priceElement.addEventListener('input',  (e) =>{
    e.preventDefault()
    product.price = e.target.value;
    product.updated=new Date()
    saveProducts(products)
})

//remove button for redirect 
removeElement.addEventListener('click',  (e)=> {
    // product.title = ""
    removeProduct(product.id)
    saveProducts(products)
    location.assign('./index.html')
})
//sync data between pages
window.addEventListener('storage',  (e) =>{
    if (e.key === 'product') {
        const products = JSON.parse(e.newValue);
        product = products.find( item=> item.id === productId)
        if (product === undefined || null) {
            location.assign('/index.html')
        }

        titleElement.value = product.title
        priceElement.value = product.price
    }
})
