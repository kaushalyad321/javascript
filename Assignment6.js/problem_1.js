// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
 class BankAccount{

    constructor (balance,owner){
        this.balance=balance ;
        this.owner=owner ;
    }
    
    deposit(rupees){
       if(rupees<=0){
            console.log("this is not valid amount to deposit") ;
       }
       else{
            this.balance+=rupees ;
       }
       
    }
    withdraw(rupees){
        if(rupees<=0){
            console.log("this amount is not valid") ;
        }
       else if(rupees>this.balance){
            console.log("you don't have sufficient balance to withdraw money") ;
        }
        else{
            this.balance-=rupees ;
            console.log(`your transaction is successfull and withdrawal money is ${rupees}`) ;
        }
    }

    displayBalance(){
            console.log(`Hi ${this.owner} your bank balance is ${this.balance}`) ;
    }
    
 }

 const ram =new BankAccount(500,"ram") ;
 console.log(ram.owner,ram.balance) ;
 ram.deposit(100) ;
 ram.withdraw(10) ;
 ram.displayBalance() ;