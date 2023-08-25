// What is the smallest natural number where the result of moving the digit on the far right to the front of the number is a number 9 times greater

//para 2 digitos
// a0 - 89 X = 0
/*
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

//para 3 digitos con la formla invertida => cambiando a cual multiplico x 9
for (var x = 0; x <= 9; x++) {
  for (var y = 0; y <= 9; y++) {
    for (var z = 0; z <= 9; z++) {
      if (z != 0  && Math.abs(890 * z + 89*y - 91 * x) < 10) {
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

// para 4 digitos con formula invertida
// 
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          if (d4 != 0 && Math.abs(8900*d1 + 890*d2 + 89*d3 - 991*d4) < 10){
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

// 5 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              if (d5!=0 && Math.abs(89000*d1 + 8900*d2 + 890*d3 + 89*d4 - 9991*d5) < 10){
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

// 6 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  if (d6!=0 && Math.abs(890000*d1 + 89000*d2 + 8900*d3 + 890*d4 + 89*d5 - 99991*d6) < 10){
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
                        if (d1!=0 && d7!=0 &&Math.abs(100000*d1 + 10000*d2 + 1000*d3 + 100*d4 + 10*d5 + 1*d6 - 8999999*d7) < 2){
                            console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7})
                    }
                } 
            }
            }
        }
      }
    }
}

// 7 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      if (d7!=0 && Math.abs(8900000*d1 + 890000*d2 + 89000*d3 + 8900*d4 + 890*d5 + 89*d6 - 999991*d7) < 1){
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
                            if (d1 != 0 &&d8!=0&&Math.abs(1000000*d1 + 100000*d2 + 10000*d3 + 1000*d4 + 100*d5 + 10*d6 + 1*d7 - 89999999*d8 )< 10){
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

// 8 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      for(var d8 = 0; d8 <= 9; d8++){
                          if (d1 != 0 &&d8!=0&&Math.abs(89000000*d1 + 8900000*d2 + 890000*d3 + 89000*d4 + 8900*d5 + 890*d6 + 89*d7 - 9999991*d8 )< 1){
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
                            for(var d9 = 0; d9 <= 9; d9++){
                                if (10000000*d1 + 1000000*d2 + 100000*d3 + 10000*d4 + 1000*d5 + 100*d6 + 10*d7 + 1*d8 - 899999999*d9 == 0){
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

// 9 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      for(var d8 = 0; d8 <= 9; d8++){
                          for(var d9 = 0; d9 <= 9; d9++){
                              if (d9!= 0 && Math.abs(890000000*d1 + 89000000*d2 + 8900000*d3 + 890000*d4 + 89000*d5 + 8900*d6 + 890*d7 + 89*d8 - 99999991*d9) < 1){
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

// 10 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      for(var d8 = 0; d8 <= 9; d8++){
                          for(var d9 = 0; d9 <= 9; d9++){
                            for(var d10 = 0; d10 <= 9; d10++){
                              if (d10!= 0 && Math.abs(8900000000*d1 + 890000000*d2 + 89000000*d3 + 8900000*d4 + 890000*d5 + 89000*d6 + 8900*d7 + 890*d8 + 89*d9 - 999999991*d10) < 1){
                                console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7},{d8},{d9},{d10})
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
}

// 11 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      for(var d8 = 0; d8 <= 9; d8++){
                          for(var d9 = 0; d9 <= 9; d9++){
                            for(var d10 = 0; d10 <= 1; d10++){
                              for(var d11 = 1; d11 <= 1; d11++){
                                if (d11!= 0 && Math.abs(89000000000*d1 + 8900000000*d2 + 890000000*d3 + 89000000*d4 + 8900000*d5 + 890000*d6 + 89000*d7 + 8900*d8 + 890*d9 + 89*d10 - 9999999991*d11) < 1){
                                  console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7},{d8},{d9},{d10},{d11})

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
  }
}

// 12 digitos invertido
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      for(var d8 = 0; d8 <= 9; d8++){
                          for(var d9 = 0; d9 <= 9; d9++){
                            for(var d10 = 0; d10 <= 9; d10++){
                              for(var d11 = 0; d11 <= 1; d11++){
                                for(var d12 = 1; d12 <= 1; d12++){
                                  if ( Math.abs(890000000000*d1 + 89000000000*d2 + 8900000000*d3 + 890000000*d4 + 89000000*d5 + 8900000*d6 + 890000*d7 + 89000*d8 + 8900*d9 + 890*d10 + 89*d11 - 99999999991*d12) < 1){
                                    console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7},{d8},{d9},{d10},{d11},{d12})
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
    }
  }
}*/

//13 digitos
for (var d1 = 0; d1 <= 9; d1++) {
  for (var d2 = 0; d2 <= 9; d2++) {
    for (var d3 = 0; d3 <= 9; d3++) {
      for (var d4 = 0; d4 <= 9 ;d4++){
          for(var d5 = 0; d5 <= 9; d5++){
              for(var d6 = 0; d6 <= 9; d6++){
                  for(var d7 = 0; d7 <= 9; d7++){
                      for(var d8 = 0; d8 <= 9; d8++){
                          for(var d9 = 0; d9 <= 9; d9++){
                            for(var d10 = 0; d10 <= 9; d10++){
                              for(var d11 = 0; d11 <= 9; d11++){
                                for(var d12 = 0; d12 <= 1; d12++){
                                  for(var d13 = 1; d13 <= 1; d13++){
                                    if ( Math.abs(8900000000000*d1 + 890000000000*d2 + 89000000000*d3 + 8900000000*d4 + 890000000*d5 + 89000000*d6 + 8900000*d7 + 890000*d8 + 89000*d9 + 8900*d10 + 890*d11 + 89*d12 - 999999999991*d13) < 1){
                                      console.log({d1},{d2},{d3},{d4},{d5},{d6},{d7},{d8},{d9},{d10},{d11},{d12},{d13})
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
      }
    }
  }
}


//la formual que se aproxima es la invertida. Hay q generalizar y dps ver cual es el valor. Tener en cuenta si el primer nro puede ser 0 o no 