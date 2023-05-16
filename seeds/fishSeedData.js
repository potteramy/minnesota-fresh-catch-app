const { Fish } = require('../models');

const fishData = [
 {
  fish_type: 'Walleye',
  fish_length: 33.1,
  },
  {
    fish_type: 'Northern Pike',
    fish_length: 35.95,
  },
  {
  fish_type: 'Crappie',
  fish_length: 35.95,
  },
  {
  fish_type: 'Sunfish',
  fish_length: 13.63,
  }
];

const fishSeedData = () => Fish.bulkCreate(fishData);

module.exports = fishSeedData;

   
