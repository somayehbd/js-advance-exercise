const getSavedProducts = function () {
    const productsJSON = localStorage.getItem('product')
    console.log(productsJSON)
    if (productsJSON !== null)
        return JSON.parse(productsJSON)
        else{
            return []
        }
}

const saveProducts=function(products){
    localStorage.setItem('product',JSON.stringify(products))
}