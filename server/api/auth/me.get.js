import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  // Get current users id
  const id = event.context.id;
  if (!id) return { user: {} };

  const user = await User.findOne({ id: id });

  // Return
  return { user: user };
});
