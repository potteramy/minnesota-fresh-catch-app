const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fishRoutes = require('./fishRoutes');
const lakeRoutes = require('./lakeRoutes');

router.use('/user', userRoutes);
router.use('/fish', fishRoutes);
//router.use('/lake', lakeRoutes);

module.exports = router;