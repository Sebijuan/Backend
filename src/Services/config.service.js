export const getConfigOptions = async (carId = null) => {
  const options = {
    Interior: [
      'Asientos Tipo Bucket', 'Pack de luces LED de interior', 'Pack de Altavoces Supreme',
      'Instalación de un cielo estrellado con fibra óptica tipo Rolls-Royce',
      'Pantallas táctiles más grandes (tipo tablet)', 'Portavasos iluminados',
      'Tweeters motorizados que emergen al encender el coche',
      'Tapizado con materiales especiales (Alcantara, microfibra)'
    ],
    Exterior: [
      'Pintura Cromada', 'Faros LED', 'Llantas de aleación de 18"', 'Escape Akrapovic',
      'Techo Solar', 'Parachoques', 'Faldones Laterales', 'Difusor Aerodinámico'
    ],
    Motor: {
      "683e13f36c1a5e73877668": ['Motor Gasolina 1.0 TFSI(110cv)', 'Motor Gasolina 1.5 TFSI(150cv)', 'Motor Gasolina 2.0 TFSI(207cv)'], // Audi A4
      "683e144d6c1a5e7387766a": ['Motor Diesel 2.0 TDI(136cv)', 'Motor Diesel 3.0 TDI(347cv)', 'Motor Gasolina 1.5 TFSI(150cv)', 'Motor Gasolina 2.0 TFSI(204cv)'], // BMW X5
      "683e149b6c1a5e7387766c": ['Motor Gasolina 3.0L(340cv)', 'Motor Diesel 3.0L(265cv)', 'Motor Hibrido Enchufable(489cv)', 'Motor V8 4.4L(555cv)'], // BMW M3
      "683e14dd6c1a5e7387766e": ['Motor Gasolina 2.0(476cv)'], // Mercedes C 63 S
      "683e15196c1a5e73877670": ['Motor Gasolina 1.5 TSI(150cv)', 'Motor Gasolina 1.5 TSI(115cv)', 'Motor Hibrido 1.5 eTSI(150cv)', 'Motor Hibrido 1.5 eTSI(115cv)', 'Motor Hibrido 1.5 eTSI(204cv)', 'Motor Diesel 2.0 TDI(150cv)', ''], // Volkswagen Golf Gti
      "683e15706c1a5e73877672": ['Motor Gasolina 2.0 TSI(265cv)', 'Motor Gasolina 2.0 TSI(300cv)'], // Ford Focus Rs
      "683e15b6c1a5e73877674": ['Motor Gasolina 1.0 TSI(115cv)', 'Motor Gasolina 1.5 TSI(150cv)'], // Seat Ibiza Fr
      "683e15bf6c1a5e73877676": ['Motor Gasolina 2.0 T-GDI(250cv)', 'Motor Gasolina 2.0 T-GDI(280cv)'], // Hyundai i20 N
      "683e16326c1a5e73877678": ['Motor Gasolina 2.0(255cv)', 'Motor Gasolina 3.0(382cv)'], // Toyota Gr Supra
      "683e16846c1a5e7387767a": ['Motor Gasolina 3.5(304cv)'], // Nissan Maxima
      "683e16ca6c1a5e7387767c": ['Motor Gasolina VTEC® 2.0L (315cv)'], // Honda Civic Type R
      "683e16ff6c1a5e7387767e": ['Motor Gasolina 2.3(400cv)', 'Motor Gasolina 2.3 EcoBoost(280cv)'], // Seat Leon Fr
      "683e172e6c1a5e73877680": ['Motor Gasolina 1.6 T-GDI(204cv)'], // Audi A1
      "683e17636c1a5e73877682": ['Motor Gasolina V8 4.OL(650cv)', 'Motor Hibrido(800cv)'], // Hyundai i30 N
      "683e179e6c1a5e73877684": ['Motor Gasolina V8 4.5L(570cv)', 'Motor Gasolina V8 GTB(670cv)'], // Lamborghini Urus
      "683e17d66c1a5e73877686": ['Motor Gasolina 1.2T(100cv)', 'Motor Hibrido 1.2T XHL(100cv)', 'Motor Hibrido 1.2T XHL(136cv)', 'Motor Electrico 115kw y 51kWh Bateria(156cv)'], // Ferrari 458 Italia
      "683e18076c1a5e73877688": ['Motor Gasolina 3.0 litros TwinPower Turbo(530cv)'], // Opel Corsa Gs Line
    },
    Extras: [
      'Sistema de Navegación Avanzado', 'Asistente de Conducción Autónoma',
      'Enfriadores de bebidas', 'Detalles en oro, plata o cristales Swarovski'
    ],
    Color: ['Rojo', 'Azul', 'Negro', 'Blanco', 'Gris']
  };

  const normalizedCarId = carId ? String(carId).trim() : null;

  if (normalizedCarId && options.Motor[normalizedCarId]) {
    return {
      ...options,
      Motor: { [normalizedCarId]: options.Motor[normalizedCarId] }
    };
  }

  return options;
};