const Order from("../Models/order.model");

const createOrder = async (orderData) => {
    const order = await Order.create(orderData);
    return order;
};

const getOrdersByUser = async (userId) => {
    return await Order.find({ user: userId }).populate("car config");
};

module.exports = { createOrder, getOrdersByUser };
