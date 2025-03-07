import Car from"../Models/car.model.js";

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
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: "Coche eliminado" });
};
