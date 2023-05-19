const router = require("express").Router();
const Catch = require("../../models/Catch");
const User = require("../../models/User");
const Fish = require("../../models/Fish");

//Get all catch records
// router.get("/", (req, res) => {
//   Catch.findAll().then((catchData) => {
//     res.json(catchData);
//   });
// });

// Get a single catch record
// router.get("/:id", (req, res) => {
//   Catch.findByPk(req.params.id).then((catchData) => {
//     res.json(catchData);
//   });
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const catchData = await Catch.findAll(); // Fetch fishData from the database
//     const fish = await Fish.findAll();
//     res.render("profile", { catchData, fish }); // Render the template with fishData
//   } catch (err) {
//     res
//       .status(500)
//       .json({ error: "Failed to fetch catchData from the database" });
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newCatch = await Catch.create({
      user_id: req.session.user_id,
      ...req.body,
    });

    console.log(newCatch)
    console.log("USER ID", req.session.user_id)
    //res.redirect(`/user/${req.session.user_id}`);

    return res.status(200).json({ status: "success"});
  } catch (err) {
    console.log("ERROR CATCH FISH", err.message)
    res.status(400).json(err);
  }
});

//Delete a catch :(
/*
router.delete("/:id", async (req, res) => {
  try {
    const catchData = await Catch.destroy({
      where: { id: req.params.id },
    });

    if (!catchData) {
      res.status(404).json({ message: "No catch found with this id!" });
      return;
    }

    res.status(200).json(catchData);
  } catch (err) {
    res.status(500).json(err);
  }
});
*/
module.exports = router;
