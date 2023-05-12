const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");

router.use('/api', apiRoutes);
router.use("/", homeRoutes);

router.get("/", (req, res) => {
  console.log("Router for home page")
  res.render("homepage")
})

module.exports = router;