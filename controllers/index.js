const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get("/", (req, res) => {
  console.log("Router for home page")
  res.send("Welcome to Fresh Catch!")
})
module.exports = router;