const { Router } = require("express");
const { PostController } = require("../controllers");

const router = Router();

router.post("/", PostController.createPost);

module.exports = router;
