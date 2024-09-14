interface IUsuario {
  nombre: string;
  apellido: string;
  animalFav: string[];
  edad: number;
  vivo: boolean;
  estatura: number;
}

let usuario: IUsuario = {
  nombre: 'Carlos Rodrigo',
  apellido: 'Portillo',
  animalFav: ['Perros', 'Gatos', 'Leones'],
  edad: 23,
  vivo: true,
  estatura: 2.00
}

console.log(usuario.apellido)

enum Genero {
  Femenino = 'Femenino', 
  Masculino = 'Masculino'
}

type Alumno = {
  nombre: string;
  genero: Genero;
  edad: number;
  activo: boolean;
}

let alumno:Alumno = {
  nombre: 'Carlos Rauda',
  genero: Genero.Masculino,
  edad: 21,
  activo: true
}

console.log(alumno.genero)