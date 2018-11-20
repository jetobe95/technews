import _ from 'lodash';
const images = '../../assets/images/';
export const generarCategoria = id => {
  const { image, title, subtitle, q } = _.chain(squares)
    .find(item => item.id == id)
    .value();
  return { image, title, subtitle, q };
};
export const squares = [
  {
    id: 0,
    title: 'Canal Uninorte',
    subtitle: 'Lo mas reciente',
    q: 'canal',
    image: require(images + 'uninorte.jpg'),
    visible: true
  },
  {
    id: 1,
    title: 'Aplicación',
    subtitle: 'Lo mas reciente',
    q: 'Aplicación',
    image: require(images + 'app.jpg'),
    visible: false
  },
  {
    id: 2,
    title: 'Android',
    subtitle: 'Lo mas reciente',
    q: 'Android',
    image: require(images + 'android.jpg'),
    visible: false
  },
  {
    id: 3,
    title: 'Avances Tecnológicos',
    subtitle: 'Lo mas reciente',
    q: 'Avances Tecnológicos',
    image: require(images + 'avancestecnológicos.png'),
    visible: false
  },
  {
    id: 4,
    title: 'Celulares',
    subtitle: 'Lo mas reciente',
    q: 'Celulares',
    image: require(images + 'Celulares.jpg'),
    visible: false
  },
  {
    id: 5,
    title: 'Ciberseguridad',
    subtitle: 'Lo mas reciente',
    q: 'Ciberseguridad',
    image: require(images + 'ciberseguridad.jpg'),
    visible: false
  },
  {
    id: 6,
    title: 'Computación',
    subtitle: 'Lo mas reciente',
    q: 'Computación',
    image: require(images + 'computacion.jpg'),
    visible: true
  },
  {
    id: 7,
    title: 'Deporte',
    subtitle: 'Lo mas reciente',
    q: 'Tecnología y Deporte',
    image: require(images + 'deporte.jpg'),
    visible: true
  },
  {
    id: 8,
    title: 'Empresas',
    subtitle: 'Lo mas reciente',
    q: 'Empresas',
    image: require(images + 'empresas.jpg'),
    visible: true
  },
  {
    id: 9,
    title: 'Energía',
    subtitle: 'Lo mas reciente',
    q: 'Energía',
    image: require(images + 'energia.jpg'),
    visible: true
  },
  {
    id: 10,
    title: 'Facebook',
    subtitle: 'Lo mas reciente',
    q: 'Facebook',
    image: require(images + 'facebook.jpg'),
    visible: true
  },
  {
    id: 11,
    title: 'Google',
    subtitle: 'Lo mas reciente',
    q: 'Google',
    image: require(images + 'google.jpg'),
    visible: true
  },
  {
    id: 12,
    title: 'Imágenes 3D',
    subtitle: 'Lo mas reciente',
    q: 'Imágenes 3D',
    image: require(images + 'imagenes3d.jpg'),
    visible: true
  },
  {
    id: 13,
    title: 'Ingeniería',
    subtitle: 'Lo mas reciente',
    q: 'Ingeniería',
    image: require(images + 'ingenieria.jpg'),
    visible: true
  },
  {
    id: 14,
    title: 'Inteligencia Artificial',
    subtitle: 'Lo mas reciente',
    q: 'Inteligencia Artificial',
    image: require(images + 'inteligenciaartificial.jpg'),
    visible: true
  },
  {
    id: 15,
    title: 'Internet',
    subtitle: 'Lo mas reciente',
    q: 'Internet',
    image: require(images + 'internet.jpg'),
    visible: true
  },
  {
    id: 16,
    title: 'IOS',
    subtitle: 'Lo mas reciente',
    q: 'IOS',
    image: require(images + 'ios.jpg'),
    visible: true
  },
  {
    id: 17,
    title: 'Machine Learning',
    subtitle: 'Lo mas reciente',
    q: 'Machine Learning',
    image: require(images + 'machinelearning.jpg'),
    visible: true
  },
  {
    id: 18,
    title: 'Medicina',
    subtitle: 'Lo mas reciente',
    q: 'Medicina',
    image: require(images + 'medicina.jpg'),
    visible: true
  },
  {
    id: 19,
    title: 'Realidad Aumentada',
    subtitle: 'Lo mas reciente',
    q: 'Realidad Aumentada',
    image: require(images + 'realidadaumentada.jpg'),
    visible: true
  },
  {
    id: 20,
    title: 'Realidad Virtual',
    subtitle: 'Lo mas reciente',
    q: 'Realidad Virtual',
    image: require(images + 'realidadvirtual.jpg'),
    visible: true
  },
  {
    id: 21,
    title: 'Redes Sociales',
    subtitle: 'Lo mas reciente',
    q: 'Redes Sociales',
    image: require(images + 'redes.jpg'),
    visible: true
  },
  {
    id: 22,
    title: 'Robotica',
    subtitle: 'Lo mas reciente',
    q: 'Robotica',
    image: require(images + 'robotica.jpg'),
    visible: true
  },
  {
    id: 23,
    title: 'Tecnologia',
    subtitle: 'Lo mas reciente',
    q: 'Tecnologia',
    image: require(images + 'tecnologia.jpg'),
    visible: true
  },
  {
    id: 24,
    title: 'Televisión',
    subtitle: 'Lo mas reciente',
    q: 'Televisión',
    image: require(images + 'television.jpg'),
    visible: true
  },
  {
    id: 25,
    title: 'Transporte',
    subtitle: 'Lo mas reciente',
    q: 'Transporte',
    image: require(images + 'transporte.jpg'),
    visible: true
  },
  {
    id: 26,
    title: 'Videojuegos',
    subtitle: 'Lo mas reciente',
    q: 'Videojuegos',
    image: require(images + 'videojuegos.jpeg'),
    visible: true
  },
  {
    id: 27,
    title: 'Whatsapp',
    subtitle: 'Lo mas reciente',
    q: 'Whatsapp',
    image: require(images + 'whatsapp.jpg'),
    visible: true
  },
  {
    id: 28,
    title: 'Windows',
    subtitle: 'Lo mas reciente',
    q: 'Windows',
    image: require(images + 'windows.jpg'),
    visible: true
  },
  {
    id: 29,
    title: 'Youtube',
    subtitle: 'Lo mas reciente',
    q: 'Youtube',
    image: require(images + 'youtube.jpg'),
    visible: true
  }
];
