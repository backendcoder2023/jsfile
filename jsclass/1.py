# a = """ Hello World!  
#      this is dhanu"""
# b = 35
# # print(a[1:8])
# # print('I am dhanu and \nI am \x66rom \'Indi\141.\'')
# print('my no is %d' % (b))

# a = {
#     "func":lambda x, y: print(x + y)
# }
# a["func"](5, 7) 

# a={1:2,3:4}
# b={1:2,2:4}
# for i in a:
#     if i in b:
#         b[i]+=a[i]
#     else:
#         b[i]=a[i]

# print(b)

# dict1 = ['dhanu','kruti','megha']
# dict2 = ['nishu','aashu','vishu']
# data = dict(zip(dict1,dict2))
# data['yoga'] = 'suchi'
# del data['yoga']
# # print(len(data))
# # x = data.keys()
# for i,j in data.items():
#     print(i,j)

# home = {
#     'aai' : 'megha',
#     'baba' : 'sanjay'
# }
# bhai = {
#     'vansh' : 'akshu',
#     'anu' : 'gauri'
# }

# me = {
#     'me' : 'dhanu',
#     'she' : 'yashu'
# }

# complete = {
#     'home' : home,
#     'bhai' : bhai,
#     'me' : me
# }
# me.update({'me' : 'dhanashri'})
# print(complete['me']['me'])

# def dhanu():
#     print("hey")
#     print("hello")

# def add(x,y):
#     c = x + y
#     return c

# result = add(5,5)
# print(result)
# dhanu() 

'''n = int(input())
k = []
for i in range(n):
    j = input()
    k.append(j)
k = tuple(k)
print(k)'''

# s = u'\u0938'
# print(s)

# s = 89
# dir(s)

# help(s.swapcase)

# m = 'dhanu'
# n = 21
# print('my name is ',m,'my age is',n)

'''year = int(input())
if year % 4== 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print('Leap year')
        else:
            print('not leap year')
    else:
        print('leap year')
else:
    print('not leap year')'''

# a = {1,2,3,4,5}
# print(a)

# for n in "banana":
#     print(n)

'''tust = [('a',1), ('b',2), ('c',3)]
di = {key: i for key, i in tust }
print(di)''' # dictinary comprehetion of list of tuple

'''class tring:
    name = "dhanu"
    field = "IT Student"
    year = "1st Year"
    def info(self):
        print(f'{self.name} is {self.field} in {self.year}')
A = tring()
A.info()'''  # classes and object


'''def find(str):
    return [i for i in str if len(i) >= 5]
newstr = ['dhanu', 'kruti','megha','chhaku']
str1 = find(newstr)
print(str1)

def dictionary(num):
    return {n: n**2 for n in num}
num = [1,2,3,4,5,6]
result = dictionary(num)
print(result)

t = list(map(int,input().split()))
print({i: i**2 for i in t})
'''
'''t = tuple(map(int, input().split()))
r = tuple(map(int, input().split()))
print(tuple(set(t) & set(r)))'''

'''t = list(map(int, input().split()))
print(sum(t) / len(t) if len(t) > 0 else 0)'''

'''# t = list(map(int, input().split()))
t = {'a':34, 'v':67, 'n':78, 'u': 90}
# t = {i: i+2 for i in t}
print(max(t, key = t.get))'''



'''t = [1,2,3,4,5]
def square(num):
    return num**2
number = list(map(square,t))
print(number)
'''
