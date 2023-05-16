const Fish = require("./Fish");
const Catch = require("./Catch");
const User = require("./User");

// Catch.belongsTo(Fish, {
//     foreignKey: 'fish_id',
//     unique: false
// })
Catch.belongsTo(User, {
  foreignKey: "user_id",
  unique: false,
});

User.hasMany(Catch, {});

module.exports = { Fish, Catch, User };
