import model from "./model.js";
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const findAllUsers = () => model.find();
