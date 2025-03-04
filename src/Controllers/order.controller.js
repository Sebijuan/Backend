exports.getOrders = async (req, res) => {
    res.json([{ id: 1, car: "Ferrari", price: 120000 }]);
};

exports.createOrder = async (req, res) => {
    res.status(201).json({ message: "Pedido creado" });
};
