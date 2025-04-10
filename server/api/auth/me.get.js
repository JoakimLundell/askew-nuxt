import jwt from "jsonwebtoken";
//import connectDB from "~/server/utils/database";
import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  // Get current users id
  const id = event.context.id;
  if (!id) return { user: {} };

  //const db = useDatabase();
  //connectDB();

  /*const allUsers = User.find();
  console.log("allUsers", allUsers);*/

  // Create users table if not exist
  //await createUsers(db);

  // Get user
  /*const userResonse = await db.sql`SELECT * FROM users WHERE id=${id} LIMIT 1`;
  const user = userResonse.rows[0] || {};*/
  const user = await User.findOne({ id: id });

  // Return
  return { user: user };
});
