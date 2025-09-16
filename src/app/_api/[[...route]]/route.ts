import { eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

import { db } from '@/db'
import { model } from '@/db/schema'

const app = new Hono().basePath('/api')

app
	.get('/hello', (c) => {
		return c.json({
			message: 'Hello Next.js + Hono',
		})
	})
	.get('/model', async (c) => {
		const models = await db.select().from(model)
		return c.json({
			models: models,
		})
	})
	.get('/model/:id', async (c) => {
		try {
			const models = await db
				.select()
				.from(model)
				.where(eq(model.id, c.req.param('id')))

			return c.json({
				models: models[0],
			})
		} catch {
			return c.json({
				message: 'Something went wrong',
			})
		}
	})

export const GET = handle(app)
export const POST = handle(app)
