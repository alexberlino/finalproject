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
        sendMessage: "SEND",
        about1: "Experience creating hundreds of Landing Pages",
        about2: `Over 5 years work experience as head of SEO, leading a
        team of up to 10 using scrumb +350% in organic orders.`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Helped dozens of clients with personalised SEO plans to
        face modern SEO issues`,
        about5: `Experience working on Technical SEO: indexation,
        crawling, etc`,
        about6: `Over 18 months work experience managing a multi-million
        Adword account`,
        about7: `Creation & organization of SEO Roadmaps, KPIs & Technical
        Dashboards. Creation and management on SEO Analytics reports (Adobe
        SiteCatalyst Omniture)`,
        about8: `John Smith really helped me with my SEO, much recommended (Hendrich Larson,
            Zalando`,
        about9: `John Smith really helped me with my SEO, much recommended (Hendrich Larson,
            Zalando`,
        about10: `John Smith really helped me with my SEO, much recommended (Hendrich Larson,
            Zalando`,
        about11: `John Smith really helped me with my SEO, much recommended (Hendrich Larson,
            Zalando`,
        getintouch: "Get in touch - John Smith",
        aboutJM: "About John Smith",
        HPTitle: "John Smith SEO Freelance"
      }
    }, //en

    de: {
      translations: {
        intro1: "Erfahrener Freelance SEO Experte in Berlin.",
        intro2: "10 Jahre Erfahrung in SEO, SEA und Analytics.",
        intro3: "Full Stack  Web-Entwickler(Javascript, Node, React, SQL).",
        services: "SEO",
        technical: "TECHNISCH",
        about: "ÜBER MICH",
        contact: "KONTAKT",
        fullname: "Vollständiger Name: ",
        subject: "Betreff:  ",
        message: "Nachricht:  ",
        sendMessage: "SENDEN",
        about1: "Erfarung mitLanding Pages",
        about2: `Über 5 Jahre als Head of SEO, mit einem
        10 Leute team.  Scrumb +350% in SEO orders.`,
        about3: `Full Stack  Web-Entwickler`,
        about4: `Vielem Kunden als Sebständig`,
        about5: `Erfahrung mit Technikem SEO: indexation,
        crawling, etc`,
        about6: `2 Jahre Full-time Erfahrung mit SEA`,
        about7: `Erstellung und Organisation von SEO-Roadmaps, KPIs und technischen
Dashboards. Erstellen und verwalten Sie SEO Analytics-Berichte (Adobe
        SiteCatalyst Omniture)`,
        about8: `Erstellung und Organisation von SEO-Roadmaps, KPIs und technischen
Dashboards. Erstellen und verwalten Sie SEO Analytics-Berichte (Adobe
        SiteCatalyst Omniture)`,
        about9: `Erstellung und Organisation von SEO-Roadmaps, KPIs und technischen
Dashboards. Erstellen und verwalten Sie SEO Analytics-Berichte (Adobe
        SiteCatalyst Omniture)`,
        about10: `Erstellung und Organisation von SEO-Roadmaps, KPIs und technischen
Dashboards. Erstellen und verwalten Sie SEO Analytics-Berichte (Adobe
        SiteCatalyst Omniture)`,
        about11: `Erstellung und Organisation von SEO-Roadmaps, KPIs und technischen
Dashboards. Erstellen und verwalten Sie SEO Analytics-Berichte (Adobe
        SiteCatalyst Omniture)`,
        getintouch: "Kontakt -  John Smith",
        aboutJM: "Über mich, John Smith",
        HPTitle: "John Smith SEO Selständig"
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
