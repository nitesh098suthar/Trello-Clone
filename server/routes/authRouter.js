import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  regController,
  loginController,
  logoutController,
  changeController,
  forgetController,
  resetController,
  getController,

} from "../controller/authController.js";

const Router = express.Router();

Router.route("/register").post(regController);
Router.route("/login").post(loginController);
Router.route("/password/change").put(authMiddleware, changeController);
Router.route("/password/forget").post(forgetController);
Router.route("/password/reset/:token").put(resetController);
Router.route("/logout").get(logoutController);
Router.route("/me").get(authMiddleware, getController)

export default Router;
