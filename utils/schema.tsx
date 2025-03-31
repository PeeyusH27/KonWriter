import { serial, text, pgSchema, varchar, pgTable } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id:serial('id').primaryKey(),
    formData:text('form_data').notNull(),
    aiResponse:text('ai_response'),
    templateSlug:varchar('template_slug').notNull(),
    createdBy:varchar('created_by').notNull(),
    createdAt: varchar('created_at')
})

// export const mySchema = pgSchema("my_schema");

// export const colors = mySchema.enum('colors', ['red', 'green', 'blue']);

// export const mySchemaUsers = mySchema.table('users', {
//   id: serial('id').primaryKey(),
//   name: text('name'),
//   color: colors('color').default('red'),
// });