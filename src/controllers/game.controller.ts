import { Request, Response } from 'express';
import { GameService } from '../services/game.service';
import { Prisma } from '@prisma/client';

export const GameController = {
	getAllGames: async (req: Request, res: Response) => {
		const games = await GameService.findAll();
		if (!games) {
			res.status(404).send('No games found');
		}
		res.json(games);
	},
	getGame: async (req: Request, res: Response) => {
		const gameId = req.params.id;
		const game = await GameService.find(gameId);
		if (game) {
			res.json(game);
		} else {
			res.status(404).send('Game not found');
		}
	},
	createGame: async (req: Request, res: Response) => {
		const game: Prisma.GameCreateInput = req.body;
		const newGame = await GameService.create(game);
		res.status(201).json(newGame);
	},
	updateGame: async (req: Request, res: Response) => {
		const gameId = req.params.id;
		const gameUpdate: Prisma.GameUpdateInput = req.body;
		const updatedGame = await GameService.update(gameId, gameUpdate);
		if (updatedGame) {
			res.json(updatedGame);
		} else {
			res.status(404).send('Game not found');
		}
	},
	deleteGame: async (req: Request, res: Response) => {
		const gameId = req.params.id;
		await GameService.delete(gameId);
		res.status(204).send();
	}
};
