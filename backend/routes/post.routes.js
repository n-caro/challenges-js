const { Router } = require("express");
const { PostController } = require("../controllers");

const router = Router();

router.post("/", PostController.createPost);
router.get("/", PostController.getAll);
router.get("/:id", PostController.getById);
router.delete("/:id", PostController.deletePost);
router.patch("/:id", PostController.updatePost);

module.exports = router;
