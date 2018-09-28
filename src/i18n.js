import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        intro1: "Experienced SEO Freelancer in Berlin.",
        intro2: "10 years experience in SEO, SEA and Analytics.",
        intro3:
          "Trained Full Stack Web Developer (Javascript, Node, React, SQL).",
        services: "SEO",
        technical: "TECHNICAL",
        about: "ABOUT",
        contact: "CONTACT",
        fullname: "Full Name: ",
        subject: "Subject:",
        message: "Message:",
        sendMessage: "SEND",
        about1:
          "Experience with creating hundreds of highly effective Landing Pages",
        about2: `Over 5 years work experience as head a team of 10 members using scrumb.`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Helped dozens of clients boost their SEO with personalised SEO audits and plans`,
        about5: `Experience working on Technical SEO: indexation,
        crawling, site architecture`,
        about6: `Extensive work experience managing multi-million dollar
        Adword accounts`,
        about7: `Creation & organization of SEO Roadmaps, KPIs & Technical
        Dashboards. Management on SEO Analytics reports (Adobe
        SiteCatalyst Omniture)`,
        about8: `John Smith really helped me with my SEO, much recommended (Hendrick Larson,
            Zalando)`,
        about9: `John Smith help me boost my SEO traffic within a few months, much recommended (Micha Larson,
            Zalando)`,
        about10: `John Smith was key to grow my site's visibility (Pat Larson,
            Zalando)`,
        about11: `I recommend John Smith  (Peter Larson,
            Zalando)`,
        getintouch: "Get in touch - John Smith",
        aboutJM: "About John Smith",
        HPTitle: "John Smith SEO Freelancer",
        getintouch: "Get in touch",
        bloglatest: "Latest posts",
        services: "SERVICES",
        onpageSEO1:
          "Important first step, keyword research is the process of understanding how your target users search for your product or service.",
        onpageSEO2:
          "It has to be done before starting the on-page work. Competitor Analysis help to expand the research and make sure no important keyword is omitted. ​ Although since Hummingbird, Google is more semantically driven to assess the website's content, and focussed on Voice search and entities, knowing your important keywords is still important when structuring content and metadata. John Smith will then do an audit of your website checking content for each important landing page, site structure, metadata, images. ​ Additional important checks will cover structured data implementation and other technical aspects."
      }
    }, //en

    de: {
      translations: {
        intro1: "Erfahrener Freelance SEO Experte in Berlin.",
        intro2: "10 Jahre Erfahrung in SEO, SEA und Analytics.",
        intro3: "Full Stack Web-Entwickler (Javascript, Node, React, SQL).",
        services: "SEO",
        technical: "TECHNISCH",
        about: "ÜBER MICH",
        contact: "KONTAKT",
        fullname: "Name: ",
        subject: "Betreff:  ",
        message: "Nachricht:  ",
        sendMessage: "SENDEN",
        about1: "Erfahrung mit Landing Pages",
        about2: `Über 5 Jahre als Head of SEO, mit einem
        10 Leute team.`,
        about3: `Full Stack  Web-Entwickler`,
        about4: `Vielem Kunden als Sebständig`,
        about5: `Erfahrung mit Technikem SEO: indexation,
        crawling`,
        about6: `2 Jahre Erfahrung mit SEA`,
        about7: `Erstellung und Organisation von SEO-Roadmaps, KPIs und technischen
Dashboards. Erstellen und verwalten Sie SEO Analytics-Berichte (Adobe
        SiteCatalyst Omniture)`,
        about8: `
John Smith hat mir wirklich bei meiner SEO geholfen, sehr zu empfehlen(Hendrick Larson,
            Zalando)`,
        about9: `John Smith hilft mir, meinen SEO-Traffic innerhalb weniger Monate anzukurbeln, sehr empfehlenswert (Micha Larson,
            Zalando)`,
        about10: `John Smith war der Schlüssel, um die Sichtbarkeit meiner Website zu erhöhen (Pat Larson,
            Zalando)`,
        about11: `Ich empfehle John Smith (Peter Larson,
            Zalando)`,
        getintouch: "Kontakt -  John Smith",
        aboutJM: "Über mich, John Smith",
        HPTitle: "John Smith SEO Selständig",
        getintouch: "Unverbindlich anfragen",
        bloglatest: "Neueste Beiträge",
        services: "BERATUNG",
        onpageSEO1:
          "Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.",
        onpageSEO2:
          "Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. John Smith wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte."
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
