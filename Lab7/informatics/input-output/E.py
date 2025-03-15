length = 109
v = int(input())
t = int(input())
if abs(v) < length:
    print(length - (abs(v) * t))
else:
    print((abs(v) * t) - length)

