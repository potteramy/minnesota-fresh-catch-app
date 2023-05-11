const Fish = require('./Fish');
const Lake = require('./Lake');
const User = require('./User');

Fish.belongsToMany(User, {});
Fish.belongsToMany(Lake, {});

module.exports = {Fish, Lake, User}
  

