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
  3.1 Revisar el package.json y verificar si aparece la propiedad "type" y ponerle el valor de "module"
4.inicializar git (seguimiento a los cambios)
   git init
5.agregar archivo .gitignore (lista negra: archivos que NO se van a subir a GitHub)
6.crea un archivo llamado index.js en el directorio src/
6.1 se agrega en el package.json debajo de scripst:("dev": "node --watch ./src/index.js") para cuando se inicialice poder escribir de forma abreviada: npm run dev 
7.instala express con (npm i express) en la consola
8.instala mongoose con (npm i mongoose) en la consola
9.crea la configuracion de la base de datos creando en el src una carpeta llamada (config) y dentro
de ella se crea un archivo llamado (mongo.config.js) y dentro del archivo se pone la configuracion de mongo que se encuentra en la documentacion oficial de mongoose
10.invoca la configuracion de la base de datos en el archivo index.js y tambiem invoca a expres:
import express from "express";
import dbconection from "./config/mongo.config.js";
11.crear las carpetas dentro de la carpeta src
 -config
 -controller
 -model
 -routes
 -services
 12.ir al package.json y en el objeto scripts y poner:
 scripts{"dev": "dev:node --env-file .env --watch ./src/index.js"}
<!-- FASE2 -->
 1.Enpezamo a realizar la creacion de los crods con los vervos:(POST,GET,PATH Y DELETE)
 
 2.Dentro de la carpeta Model se crea el archivo llamado (xxxx.model.js) donde se pondran los schemas que sera lo que reglamentara como ingresara la informacionde los objetos que se requieran utilizar
 ESTRUCTURA:
 import { Schema, model } from "mongoose";

const categoriasSchema = new Schema ({
    nombre:{
        type:String,
        required:true
    },
    slug:{
        type: String,
        required: true,
        unique: true 
    }
},
{timestamps:true}); //el {timestamps:true} sirve para que se cree un campo donde se vea la hora y fecha de creado o actualizacion

const categoriasModel = model (
    'categorias',
    categoriasSchema
);
export default categoriasModel;

3.Despues continuaremos con la caerpta SERVICES donde se creara un archivo llamado (XXX.service.js) donde se pondran las funcionavilidades de cada vervo(POST,GET,DELETE Y PATH)
ESTRUCTURA:
import categoriasModel from "../models/categorias.model.js"



const dbregistroCategoria = async (newCategoria) => {
    return await categoriasModel.create(newCategoria);
}

const dbgetCategoria = async () => {
    return await categoriasModel.find();
}

const dbdeleteCategoriaPorId = async (_id) =>{
    return await categoriasModel.findOneAndDelete({_id});
}

const dbactualizarCategoriaPorId = async (_id,inputData) => {

    return await categoriasModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
}


export {
    dbregistroCategoria,
    dbgetCategoria,
    dbdeleteCategoriaPorId,
    dbactualizarCategoriaPorId
}

4.Depues pasaremos a la carpeta CONTROLLERS donde se creara el archivo un archivo llamado 
(XXX.controller.js) donde estaran loc controladores de las funciones creadas por los services
ESTRUCTURA:
import categoriasModel from "../models/categorias.model.js";
import { dbactualizarCategoriaPorId, dbdeleteCategoriaPorId, dbgetCategoria, dbregistroCategoria } from "../services/categorias.service.js";

const creaCategoria = async (req, res) => {

    try {
        const data = req.body;

        console.log(data);

        const dataRegister = await dbregistroCategoria(data);
        res.json({
            msg: 'Categoria Creada',
            dataRegister
        });
    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se puede crear la categoria deseada'
        });

    };
}

const getCategoria = async (req, res) => {
    try{
        const categorias = await dbgetCategoria();
        res.json({
            msg:'obtiene las categorias',
            categorias
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg:'Error no se pudo obtener las categorias'
        });
    }

}

const deleteCategoria = async (req, res) => {
    try{
        const idCategoria = req.params.idCategoria;

        const categoriaDelet = await 
        dbdeleteCategoriaPorId (idCategoria);

        res.json({
            categoriaDelet
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se pudo eliminar la categoria'
        });
    }
}

