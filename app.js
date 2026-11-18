// Íconos SVG limpios generados en código
const ICONS = {
  speaker: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>`,
  pause: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
  cardArrow: `<svg viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>`,
  warning: `<svg viewBox="0 0 120 110" fill="none" stroke="#000000" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M60 10 L112 100 H8 Z"/><line x1="60" y1="42" x2="60" y2="70"/><circle cx="60" cy="84" r="2.5" fill="#000000"/></svg>`,
  arrowUp: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="60" y1="100" x2="60" y2="22"/><polyline points="30,52 60,22 90,52"/></svg>`,
  arrowRight: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M36 105 V55 C36 42 46 32 59 32 H76 V16 L104 40 L76 64 V48 H59 C54 48 50 52 50 57 V105 Z"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M84 105 V55 C84 42 74 32 61 32 H44 V16 L16 40 L44 64 V48 H61 C66 48 70 52 70 57 V105 Z"/></svg>`,
  uTurn: `<svg viewBox="0 0 120 120" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M82 95 V46 C82 30 70 18 55 18 C40 18 28 30 28 46 V92"/><polyline points="12,74 28,92 44,74"/></svg>`
};

// Base de datos de todas las pantallas de Web 2: Plaza Zabala
const SCREENS = {
  // PANTALLAS INICIALES (9 y 10)
  intro: {
    title: "Museo de la Movilidad y las Identidades",
    paragraphs: [
      "Somos un museo de la Intendencia de Montevideo. Acá contamos cómo las personas se han desplazado a lo largo del tiempo, y cómo esos movimientos han construido nuestra sociedad, la cultura y las identidades."
    ],
    highlight: "¿Vamos a descubrirlo?",
    audio: "audio/pagina1.mp3",
    audioLabel: "Escuchar presentación",
    primaryLabel: "Continuar",
    next: "selector"
  },

  selector: {
    type: "selector",
    title: "Elegí entre dos recorridos: histórico o directo ¿Cuál preferís hacer?",
    options: [
      {
        title: "Recorrido histórico",
        description: "Vas a conocer puntos clave sobre el Montevideo colonial.",
        buttonLabel: "Elegir este recorrido",
        next: "hist_71"
      },
      {
        title: "Recorrido directo",
        description: "Esta es la forma más simple y rápida de llegar al museo.",
        buttonLabel: "Elegir este recorrido",
        next: "dir_11"
      }
    ]
  },

  // ==========================================
  // RECORRIDO DIRECTO (Pantallas 11 a 15)
  // ==========================================
  dir_11: {
    title: "Estás en la Plaza Zabala, ¿Vamos hasta el MuMI?",
    image: "img/mapa-directo.png",
    imageType: "map",
    imageAlt: "Mapa del recorrido directo desde Plaza Zabala hasta el MuMI",
    paragraphs: [
      "Este recorrido te guía desde la Plaza Zabala hasta el museo. Podés seguir las instrucciones en pantalla o seguir escuchando este audio."
    ],
    audio: "audio/pagina11.mp3",
    audioLabel: "Escuchar indicaciones",
    primaryLabel: "Comenzar recorrido",
    next: "dir_12"
  },

  dir_12: {
    icon: "warning",
    center: true,
    title: "Circulá con precaución",
    paragraphs: [
      "Las instrucciones sobre cómo llegar a pie no siempre reflejan las condiciones reales de la calle."
    ],
    audio: "audio/pagina4.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "dir_13"
  },

  dir_13: {
    badge: "Paso 1 de 3",
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: [
      "Caminá derecho una cuadra por la calle 1 de Mayo."
    ],
    audio: "audio/pagina13.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_14"
  },

  dir_14: {
    badge: "Paso 2 de 3",
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Llegaste a la esquina de 1 de Mayo y 25 de Mayo.\nGirá a tu derecha por la misma vereda, luego caminá derecho seis cuadras por 25 de Mayo."
    ],
    audio: "audio/pagina14.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "dir_15"
  },

  dir_15: {
    badge: "Paso 3 de 3",
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "Llegaste a la esquina de 25 de Mayo y Bartolomé Mitre.\nGirá a tu izquierda y caminá, por la vereda derecha, dos cuadras por Bartolomé Mitre."
    ],
    audio: "audio/pagina15.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "arrival"
  },

  // ==========================================
  // RECORRIDO HISTÓRICO (Pantallas 71 a 106)
  // ==========================================
  hist_71: {
    image: "img/mapa-historico.png",
    imageType: "map",
    imageAlt: "Mapa del recorrido histórico desde Plaza Zabala hasta el MuMI",
    paragraphs: [
      "Este recorrido te guía desde la Plaza Zabala hasta el museo, atravesando algunos de los puntos históricos más interesantes de nuestra ciudad."
    ],
    highlight: "¿Vamos a descubrirlo?",
    audio: "audio/pagina71.mp3",
    audioLabel: "Escuchar presentación",
    primaryLabel: "Comenzar recorrido",
    next: "hist_72"
  },

  hist_72: {
    icon: "warning",
    center: true,
    title: "Circulá con precaución",
    paragraphs: [
      "Las instrucciones sobre cómo llegar a pie no siempre reflejan las condiciones reales de la calle."
    ],
    audio: "audio/pagina4.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_73"
  },

  hist_73: {
    title: "Estás en la Plaza Zabala",
    paragraphs: [
      "La Plaza Zabala es una plaza histórica de Montevideo, conocida por sus jardines, árboles y caminos curvos. En el centro tiene una estatua de Bruno Mauricio de Zabala, el militar español considerado fundador de la ciudad. En 1975 fue declarada Monumento Histórico Nacional.",
      "Antes de convertirse en plaza, en este lugar se encontraba el Fuerte Grande, una construcción militar que servía para defender Montevideo. Con el tiempo, también se convirtió en la residencia de los gobernadores españoles y luego funcionó como sede del gobierno.",
      "En 1880 se demolió el antiguo edificio y se decidió construir una plaza pública. Su diseño estuvo a cargo del paisajista francés Édouard André y fue inaugurada el 31 de diciembre de 1890.",
      "La plaza tiene una forma diferente a la mayoría de las manzanas de la Ciudad Vieja, ya que sus caminos son curvos y no siguen la dirección de las calles. Esto se debe a que conserva la orientación del antiguo fuerte, que tenía una disposición distinta a la de las calles cercanas.",
      "En el centro se encuentra una estatua ecuestre de Bruno Mauricio de Zabala, quien llegó a Montevideo en 1724 para ocupar la zona y comenzar la organización de la ciudad. La escultura fue realizada en bronce por el escultor español Lorenzo Coullaut Valera y se inauguró el 27 de diciembre de 1931."
    ],
    audio: "audio/pagina73.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_74"
  },

  hist_74: {
    badge: "Punto de partida",
    title: "Plaza Zabala",
    image: "img/zabala.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de la Plaza Zabala",
    primaryLabel: "Continuar",
    next: "hist_75"
  },

  hist_75: {
    icon: "arrowUp",
    title: "Avanzá a la salida",
    paragraphs: [
      "Salí por la entrada que está en Circunvalación Durango y 1 de Mayo"
    ],
    audio: "audio/pagina75.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_76"
  },

  hist_76: {
    title: "Llegaste al Palacio Taranco",
    paragraphs: [
      "El Palacio Taranco es una gran casa antigua ubicada en la Ciudad Vieja de Montevideo. Hoy en día funciona allí el Museo de Artes Decorativas.",
      "Antes de existir este palacio, en ese terreno funcionaron los primeros teatros de la ciudad: primero la Casa de Comedias y luego el Teatro San Felipe. Más tarde, los hermanos Ortiz de Taranco, unos comerciantes españoles muy ricos, compraron el terreno para hacer su vivienda familiar.",
      "La construcción del palacio empezó en 1908 y terminó en 1910. Fue diseñado por dos arquitectos franceses, Charles-Louis Girault y Jules-Léon Chifflot, siguiendo el estilo antiguo de Francia.",
      "Por fuera, el edificio tiene muchos adornos, balcones y grandes ventanas. Por dentro tiene salones amplios, una escalera de mármol y habitaciones decoradas con muebles, cuadros y lámparas traídos de Europa. La familia vivió en el palacio hasta el año 1940 aproximadamente.",
      "En 1943, el Estado uruguayo compró el edificio y sus objetos de valor. En 1972 abrió sus puertas como Museo de Artes Decorativas, y en 1975 fue declarado Monumento Histórico Nacional.",
      "Actualmente, el museo guarda muebles antiguos, pinturas, esculturas y piezas arqueológicas de Grecia y Roma. Visitarlo permite conocer cómo vivían las familias más adineradas de Montevideo hace más de cien años."
    ],
    audio: "audio/pagina76.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_77"
  },

  hist_77: {
    badge: "Parada 1 de 7",
    title: "Palacio Taranco",
    image: "img/taranco.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Palacio Taranco",
    primaryLabel: "Continuar",
    next: "hist_78"
  },

  hist_78: {
    icon: "arrowUp",
    title: "Seguí por esta calle",
    paragraphs: [
      "Seguí por esta calle hasta llegar a la siguiente esquina en 25 de Mayo"
    ],
    audio: "audio/pagina78.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_79"
  },

  hist_79: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Sigue por 25 de Mayo hasta llegar a la calle Zabala en la siguiente esquina"
    ],
    audio: "audio/pagina79.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_80"
  },

  hist_80: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "Caminá unos metros hasta llegar a la casa de Lavalleja, al lado del banco Itaú, a mitad de cuadra"
    ],
    audio: "audio/pagina80.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_81"
  },

  hist_81: {
    title: "Llegaste a la Casa Lavalleja",
    paragraphs: [
      "La Casa Lavalleja es una vivienda muy antigua de la época colonial que hoy forma parte del Museo Histórico Nacional. Fue el hogar de Juan Antonio Lavalleja, un militar y político muy importante para la independencia de Uruguay.",
      "La construcción de la casa comenzó en el año 1783 por pedido de Manuel Cipriano de Mello, un comerciante portugués que la usaba para vivir y trabajar. En agosto de 1830, Juan Antonio Lavalleja compró la casa y se mudó allí con su esposa, Ana Monterroso, y sus hijos.",
      "La casa tiene dos pisos y está construida alrededor de dos patios abiertos. Estos patios servían para que entrara luz natural y aire fresco a todas las habitaciones. Todavía conserva sus pisos originales, rejas de hierro y puertas y ventanas de madera típicas de esa época.",
      "En 1940, la propiedad pasó a manos del Estado uruguayo y en 1942 abrió sus puertas como museo. Después de estar cerrada varios años por reformas, volvió a abrir al público en diciembre de 2016.",
      "Hoy funciona como un espacio cultural donde se hacen exposiciones sobre la historia de Uruguay y se guardan libros y documentos antiguos. Visitarla permite conocer cómo eran las casas y la vida de las familias de Montevideo hace más de doscientos años."
    ],
    audio: "audio/pagina81.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_82"
  },

  hist_82: {
    badge: "Parada 2 de 7",
    title: "Casa Lavalleja",
    image: "img/lavalleja.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de la Casa Lavalleja",
    primaryLabel: "Continuar",
    next: "hist_83"
  },

  hist_83: {
    icon: "uTurn",
    title: "Volvé por esta calle",
    paragraphs: [
      "Regresá por este mismo camino que recorriste hasta la siguiente esquina de 25 de mayo nuevamente"
    ],
    audio: "audio/pagina83.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_84"
  },

  hist_84: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "Girá a la izquierda por 25 de Mayo y Zabala"
    ],
    audio: "audio/pagina84.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_85"
  },

  hist_85: {
    icon: "arrowUp",
    title: "Seguí por esta calle",
    paragraphs: [
      "Seguí caminando 3 cuadras hasta llegar a Ituzaingó"
    ],
    audio: "audio/pagina85.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_86"
  },

  hist_86: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Girá por Ituzaingó y 25 de Mayo y siga por esa calle 3 cuadras"
    ],
    audio: "audio/pagina86.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_87"
  },

  hist_87: {
    icon: "arrowUp",
    title: "Seguí por esta calle",
    paragraphs: [
      "Caminá 3 cuadras hasta llegar a la esquina de Ituzaingó y la peatonal de Sarandí"
    ],
    audio: "audio/pagina87.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_88"
  },

  hist_88: {
    title: "Llegaste a la Iglesia Matriz",
    paragraphs: [
      "La Iglesia Matriz es una de las iglesias más antiguas e importantes de Montevideo. Es el templo principal de la Iglesia Católica en la ciudad. La palabra \"matriz\" significa principal o primera. Su nombre completo recuerda a la Virgen y a los santos Felipe y Santiago, protectores de Montevideo.",
      "En el año 1740 se abrió una primera iglesia sencilla en ese mismo lugar. Con el tiempo se rompió y en 1788 una parte se derrumbó. Por eso, en 1790 se empezó a construir la iglesia actual, que se terminó en el año 1804.",
      "En la época colonial, era un lugar muy importante para los vecinos. Allí se hacían misas, bautismos, casamientos y funerales, y la gente se reunía a conversar. En el año 1807, durante las invasiones inglesas, la iglesia sufrió daños por los ataques y sirvió para cuidar a los heridos y alojar prisioneros.",
      "El edificio tiene un estilo antiguo llamado neoclásico, inspirado en Grecia y Roma. En su frente tiene dos torres con campanas, columnas y una gran cúpula redonda en el techo. Por dentro tiene tres espacios largos llamados naves. Entre 1941 y 1963 se hizo una gran obra para repararla y cuidarla.",
      "En el año 1878 se convirtió en la Catedral de Montevideo, cuando Jacinto Vera fue nombrado el primer obispo. En 1897 recibió el título de Catedral Metropolitana, porque pasó a ser dirigida por un arzobispo. Dentro de la iglesia están enterrados Jacinto Vera y Mariano Soler, el primer arzobispo de la ciudad.",
      "En el año 1975 fue declarada Monumento Histórico Nacional. Cuidarla es muy importante porque nos muestra la arquitectura y la historia de los primeros años de Montevideo."
    ],
    audio: "audio/pagina88.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_89"
  },

  hist_89: {
    badge: "Parada 3 de 7",
    title: "Iglesia Matriz",
    image: "img/iglesia-matriz.png",
    imageType: "photo",
    imageAlt: "Ilustración histórica de la Iglesia Matriz",
    primaryLabel: "Continuar",
    next: "hist_90"
  },

  hist_90: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "A tu derecha vas a encontrar la Plaza Matriz, nuestra siguiente parada."
    ],
    audio: "audio/pagina90.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_91"
  },

  hist_91: {
    title: "Llegaste a la Plaza Matriz",
    paragraphs: [
      "La Plaza Matriz es la plaza más antigua de Montevideo. Su nombre oficial es Plaza de la Constitución. Se llama así porque el 18 de julio de 1830 se juró allí la primera Constitución de Uruguay.",
      "La plaza se creó en el año 1726, cuando Montevideo recién nacía y estaba gobernada por España. Era el centro de la ciudad y a su alrededor se construyeron edificios muy importantes, como el Cabildo y la Iglesia Matriz.",
      "En la época colonial, los vecinos se reunían allí para celebrar fiestas religiosas y militares. También funcionaba un mercado donde se vendían frutas y verduras, por eso antes la llamaban Plaza de las Verduras. A veces se hacían corridas de toros y otros festejos populares.",
      "En el centro de la plaza hay una gran fuente de mármol hecha por el escultor italiano Juan Ferrari. Se inauguró el 18 de julio de 1871 para celebrar la llegada del agua corriente a Montevideo. Antes, la gente sacaba agua de pozos que no siempre era limpia. Con la nueva red de agua del río Santa Lucía, esta fuente fue uno de los primeros lugares públicos con agua segura para los vecinos. La fuente está decorada con figuras de niños, delfines, águilas, herramientas de trabajo y el Escudo Nacional.",
      "Hoy en día, la Plaza Matriz sigue siendo un lugar lleno de vida en la Ciudad Vieja. Es visitada por muchos turistas y los sábados se instala una feria de antigüedades."
    ],
    audio: "audio/pagina91.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Continuar",
    next: "hist_92"
  },

  hist_92: {
    badge: "Parada 4 de 7",
    title: "Plaza Matriz",
    image: "img/plaza-matriz.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de la Plaza Matriz",
    primaryLabel: "Continuar",
    next: "hist_93"
  },

  hist_93: {
    icon: "arrowUp",
    title: "Atravesá la plaza",
    paragraphs: [
      "Cruzá la plaza en dirección hacia Juan Carlos Gómez, paralela a Ituzaingó, a mano derecha de la Iglesia Matriz."
    ],
    audio: "audio/pagina93.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_94"
  },

  hist_94: {
    title: "Llegaste al Cabildo de Montevideo",
    paragraphs: [
      "El Cabildo es uno de los edificios históricos más importantes de Montevideo. Está frente a la Plaza Matriz, en la Ciudad Vieja. En la época colonial, era el lugar desde donde se gobernaba la ciudad. Las autoridades que trabajaban allí, llamadas cabildantes, organizaban las calles, controlaban el comercio y cuidaban el orden. El edificio también funcionaba como juzgado y cárcel, por eso se lo llamaba Cabildo y Reales Cárceles.",
      "El primer edificio del Cabildo empezó a funcionar en el año 1737, pero con el tiempo se rompió. En 1804 se comenzó a construir el edificio actual, diseñado por el arquitecto español Tomás Toribio. Las obras avanzaron por etapas y terminaron en 1869, cuando Uruguay ya era un país independiente.",
      "El Cabildo fue escenario de momentos clave para la historia de Uruguay. En 1808 se hizo allí un Cabildo Abierto para decidir quién gobernaría Montevideo. En 1815 fue sede del gobierno durante la época de José Artigas. El 18 de julio de 1830 se juró allí la primera Constitución de Uruguay.",
      "Después de la independencia, el edificio tuvo otras funciones importantes. Hasta el año 1925 funcionó allí el Poder Legislativo, donde se reunían los senadores y diputados del país. El edificio tiene un estilo antiguo llamado neoclásico, inspirado en Grecia y Roma. Sus paredes son de piedra y ladrillo, tiene dos pisos y cuatro patios interiores. Su frente es simétrico, es decir, sus dos lados son iguales para mostrar fuerza y seriedad.",
      "Desde el año 1958 funciona allí el Museo Histórico Cabildo. En sus salas se guardan documentos, fotos, pinturas y objetos antiguos que nos ayudan a conocer cómo cambió la vida en Montevideo a lo largo de la historia."
    ],
    audio: "audio/pagina94.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_95"
  },

  hist_95: {
    badge: "Parada 5 de 7",
    title: "Cabildo de Montevideo",
    image: "img/cabildo.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Cabildo de Montevideo",
    primaryLabel: "Continuar",
    next: "hist_96"
  },

  hist_96: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: [
      "De frente al Cabildo, seguí hacia la izquierda por la calle Juan Carlos Gómez.",
      "Avanzá dos cuadras, vas a llegar a la esquina entre Juan Carlos Gómez y 25 de Mayo."
    ],
    audio: "audio/pagina96.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_97"
  },

  hist_97: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "En la vereda de en frente, sobre la calle 25 de mayo, se encuentra a unos metros hacia la derecha el Palacio Gómez, nuestra siguiente parada."
    ],
    audio: "audio/pagina97.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_98"
  },

  hist_98: {
    title: "Llegaste al Palacio Gómez",
    subtitle: "Palacio Gómez / Junta Departamental de Montevideo",
    paragraphs: [
      "El Palacio Gómez es un edificio construido originalmente como residencia familiar y que actualmente funciona como sede de la Junta Departamental de Montevideo. Esta institución es la encargada de elaborar y aprobar normas para el departamento, controlar la gestión de la Intendencia y representar a los habitantes de Montevideo.",
      "El edificio fue construido entre los años 1871 y 1874 por encargo de Francisco Antonio Gómez, un importante comerciante de la época, que quería utilizarlo como residencia familiar. El arquitecto encargado del proyecto fue Ignacio Pedralbes, quien diseñó una construcción lujosa y con muchos detalles decorativos. Sin embargo, Francisco Gómez y su familia nunca llegaron a vivir allí.",
      "En 1888, la familia Gómez vendió el edificio a la Junta Económico-Administrativa de Montevideo, que era la institución encargada de la administración de la ciudad en aquella época. El 25 de agosto de 1889 comenzó a funcionar allí como sede de la institución. Con el paso del tiempo, esta fue transformándose hasta convertirse en la actual Junta Departamental de Montevideo.",
      "El edificio tiene un estilo arquitectónico llamado eclecticismo historicista, que combina elementos de distintos estilos del pasado. Se destacan las influencias neogóticas, inspiradas en la arquitectura medieval inglesa. En su interior tiene tres plantas, un patio central cubierto por una gran claraboya y una escalera de mármol de Carrara que conecta los distintos niveles. También cuenta con columnas, decoraciones de yeso, vitrales y detalles de madera.",
      "En el año 1975 fue declarado Monumento Histórico Nacional por su valor arquitectónico e histórico. Actualmente, además de ser la sede de la Junta Departamental, es un espacio donde se desarrolla parte de la actividad política y administrativa de Montevideo."
    ],
    audio: "audio/pagina98.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_99"
  },

  hist_99: {
    badge: "Parada 6 de 7",
    title: "Palacio Gómez",
    image: "img/palacio-gomez.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica del Palacio Gómez",
    primaryLabel: "Continuar",
    next: "hist_100"
  },

  hist_100: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "Volvé a la esquina de Juan Carlos Gómez y 25 de mayo."
    ],
    audio: "audio/pagina100.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_101"
  },

  hist_101: {
    icon: "arrowUp",
    title: "Avanzá en línea recta",
    paragraphs: [
      "Doblá a la derecha sobre la misma vereda, en Juan Carlos Gómez. Avanzá en línea recta tres cuadras hasta la esquina entre Juan Carlos Gómez y 25 de Agosto."
    ],
    audio: "audio/pagina101.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_102"
  },

  hist_102: {
    icon: "arrowLeft",
    title: "Girá a la izquierda",
    paragraphs: [
      "En la esquina, cruzá la calle a mano izquierda.",
      "Avanzá por 25 de Agosto unos 60 metros aprox.",
      "A mano derecha te vas a encontrar nuestra última parada."
    ],
    audio: "audio/pagina102.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_103"
  },

  hist_103: {
    title: "Llegaste a Las Bóvedas",
    paragraphs: [
      "Las Bóvedas son construcciones muy antiguas que formaban parte de las defensas militares de Montevideo en la época colonial. Se empezaron a construir en el año 1794, cuando Uruguay estaba gobernado por España.",
      "Estaban ubicadas cerca del puerto y de la bahía para proteger la ciudad. Eran 34 habitaciones con techos curvos en forma de arco, llamados bóvedas. Estos espacios servían para guardar armas, municiones y comida para los soldados, y también se usaban para que las tropas durmieran allí.",
      "Con el paso del tiempo, Montevideo creció y ya no necesitó estas construcciones para defenderse. Muchas de ellas se derribaron para hacer cambios en el puerto y en la ciudad.",
      "Hoy todavía se conservan algunas partes de Las Bóvedas. Cuidarlas es muy importante porque nos permite ver cómo era el sistema de defensa de la antigua Montevideo."
    ],
    audio: "audio/pagina103.mp3",
    audioLabel: "Escuchar historia",
    primaryLabel: "Continuar",
    next: "hist_104"
  },

  hist_104: {
    badge: "Parada 7 de 7",
    title: "Las Bóvedas",
    image: "img/bovedas.png",
    imageType: "photo",
    imageAlt: "Fotografía histórica de Las Bóvedas",
    primaryLabel: "Continuar",
    next: "hist_105"
  },

  hist_105: {
    icon: "arrowUp",
    title: "Vayamos al MuMI",
    paragraphs: [
      "Volvé a la esquina entre Juan Carlos Gómez y 25 de Agosto. Avanzá una cuadra por 25 de agosto hasta llegar a la esquina entre Bartolomé Mitre y 25 de Agosto."
    ],
    audio: "audio/pagina105.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "hist_106"
  },

  hist_106: {
    icon: "arrowRight",
    title: "Girá a la derecha",
    paragraphs: [
      "Cruzá la calle y doblá hacia la derecha hasta llegar a la esquina entre Bartolomé Mitre y Piedras."
    ],
    audio: "audio/pagina106.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Siguiente paso",
    next: "arrival"
  },

  // PENÚLTIMA PANTALLA UNIFICADA (Accesos al MuMI)
  arrival: {
    type: "arrival",
    title: "Estás en la entrada principal del MuMI",
    lead: "¡Bienvenido! Elegí por qué acceso querés ingresar",
    sections: [
      {
        heading: "Puerta principal (con opción accesible)",
        body: "El acceso por la puerta principal tiene escalones y una puerta grande de madera y vidrio que se abre hacia los dos lados. Si preferís evitar los escalones, caminá unos 3 metros (unos 4 o 5 pasos) hacia tu derecha, sobre la calle Bartolomé Mitre. Allí se encuentra la entrada accesible a nivel del suelo."
      },
      {
        heading: "Entrada por Muralla Abierta",
        body: "Para entrar por la Muralla Abierta, avanzá hacia tu izquierda por la calle Piedras hasta sentir que el piso cambia a una vereda de adoquines. En ese punto, girá hacia tu derecha y vas a encontrar el portón de ingreso. Tené en cuenta que en esta entrada no hay recepción."
      }
    ],
    audio: "audio/llegada.mp3",
    audioLabel: "Escuchar instrucción",
    primaryLabel: "Finalizar recorrido",
    next: "final"
  },

  // PANTALLA FINAL NEGRA
  final: {
    type: "final"
  }
};

