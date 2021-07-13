const MAIN_PATH = '../../assets/images/illustrations/';

const data = [
  {
    id: '1',
    title: 'Créer votre QR CODE',
    text: 'Converter votre outil ou bien objets en code Qr\nChaque outil ou bien objet reçoit un identifiant Qr unique bien sécurisée.',
    image: require(MAIN_PATH + 'intro-1.png'),
  },
  {
    id: '2',
    title: 'Contacter',
    text: 'Contactez le propriétaire d’objet perdu et lui rendre',
    image: require(MAIN_PATH + 'intro-2.png'),
  },
  {
    id: '3',
    title: 'Scanner',
    text: 'Scanner simplement le code Qr pour afficher les informations du propriétaire d’objet perdu',
    image: require(MAIN_PATH + 'intro-3.png'),
  },
  {
    id: '4',
    title: "L'application",
    text: 'Une application opérationnelle rapide et facile à installer et utiliser pour tous les utilisateurs',
    image: require(MAIN_PATH + 'intro-4.png'),
  },
];
export default data;
