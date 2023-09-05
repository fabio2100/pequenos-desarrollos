def globantEncoder(yearBirth,monthBirth,dayBirth,yearPassport,monthPassport,dayPassport):
    try: 
        yearBirth = int(yearBirth)
        monthBirth = int(monthBirth)
        dayBirth = int(dayBirth)
        yearPassport = int(yearPassport)
        monthPassport = int(monthPassport)
        dayPassport = int(dayPassport)
    except ValueError:
        return print('Some value is not possible to convert to int')
    if yearBirth < 1900 or yearBirth > 2023 or monthBirth < 1 or monthBirth > 12 or dayBirth < 1 or dayBirth > 31 or yearPassport < 1900 or yearPassport > 2023 or monthPassport < 1 or monthPassport > 12 or dayPassport < 1 or dayPassport > 31:
        raise ValueError('Some data is out of range')
    if yearBirth > yearPassport or (yearBirth == yearPassport and monthBirth > monthPassport) or (yearBirth == yearPassport and monthBirth == monthPassport and dayBirth > dayPassport):
        print('The date of birth should not be greater than the date of passport')
    if ((monthBirth==4 or monthBirth==6 or monthBirth==9 or monthBirth==11) and dayBirth==31) or (monthBirth==2 and (dayBirth==29 or dayBirth==30 or dayBirth==31) and yearBirth%4!=0 and yearBirth!=1900) or (monthBirth==2 and yearBirth!=1900 and yearBirth%4==0 and (dayBirth==30 or dayBirth==31)) or (monthBirth==2 and yearBirth==1900 and (dayBirth==29 or dayBirth==30 or dayBirth==31)):
        print('The date of birth is wrong. The day of birth is not allowed for the month entered. Please, check the data.However, the encoder works')
    if ((monthPassport==4 or monthPassport==6 or monthPassport==9 or monthPassport==11) and dayPassport==31) or (monthPassport==2 and (dayPassport==29 or dayPassport==30 or dayPassport==31) and yearPassport%4!=0 and yearPassport!=1900) or (monthPassport==2 and yearPassport!=1900 and yearPassport%4==0 and (dayPassport==30 or dayPassport==31)) or (monthPassport==2 and yearPassport==1900 and (dayPassport==29 or dayPassport==30 or dayPassport==31)):
        print('The date of passport is wrong. The day of passport is not allowed for the month entered. Please, check the data.However, the encoder works')
    y1N=yearBirth-1900
    y2N=yearPassport-1900
    m1N=monthBirth-1
    m2N=monthPassport-1
    d1N=dayBirth-1
    d2N=dayPassport-1
    dia1Formateado=d1N+31*m1N+372*y1N
    dia2Formateado=d2N+31*m2N+372*y2N
    diaResultado=46128*dia2Formateado+dia1Formateado
    binDiaResultado = bin(diaResultado)[2:]
    lenString = len(binDiaResultado)
    while lenString < 31:
        binDiaResultado = '0'+binDiaResultado
        lenString +=1
    return binDiaResultado

def globantDecoder(encoded):
    if len(encoded)!=31:
        raise ValueError('The length of the encoded data has to be 32')

    number = 0
    for i in range(31):
        if encoded[i] != '0':
            number += 2**(30-i)    

    d2 = int(number/46128)
    d1 = number % 46128
    ano1 = int(d1/372)+1900
    ano1Resto = d1%372
    mes1 = int(ano1Resto/31)
    dia1 = ano1Resto - 31*mes1 + 1
    ano2 = int(d2/372)+1900
    ano2Resto = d2%372
    mes2 = int(ano2Resto/31)
    dia2 = ano2Resto - 31*mes2 + 1
    if(ano1<1900 or ano1>2023 or ano2<1900 or ano2>2023 or mes1<0 or mes1>11 or mes2<0 or mes2>11 or dia1>31 or dia1<1 or dia2>31 or dia2<1):
        print('Some data is out of range. Maybe the input string is wrong')
    return [ano1,mes1+1,dia1,ano2,mes2+1,dia2]  
