// console.log("Hola mi nombre es Ruddy");
//repaso javascript
//1.variables y constantes
// var nombre = "Gabriela";
// var nombre = "Juan"; ---> no se recomienda
// console.log(nombre);
let nombre = "Gabriela";
// let nombre = "Juan";
console.log(nombre);
//2. constantes
const pi = 3.1416;
//3. template literal
console.log("El Valor de pi es: " + pi);
console.log(`El Valor de pi es: ${pi}`);
//4. funciones flecha
//antigua forma
function suma(a, b) {
  return a + b;
}
console.log(`la suma de: 2+3 es: ${suma(2, 3)}`);
//nueva forma
const sumaFlecha = (a, b) => a + b;

console.log(`la suma de: 2+5 es: ${sumaFlecha(2, 5)}`);
//5. destructuracion de objetos o arryas
const objetoPersona = {
  nombre1: "Ruddy",
  celular: 60530739,
  direccion: "san pedro",
  edad: 30,
  trabajos: [
    {
      institucion: "USIP",
      departamento: "CBA",
    },
    {
      institucion: "PNUD",
      departamento: "LP",
    },
    {
      institucion: "PNUD",
      departamento: "SCZ",
    },
  ],
};
//Ejercicio: imprimir los departamentos donde trabaja la persona
//manera tradicional sin destructuracion
for (let i = 0; i < objetoPersona.trabajos.length; i++) {
  console.log("departamento: " + objetoPersona.trabajos[i].departamento);
}
//con destructuracion

const { trabajos } = objetoPersona;
trabajos.map(({ departamento }) =>
  console.log(`departamento: ${departamento}`)
);

//6. spread operators
const departmento1 = {
  superficie: 100,
  habitaciones: 3,
  banos: 2,
};

const edificio = {
  direccion: "prado",
  constructora: "plusvaly",
};

//ejercicio: mostrar toda la informacion del deparmento1 junto con su direccion
// y su constructora
//manera antigua
const departamento1Edificio = {
  superficie: departmento1.superficie,
  habitaciones: departmento1.habitaciones,
  banos: departmento1.banos,
  direccion: edificio.direccion,
  constructora: edificio.constructora,
};
// manera nueva con spread opertaor

const departamento1EdificioSpreadOperator = {
  ...departmento1,
  ...edificio,
};
console.log("informacion del deparmento 1:");
console.log(JSON.stringify(departamento1EdificioSpreadOperator));

const alumnos = [
  {
    nombre: "Juan",
    nota: 80,
  },

  {
    nombre: "Carlos",
    nota: 70,
  },
  {
    nombre: "Maria",
    nota: 90,
  },
  {
    nombre: "Alan",
    nota: 40,
  },
  {
    nombre: "Jeny",
    nota: 10,
  },
];

//ejercicios
//dado el array de alumnos
//0 mostrar todo los datos del estudiante x
//1 mostrar el alumno con mayor nota
//2 mostrar el alumno con menor nota
//3 ordnar el array y mostrar forma ascendente
//4 ordnar el array y mostrar forma descendente
//5 mostrar todos los alumnos aprobados
//6 mostrar todos los alumnos reprobados
//7 dado un nombre verificar si existe y mostrar si esta aprobado o reprobado
//sabiendo que la nota de aprobacion es mayor a 51

//solucion
//0
const buscaAlumno = (nombre) => {
  let alumnoEncontrado = null;
  for (let index = 0; index < alumnos.length; index++) {
    if (alumnos[index].nombre == nombre) {
      alumnoEncontrado = alumnos[index];
      break;
    }
  }
  return alumnoEncontrado;
};

const buscaAlumno2 = (nombre) => {
  return alumnos.find((alumno) => alumno.nombre == nombre);
};

console.log(JSON.stringify(buscaAlumno2("Alan")));
//1 // tarea averiguar la manera corta
const buscaAlumnoMayorNota = () => {
  let mayor = alumnos[0];
  for (let index = 1; index < alumnos.length; index++) {
    if (mayor.nota < alumnos[index].nota) {
      mayor = alumnos[index];
    }
  }
  return mayor;
};

console.log(
  `el alumnos con mayor nota es: ${JSON.stringify(buscaAlumnoMayorNota())}`
);

//repaso de promises asincroina
console.log("suma desde el servidor");
const sumaServidor = async () => {
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const resultado = Math.random(10);

      resolve("operacion ok");
    }, 3000)
  );
};

console.log("el resultado de la suma desde el servidor es: ");

sumaServidor(2, 3)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

//otro ejemplo mas practico de asincronia promesas
console.log("Inicio de ejecucion llamada al servidor");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log("repuesta:", json));

console.log("fin de ejecucion");
