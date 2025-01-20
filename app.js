
import main from './config/db.js';
import errorController from './controllers/errorController.js';
import videoGameRouter from './routes/videoGameRouter.js';
import express from 'express';


const app = express();
//Middleware para leer json
app.use(express.json());

//Utilizar las Rutas
app.use('/api', videoGameRouter)
//Utilizar el manejador de errores
app.use(errorController.error404)
//Testear conexion con base de datos
main().then(() => {console.log('Conexion exitosa')}).catch((err) => { console.error(err)});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Puerto nº ${PORT}`);
});

