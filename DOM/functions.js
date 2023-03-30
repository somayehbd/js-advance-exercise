

//function for get products from localstorage
const getSavedProducts = () => {
    const productsJSON = localStorage.getItem('product')
      return productsJSON !== null ? JSON.parse(productsJSON)  :[];
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

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = !product.exist
    productEl.appendChild(checkbox)
    checkbox.addEventListener('change', function () {
        toggleProduct(product.id)
    })

    productItem.textContent = product.title
    productItem.setAttribute('href', `./edit-product.html#${product.id}`)
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
    return result.format('MMM Do YYYY')
}
