import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  trainers: { type: String, required: false },
  token: { type: String, required: false },
});

const User = mongoose.model("AskewUser", userSchema);

export default User;
