import { serial, text, pgSchema, varchar, pgTable } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt: varchar('createdAt')
})

// export const mySchema = pgSchema("my_schema");

// export const colors = mySchema.enum('colors', ['red', 'green', 'blue']);

// export const mySchemaUsers = mySchema.table('users', {
//   id: serial('id').primaryKey(),
//   name: text('name'),
//   color: colors('color').default('red'),
// });