const router = require("express").Router();
const User = require("../../models/User");

//Check login credentials are valid,
router.post("/login", async (req, res) => {
  console.log("Login route action called");
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    const user = userData.get({ plain: true });
    console.log(user.id)

    if (!user.email) {
      res
        .status(400)
        .json({ message: "Incorrect email, please try again" });
      return;
    }

    // const validPassword = await userData.checkPassword(req.body.password);

    if (!user.password) {
      res
        .status(400)
        .json({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
  
      res.json({ user: user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.render("homepage");
    });
  } else {
    res.status(404).end();
  }
});

// Create a new user, then set session properties for user_id and logged_in, w/ logged_in property set to true
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    //session variable "logged_in"
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
