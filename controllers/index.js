const router = require("express").Router();
const { User } = require("../models");
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

// router.post("/api/user/login", () => console.log("testing route address"));

router.get("/", (req, res) => {
  //renders main splash page
  console.log("Router for home page");
  res.render("homepage");
});

module.exports = router;
