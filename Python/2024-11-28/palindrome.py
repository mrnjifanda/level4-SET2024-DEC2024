word = input("Please enter word: ")

remove_space = ''.join(word.split()).lower()
length = len(remove_space)
is_palindrome = True

for i in range(length // 2) :

    if remove_space[i] != remove_space[length - i - 1] :
        is_palindrome = False
        break

if is_palindrome :
    print("Yes")
else :
    print("No")
