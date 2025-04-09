import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const db = useDatabase();

  // Create users table if not exist
  await createUsers(db);

  // Get user
  const userResponse =
    await db.sql`SELECT * FROM users WHERE email=${body.email} LIMIT 1`;
  const user = userResponse.rows[0] || null;

  // Check if user exists
  if (!user)
    throw createError({
      statusCode: 401,
      statusMessage: "Server says no",
    });

  // Check password
  const isValid = bcrypt.compare(body.password, user.password);
  if (!isValid)
    throw createError({
      statusCode: 401,
      statusMessage: "Access denied",
    });

  // Create token
  const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });

  // Set cookie
  setCookie(event, "askew_token", token);

  // Save token on user
  await db.sql`UPDATE users SET token=${token} WHERE id = ${user.id}`;

  // Return
  return {
    token: token,
    user: strippedUser(user),
  };
});
