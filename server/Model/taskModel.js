import mongoose from "mongoose";    

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Enter the title"],
  },

  description: {
    type: String,
    required: [true, "Enter the description"],
  },

  category: {
    type: String,
    enum: ["do", "doing", "done"],
    required: [true, "Type the category"],
  },
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "authenticated users",
  },
});

const TaskModel = mongoose.model("Do Doing Done", taskSchema);

export default TaskModel;
