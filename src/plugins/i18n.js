import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'fr': {
      // Navbar
      navHome: 'Accueil',
      navAbout: 'A propos',
      navWork: 'Projets',
      navContact: 'Contact',
      // Components
      titleHomeH1:'Salut, je suis Thomas.',
      textHomeP1:'Je suis un jeune développeur senior mais junior ;)',
      textHomeP2:'J\'ai entamé ma reconversion en juin 2019 pour me tourner vers le développement web via la formation de l\'ENI. Depuis lors, j\'ai pu monter en compétence à l\'aide de tutoriels/formations disponibles sur le web.',
      textHomeP3:'Aujourd\'hui, je me suis tourné vers le front-end et l\'expérience utilisateur en me concentrant sur le framework vue.js 2.',
      titleAboutH1: 'Je crée de la valeur par la conception et, par la prise en compte de l\'experience utilisateur.',
      textAbout:'',
      titleWorkH1: 'Version 1 de mon cv :',
      textWork1: 'Après ma toute première formation à l\'ENI, je me suis amusé à créer ce CV en html 5, CSS 3 et en javascript pour ajouter un peu de dynamisme et de mouvement. Les couleurs ne sont pas ce qu/il y a de mieux mais, c\'est fonctionnel.',
      linkWork1:'Un coup d\'oeil ?',
      titleContactH1:'On échange ?',
      titleContactH4:'Contactez-moi via le formulaire ci-dessous, ou en m\'écrivant :',
      // form part
      nameContact:'Nom :',
      emailContact:'Mail :',
      messageContact:'Message :',
      buttonContactReset:'Annuler',
      buttonContactSubmit:'Envoyer'
      
  },
  'en': {
      // Navbar
      navHome: 'Home',
      navAbout: 'About',
      navWork: 'Works',
      navContact: 'Contact',
      // Components
      titleHomeH1:'Hi, I\'m Thomas',
      textHomeP1:'I am a young senior developer but junior ;)',
      textHomeP2: 'I started my retraining in June 2019 to turn to web development via the ENI training. Since then, I have been able to improve my skills with the help of tutorials / training available on the web.',
      textHomeP3: 'Today I turned to the front-end and user experience focusing on the vue.js 2 framework.',
      titleAboutH1: 'I create value by design and, by taking into account the user experience.',
      textAbout:'',
      titleWorkH1: 'Version 1 of my cv',
      textWork1: 'After my very first training at ENI, I had fun creating this CV in html 5, CSS 3 and javascript to add some dynamism and movement. Colors aren\'t the best, but it\'s functional.',
      linkWork1:'Have a look ?',
      titleContactH1:'Let\'s talk.',
      titleContactH4:'Get in touch via the form below, or by emailing me :',
      // form part
      nameContact:'Name :',
      emailContact:'Email address :',
      messageContact:'Message :',
      buttonContactReset:'Reset',
      buttonContactSubmit:'Submit'
  }
};

const i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n