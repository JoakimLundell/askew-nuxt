import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "~/server/models/User";
//import connectDB from "~/server/utils/database";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //const db = useDatabase();
  //await connectDB();
  // Create users table if not exist
  //await createUsers(db);

  // Get user
  /*const userResponse =
    await db.sql`SELECT * FROM users WHERE email=${body.email} LIMIT 1`;
  const user = userResponse.rows[0] || null;*/
  const user = await User.findOne({ email: body.email });

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
  /*await db.sql`UPDATE users SET token=${token} WHERE id = ${user.id}`;*/
  const filter = { id: user.id };
  const data = {
    token,
  };
  const updatedUser = await User.findOneAndUpdate(filter, data, {
    new: true,
  });
  console.log("updated user", updatedUser);

  // Return
  return {
    token: token,
    user: strippedUser(user),
  };
});
