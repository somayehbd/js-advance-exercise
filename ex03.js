// const cartItemsay = ['bok1', 'book2', 'book3', 'book4']

let cartItems = function (items) {
     console.log(`total cartItems are:${items.length}`)
    
     items.forEach(function (item,index) {
        console.log(`index:${index} cartItemsName:${item}`)
    })
    console.log(`delete first element :${items.shift()} \ndeleted third element :${items.splice(1, 1)}`)
  
}
cartItems(['book1', 'book2', 'book3', 'book4'])
