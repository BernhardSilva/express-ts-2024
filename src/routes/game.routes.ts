import express from 'express';
import { GameController } from '../controllers/game.controller';

const router = express.Router();

router.get('/', GameController.getAllGames);
router.get('/:id', GameController.getGame);
router.post('/', GameController.createGame);
router.put('/:id', GameController.updateGame);
router.delete('/:id', GameController.deleteGame);

export default router;
