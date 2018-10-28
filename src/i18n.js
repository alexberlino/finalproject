import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        intro1: "SEO Expert in Berlin with MBA and scrum training.",
        intro2: "9 years experience in SEO, SEA and Analytics.",
        intro3: "Trained Full Stack Web Developer",
        intro4: "Analysis, Action Plan with Prioritization, and Controlling",
        intro5: "Business Expertise (MBA)",

        services: "SEO",
        technical: "TECHNICAL SEO",
        about: "ABOUT ME",
        contact: "CONTACT",
        fullname: "Full Name* ",
        subject: "Subject:",
        message: "Message*",
        sendMessage: "SEND",
        about1:
          "Proven results with 400% increase in SEO sales for multiple websites",
        about2: `Over 9 years experience in SEO, SEA and using various Analytics tools`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Trained in Scrum and experience implementing it with team of 10.`,
        about5: `Extensive experience in Technical SEO: indexation,
                crawlability, site architecture and internal linking optimization`,
        about6: `Crazy about data and reports to help decision making and prioritization `,
        about7: `Experience with setting up Roadmaps, Actions plans, Technical Dashboards, Analytics reports`,
        // about8: `Alex is an SEO expert who proposes concrete action measures based
        //             on a well-founded analysis and independently implements them.
        //             This gives me the opportunity to focus on my day-to-day business
        //             while still keeping my finger on the pulse of the times with my website.
        //             Thank you for the transparent and professional cooperation!`,
        // about9: `Hendrik Feige, owner of marketing, and strategy consulting must-be`,
        // about10: `Alex always had a superior command of his field of activity and very good knowledge of all processes and aspects of the company. He was always very successful in expanding his professional knowledge on his own initiative. Alex has led several major projects of cleaning up our SEO profiles so as to reflect the best practices preached by Google as well as pioners. He has been strict in following the cleanest and best practices to avoid penalties, but continue growth in Spreadshirt's SEO visibility.`,
        // about11: `Hugo Smoter, Chief Commercial Officer, Spreadshirt`,
        getintouch: "Get in touch",
        aboutme: "SEO Expert in Berlin || Alex Bieth",
        aboutmetitle: "aboutme",
        HPTitle: "SEO Expert in Berlin || SEO Berlino",
        getintouch_title: "Get in touch SEO Berlino || SEO Expert",
        bloglatest: "Latest posts",
        services: "SERVICES",
        analyticsHP1: "local SEO",
        analyticsHP2: "analytics and reporting set-up or/and control,",
        analyticsHP3: "competitor analysis,",
        analyticsHP4: "new website, SEO best practices",
        analyticsHP5: "ad-hoc research",
        analyticsHP6: "SEA (Adwords) optimization",
        onpageHP1: "keyword research",
        onpageHP2: "landing page optimization",
        onpageHP3: "internal linking and site architecture,",
        onpageHP4: "meta tags,",
        onpageHP5: "related tags and breadcrumb",
        onpageHP6: "content and semantics",
        onpageHP7: "image analysis,",
        onpageHP8: "structured data,",
        onpageHP9: "duplicate content and canonicalization",
        onpageHP10: "ready for voice search",
        offpageHP1: "backlink competitor analysis,",
        offpageHP2: "backlink profile,",
        offpageHP3: "brandbuilding opportunities,,",
        offpageHP4: "relevant influencers research,",
        offpageHP5: "toxic links cleaning",
        technicalHP1: "indexation, redirects and urls",
        technicalHP2: "crawlability, robots.txt, sitemaps",
        technicalHP3: "internationalisation,",
        technicalHP4: "pagespeed,",
        technicalHP5: "mobile-friendliness,",
        technicalHP6: "Javascript apps/websites and SEO: dynamic rendering",
        technicalHP7: "security issues and site migration",

        onpageSEO1:
          "Important first step, keyword research is the process of understanding how your target users search for your product or service.",
        onpageSEO2:
          "It has to be done before starting the on-page work. Competitor Analysis help to expand the research and make sure no important keyword is omitted. ​ Although since Hummingbird, Google is more semantically driven to assess the website's content, and focussed on Voice search and entities, knowing your important keywords is still important when structuring content and metadata. We will then do an audit of your website checking content for each important landing page, site structure, metadata, images. ​ Additional important checks will cover structured data implementation and other technical aspects.",

        offpage_main: `1. Auditing your backlink profile (number and quality of current
                        backlinks) 2. Checking on how competitors get (quality) backlinks
                        and find any opportnities. 3. Taking into account the specificity of
                        the industry and the local aspect, will suggest creative
                        opportunities to get backlinks 3. Suggesting an action plan to boost
                        your backlink profile What we can do for you About Backlinks
                        Backlinks still play an imporstant role in SEO and can help your
                        website get more visibility. Backlinks are for Google a sign of
                        trust from a website to another. The more (quality) backlinks you
                        get pointing your site, the more popular will your website be rated.
                        Of course many factors come into play: -timing of new backlinks
                        -quality of the website pointing the link to yours. These aspects
                        are critical in how to positively improve your backlink profile and
                        boost your Domain Authority.`,
        offpage_intro: `Backlinks are for Google a sign of trust from a website to another.
                        The more (quality) backlinks you get pointing your site, the more
                        popular will your website be rated.`,
        technical_intro: `Technical SEO Optimization regroups all on-page SEO which is not
                        content related.`,
        technical_main: `Technical SEO Optimization regroups all on-page SEO which is not content related. For a Technical Audit, we will review, report and present an action plan for these topics: ​ Pagespeed, consequences of Google algorithms changes, crawl (robots, noindex/follow, sitemaps, etc), redirects, duplicate content & canonicals, indexation, URL Canonicalization, image optimization, site structure, internal linking etc...`,
        research_intro: `Using the most important SEO factors, we will do an in-depth analysis of your competitors to find quick wins!`,
        research_main: `​ ​ ​ ​ ​ What are my competitors ranking ahead of me doing that I am not, and that I could test? Who is linking to my competitors and why not to me? But don't copy, do better! ​ Know what your competitors are up to Contact Us Content of Competitor Analysis: ​ Main SEO Competitors Identification Backlink profile Keyword Analysis, main landing pages organisation and site structure Indexation Page load time comparition and other technical checks Internationalisation and more`,
        impressum_title: `Impressum SEO Berlino || SEO Expert in Berlin`
      }
    }, //en

    de: {
      translations: {
        intro1:
          "Erfahrener Freelance SEO Experte in Berlin mit MBA und scrum ausgebildet.",
        intro2: "9 Jahre Erfahrung in SEO, SEA und Analytics.",
        intro3: "Full Stack Web-Entwickler",
        intro4: "Analyse, Aktionsplan mit Priorisierung, und Controlling",
        intro5: "Geschäftskompetenz (MBA)",
        analyticsHP1: "lokale SEO",
        analyticsHP2:
          "analytics und Berichterstattung, Konfiguration oder/und Kontrolle,",
        analyticsHP3: "Konkurrenzanalyse,",
        analyticsHP4: "neue Webseite, SEO bewährte Praktiken",
        analyticsHP5: "hierfür passend Untersuchung",
        analyticsHP6: "SEA (Adwords) Optimierung",
        onpageHP1: "Stichwortforschung",
        onpageHP2: "landing page Optimierung",
        onpageHP3: "interne Linking und Website-Architektur,",
        onpageHP4: "Metas Tags,",
        onpageHP5: "verbunden tags und Breadcrumb",
        onpageHP6: "Inhalt und Semantik",
        onpageHP7: "Bildoptimierung,",
        onpageHP8: "Structured Data,",
        onpageHP9: "Duplizierter Inhalt und Kanonisierung",
        onpageHP10: "Sprachsuche",
        offpageHP1: "Backlink Konkurrenzanalyse,",
        offpageHP2: "Backlink Analyse,",
        offpageHP3: "Markenbildung Chancen,",
        offpageHP4: "Influencers Forschung,",
        offpageHP5: "Toxic Links Cleaning",
        technicalHP1: "Indexierung, redirects und urls",
        technicalHP2: "Crawlfähigkeit, robots.txt, Sitemaps",
        technicalHP3: "Internationalisierung,",
        technicalHP4: "Seitengeschwindigkeit,",
        technicalHP5: "Mobile-friendliness,",
        technicalHP6: "Javascrips apps und SEO: dynamisches Rendering",
        technicalHP7: "Sicherheit und Website-Migration",

        services: "SEO",
        technical: "TECHNISCHE SEO",
        about: "ÜBER MICH",
        contact: "KONTAKT",
        fullname: "Name* ",
        subject: "Betreff  ",
        message: "Nachricht*  ",
        sendMessage: "SENDEN",
        aboutmetitle: "übermich",
        about1:
          "Proven results with 400% increase in SEO sales for multiple websites",
        about2: `Over 9 years experience in SEO, SEA and using various Analytics tools`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Trained in Scrum and experience implementing it with team of 10.`,
        about5: `Extensive experience in Technical SEO: indexation,
                crawlability, site architecture and internal linking optimization`,
        about6: `Crazy about data and reports to help decision making and prioritization `,
        about7: `Experience with setting up Roadmaps, Actions plans, Technical Dashboards, Analytics reports`,
        // about8: `
        //                     Alex ist ein SEO-Experte, der konkrete Maßnahmen vorschlägt
        //                     auf eine fundierte Analyse und setzt diese selbstständig um.
        //                     Dies gibt mir die Möglichkeit, mich auf mein Tagesgeschäft zu konzentrieren
        //                     während ich mit meiner Website immer noch am Puls der Zeit bin.
        //                     Danke für die transparente und professionelle Zusammenarbeit!`,
        // about9: `Hendrik Feige, Inhaber Marketing und Strategieberatung muss sein`,
        // about10: `Herr Bieth hatte immer eine überlegene Beherrschung seines Tätigkeitsfeldes und sehr gute Kenntnisse aller Prozesse und Aspekte des Unternehmens. Er war immer sehr erfolgreich in der Erweiterung seiner beruflichen Kenntnisse auf eigene Initiative. Alex hat mehrere große Projekte zur Bereinigung unserer SEO-Profile geleitet, um die von Google gepredigten Best Practices sowie Pioniere zu reflektieren. Er hat strikt die saubersten und besten Praktiken verfolgt, um Strafen zu vermeiden, aber weiterhin die Spreadshirt SEO Sichtbarkeit erhöhen.`,
        // about11: `Hugo Smoter, Chief Commercial Officer, Spreadshirt`,
        getintouch: "Kontakt",
        aboutme: "SEO Beratung || SEO Expert SEO Berlino",
        HPTitle: "SEO Beratung in Berlin || SEO Selständig SEO Berlino",
        getintouch_title: "Kontakt SEO Berlino || SEO Beratung SEO Berlino",
        bloglatest: "Neueste Beiträge",
        services: "BERATUNG",
        onpageSEO1:
          "Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.",
        onpageSEO2:
          "Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. Alex Bieth wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte.",

        offpage_main: `1. Überprüfen Sie Ihr Backlink-Profil (Anzahl und Qualität der aktuellen
                                Backlinks) 2. Überprüfung, wie Wettbewerber (Qualitäts-) Backlinks erhalten
                                und finden Sie alle Möglichkeiten. 3. Unter Berücksichtigung der Spezifität von
                                die Industrie und der lokale Aspekt, wird kreativ vorschlagen
                                Möglichkeiten, Backlinks zu bekommen 3. Einen Aktionsplan vorzuschlagen, um zu erhöhen
                                Ihr Backlink-Profil Was wir für Sie tun können Über Backlinks
                                Backlinks spielen immer noch eine wichtige Rolle in SEO und können Ihnen helfen
                                Website erhält mehr Sichtbarkeit. Backlinks sind für Google ein Zeichen von
                                Vertrauen von einer Website zu einer anderen. Je mehr (Qualität) Backlinks Sie
                                Zeigen Sie Ihre Website, desto beliebter wird Ihre Website bewertet werden.
                                Natürlich spielen viele Faktoren eine Rolle: - das Timing neuer Backlinks
                                -Qualität der Website, die den Link auf Ihren verweist. Diese Aspekte
                                sind entscheidend dafür, wie Sie Ihr Backlink-Profil positiv verbessern und
                                Steigern Sie Ihre Domain-Autorität.`,
        offpage_intro: `Backlinks sind für Google ein Vertrauensbeweis von einer Website zu einer anderen.
                                Je mehr (Qualitäts-) Backlinks Sie erhalten, desto mehr zeigen Sie Ihre Website an
                                beliebt wird Ihre Website bewertet.`,

        technical_intro: `Technische SEO-Optimierung gruppiert alle On-Page-SEO, die nicht ist`,
        technical_main: `Technische SEO-Optimierung gruppiert alle On-Page-SEO, die nicht inhaltlich ist. Für ein technisches Audit werden wir einen Aktionsplan für diese Themen prüfen, berichten und präsentieren: Seitengeschwindigkeit, Konsequenzen von Google-Algorithmen, Crawl (Robots, Noindex / Follow, Sitemaps, etc.), Weiterleitungen, Duplicate Content & Canonicals, Indexierung, URL Kanonisierung, Bildoptimierung, Seitenstruktur, interne Verlinkung etc ... `,
        research_intro: `Unter Verwendung der wichtigsten SEO-Faktoren werden wir eine eingehende Analyse Ihrer Konkurrenten durchführen, um schnelle Gewinne zu finden!`,
        research_main: `​ Was rangieren meine Konkurrenten vor mir, die ich nicht bin und die ich testen könnte? Wer verlinkt zu meiner Konkurrenz und warum nicht zu mir? Aber nicht kopieren, besser machen! Wissen Sie, was Ihre Mitbewerber vorhaben Kontaktieren Sie uns Inhalt der Konkurrenzanalyse: Haupt-SEO Wettbewerber Identifikation Backlink-Profil Keyword-Analyse, Hauptlandungsseiten Organisation und Seitenstruktur Indexierung Seite Ladezeit Vergleich und andere technische Prüfungen Internationalisierung und mehr`,
        impressum_title: `Impressum SEO Berlino || SEO Beratung in Berlin`
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
