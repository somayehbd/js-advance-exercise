
let products = getSavedProducts()

const filters = {
    searchItem: '',
    availableProduts: false,
    sortBy: 'byEdited'
}

renderProducts(products, filters)
//input event for searchProducts
document.querySelector('#searchProducts').addEventListener('input',  (e)=>{
    filters.searchItem = e.target.value
    renderProducts(products, filters)
})
// event for add products
document.querySelector('#Add-product-form').addEventListener('submit',  (e)=> {
    e.preventDefault()
    const id = uuidv4()
    products.push({
        id: id,
        title: e.target.elements.ProductTitle.value,
        exist: true,
        created: new Date(),
        updated: new Date()
    })
    saveProducts(products)
    renderProducts(products, filters)
    e.target.elements.value = ''
})
// checkbox event for available products
document.querySelector('#checkbox').addEventListener('change',  (e)=> {
    filters.availableProduts = e.target.checked
    renderProducts(products, filters)

})
//function for localStorage
window.addEventListener('storage',  (event)=> {
    if (event.key === 'product') {
        const products = JSON.parse(event.newValue);
        renderProducts(products, filters)
    }
})
//function for sort element by edited
document.querySelector('#sort').addEventListener('change',  (e)=> {
    filters.sortBy = e.target.value
    renderProducts(products, filters)
})
