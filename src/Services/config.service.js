export const getConfigOptions = async () => {
  // Aquí puedes cargar de la base de datos si lo necesitas
  // Pero para este caso, devolvemos estático:
  return {
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
      1: ['Motor Gasolina 3.0L(340cv)', 'Motor Diesel 3.0L(265cv)','Motor Hibrido Enchufable(489cv)','Motor V8 4.4L(555cv)'],
      2: ['Motor Diesel 2.0 TDI(136cv)', 'Motor Diesel 3.0 TDI(347cv)','Motor Gasolina 1.5 TFSI(150cv)','Motor Gasolina 2.0 TFSI(204cv)'],
      3: ['Motor Gasolina 3.0 litros TwinPower Turbo(530cv)'],
      4: ['Motor Gasolina 2.0(476cv)'],
      5: ['Motor Gasolina 2.0 TSI(265cv)', 'Motor Gasolina 2.0 TSI(300cv)'],
      6: ['Motor Gasolina 1.5 TSI(150cv)','Motor Gasolina 1.5 TSI(115cv)', 'Motor Hibrido 1.5 eTSI(150cv)','Motor Hibrido 1.5 eTSI(115cv)','Motor Hibrido 1.5 eTSI(204cv)','Motor Diesel 2.0 TDI(150cv)',''],
      7: ['Motor Gasolina 1.0 TSI(115cv)', 'Motor Gasolina 1.5 TSI(150cv)'],
      8: ['Motor Gasolina 1.0 TFSI(110cv)', 'Motor Gasolina 1.5 TFSI(150cv)','Motor Gasolina 2.0 TFSI(207cv)'],
      9: ['Motor Gasolina 2.0 T-GDI(250cv)', 'Motor Gasolina 2.0 T-GDI(280cv)'],
      10: ['Motor Gasolina 1.6 T-GDI(204cv)'],
      11: ['Motor Gasolina 2.0(255cv)', 'Motor Gasolina 3.0(382cv)'],
      12: ['Motor Gasolina 2.3(400cv)', 'Motor Gasolina 2.3 EcoBoost(280cv)'],
      13: ['Motor Gasolina 3.5(304cv)'],
      14: ['Motor Gasolina VTEC® 2.0L (315cv)'],
      15: ['Motor Gasolina V8 4.OL(650cv)', 'Motor Hibrido(800cv)'],
      16: ['Motor Gasolina V8 4.5L(570cv)', 'Motor Gasolina V8 GTB(670cv)'],
      17: ['Motor Gasolina 1.2T(100cv)', 'Motor Hibrido 1.2T XHL(100cv)','Motor Hibrido 1.2T XHL(136cv)','Motor Electrico 115kw y 51kWh Bateria(156cv)'],
    },
    Extras: [
      'Sistema de Navegación Avanzado', 'Asistente de Conducción Autónoma',
      'Enfriadores de bebidas', 'Detalles en oro, plata o cristales Swarovski'
    ],
    Color: ['Rojo', 'Azul', 'Negro', 'Blanco', 'Gris']
  };
};