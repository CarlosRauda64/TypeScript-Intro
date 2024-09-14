//Funciones
//A los parametros en las funciones
//se les debe asignar un tipo de datos
//y el tipo de dato que retornara la funcion
function geeting(fullname:string):string {
  return "Hello World " + fullname;
}

console.log(geeting("Jorge"));

const goodbye = (fullname:string):string => {
  return "Goodbye " + fullname;
}

console.log(goodbye("Pedro"));

//Parametros opcionales
function geetingOptional(fullname?:string):string {
  if(fullname){
    return "Hello World " + fullname;
  }else{
    return "Hello World";
  }
}

console.log(geetingOptional());