const Todo = require("../Models/TodoModel");

// Create a new Curd
const createTodo = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const userId = req.user._id;

        const newTodo = await Todo.create({
            title,
            description,
            status,
            priority,
            userId,
        });

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: newTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// Get all Curds
const getAllTodos = async (req, res) => {
    try {
        const userId = req.user._id;
        const todos = await Todo
            .find({ userId })
            .sort({ createdAt: -1 })
            .populate("userId", "name email");
        res.status(200).json({
            success: true,
            message: "Todos fetched successfully",
            data: todos,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// Update a Curd
const updateTodo = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const userId = req.user._id;
        const curdId = req.params.id;

        const updateTodo = await curdModel.findOneAndUpdate(
            { _id: curdId, userId },
            { title, description, status, priority },
            { new: true }
        );

        if (!updateTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            data: updateTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// Delete a Curd
const deleteTodo = async (req, res) => {
    try {
        const userId = req.user._id;
        const todoId = req.params.id;

        const deleteTodo = await Todo.findOneAndDelete({
            _id: todoId,
            userId,
        });

        if (!deleteTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Todo deleted successfully",
            data: deleteTodo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const filterTodo = async (req, res) => {
    try {
        const { status, sortBy, order } = req.query;
        const userId = req.user._id;

        const filter = { userId };
        if (status) filter.status = status;

        const sort = {};
        if (sortBy) {
            sort[sortBy] = order === "desc" ? -1 : 1;
        }

        const curds = await curdModel.find(filter).sort(sort);

        res.status(200).json({
            success: true,
            message: "Filtered curds fetched successfully",
            data: curds,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
    filterTodo,
}