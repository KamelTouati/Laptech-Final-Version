const router = require("express").Router();
const {
  sendResetPasswordLink,
  getResetPasswordLink,
  resetPassword,
} = require("../controllers/passwordController");

// /api/password/reset-password-link
router.post("/reset-password-link", sendResetPasswordLink);

// /api/password/reset-password/:userId/:token
router
  .route("/reset-password/:userId/:token")
  .get(getResetPasswordLink)
  .post(resetPassword);

module.exports = router;
