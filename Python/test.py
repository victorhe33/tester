# patient_name = "John Smith"
# age = 20
# new_patient = True

# print(age)1

# 

# my_name = input("What is your name? ")

# print("Hello " + my_name)

# 

# birth_year = input("Enter your birth year: ")
# age = 2020 - int(birth_year)
# print(bool(age))

# first = input("First: ")
# second = input("Second: ")
# sum = float(first) + float(second)
# print("Sum: " + str(sum))

# course = 'Python for Beginners'
# print(course.upper())

# temperature = 3

# if temperature > 30:
#   print('It\'s a hot day')
#   print('keep going!')

# print('always')

# weight = float(input('Weight: '))
# measure = input('(K)g or (L)bs: ').capitalize()
# if measure == 'K':
#   weight *= 2.2
# else:
#   weight /= 2.2
# print('Weight in ' + measure + ': ' + str(round(weight, 1)))

# i = 1
# while i <= 10:
#   print(i * '*')
#   i += 1

# names = ['Victor', 'Gio', 'Hazel']
# # print(names)

# i = 0
# while i < len(names):
#   print(names[i])
#   i += 1

# print(names[1:2])

# names.insert(0, 'Oliver')
# names.remove('Hazel')

# print(names)

# FOR LOOP W/ LIST aka Array

# numbers = [1, 2, 3, 4, 5]

# for item in numbers:
#   print(item)

# i = 0
# while i < len(numbers):
#   print(numbers[i])
#   i += 1

## RANGE OBJECT

# numbers = range(5)
# for number in numbers:
#   print(number) ## 0 - 4

# numbers2 = range(5, 10, 2)
# for number in numbers2:
#   print(number) ## 5, 7, 9

# for number in range(5):
#   print(number)

# TUPLES - immutable

# numbers = (1, 2, 3)
# numbers[0] = 4 -> will error!
# numbers

## FUNCTIONS

# def greet(first_name, last_name):
#   print(f"Hi {first_name} {last_name}")

# greet('Victor', 'He')

# Required vs OPTIONAL PARAMETER
# def increment(number, by=1):
#   return number + by

# print(increment(5, 5)) # -> 6

# multi-param
# this prefix * turns your param into a tuple

# def multiply(*numbers):
#   total = 1
#   for number in numbers:
#     total *= number
#   return total

# print(multiply(2, 3, 4, 5)) # -> 120

def save_user(**user):
  print(user["name"])

save_user(id=1, name="John", age=22) # -> dictionary aka an object { 'id': 1, 'name': 'John', 'age': 22 } 

# SCOPE

message = "a"

def greet(name):
  global message
  message = "b"

print(message) # -> b