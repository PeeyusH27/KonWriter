/** @type{ import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.tsx",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_ShnM6PqCjKz7@ep-round-cloud-a5ynwcd7-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
}