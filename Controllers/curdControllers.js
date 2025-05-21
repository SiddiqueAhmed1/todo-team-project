const curdModel = require("../Models/curdModel");

// Create a new Curd
const createCurd = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const userId = req.user._id;

        const newCurd = await curdModel.create({
            title,
            description,
            status,
            priority,
            userId,
        });

        res.status(201).json({
            success: true,
            message: "Curd created successfully",
            data: newCurd,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// Get all Curds
const getAllCurds = async (req, res) => {
    try {
        const userId = req.user._id;
        const curds = await curdModel
            .find({ userId })
            .sort({ createdAt: -1 })
            .populate("userId", "name email");
        res.status(200).json({
            success: true,
            message: "Curds fetched successfully",
            data: curds,
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
const updateCurd = async (req, res) => {
    try {
        const { title, description, status, priority } = req.body;
        const userId = req.user._id;
        const curdId = req.params.id;

        const updatedCurd = await curdModel.findOneAndUpdate(
            { _id: curdId, userId },
            { title, description, status, priority },
            { new: true }
        );

        if (!updatedCurd) {
            return res.status(404).json({
                success: false,
                message: "Curd not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Curd updated successfully",
            data: updatedCurd,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// Delete a Curd
const deleteCurd = async (req, res) => {
    try {
        const userId = req.user._id;
        const curdId = req.params.id;

        const deletedCurd = await curdModel.findOneAndDelete({
            _id: curdId,
            userId,
        });

        if (!deletedCurd) {
            return res.status(404).json({
                success: false,
                message: "Curd not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Curd deleted successfully",
            data: deletedCurd,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    createCurd,
    getAllCurds,
    updateCurd,
    deleteCurd
}