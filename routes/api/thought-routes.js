const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route("/:id").get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:id/reactions/").post(addReaction);
router.route("/:id/reactions/:reactionId").delete(removeReaction);

module.exports = router;