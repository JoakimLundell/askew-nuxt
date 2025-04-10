import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "~/server/models/User";
import { strippedUser } from "~/server/utils/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
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
  const newUser = new User({
    id: userId,
    name: body.name,
    email: body.email,
    trainers: trainers,
    password: hashed,
    token: token,
  });
  const resp = await newUser.save();

  return {
    token,
    user: strippedUser(resp),
  };
});
