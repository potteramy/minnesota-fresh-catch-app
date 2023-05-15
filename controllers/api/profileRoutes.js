const router = require("express").Router();
const User = require("../../models/User");

//new user
router.post('/', async (req, res) => {
  console.log("Hi") //working
  try {
    const userData = await User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(userData) //working

    //session variable "logged_in"
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

    res.render("profile")
      
    });
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {

})

module.exports = router;