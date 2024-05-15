const array = ['carpa', ' tormenta', 'casa']
const sinA = ['pepe', 'carlos', 'juan']

function terminanEnA(words){
    // código
    const terminanA = words.every((word) => word.endsWith("a"))
    
    return terminanA
  }

  console.log(terminanEnA(array))