//function for get products from localstorage
const getSavedProducts = () => {
    const productsJSON = localStorage.getItem('product')
    return productsJSON !== null ? JSON.parse(productsJSON) : [];
}

// function for save products in localStorage
const saveProducts = (products) => {
    localStorage.setItem('product', JSON.stringify(products))
}
//function for delete product
const removeProduct = (id) => {
    const producindex = products.findIndex((item) => {
        return item.id == id
    })

    if (producindex == -1)
        return;

    products.splice(producindex, 1)
}
// function for to taggle property exist
const toggleProduct = (id) => {
    const productIndex = products.find((item) => {
        return item.id == id
    })
    if (productIndex == undefined || productIndex == null)
        return
    productIndex.exist = !productIndex.exist
    saveProducts(products)
}
// function for sort products
const sortProducts = (products, sortBy) => {
    if (sortBy === 'byEdited') {
        return products.sort(function (a, b) {
            if (a.updated < b.updated)
                return 1
            else if (a.updated > b.updated) {
                return -1
            }
            else {
                return 0
            }

        })
        //sort by created
    } else if (sortBy === 'byCreated') {
        return products.sort((a, b) => {
            if (a.created > b.created) {
                return -1
            } else if (a.created < b.created) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return products
    }
}
//function for filter products
const renderProducts = (products, filters) => {
    products = sortProducts(products, filters.sortBy)
    let filteredProducts = products.filter((item) => {
        return item.title.toLowerCase().includes(filters.searchItem)
    })
    //checkbox for availableProdutcs
    filteredProducts = filteredProducts.filter((item) => {
        if (filters.availableProduts) {
            return item.exist
        }
        else {
            return true
        }
    })
    // to display products
    document.querySelector('#products').innerHTML = ''
    filteredProducts.forEach((item) => {
        document.querySelector('#products').appendChild(createProductDom(item))
    })
}
//function for create span,remove and checkbox
const createProductDom = (product) => {
    const productEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const productItem = document.createElement('a')
    const removeButton = document.createElement('button')
    const img = document.createElement('img')
    img.setAttribute('src', 'data:image/png;base64,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')
    productEl.appendChild(img)
    img.className='img'
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = !product.exist
    checkbox.className = 'checkbox'
    productEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleProduct(product.id)
    })

    productItem.textContent = `${product.title} ${product.price}`
    productItem.setAttribute('href', `./edit-product.html#${product.id}`)
    productItem.className = 'a'
    productEl.appendChild(productItem)

    removeButton.textContent = 'Remove'
    removeButton.className = 'remove'
    productEl.appendChild(removeButton)


    removeButton.addEventListener('click', function () {
        removeProduct(product.id)
        renderProducts(products, filters)
    })
    return productEl
}
const lastEditMessage = (updated) => {
    let result = moment(updated)
    return `last Updated: ${result.format('MMM Do YYYY')}`

}
