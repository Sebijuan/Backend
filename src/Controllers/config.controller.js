import { getConfigOptions as getOptionsService } from "../Services/config.service.js";

export async function getConfigOptions(req, res) {
  try {
    const options = await getOptionsService();
    res.json(options);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las opciones de configuración" });
  }
}

// Puedes dejar saveConfig igual o implementarlo según tu lógica
export function saveConfig(req, res) {
  res.json({ message: "Configuración guardada" });
}