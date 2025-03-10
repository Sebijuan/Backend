export function likeCar(req, res) {
    // Simulación de dar like a un coche
    res.json({ message: "Coche marcado como favorito" });
}

export function unlikeCar(req, res) {
    // Simulación de quitar like a un coche
    res.json({ message: "Coche desmarcado como favorito" });
}

export function getUserLikes(req, res) {
    // Simulación de obtención de coches favoritos del usuario
    res.json([
        { id: 1, car: "Coche 1" },
        { id: 2, car: "Coche 2" },
    ]);
}
