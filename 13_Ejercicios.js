//*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return `${true}, Nombre incluido en la posicion: ${i}`
    }
  }
  return `${false} Nombre no incluido en la lista`
}

console.log(finderName(nameFinder, 'Peggy'))
console.log('-------')
console.log(finderName(nameFinder, 'Ana'))
