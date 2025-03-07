import Car from"../Models/car.model.js";
import mongoose from"mongoose";
export const getCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
};

export const getCarById = async (req, res) => {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Coche no encontrado" });
    res.json(car);
};

export const addCar = async (req, res) => {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
};

export const updateCar = async (req, res) => {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
};

export const deleteCar = async (req, res) => {
    try {
        const { id } = req.params;

        // Validar si el ID es un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        const car = await Car.findByIdAndDelete(id);
        if (!car) {
            return res.status(404).json({ message: "Auto no encontrado" });
        }

        res.json({ message: "Auto eliminado exitosamente" });
    } catch (error) {
        console.error("❌ Error al eliminar auto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};
