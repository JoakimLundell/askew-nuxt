export default defineEventHandler(async (event) => {
  // Get current users id
  const id = event.context.id;
  // Remove token from db
  const db = useDatabase();
  const response = await db.sql`UPDATE users SET token=null WHERE id = ${id}`;
  // Remove cookie
  setCookie(event, "askew_token", null);
  // Return
  return { response };
});
