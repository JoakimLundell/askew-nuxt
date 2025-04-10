import User from "~/server/models/User";
export default defineEventHandler(async (event) => {
  // Get current users id
  const id = event.context.id;
  // Remove token from db
  //const db = useDatabase();
  //const response = await db.sql`UPDATE users SET token=null WHERE id = ${id}`;
  const filter = { id };
  const data = {
    token: null,
  };
  const loggedOutUser = await User.findOneAndUpdate(filter, data, {
    new: true,
  });
  console.log("Logged Out User", loggedOutUser);

  // Remove cookie
  setCookie(event, "askew_token", null);
  // Return
  return { loggedOutUser };
});
