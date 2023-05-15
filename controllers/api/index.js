const router = require('express').Router();
const userRoutes = require('./userRoutes');
const fishRoutes = require('./fishRoutes');
const catchRoutes = require('./catchRoutes');
const profileRoutes = require("./profileRoutes");

router.use('/user', userRoutes);
router.use('/fish', fishRoutes);
router.use('/catch', catchRoutes);
router.use("/profile", profileRoutes);

module.exports = router;