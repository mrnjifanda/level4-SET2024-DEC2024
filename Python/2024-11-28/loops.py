# lists = [ 'Orange', 'Apple', 'Ananas' ]

# for list in lists :
#     print(list)

number = int ( input("Enter a positive number: ") )

if number <= 0 :
    print("Please enter a positive number.")
else :
    result = sum(range(1, number))
    print(f"Result equal to {result}")