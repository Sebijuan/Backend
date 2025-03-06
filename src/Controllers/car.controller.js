const Car = require("./Models/car.model");

exports.getCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
};

exports.getCarById = async (req, res) => {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Coche no encontrado" });
    res.json(car);
};

exports.addCar = async (req, res) => {
    const newCar = await Car.create(req.body);
    res.status(201).json(newCar);
};

exports.updateCar = async (req, res) => {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCar);
};

exports.deleteCar = async (req, res) => {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: "Coche eliminado" });
};
