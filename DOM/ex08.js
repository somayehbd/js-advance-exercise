document.querySelector('#Add-product-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = e.target.elements.ProductTitle.value;
    const productList = document.createElement('p')
    productList.textContent = productName
    document.querySelector('#product-list').appendChild(productList)
    console.log(productList)
    e.target.elements.ProductTitle.value = ''
})



