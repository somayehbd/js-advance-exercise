

document.querySelector('#Add-product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = e.target.elements.ProductTitle.value;
    const productList = document.createElement('p')
    productList.textContent = productName
    document.querySelector('#product').appendChild(productList)
    e.target.elements.ProductTitle.value = ''
})


document.querySelector('#search-products').addEventListener('input', function (e) {
    e.preventDefault()
    const searchTitle = e.target.value.toLowerCase();
    const productList = document.querySelectorAll('#product p');
    productList.forEach(function (productNode) {
        const title = productNode.textContent.toLowerCase();
        if (!title.includes(searchTitle)) {
           productNode.style.display='none'
        } 
        else{
            productNode.style.display='block'
        }
    });


})

