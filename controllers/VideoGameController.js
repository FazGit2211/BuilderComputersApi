import VideoGame from "../models/videoGame.js";

//Crear un videojuego nuevo
const createVideoGame = async (req, res) => {
    try {
        const { name, genred, year } = req.body;
        const newVideoGame = await VideoGame.create({ name, genred, year });
        res.status(201).json(newVideoGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error POST VideoGame' });
    }
};

//Obtener a todos los videojuegos
const getAllVideoGames = async (req, res) => {
    try {
        const videoGames = await VideoGame.find();
        res.status(200).json(videoGames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al GET ALL VideoGame' });
    }
};

//Obtener un solo videojuego por nombre 
const findByName = async (req, res) => {
    try {
        //console.log(req.params.name);
        const videoGame = await VideoGame.findOne({ name: req.params.name });
        if (videoGame == null) {
            res.status(200).json({ message: 'Null Object' });
        } else {
            res.status(200).json(videoGame);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al GET VideoGame' });
    }
}

//Actualizar por nombre del videojuego
const putById = async (req, res) => {
    try {
        const videoGameUpdate = await VideoGame.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (videoGameUpdate == null) {
            res.status(200).json({ message: 'Null Object' });
        } else {
            res.status(200).json(videoGameUpdate);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al PUT VideoGame' });
    }
}

export default {
    createVideoGame,
    getAllVideoGames,
    findByName,
    putById
}