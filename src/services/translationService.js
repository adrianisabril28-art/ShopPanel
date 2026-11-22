const translations = {
  // BELLEZA
  'Essence Mascara Lash Princess': {
    title: 'Máscara de pestañas Lash Princess',
    description: 'Máscara de pestañas diseñada para aportar volumen y longitud.'
  },
  'Eyeshadow Palette with Mirror': {
    title: 'Paleta de sombras con espejo',
    description: 'Paleta de sombras con diferentes tonos para crear distintos estilos de maquillaje.'
  },
  'Powder Canister': {
    title: 'Recipiente para polvo',
    description: 'Recipiente práctico para almacenar y conservar productos en polvo.'
  },
  'Red Lipstick': {
    title: 'Labial rojo',
    description: 'Labial de color rojo con una presentación elegante.'
  },
  'Red Nail Polish': {
    title: 'Esmalte de uñas rojo',
    description: 'Esmalte de uñas de color rojo para darle un acabado atractivo a tus uñas.'
  },

  // FRAGANCIAS
  'Calvin Klein CK One': {
    title: 'Calvin Klein CK One',
    description: 'Fragancia fresca y versátil de Calvin Klein.'
  },
  'Chanel Coco Noir Eau De': {
    title: 'Chanel Coco Noir',
    description: 'Fragancia elegante de Chanel con un aroma sofisticado.'
  },
  'Dior J adore': {
    title: 'Dior J’adore',
    description: 'Fragancia femenina de Dior con una esencia floral.'
  },
  'Dolce Shine Eau de': {
    title: 'Dolce Shine',
    description: 'Fragancia de Dolce & Gabbana con notas frescas y luminosas.'
  },
  'Gucci Bloom Eau de': {
    title: 'Gucci Bloom',
    description: 'Fragancia floral de Gucci con una esencia delicada.'
  },

  // MUEBLES Y HOGAR
  'Annibale Colombo Bed': {
    title: 'Cama Annibale Colombo',
    description: 'Cama de diseño elegante para complementar el dormitorio.'
  },
  'Annibale Colombo Sofa': {
    title: 'Sofá Annibale Colombo',
    description: 'Sofá de diseño moderno para espacios interiores.'
  },
  'Bedside Table African Cherry': {
    title: 'Mesa de noche de cerezo africano',
    description: 'Mesa auxiliar para organizar objetos junto a la cama.'
  },
  'Knoll Saarinen Executive Conference Chair': {
    title: 'Silla ejecutiva Knoll Saarinen',
    description: 'Silla de diseño para oficinas y espacios de trabajo.'
  },
  'Wooden Bathroom Sink With Mirror': {
    title: 'Lavamanos de madera con espejo',
    description: 'Conjunto de lavamanos y espejo para el cuarto de baño.'
  },

  // TECNOLOGÍA
  'iPhone 12 Pro': {
    title: 'iPhone 12 Pro',
    description: 'Teléfono inteligente de Apple con pantalla de alta calidad.'
  },
  'iPhone 13 Pro': {
    title: 'iPhone 13 Pro',
    description: 'Teléfono inteligente de Apple con funciones avanzadas.'
  },
  'Samsung Galaxy S21': {
    title: 'Samsung Galaxy S21',
    description: 'Teléfono inteligente Samsung con pantalla de alta resolución.'
  },
  'Samsung Galaxy S22': {
    title: 'Samsung Galaxy S22',
    description: 'Teléfono inteligente Samsung con tecnología avanzada.'
  },
  'MacBook Pro': {
    title: 'MacBook Pro',
    description: 'Computador portátil de Apple diseñado para productividad y creatividad.'
  },

  // ACCESORIOS
  'Blue Backpack': {
    title: 'Mochila azul',
    description: 'Mochila práctica para transportar objetos personales.'
  },
  'Leather Handbag': {
    title: 'Bolso de cuero',
    description: 'Bolso de diseño elegante para uso cotidiano.'
  },
  'Sunglasses': {
    title: 'Gafas de sol',
    description: 'Accesorio diseñado para proteger los ojos de la luz solar.'
  },
}

export const translateProductTitle = (title) => {
  return translations[title]?.title || title
}

export const translateProductDescription = (title, description) => {
  return translations[title]?.description || description
}
