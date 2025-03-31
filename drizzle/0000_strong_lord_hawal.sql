CREATE TABLE "aiOutput" (
	"id" serial PRIMARY KEY NOT NULL,
	"formData" text NOT NULL,
	"aiResponse" text,
	"templateSlug" varchar NOT NULL,
	"createdBy" varchar NOT NULL,
	"createdAt" varchar
);
