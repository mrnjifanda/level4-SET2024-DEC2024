def say_hello():
    print("Hello class")

def say_hello_with_name(name):
    print(f"Hello, {name}")

def format_name(name):
    return name.upper()

def calcul(first_number = 2 , second_nomber = 100, opperator = '+'):

    if opperator == '+':
        return first_number + second_nomber
    else:
        if second_nomber != 0:
            return first_number / second_nomber
        else:
            return "Please enter the demominator"
    
# calcul(2, 100, '-')
calcul(opperator='-')