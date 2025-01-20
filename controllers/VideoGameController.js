import VideoGame from "../models/VideoGame.js";

//Crear un videojuego nuevo
export const createVideoGame = async (req, res) => {
    try {
        const { name, genred, year } = req.body;
        const newVideoGame = await VideoGame.create({ name, genred, year });
        res.status(201).json(newVideoGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error POST VideoGame', error });
    }
};

//Obtener a todos los videojuegos
export const getAllVideoGames = async (req, res) => {
    try {
        const videoGames = await VideoGame.find();
        res.status(200).json(videoGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al GET ALL VideoGame', error });
    }
};

//Obtener un solo videojuego por nombre 
export const findByName = async (req, res) => {
    try {
        //console.log(req.params.name);
        const videoGame = await VideoGame.findOne({ name: req.params.name });
        res.status(200).json(videoGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al GET VideoGame', error });
    }
}

//Actualizar por nombre del videojuego por nombre
export const putByName = async (req, res) => {
    try {
        const videoGame = await VideoGame.findOne({ name: req.params.name });
        if (videoGame) {
            videoGame.updateOne(req.body).then(() => { console.log("Success") });
            res.status(200);
        }
        res.status(400);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al PUT VideoGame', error });
    }
}