// Elementos del DOM
const appContainer = document.getElementById('app');
const appHeader = document.getElementById('app-header');
const screenContent = document.getElementById('screen-content');
const screenFooter = document.getElementById('screen-footer');
const audioPlayer = document.getElementById('audio-player');
const btnHome = document.getElementById('btn-home');
const btnBack = document.getElementById('btn-back');

let isPlaying = false;
let historyStack = [];

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  isPlaying = false;
}

function toggleAudio(src, btnElement, originalLabel) {
  if (isPlaying) {
    stopAudio();
    btnElement.classList.remove('playing');
    btnElement.innerHTML = `${ICONS.speaker}<span>${originalLabel}</span>`;
  } else {
    audioPlayer.src = src;
    audioPlayer.play().then(() => {
      isPlaying = true;
      btnElement.classList.add('playing');
      btnElement.innerHTML = `${ICONS.pause}<span>Pausar audio</span>`;
    }).catch(err => {
      console.error("Error reproduciendo audio:", err);
    });
  }
}

audioPlayer.addEventListener('ended', () => {
  isPlaying = false;
  const activeBtn = document.querySelector('.btn-audio.playing');
  if (activeBtn) {
    activeBtn.classList.remove('playing');
    activeBtn.innerHTML = `${ICONS.speaker}<span>${activeBtn.dataset.label}</span>`;
  }
});

