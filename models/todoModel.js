import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    todo_title: {
      type: String,
      required: true,
      index: true,
    },
    todo_desc: {
      type: String,
      maxlength: 500,
      default: "",
    },
    todo_status: {
      type: String,
      required: true,
      default: "active",
      enum: ["active", "finished"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("todoList", todoSchema);
