//Ejercicio práctico
//Tienen una función que recibe un objeto como parámetro. 
//La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.

//Por ejemplo, para el objeto { a: true, b: 42, c: false } 
//la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.

const objeto = {a :true, b:42, c:false}

function a (objeto){
  const array = []
  for (const property in objeto){
    if (objeto[property] === true || objeto[property] === false){
      pepas.push(property)
    }
  }
  return array
}

console.log(a(objeto))