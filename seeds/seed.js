const sequelize = require('../config/connection');
const { User, Fish, Lake } = require('../models');

const userSeedData = require('./userSeedData.json');
const fishSeedData = require('./fishSeedData.json');
const lakeSeedData = require('./lakeSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData);
  const fishes = await Fish.bulkCreate(fishSeedData);
  const lakes = await Fish.bulkCreate(lakeSeedData);
};
seedDatabase();