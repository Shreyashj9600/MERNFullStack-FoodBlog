const express = require("express");
const router = express.Router();
const { userSignUp, userLogin, getUser } = require("../controllers/user");

router.post("/signUp", userSignUp);
router.post("/Login", userLogin);
router.get("/user/:id", getUser);

module.exports = router;