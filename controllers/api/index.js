const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fishRoutes = require('./fishRoutes');
const catchRoutes = require('./catchRoutes');

router.use('/user', userRoutes);
router.use('/fish', fishRoutes);
router.use('/catch', catchRoutes);

module.exports = router;