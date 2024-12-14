age = input("Please enter your age: ")

age = int(age)

# Simple if stament
if age >= 18 :
    print("Your are major")


# if else Statement
if age >= 18 :
    print("You are major")
else:
    print("Go to school bro")

#  Match (switch case)
match age:
    case _ if age < 12 :
        reduction = 50
        print(f"You have {reduction}%")
    case _ if age <= 19 :
        reduction = 25
        print(f"You have {reduction}%")
    case _ if age <= 65 :
        reduction = 30
        print(f"You have {reduction}%")
    case _:
        print("No reduction")