const express = require("express");

const router = express.Router();

const usersControllers = require("../controllers/users_controllers");
const postControllers = require("../controllers/post_controllers");

router.get("/profile", usersControllers.profile);
router.get("/post", postControllers.post);

module.exports = router;
