export const compareCars = async (req, res) => {
    res.json({ message: "Comparación realizada", cars: req.body });
};
