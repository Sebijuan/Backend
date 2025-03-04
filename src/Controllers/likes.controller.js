exports.likeCar = async (req, res) => {
    res.json({ message: "Coche agregado a favoritos" });
};

exports.unlikeCar = async (req, res) => {
    res.json({ message: "Coche eliminado de favoritos" });
};

exports.getUserLikes = async (req, res) => {
    res.json([{ id: 1, name: "Lamborghini Huracán" }]);
};
