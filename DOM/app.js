
let products = getSavedProducts()

const filters = {
    searchItem: '',
    availableProduts: false,
    sortBy:'byEdited'
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
        exist: true,
        created: new Date(),
        updated: new Date()
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
//function for localStorage
window.addEventListener('storage', function(event) {
    if (event.key === 'product') {
      const products = JSON.parse(event.newValue);
      renderProducts(products, filters)
    }
})
//function for select element
document.querySelector('#sort').addEventListener('change',function(e){
  filters.sortBy=e.target.value
  renderProducts(products, filters)
})
