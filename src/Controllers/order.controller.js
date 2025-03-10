export function getOrders(req, res) {
    // Simulación de obtención de órdenes
    res.json([
        { id: 1, item: "Producto 1", quantity: 2 },
        { id: 2, item: "Producto 2", quantity: 1 },
    ]);
}

export function createOrder(req, res) {
    // Simulación de creación de una nueva orden
    res.json({ message: "Orden creada" });
}
