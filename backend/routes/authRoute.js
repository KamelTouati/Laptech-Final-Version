const router = require("express").Router();
const { registerUser, loginUser, verifyUserAccount } = require("../controllers/authController")

// /api/auth/register
router.post("/register", registerUser);

// /api/auth/login
router.post("/login", loginUser);

// /api/auth/:userId/verify/:token
router.get("/:userId/verify/:token", verifyUserAccount);

module.exports = router;