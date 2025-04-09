import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  // Get current users id
  const id = event.context.id;
  if (!id) return { user: {} };

  const db = useDatabase();

  // Create users table if not exist
  await createUsers(db);

  // Get user
  const userResonse = await db.sql`SELECT * FROM users WHERE id=${id} LIMIT 1`;
  const user = userResonse.rows[0] || {};

  // Return
  return { user: user };
});
