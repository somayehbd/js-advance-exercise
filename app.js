
let userAccount = { income: 0, cost: 0 }
//income
let AddIncome = function (userAccount, amount) {
    userAccount.income = userAccount.income + amount
    // console.log(`income:${userAccount.income} balance:${userAccount.income - userAccount.cost}`)
    printBalance(userAccount, 1, amount);
}

// cost 
let addCost = function (userAccount, amount) {
    userAccount.cost = userAccount.cost + amount
    // console.log(`addoutgo:${userAccount.cost} balance:${userAccount.income - userAccount.cost}`)
    printBalance(userAccount, 2, amount);
}
let printBalance=function(useraccount, operationtype, amount){
    let balance=useraccount.income - useraccount.cost
    let operationLabel = operationtype == 1 ? 'income' : 'cost';
    console.log(`${operationLabel}: ${amount}, balance:${balance}`)
}
// Examples:
AddIncome(userAccount, 100)
addCost(userAccount, 30)
