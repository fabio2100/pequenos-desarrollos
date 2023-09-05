
# se codifica mes - dia -> un numero entre 1 y 372 o 366?? -> de 1-1 a 31-12
# luego el año -> un numero entre 1 y 124 -> de 1900 a 2023
# luego se multiplica dia * año -> se obtiene un nro entre 1 y 45384 o 46128
# se realiza lo mismo con la otra fecha y se multiplican ambos valores obtenidos, obteniendo un valor entre 1 y 2059707456 o 2127792384
# Luego este nro se lleva a binario, obteniendo un nro de 31 dígitos de longitud 

def convierteDias(year,month,day):
    yearNormalizado = year - 1900
    monthNormalizado = month-1
    dayNormalizado = day-1
    diaEnFormatoN = dayNormalizado + monthNormalizado * 31 + yearNormalizado * 372
    #print(diaEnFormatoN)
    return diaEnFormatoN

def convierteDiasDosFechas(y1,m1,d1,y2,m2,d2):
    y1N=y1-1900
    y2N=y2-1900
    m1N=m1-1
    m2N=m2-1
    d1N=d1-1
    d2N=d2-1
    dia1Formateado=d1N+31*m1N+372*y1N
    dia2Formateado=d2N+31*m2N+372*y2N
    diaResultado=46128*dia2Formateado+dia1Formateado
    #nro en binario
    binDiaResultado = bin(diaResultado)[2:]
    lenString = len(binDiaResultado)
    while lenString < 31:
        binDiaResultado = '0'+binDiaResultado
        lenString +=1
    return binDiaResultado



def globantEncoder(yearBirth=1901,monthBirth=1,dayBirth=1,yearPassport=1901,monthPassport=1,dayPassport=1):
    # return string or binario or hexa with the data
    # restricciones 
    try: 
        yearBirth = int(yearBirth)
        monthBirth = int(monthBirth)
        dayBirth = int(dayBirth)
        yearPassport = int(yearPassport)
        monthPassport = int(monthPassport)
        dayPassport = int(dayPassport)
    except ValueError:
        return print('Some value is not possible to convert in int')
    if yearBirth < 1900 or yearBirth > 2023 or monthBirth < 1 or monthBirth > 12 or dayBirth < 1 or dayBirth > 31 or yearPassport < 1900 or yearPassport > 2023 or monthPassport < 1 or monthPassport > 12 or dayPassport < 1 or dayPassport > 31:
        raise ValueError('Some data is out of range')

    #Aoa si 
    #nro dia nacimiento (al igual q el dia de emisión, variará entre 1 y 31*12*124=46128)
    #empezamos a contar desde el 1-1-1900 siendo este el dia 1 y asi sucesivamente hasta el 31-12-2023 q sera el 46128
    convierteDias(yearBirth,monthBirth,dayBirth)

def globantDecoder(encoded):

    #return (yearBirth, monthBirth, dayBirth, yearPassport, monthPassport, dayPassport, okBoolean)
    return 'hola mundi'


#globantEncoder(yearBirth='2023')


#nums = []
#visited = set()
#dup = [x for x in nums if x in visited or (visited.add(x) or False)]
#print(dup)

#convierteDias(2023,12,31)
#print(convierteDiasDosFechas(1900,1,1,2023,12,31))
#n1 = convierteDiasDosFechas(1900,1,1,2023,12,31)
#print(convierteDiasDosFechas(1900,1,1,2023,12,31))
n2 = convierteDiasDosFechas(1900,1,1,2023,12,31)
#print(convierteDiasDosFechas(1900,1,2,1900,1,1))
#n3 = convierteDiasDosFechas(1900,1,2,1900,1,1)
#print(convierteDiasDosFechas(1900,1,1,1900,1,2))
#n3 = convierteDiasDosFechas(1900,1,1,1900,1,2)
#print(convierteDiasDosFechas(1906,12,14,2004,10,8))
n4 = convierteDiasDosFechas(1906,10,14,2004,10,8)
#print(convierteDiasDosFechas(1999,12,31,1999,12,31))
n5 = convierteDiasDosFechas(2000,8,31,1999,12,31)
#print(convierteDiasDosFechas(2023,12,31,2023,12,31))
n6 = convierteDiasDosFechas(2023,12,31,2023,12,31)
#print(convierteDiasDosFechas(2023,12,31,1900,1,1))
n7 = convierteDiasDosFechas(1972,6,28,1985,3,21)


def decodeFunction(encoded):
    if len(encoded)!=31:
        raise ValueError('The length of the encoded data has to be 32')

    number = 0
    for i in range(31):
        if encoded[i] != '0':
            number += 2**(30-i)    

    d2 = int(number/46128)
    d1 = number % 46128
    ano1 = int(d1/372)
    ano1Resto = d1%372
    mes1 = int(ano1Resto/31)
    dia1 = ano1Resto - 31*mes1 + 1
    ano2 = int(d2/372)
    ano2Resto = d2%372
    mes2 = int(ano2Resto/31)
    dia2 = ano2Resto - 31*mes2 + 1
    
    return [ano1+1900,mes1+1,dia1,ano2+1900,mes2+1,dia2]  

#nDeco1 = decodeFunction(n1)
nDeco2 = decodeFunction(n2)
#nDeco3 = decodeFunction(n3)
nDeco4 = decodeFunction(n4)
nDeco5 = decodeFunction(n5)
nDeco6 = decodeFunction(n6)
nDeco7 = decodeFunction(n7)

#print(nDeco1)
print(nDeco2)
##print(nDeco3)
print(nDeco4)
print(nDeco5)
print(nDeco6)
print(nDeco7)


r = [1924,6,8,2005,7,16]

print(r==decodeFunction(convierteDiasDosFechas(r[0],r[1],r[2],r[3],r[4],r[5])))

for x in range(1900,2024):
    for y in range(1,13):
        for z in range(1,32):
            for x1 in range(1900,2024):
                for y1 in range(1,13):
                    for z1 in range(1,32):
                        if [x,y,z,x1,y1,z1] != decodeFunction(convierteDiasDosFechas(x,y,z,x1,y1,z1)):
                            print('distinto',[x,y,z,x1,y1,z1])
            