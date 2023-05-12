const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get("/", (req, res) => {
  console.log("Router for home page")
  res.render("login")
})
module.exports = router;