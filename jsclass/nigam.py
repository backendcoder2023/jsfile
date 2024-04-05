# Frappie Assesment 1


#  1) Write a Python program that checks if a given year is a leap year. A leap year is divisible by 4, 
#  except for years that are divisible by 100 but not by 400.

'''
T = int(input())
if T % 400 == 0:
    print("It is a leap year")
elif T % 100 == 0:
    print("It is not a leap year")
elif T % 4 == 0:
    print("It is a leap year")
else:
    print("It is not a leap year")
'''

# 2) Create an if-elif-else block to determine the grade based on a student’s score 
# (e.g., A for 90-100, B for 80-89, etc.).

'''
T = int(input())
if T > 90 and T < 100:
    print("A")
elif T > 80 and T < 89:
    print("B")
elif T > 50 and T < 87:
    print("C")
else:
    print("Average student")

'''
# 3) Generate the first n prime numbers using a while loop.

'''
N = int(input())
B = 2
while N != 0:
    for i in range(2, B):
        if B % i == 0:
           break
    else:
        print(B)
        N -= 1
    B += 1
        '''

# 4) Calculate the sum of all even numbers from 1 to 100 using a for loop.

'''
T = 0
for num in range(2, 101, 2): 
    T += num
print(T)
'''

# 5) Write a Python function that takes a list of integers as input and returns the product of all positive numbers in the list.

'''
T = list(map(int, input().split(',')))
B = []
for i in range(len(T)):
    if T[i] > 0:
        T[i] *= T[i]
        B.append(T[i])
print(B)
        '''

# 6) Create a list of fruits and print each fruit in reverse order.
'''
T = ['apple', 'mango', 'pineappple', 'banana']
T.reverse()
print(T)
        '''

# 7) Define a tuple containing the names of three programming languages. Print each language name along with its length.

'''
T = ('Python', 'javascript', 'HTML')
for i in T:
    print(i,len(i))
                    '''

'''
T = tuple(map(str,input().split()))
for i in T:
    print(i,len(i))
      '''          


# 8) Create a Python function that checks if two sets are disjoint (i.e., have no common elements)

'''
def is_disjoint(given, other):
    return given.isdisjoint(other)
given = {1, 2, 3}
other = {4, 5, 6}
print(is_disjoint(given, other))   
        '''

# 9) Find the union of two sets containing integers from 1 to 10 and 5 to 15.

'''
set2 = {1,2,3,4,5,6,7,8,9,10}
set1 = {5,6,7,8,9,10,11,12,13,14,15}
print(set2.union(set1))
        '''

# 10) Write a Python program that takes data from an array containing student names and their scores. 
# Calculate the average score for each student and store it in a dictionary.

'''
another = {'Alice':[89,35,67,78],'kruti':[23,45,34,21],'komi':[11,12,87,23]}
ndict={}
for key,value in another.items():
    avg=sum(value)/(len(value))
    ndict[key]=avg
print(ndict)
            '''

# 11) Create a dictionary representing a book with keys for title, author, and publication year.

'''
book = {'Author': 'Gaur gopal das', 'title': 'amazing secrets of life', 'year': 2024, 'available language': 'English'}
print(book)
            '''

# 12) Define a Python function called factorial_recursive that calculates the factorial of a non-negative integer using recursion.

'''
def recursive(T):
    if T == 0:
        print(1)
    else:
        R = 1 
        for i in range(2,T + 1):
            R *= i
        print(R)
recursive(int(input()))
                    '''

# 13) Write a function that takes a list of numbers and returns the maximum value.


'''
T = list(map(int, input().split()))
A = T[0]
for i in T:
    if i > A:
        A = i
print(A)
        '''

# 14) Create a Python program that reads an integer from the user. Handle any invalid input (e.g., non-integer values) 
# by displaying an appropriate error message.
'''
def error(T):
    if T < 0:
        raise ValueError("invalid literal for int() with base 10:{T}")
try:
    T = int(input())
    error(T)
except ValueError as e:
    print(e)
            '''

# 15) Raise a custom exception when dividing by zero in a function.

'''
def error(X, Y):
    if Y == 0:
        raise ZeroDivisionError("Division by zero is not allowed")
    else:
        print(X / Y)
try:
    X, Y = map(int, input("Enter two numbers separated by space: ").split())
    error(X, Y)
except ZeroDivisionError as e:
    print(e)
            '''

# 16) Create a Python function that divides two numbers. Handle the case when the denominator is zero by displaying an error message.

'''
def handle_error(X, Y):
    try:
        if Y == 0:
            raise ZeroDivisionError("Zero is not allowed")
        else:
            print(X / Y)
    except ZeroDivisionError as e:
        print(e)

X, Y = map(int, input().split())
handle_error(X, Y)
                '''

# 17) Define a Python function that generates the Fibonacci sequence up to a specified number of terms.

'''
def fib(N):
    a = 0
    b = 1
    if N == 1:
        print(a)
    else:
        for i in range(2, N):
            c = a + b
            a = b 
            b = c
            print(c)
fib(int(input()))
'''

# 18) Read a text file and create a dictionary where keys are words, and values are their frequencies.

'''
str1 = list(map(str, input().split())) 
A = set(str1)
B = {}
for i in A:
    key = i
    C  = str1.count(i)
    B[key] = C
print(B)
          '''      

# 19) Write a Python function that takes two sets as input and returns their intersection (common elements).

'''
A = set(map(int, input().split()))
B = set(map(int, input().split()))
D = A.intersection(B)
print(D)
        '''

# 20) Define two variables and swap their values using tuple unpacking.
'''
A = ('megha', 'dhanu')
A = (A[1], A[0])
print(A)
        '''

# 21) Create a list of squares of numbers from 1 to 10 using list comprehension.

'''
T = 11
pro = [i*i for i in range(1,T)]
print(pro)
        '''

# 22) Write a Python function that takes a list as input and returns a new list containing only the unique elements (no duplicates).

'''
T = list(map(int, input().split()))
A = set(T)
B = list(A)
print(B)
        '''

# 23) Calculate the factorial of a given positive integer using a for loop.
'''
T = int(input())
if T < 0:
    print("This is negavtive number")
else:
    R = 1 
    for i in range(2,T + 1):
        R *= i
    print(R)
            '''

# 24) Write a Python program that checks if a given string is a palindrome (reads the same backward as forward).

'''
T = input()
A = ''.join(reversed(T))  
if T == A:
    print("Yes, It is a palindrome")
else:
    print("No, it is not")
'''

# 25) Create a function that takes a character as input and determines whether it’s a vowel or a consonant.
'''
T = input()
vowel = 'aeiouAIEOU'
if T in vowel:
    print("Vowel")
elif T.isalpha():
    print("Consonant")
else:
    print("not a valid character")
        '''
##############################################
'''
def is_vowel(num):
    vowel = 'aeiouAIEOU'
    if num in vowel:
        print("Vowel")
    elif num.isalpha():
        print("Consonant")
    else:
        print("not a valid character")

is_vowel('a')
         '''

