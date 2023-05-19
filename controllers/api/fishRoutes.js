
const router = require("express").Router();
const Fish = require("../../models/Fish");
const withAuth = require("../../utils/auth")

//Get all fish
router.get("/", (req, res) => {
  Fish.findAll().then((fishData) => {
    let fish = fishData.map(element => element.get({plain: true}));

    console.log(fishData);
    res.json(fish);
  });
});

// // Get a single fish
// router.get("/:id", (req, res) => {
//   Fish.findByPk(req.params.id).then((fishData) => {
//     res.json(fishData);
//   });
// });

// //Create a fish
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newFish = await Fish.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newFish);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


// //Delete a fish
// router.delete('/:id', withAuth, async (req, res) => {

//   try {
//     const fishData = await Fish.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       }
//     });

//     if (!fishData) {
//       return res.status(404).json({ message: "No fish found with this id!" });
//     }

//     res.status(200).json(fishData);

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
