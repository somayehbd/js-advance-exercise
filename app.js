
let userAccount = { income: 0, cost: 0 }
//income
let AddIncome = function (userAccount, amount) {
    userAccount.income = userAccount.income + amount
    console.log(`income:${userAccount.income} balance:${userAccount.income - userAccount.cost}`)
}

// cost 
let addCost = function (userAccount, amount) {
    userAccount.cost = userAccount.cost + amount
    console.log(`addoutgo:${userAccount.cost} balance:${userAccount.income - userAccount.cost}`)
}

// Examples:
AddIncome(userAccount, 2000)
addCost(userAccount, 160)



