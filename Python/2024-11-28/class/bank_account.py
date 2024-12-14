class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        self.__balance += amount
    
    def withdraw(self, amount):

        if (amount > self.__balance):
            print("Insufficient balance")
        else:
            self.__balance -= amount
    
    def show_balance(self):
        print(f"The balance is: {self.__balance}")

destiny = BankAccount(1)
destiny.deposit(2)
destiny.withdraw(3)
destiny.show_balance()
