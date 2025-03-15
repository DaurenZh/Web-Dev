age = int(input())

if age % 4 == 0 and age % 100 != 0 or age % 400 == 0:
    print('YES')
else:
    print('NO')

