"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// User model
const user_1 = require("../models/user");
// Create user
const newUser = (email, userName, password, firstName, lastName, role) => {
    const userInput = {
        email: email,
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        role: role || 'user',
    };
    const user = user_1.User.create(userInput);
    return user;
};
// Find users
const findUserbyID = (userId) => user_1.User.findOne({ where: { userId } });
const findUserbyEmail = (email) => user_1.User.findOne({ where: { email } });
// Change user role
const changeUserRole = (userId, newRole) => user_1.User.update({ role: newRole }, { where: { userId } });
exports.default = { newUser, findUserbyID, findUserbyEmail, changeUserRole };
