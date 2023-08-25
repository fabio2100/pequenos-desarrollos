# Ejercicio Globant Riddles 2 en python, aparentemente el problema está en la cantidad de dígitos a usar
import sys

x = 91 / 9
print(hex(round(x)))
x = (x+900)/9
x = (x+9000)/9
x = (x+90000)/9
x = (x+900000)/9
x = (x+9000000)/9
x = (x+90000000)/9
x = (x+900000000)/9
x = (x+9000000000)/9
x = (x+90000000000)/9
x = (x+900000000000)/9
y = hex(round(x))
print(y)
newDivisor = hex(9000000000000)
print(newDivisor)

print(x)
print(sys.maxsize)
print(hex(sys.maxsize))