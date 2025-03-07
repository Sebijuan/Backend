const Car from("../Models/car.model");

const getAllCars = async () => {
    return await Car.find();
};

const getCarById = async (id) => {
    const car = await Car.findById(id);
    if (!car) throw new Error("Coche no encontrado");
    return car;
};

module.exports = { getAllCars, getCarById };
