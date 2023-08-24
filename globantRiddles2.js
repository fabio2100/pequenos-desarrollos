// What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater

//para 2 digitos
// a0 - 89 X = 0
for (var x = 0; x <= 9; x++) {
  for (var y = 0; y <= 9; y++) {
    if (x - 89 * y == 0) {
      console.log({ x }, { y });
    }
  }
}

// para 3 digitos
// 10 a0 + a1 - 899 X = 0

for (var x = 0; x <= 9; x++) {
  for (var y = 0; y <= 9; y++) {
    for (var z = 0; z <= 9; z++) {
      if (10 * z + y - 899 * x == 0) {
        console.log({ x }, { y }, { z });
      }
    }
  }
}

// para 4 digitos
// 
for (var d1 = 0; d1 <= 9; d1++) {
    for (var d2 = 0; d2 <= 9; d2++) {
      for (var d3 = 0; d3 <= 9; d3++) {
        for (var d4 = 0; d4 <= 9 ;d4++){
            if (100*d1 + 10*d2 + 1*d3 - 8999*d4 == 0){
                console.log({d1},{d2},{d3},{d4})
            }
        }
      }
    }
}


// 5 digitos
for (var d1 = 0; d1 <= 9; d1++) {
    for (var d2 = 0; d2 <= 9; d2++) {
      for (var d3 = 0; d3 <= 9; d3++) {
        for (var d4 = 0; d4 <= 9 ;d4++){
            for(var d5 = 0; d5 <= 9; d5++){
                if (1000*d1 + 100*d2 + 10*d3 + 1*d4 - 89999*d5 == 0){
                    console.log({d1},{d2},{d3},{d4},{d5})
            }
            }
        }
      }
    }
}

// 6 digitos
for (var d1 = 0; d1 <= 9; d1++) {
    for (var d2 = 0; d2 <= 9; d2++) {
      for (var d3 = 0; d3 <= 9; d3++) {
        for (var d4 = 0; d4 <= 9 ;d4++){
            for(var d5 = 0; d5 <= 9; d5++){
                for(var d6 = 0; d6 <= 9; d6++){
                    if (10000*d1 + 1000*d2 + 100*d3 + 10*d4 + 1*d5 - 899999*d6 == 0){
                        console.log({d1},{d2},{d3},{d4},{d5},{d6})
                } 
            }
            }
        }
      }
    }
}

// 7 digitos
for (var d1 = 0; d1 <= 9; d1++) {
    for (var d2 = 0; d2 <= 9; d2++) {
      for (var d3 = 0; d3 <= 9; d3++) {
        for (var d4 = 0; d4 <= 9 ;d4++){
            for(var d5 = 0; d5 <= 9; d5++){
                for(var d6 = 0; d6 <= 9; d6++){
                    for(var d7 = 0; d7 <= 9; d7++){
                        if (100000*d1 + 10000*d2 + 1000*d3 + 100*d4 + 10*d5 + 1*d6 - 8999999*d7 == 0){
                            console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7})
                    }
                } 
            }
            }
        }
      }
    }
}


// 8 digitos
for (var d1 = 0; d1 <= 9; d1++) {
    for (var d2 = 0; d2 <= 9; d2++) {
      for (var d3 = 0; d3 <= 9; d3++) {
        for (var d4 = 0; d4 <= 9 ;d4++){
            for(var d5 = 0; d5 <= 9; d5++){
                for(var d6 = 0; d6 <= 9; d6++){
                    for(var d7 = 0; d7 <= 9; d7++){
                        for(var d8 = 0; d8 <= 9; d8++){
                            if (1000000*d1 + 100000*d2 + 10000*d3 + 1000*d4 + 100*d5 + 10*d6 + 1*d7 - 89999999*d8 == 0){
                                console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7},{d8})
                        }
                    }
                } 
            }
            }
        }
      }
    }
}

// 9 digitos
for (var d1 = 0; d1 <= 9; d1++) {
    for (var d2 = 0; d2 <= 9; d2++) {
      for (var d3 = 0; d3 <= 9; d3++) {
        for (var d4 = 0; d4 <= 9 ;d4++){
            for(var d5 = 0; d5 <= 9; d5++){
                for(var d6 = 0; d6 <= 9; d6++){
                    for(var d7 = 0; d7 <= 9; d7++){
                        for(var d8 = 0; d8 <= 9; d8++){
                            for(var d9 = 1; d9 <= 9; d9++){
                                if (10000000*d1 + 1000000*d2 + 100000*d3 + 10000*d4 + 1000*d5 + 100*d6 + 10*d7 + 1*d8 - 899999999*d9 > 0.01){
                                    console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7},{d8},{d9})
                            }
                        }
                    }
                } 
            }
            }
        }
      }
    }
}