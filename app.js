
import main from './config/db.js';
import videoGameRouter from './routes/VideoGameRouter.js';
import express from 'express';


const app = express();
//Middleware para leer json
app.use(express.json());

//Utilizar las Rutas
app.use('/api', videoGameRouter)
//Testear conexion con base de datos
main().then(() => {console.log('Conexion exitosa')}).catch((err) => { console.error(err)});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Puerto nº ${PORT}`);
});

