const sequelize = require('../config/connection');
const { User, Fish, Catch } = require('../models');

const userSeedData = require('./userSeedData');
const catchSeedData = require('./catchSeedData');
const fishSeedData = require('./fishSeedDataCopy');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData);
  await Fish.bulkCreate(fishSeedData);
  await Catch.bulkCreate(catchSeedData);
};
seedDatabase();