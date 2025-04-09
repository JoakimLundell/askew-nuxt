export async function createUsers(db) {
  await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "name" TEXT, "email" TEXT UNIQUE, "trainers" TEXT, "token" TEXT, "password" TEXT)`;
}
