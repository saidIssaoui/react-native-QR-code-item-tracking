import {APP_GREEN, APP_PURPLE, APP_RED} from '../../constants';

export const items = [
  {
    title: 'saturday, march 31th',
    data: [
      {
        id: '1',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Vous avez crée x objet dans ce mois',
        color: APP_PURPLE,
      },
    ],
  },
  {
    title: 'thursday, march 25th',
    data: [
      {
        id: '2',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Un objet doit avoir une révision dans x jours',
        color: APP_PURPLE,
      },
      {
        id: '3',
        sender: 'Équipe pharme',
        type: 'finding',
        text: 'L’objet a du être rendu à monsieur Thomas Fallou.',
        color: APP_PURPLE,
      },
      {
        id: '4',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Un objet a été déclaré perdu',
        color: APP_RED,
      },
      {
        id: '5',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Votre objet a été déposé à l’accueil de votre établissement',
        color: APP_GREEN,
      },
      {
        id: '6',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Un objet a été déclaré en panne',
        color: APP_RED,
      },
      {
        id: '7',
        sender: 'Équipe pharme',
        type: 'email',
        text: 'Vous avez reçu un email',
        color: APP_PURPLE,
      },
    ],
  },
  {
    title: 'monday, march 22nd',
    data: [
      {
        id: '8',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'lipsum eij ijrujsd ijeijf eijief',
        color: APP_GREEN,
      },
      {
        id: '9',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Un objet a été retrouvé par Thomas Fallou',
        color: APP_PURPLE,
      },
      {
        id: '10',
        sender: 'Équipe pharme',
        type: 'message',
        text: 'Un objet a été prêté ',
        color: APP_PURPLE,
      },
    ],
  },
];