function navigateTo(screenId) {
  const currentId = historyStack[historyStack.length - 1];
  if (currentId !== screenId) {
    historyStack.push(screenId);
  }
  renderScreen(screenId);
}

function goBack() {
  if (historyStack.length > 1) {
    historyStack.pop();
    const prevScreen = historyStack[historyStack.length - 1];
    renderScreen(prevScreen);
  }
}

function resetToHome() {
  historyStack = ['intro'];
  renderScreen('intro');
}

function renderScreen(screenId) {
  stopAudio();
  const data = SCREENS[screenId];
  if (!data) return;

  btnBack.hidden = historyStack.length <= 1 || data.type === 'final';

  screenContent.scrollTop = 0;
  screenContent.innerHTML = '';
  screenFooter.innerHTML = '';
  appContainer.classList.remove('dark-mode');
  appHeader.style.display = 'flex';
  screenContent.className = 'screen-content';

  // Pantalla Final Negra
  if (data.type === 'final') {
    appContainer.classList.add('dark-mode');
    appHeader.style.display = 'none';
    screenContent.classList.add('final-dark');

    screenContent.innerHTML = `
      <img src="img/logo-pantalla-final.svg" alt="MuMI | Muralla Abierta" class="final-logo">
      <button class="btn-restart-dark" onclick="resetToHome()">Volver al inicio</button>
    `;
    return;
  }

  // Pantalla 10: Selector de recorrido con tarjetas
  if (data.type === 'selector') {
    screenContent.classList.add('selector-layout');

    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);

    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'selector-cards';

    data.options.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'choice-card';
      card.innerHTML = `
        <div class="choice-card-header">
          <h2>${opt.title}</h2>
          ${ICONS.cardArrow}
        </div>
        <p>${opt.description}</p>
        <button class="btn btn-primary">${opt.buttonLabel}</button>
      `;
      card.querySelector('button').addEventListener('click', () => navigateTo(opt.next));
      cardsWrapper.appendChild(card);
    });

    screenContent.appendChild(cardsWrapper);
    return;
  }

  // Penúltima pantalla: Accesos al MuMI con scroll
  if (data.type === 'arrival') {
    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);

    const leadEl = document.createElement('p');
    leadEl.className = 'arrival-lead';
    leadEl.textContent = data.lead;
    screenContent.appendChild(leadEl);

    data.sections.forEach(sec => {
      const secDiv = document.createElement('section');
      secDiv.className = 'arrival-section';
      secDiv.innerHTML = `
        <h2>${sec.heading}</h2>
        <p>${sec.body}</p>
      `;
      screenContent.appendChild(secDiv);
    });

    if (data.audio) {
      const label = data.audioLabel || 'Escuchar instrucción';
      const audioBtn = document.createElement('button');
      audioBtn.className = 'btn btn-audio';
      audioBtn.dataset.label = label;
      audioBtn.innerHTML = `${ICONS.speaker}<span>${label}</span>`;
      audioBtn.addEventListener('click', () => toggleAudio(data.audio, audioBtn, label));
      screenFooter.appendChild(audioBtn);
    }

    if (data.primaryLabel && data.next) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'btn btn-primary';
      nextBtn.textContent = data.primaryLabel;
      nextBtn.addEventListener('click', () => navigateTo(data.next));
      screenFooter.appendChild(nextBtn);
    }
    return;
  }

  // Pantallas Estándar
  if (data.center) {
    screenContent.classList.add('center-content');
  }

  if (data.badge) {
    const badgeEl = document.createElement('div');
    badgeEl.className = 'step-badge';
    badgeEl.textContent = data.badge;
    screenContent.appendChild(badgeEl);
  }

  if (data.icon && ICONS[data.icon]) {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon-wrapper';
    iconDiv.innerHTML = ICONS[data.icon];
    screenContent.appendChild(iconDiv);
  }

  if (data.title) {
    const titleEl = document.createElement('h1');
    titleEl.className = 'screen-title';
    titleEl.textContent = data.title;
    screenContent.appendChild(titleEl);
  }

  if (data.subtitle) {
    const subEl = document.createElement('h2');
    subEl.className = 'screen-subtitle';
    subEl.textContent = data.subtitle;
    screenContent.appendChild(subEl);
  }

  if (data.image) {
    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'media-wrapper';
    const imgClass = data.imageType === 'map' ? 'map-img' : 'photo-img';
    mediaDiv.innerHTML = `<img src="${data.image}" alt="${data.imageAlt || ''}" class="${imgClass}">`;
    screenContent.appendChild(mediaDiv);
  }

  if (data.paragraphs && data.paragraphs.length > 0) {
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'screen-body';
    data.paragraphs.forEach(text => {
      const p = document.createElement('p');
      p.innerHTML = text.replace(/\n/g, '<br>');
      bodyDiv.appendChild(p);
    });
    screenContent.appendChild(bodyDiv);
  }

  if (data.highlight) {
    const highEl = document.createElement('p');
    highEl.className = 'screen-highlight';
    highEl.textContent = data.highlight;
    screenContent.appendChild(highEl);
  }

  if (data.audio) {
    const label = data.audioLabel || 'Escuchar presentación';
    const audioBtn = document.createElement('button');
    audioBtn.className = 'btn btn-audio';
    audioBtn.dataset.label = label;
    audioBtn.innerHTML = `${ICONS.speaker}<span>${label}</span>`;
    audioBtn.addEventListener('click', () => toggleAudio(data.audio, audioBtn, label));
    screenFooter.appendChild(audioBtn);
  }

  if (data.primaryLabel && data.next) {
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn btn-primary';
    nextBtn.textContent = data.primaryLabel;
    nextBtn.addEventListener('click', () => navigateTo(data.next));
    screenFooter.appendChild(nextBtn);
  }
}

btnHome.addEventListener('click', resetToHome);
btnBack.addEventListener('click', goBack);

resetToHome();
