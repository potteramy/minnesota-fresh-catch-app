const { Fish } = require('../models');

const fishData = [
 {
  fish_type: 'bass',
  fish_length: 14
  },
  {
  fish_type: 'dog fish',
  fish_length: 10,
  },
  {
  fish_type: 'burbot',
  fish_length: 14,
  },
  {
  fish_type: 'catfish',
  fish_length: 18,
  },
  {
  fish_type: 'crappie',
  fish_length: 10,
  },
  {
  fish_type: 'freshwater drum',
  fish_length: 18,
  },
  {
  fish_type: 'sturgeon',
  fish_length: 28,
  },
  {
  fish_type: 'long-nose gar',
  fish_length: 28,
  },
  {
  fish_type: 'muskellunge',
  fish_length: 24,
  },
  {
  fish_type: 'northern pike',
  fish_length: 24,
  },
  {
  fish_type: 'salmon',
  fish_length: 35,
  },
  {
  fish_type: 'sauger',
  fish_length: 13,
  },
  {
  fish_type: 'sunfish',
  fish_length: 6,
  },
  {
  fish_type: 'trout',
  fish_length: 15,
  },
  {
  fish_type: 'walleye',
  fish_length: 33,
  },
  {
  fish_type: 'white sucker',
  fish_length: 35,
  },
  {
  fish_type: 'yellow perch',
  fish_length: 13,
  },
];

const fishSeedData = () => Fish.bulkCreate(fishData);

module.exports = fishSeedData;

   
