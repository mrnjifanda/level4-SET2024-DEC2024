import calculs

a = float(input("Please enter the first number: "))
b = float(input("Please enter the second number: "))
sign = input("Please select one sign in +, -, * or / ")

result = None

if (sign == "+") :
    result = calculs.addition(a, b)
elif (sign == "-") :
    result = calculs.subtraction(a, b)
elif (sign == "*") :
    result = calculs.multiplication(a, b)
elif (sign == "/") :
    result = calculs.division(a, b)
else :
    result = "Please select a good sign"

print(f"Result: {result}")
