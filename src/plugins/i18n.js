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
      textHome:'Je suis un jeune développeur senior mais junior ;)',
      titleAboutH1: 'Je crée de la valeur par la conception et, par la prise en compte de l\'experience utilisateur',
      textAbout:'',
      titleWorkH1: 'Version 1 de mon cv :',
      textWork1: '',
      linkWork1:'Un coup d\'oeil ?',
      titleContactH1:'On échange ?',
      titleContactH4:'Contactez-moi via le formulaire ci-dessous, ou en m\'écrivant :',
      // form part
      nameContact:'Nom :',
      emailContact:'Mail :',
      messageContact:'Message :',
      buttonContactReset:'Reset',
      buttonContactSubmit:'Submit'
      
  },
  'en': {
      // Navbar
      navHome: 'Home',
      navAbout: 'About',
      navWork: 'Works',
      navContact: 'Contact',
      // Components
      titleHomeH1:'Hi, I\'m Thomas',
      textHome:'',
      titleAboutH1: 'I create value by design and, by taking into account the user experience',
      textAbout:'',
      titleWorkH1: 'Version 1 of my cvm',
      textWork1: '',
      linkWork1:'Have a look ?',
      titleContactH1:'Let\'s talk.',
      titleContactH4:'Get in touch via the form below, or by emailing me :',
      // form part
      nameContact:'Name :',
      emailContact:'Email address :',
      messageContact:'Message :',
      buttonContactReset:'Annuler',
      buttonContactSubmit:'Envoyer'
  }
};

const i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n