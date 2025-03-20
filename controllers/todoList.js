import todoList from "../models/todoModel.js";

// CREATE
export const createTodo = async (req, res) => {
  try {
    const { todo_title, todo_desc, todo_status } = req.body;

    if (!todo_title || !todo_desc || !todo_status) {
      return res
        .status(400)
        .json({ message: "Please fill in the required fields." });
    }

    const newTodo = await todoList.create({
      todo_title,
      todo_desc,
      todo_status,
    });

    res
      .status(200)
      .json({ message: "Create a to do list successfully!", newTodo });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// READ ALL TODO
export const getAllTodos = async (req, res) => {
  try {
    const todos = await todoList.find();
    res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE TODO
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todo_title, todo_desc, todo_status } = req.body;

    const updateData = {
      todo_title,
      todo_desc,
      todo_status,
    };
    const updatedTodo = await todoList.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "To-do not found." });
    }

    res
      .status(200)
      .json({ message: "To-do updated successfully!", updatedTodo });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// DELETE TODO
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await todoList.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "To-do not found." });
    }

    res.status(200).json({ message: "To-do deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
