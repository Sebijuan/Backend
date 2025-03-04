exports.getUserProfile = async (req, res) => {
    res.json({ username: "Sebi", email: "sebi@example.com" });
};

exports.updateUserProfile = async (req, res) => {
    res.json({ message: "Perfil actualizado" });
};
