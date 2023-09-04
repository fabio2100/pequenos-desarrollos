
# se codifica mes - dia -> un numero entre 1 y 372 o 366?? -> de 1-1 a 31-12
# luego el año -> un numero entre 1 y 124 -> de 1900 a 2023
# luego se multiplica dia * año -> se obtiene un nro entre 1 y 45384 o 46128
# se realiza lo mismo con la otra fecha y se multiplican ambos valores obtenidos, obteniendo un valor entre 1 y 2059707456 o 2127792384
# Luego este nro se lleva a binario, obteniendo un nro de 31 dígitos de longitud 

def convierteDias(year,month,day):
    while year - 1900 >= 0:
        print(year)
        year  = year - 1

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


globantEncoder(yearBirth='2023')