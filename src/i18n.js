import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        intro1: "Experienced Freelance SEO expert in Berlin.",

        intro2: "10 years experience in SEO, SEA and Analytics.",
        intro3: "Full Stack Web Developer (Javascript, Node, React, SQL).",
        services: "SEO",

        technical: "TECHNICAL",

        about: "ABOUT",
        contact: "CONTACT",
        fullname: "Full Name: ",
        subject: "Subject:",
        message: "Message:",
        sendMessage: "SEND"
      }
    }, //en

    de: {
      translations: {
        intro1: "Erfahrener Freelance SEO Experte in Berlin.",

        intro2: "10 Jahre Erfahrung in SEO, SEA und Analytics.",
        intro3: "Full Stack  Web-Entwickler(Javascript, Node, React, SQL).",
        services: "SEO",
        technical: "TECHNISCH",
        about: "ÜBER UNS",
        contact: "KONTAKT",
        fullname: "Vollständiger Name: ",
        subject: "Betreff:  ",
        message: "Nachricht:  ",
        sendMessage: "SENDEN"
      }
    }, //de

    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ","
    },

    react: {
      wait: true
    }
  } //resources
}); //init

export default i18n;
