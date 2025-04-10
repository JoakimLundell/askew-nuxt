import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "~/server/models/User";
//import connectDB from "~/server/utils/database";
import { strippedUser } from "~/server/utils/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //const db = useDatabase();

  // Create users table if not exist
  //await createUsers(db);
  //await connectDB();

  // Does user already exist?
  /*const exist = await db.sql`SELECT * FROM users WHERE email=${body.email}`;
  if (exist.rows?.length !== 0)
    throw createError({
      statusCode: 409,
      statusMessage: "User already exist",
    });*/
  const emailExist = await User.findOne({ email: body.email });
  if (emailExist)
    throw createError({
      statusCode: 409,
      statusMessage: "User already exist",
    });
  // Hash password
  const hashed = await bcrypt.hash(body.password, 9);

  // Create userId
  const userId = String(Math.round(Math.random() * 10_000));

  // Create token
  const token = await jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  setCookie(event, "askew_token", token);

  // Add a new user
  let trainers = "1";

  /*await db.sql`INSERT INTO users VALUES (${userId}, ${body.name}, ${body.email}, ${trainers}, ${token}, ${hashed})`;*/

  const newUser = new User({
    id: userId,
    name: body.name,
    email: body.email,
    trainers: trainers,
    password: hashed,
    token: token,
  });
  const resp = await newUser.save();
  //console.log(resp);
  // Query for added user
  /*const userResponse =
    await db.sql`SELECT * FROM users WHERE id = ${userId} LIMIT 1`;
  const user = userResponse.rows[0];*/

  return {
    token,
    user: strippedUser(resp),
  };
});