const actuliazarCategoria = async (req, res) => {

   try{
    const inputData = req.body;
    const idCategoria = req.params.idCategoria;

    const categoriaUpdate = await dbactualizarCategoriaPorId
    (idCategoria,inputData);

    res.json(
        inputData,
        categoriaUpdate
    );

   }
   
   catch (error){
    console.error(error);
    res.json({
        msg:'Error no se pudo actualizar la categoria por id'
    })
   }

};

export {
    creaCategoria,
    getCategoria,
    deleteCategoria,
    actuliazarCategoria
}

5.Despues pasaremos a la carpeta ROUTES y dentro de la carpeta crearemos un archivo llamado (XXX.route.js) donde pondremos las rutas con las cuales se acede a los vervor del crod
ESTRUCTURA:
import express from 'express'
import { actuliazarCategoria, creaCategoria, deleteCategoria, getCategoria } from '../controllers/categorias.controller.js'

const router = express.Router();

router.post('/',creaCategoria);
router.get('/',getCategoria);
router.delete('/:idCategoria',deleteCategoria);
router.patch('/:idCategoria',actuliazarCategoria);


export default router;

6.Como ultimo paso llamaremos las rutas en el archivo index para empezar a realizar las pruevas en postman 
ESTRUCTURA:
import express from "express";
import dbconection from "./config/mongo.config.js";
import categoriasRoutes from './routes/categorias.routes.js';

// invoca la conexion de la base de datos
dbconection();

const app = express();
const PORT = 3000;


// habilita el uso de json en las peticiones(que la app entienda json)
app.use(express.json());

app.use('/api/v1/categorias', categoriasRoutes);



// servidor escuchando en el puerto 3000
app.listen(PORT, () => {
  console.log(`serve runnig on http://localhost:${PORT}`);
});
 


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
<!-- COMO CREAR UN PROYECTO FRONTEND -->
1.ng new nombre del proyecto
2.selecionar css
3.se le dice no 
4.se instalan ayudas (agentes) que son opcionales
5.se abre el visual y se inicializa el proyecto poniendo en la terminal:(ng s -o)
6.lugo en la carpeta src/
app.html: se debe de borrar todo lo del archico y solo dejar <router-oulet>
7.luego en la terminal para generala el header se pone:( ng g c shared/layout/header --skip-tests)
se debe de tener en cuenta que todo lo que se ponga en la carpeta SHARED sera lo que se compartira en todas las paginas del proyecto 
8.luego en la terminal para generala el header se pone:( ng g c shared/layout/footer --skip-tests)se debe de tener en cuenta que todo lo que se ponga en la carpeta SHARED sera lo que se compartira en todas las paginas del proyecto      
9.luego se llman en el app.html como se ven el ts de cada uno (header y footer)
9.Se deven de llamar en app.ts en la parte de @Component({imports: [RouterOutlet,Header,Footer]})
10.luego se crea en pages:(login,home,registe) con el siguienete comando en la terminal (ng g c shared/pages/register --skip-tests)
11.despues en el app.routes se impotan los componentes creados:(Home,Login,Register)
12.Despues dentro de :export const routes: Routes = [aqui se ponen las rutas de las siguiente manera:{path: 'home', component:Home},
{path: 'login', component:Login} y no olvidar que las redireciones e ponen al final de la siguiente manera {path: '', redirectTo: 'home',pathMatch:'full'}]  
13.se debe de probar las para saber que funcionan correctamente antes de continuar las rutas se pruevan                
_____________________________________________________________________________________________
<!-- NOTAS SOBRE FRONTED -->
1.ng serve -o:(CON ESTO SE INICIALIZA EL PROYECTO)
2.se debe de tener en cuenta que todo lo que se ponga en la carpeta SHARED sera lo que se compartira en todas las paginas del proyecto
3.se debe de tener en cuenta que todo lo que se ponga en la carpeta PAGES sera lo que se de uso independiente y solo se usara en el proposito deseado 
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
CLASE 07/01/2026
1.cada vesque veo un (@) en angular es un decorador