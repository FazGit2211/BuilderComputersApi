
import { createVideoGame, findByName, getAllVideoGames, putByName } from '../controllers/VideoGameController.js';
import express from 'express';

const router = express.Router();

//Definicion de rutas
router.post('/video-game', createVideoGame);
router.get('/video-game', getAllVideoGames);
router.get('/video-game/:name', findByName);
router.put('/video-game/:name',putByName);
export default router;