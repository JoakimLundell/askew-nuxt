export function strippedUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    trainers: user.trainers,
  };
}
