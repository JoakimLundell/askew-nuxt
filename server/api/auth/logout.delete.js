import User from "~/server/models/User";
export default defineEventHandler(async (event) => {
  // Get current users id
  const id = event.context.id;

  // Remove token from db
  const filter = { id };
  const data = {
    token: null,
  };
  const loggedOutUser = await User.findOneAndUpdate(filter, data, {
    new: true,
  });

  // Remove cookie
  setCookie(event, "askew_token", null);

  // Return
  return { loggedOutUser };
});
