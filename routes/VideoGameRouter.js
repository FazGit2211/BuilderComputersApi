
import express from 'express';
import videoGameController from '../controllers/videoGameController.js';

const router = express.Router();

//Definicion de rutas
router.post('/video-game', videoGameController.createVideoGame);
router.get('/video-game', videoGameController.getAllVideoGames);
router.get('/video-game/:name', videoGameController.findByName);
router.put('/video-game/:id',videoGameController.putById);
export default router;