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
        about2: `Over 5 years work experience as head a team of 10 members using scrum.`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Helped dozens of clients boost their SEO with personalised SEO audits and plans`,
        about5: `Experience working on Technical SEO: indexation,
        crawling, site architecture`,
        about6: `Extensive work experience managing multi-million dollar
        Adwords accounts`,
        about7: `Creation & organization of SEO Roadmaps, KPIs & Technical
        Dashboards. Management on SEO Analytics reports (Adobe
        SiteCatalyst Omniture)`,
        about8: `Alex is an SEO expert who proposes concrete action measures based
         on a well-founded analysis and independently implements them.
         This gives me the opportunity to focus on my day-to-day business
         while still keeping my finger on the pulse of the times with my website.
         Thank you for the transparent and professional cooperation!`,
        about9: `Hendrik Feige, owner of marketing, and strategy consulting must-be`,
        about10: `Mr Bieth always had a superior command of his field of activity and very good knowledge of all processes and aspects of the company. He was always very successful in expanding his professional knowledge on his own initiative. Alex has led several major projects of cleaning up our SEO profiles so as to reflect the best practices preached by Google as well as pioners. He has been strict in following the cleanest and best practices to avoid penalties, but continue growth in Spreadshirt's SEO visibility.`,
        about11: `Hugo Smoter, Chief Commercial Officer, Spreadshirt`,
        getintouch: "Get in touch - Alex Bieth",
        aboutJM: "About Alex Bieth",
        HPTitle: "Alex Bieth SEO Freelancer",
        getintouch: "Get in touch",
        bloglatest: "Latest posts",
        services: "SERVICES",
        onpageSEO1:
          "Important first step, keyword research is the process of understanding how your target users search for your product or service.",
        onpageSEO2:
          "It has to be done before starting the on-page work. Competitor Analysis help to expand the research and make sure no important keyword is omitted. ​ Although since Hummingbird, Google is more semantically driven to assess the website's content, and focussed on Voice search and entities, knowing your important keywords is still important when structuring content and metadata. Alex Bieth will then do an audit of your website checking content for each important landing page, site structure, metadata, images. ​ Additional important checks will cover structured data implementation and other technical aspects."
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
        Alex ist ein SEO-Experte, der konkrete Maßnahmen vorschlägt
                 auf eine fundierte Analyse und setzt diese selbstständig um.
                 Dies gibt mir die Möglichkeit, mich auf mein Tagesgeschäft zu konzentrieren
                 während ich mit meiner Website immer noch am Puls der Zeit bin.
                 Danke für die transparente und professionelle Zusammenarbeit!`,
        about9: `Hendrik Feige, Inhaber Marketing und Strategieberatung muss sein`,
        about10: `Herr Bieth hatte immer eine überlegene Beherrschung seines Tätigkeitsfeldes und sehr gute Kenntnisse aller Prozesse und Aspekte des Unternehmens. Er war immer sehr erfolgreich in der Erweiterung seiner beruflichen Kenntnisse auf eigene Initiative. Alex hat mehrere große Projekte zur Bereinigung unserer SEO-Profile geleitet, um die von Google gepredigten Best Practices sowie Pioniere zu reflektieren. Er hat strikt die saubersten und besten Praktiken verfolgt, um Strafen zu vermeiden, aber weiterhin die Spreadshirt SEO Sichtbarkeit erhöhen.`,
        about11: `Hugo Smoter, Chief Commercial Officer, Spreadshirt`,
        getintouch: "Kontakt -  Alex Bieth",
        aboutJM: "Über mich, Alex Bieth",
        HPTitle: "Alex Bieth SEO Selständig",
        getintouch: "Kontakt",
        bloglatest: "Neueste Beiträge",
        services: "BERATUNG",
        onpageSEO1:
          "Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.",
        onpageSEO2:
          "Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. Alex Bieth wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte."
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
