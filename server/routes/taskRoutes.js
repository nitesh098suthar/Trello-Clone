import express from "express";
import { addController, deleteController,dndController, getController, updateController } from "../controller/taskController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const Router = express.Router();
// Router.route('/get/:id').get(authMiddleware, getSingleTask)
Router.route("/get").get(authMiddleware, getController)
Router.route("/add").post(authMiddleware, addController)
Router.route("/update/:id").put(authMiddleware, updateController)
Router.route("/delete/:id").delete(authMiddleware, deleteController)
Router.route("/dnd/:id").put(authMiddleware, dndController);

export default Router;
