const imagePath = '../../assets/images-categories/';
const squares = [
  {
    name: 'Tecnología',
    id: 0,
    children: [
      {
        id: 1,
        name: 'Computacion',
        title: 'Computacion',
        subtitle: 'Lo mas reciente',
        q: 'Computer',
        image: require("../../assets/images-categories/Computacion.jpg")
      },
      {
        id: 11,
        name: 'Celulares',
        title: 'Celulares',
        subtitle: 'Lo mas reciente',
        q: 'smartphone',
        image: require(imagePath + 'Celulares2.jpg')
      },
      {
        id: 2,
        name: 'Robotica',
        title: 'Robotica',
        subtitle: 'Lo mas reciente',
        q: 'Robotic',
        image: require(imagePath + 'Robotica.jpg')
      },
      {
        id: 3,
        name: 'Redes Sociales',
        title: 'Redes Sociales',
        subtitle: 'Lo mas reciente',
        q: 'Social networks',
        image: require(imagePath + 'Redes.jpg')
      },
      {
        id: 4,
        name: 'Avances',
        title: 'Avances',
        subtitle: 'Lo mas reciente',
        q: 'Avances',
        image: require(imagePath + 'Avances.jpg')
      },
      {
        id: 5,
        name: 'Universidad',
        title: 'Universidad',
        subtitle: 'Lo mas reciente',
        q: 'Universidad',
        image: require(imagePath + 'Uninortek.jpg')
      }
    ]
  }
];
export default squares;
