COMO DESARROLLAR UN PROBLEMA:  

<!-- paso 1 -->
cuales son los valores de entrada o informacion que se va a  digitar por el usuario
ej: año de nacimiento ,nombre del usuario,edad

<!-- paso2 -->
encontrar o investigar el proceso que vamos a realizar o la formula que voy a utilizar

<!-- paso3 -->
Identificarcuales son los valores de salida o la respuesta que se espera de la operacion
________________________________________________________________________________________________
GIT:
<!-- 1.PARA SUBIR AL REPOSITORIO: -->
git init
git add .
git commit -m "mensaje"
git push origin master

<!-- 2.PARA DESCARGAR LOS CAMBIOS: -->
git pull origin main

<!-- 3.PARA CLONAR DESDE 0: -->
git clone link del repository

<!-- 4.PARA VER SI HAY ALGO NUEVO ANTES DE DESCARAGAR -->
git fetch
git status
<!-- 5.PARA VERIFICAR SI TENGO EL REPOSITORIO ALIADO A GITHUB -->
git remote -v
<!-- 6.ES PARA MIRAR EN QUE CARPETA ESTOY -->
ls
<!-- 7.ESTO ES PARA CAMBIAR DE CARPETAS -->
CD
<!-- 8.PARA CAMBIARDE RAMA MASTER A MAIN O VISEBERSA -->
git switch main o master
<!-- 9.PARA CREAR UNA RAMA -->
git checkout -b nombredelarama
<!-- 10.PARA SABER EN QUE RAMA ESTOY -->
git branch
<!-- 11.PARA SUBIR DESDE 0 A UN NUEVO REPOSITORY LOS PASOS SON -->
git init
git remote add origin LINK DEL REPOSITORY
git remote -v // para saber si quedo bien
git status //para saber que hay para subir
git add .
git commit -m "comentario"
git push -u origin main 
___________________________________________________________________________________________
<!-- COMO INICIAR UN PROYECTO BAKEND -->
1.crea el directorio del proyecto
  mkdir mi-proyecto (comando para la terminal de git bash)
2.ingresa al directorio
  cd mi-proyecto
3.inicializa un proyecto usando npm (dentro del directorio del proyecto)
  npm init 
  3a. Revisar el package.json y verificar si aparece la propiedad "type" y ponerle el valor de "module"
4.inicializar git (seguimiento a los cambios)
   git init
5.agregar archivo .gitignore (lista negra: archivos que NO se van a subir a GitHub)
6.crea un archivo llamado index.js en el directorio src/
7.instala express con (npm i express) en la consola
8.instala mongoose con (npm i mongoose) en la consola
9.crea la configuracion de la base de datos usando mongoose (config/mongo.config.js) - OJO: Ver la configuracion en la pagina oficial
10.invoca la configuracion de la base de datos en el archivo index.js
11.crear las carpetas dentro de la carpeta src
 -config
 -controller
 -model
 -routes
 -services
 12.ir al package.json y en el objeto scripts y poner:
 scripts{"dev": "dev:node --env-file .env --watch ./src/index.js"}
 13.despues de la creacion de crod se deben de crear las siguientes carpetas
 -helprs
 -middlewares
 
____________________________________________________________________________________________
<!-- CONFIGORACION DE MONGOOSE DENTRO DE LA CARPETA CONFIG -->
import mongoose from 'mongoose';

const MONGO_URI = 'aqui se pone la ruta que genera mongoose en la base de datos';

const dbconeccion = async () => {

try{
await mongoose.connect(MONGO_URI,{});
      console.log('Base de datos conectada exitosamente')
}
catch (error){
    console.error(error);
    console.error('Error al iniciar la base de datos :C')
};
}

export default dbconeccion;
/////////////////////////////////////////////////////////////////////////
BASE DE TADOS REMOTA GENERADA EN MONGO ATLAS:mongodb+srv://davidarana713:<db_passwordAQUI SE PONE LA CONTRASEÑA CREADA EN EL USER DEL MONGO ATLAS>@cluster0.ebzuws4.mongodb.net/
____________________________________________________________________________________________

<!-- LISTA DE DESEOS -->
1.aprender sobre licencias
2.aprender expreciones regulares
____________________________________________________________________________________________
CLASE 24/11/2025
TEMA(CLASES)
1.para que sirve el constructor sirve para crear los onjetos y pone las reglas del tipo de informacion que va a recibir
2.para poner un atributo de un objeto en pribado hay que nombrarlo antes del constructor y ponerlo con un # (ej:#nombre)
3.un getter es la manera de llamar un atributo que es privado en el constructor 
4.un setter es la manera de asignar un atributo que es privado en el constructor
TEMA(HERENCIA)
1.en las herencias de las clases solo se hereda los atribustos y metodos mas no hereda el constructor
________________________________________________________________________________________________
CLASE 25/11/2025
1.dentro de gitignore se pone lo que no quiero suvir a mi repository
_______________________________________________________________________
CLASE 26/11/2025
1.que es un end point
2.que es un middlwres:hace referencia en la mitad de 2 acciones como por ejemplo la entrada de un trasmi entre estar andentro o afuera esto si fuera un middlewares que tengan bloqueo 
3.que es una clase en js
_____________________________________________________________________________________
CLASE 02/12/2025
1.