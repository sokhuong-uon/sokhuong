import {
	jsonb,
	numeric,
	pgTable,
	text,
	timestamp,
	uuid,
} from 'drizzle-orm/pg-core'
import { createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const model = pgTable('model', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: text('name').notNull(),
	price: numeric('price').notNull(),
	specification: jsonb('specification'),
	description: text('description'),

	modelFilePath: text('model_file_path').notNull(),
	coverImagePath: text('cover_image_path'),

	createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
	updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
})

export const modelSelectSchema = createSelectSchema(model)
export type ModelSchema = z.infer<typeof modelSelectSchema>
