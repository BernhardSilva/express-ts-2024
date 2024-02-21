import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GameService = {
	findAll: async () => {
		try {
			return prisma.game.findMany();
		} catch (error) {
			console.error(error);
			throw new Error('Error fetching games');
		}
	},
	find: async (id: string) => {
		try {
			return prisma.game.findUnique({ where: { id } });
		} catch (error) {
			console.log(error);
			throw new Error('Error fetching game');
		}
	},
	create: async (data: Prisma.GameCreateInput) => {
		try {
			data.published = new Date(data.published);
			return await prisma.game.create({ data });
		} catch (error) {
			console.error(error);
			throw new Error('Error creating game');
		}
	},
	update: async (id: string, data: Prisma.GameUpdateInput) => {
		try {
			if (typeof data.published === 'string') {
				data.published = new Date(data.published);
			}
			return await prisma.game.update({ where: { id }, data });
		} catch (error) {
			console.error(error);
			throw new Error('Error updating game');
		}
	},
	delete: async (id: string) => {
		try {
			return await prisma.game.delete({ where: { id } });
		} catch (error) {
			console.error(error);
			throw new Error('Error deleting game');
		}
	}
};
