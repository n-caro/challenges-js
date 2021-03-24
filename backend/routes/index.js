const express = require("express");

const PostsRoutes = require("./post.routes");

const router = express.Router();
const apiRoutes = express.Router();
// middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// Routes
apiRoutes.use("/posts", PostsRoutes);
// set base url for all api routes (example: /api)
router.use("/", apiRoutes);

module.exports = router;
