export function getUserProfile(req, res) {
    // Simulación de obtención del perfil de usuario
    res.json({
        id: req.params.id,
        name: "John Doe",
        email: "john.doe@example.com",
    });
}

export function updateUserProfile(req, res) {
    // Simulación de actualización del perfil de usuario
    res.json({ message: "Perfil actualizado" });
}
