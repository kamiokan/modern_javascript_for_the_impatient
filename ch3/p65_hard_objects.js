const createAccount = () => {
    let balance = 0
    return {
        deposit: amount => {
            balance += amount
        },
        withdraw: amount => {
            if (balance >= amount) {
                balance -= amount
            }
        },
        getBalance: () => balance
    }
}

const harryAccount = createAccount()
console.log(harryAccount.getBalance())
harryAccount.deposit(50000)
harryAccount.withdraw(5000)
console.log(harryAccount.getBalance())
harryAccount.balance = 20  // これでは書き換えできない！是すなわち堅いオブジェクト也！！
console.log(harryAccount.getBalance())
