import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        intro1: "Experienced SEO Freelancer in Berlin.",
        intro2: "10 years experience in SEO, SEA and Analytics.",
        intro3: "Trained Full Stack Web Developer",
        services: "SEO",
        technical: "TECHNICAL",
        about: "ABOUT",
        contact: "CONTACT",
        fullname: "Full Name* ",
        subject: "Subject:",
        message: "Message*",
        sendMessage: "SEND",
        about1:
          "Experience with creating hundreds of highly effective Landing Pages",
        about2: `Over 5 years work experience as head a team of 10 members using scrum.`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Helped dozens of clients boost their SEO with personalised SEO audits and plans`,
        about5: `Experience working on Technical SEO: indexation,
                crawling, site architecture`,
        about6: `Extensive work experience managing Adwords accounts with annual budgets of €1m`,
        about7: `Creation & organization of SEO Roadmaps, KPIs & Technical
                Dashboards. Management on SEO Analytics reports (Adobe
                    SiteCatalyst Omniture)`,
        about8: `Alex is an SEO expert who proposes concrete action measures based
                    on a well-founded analysis and independently implements them.
                    This gives me the opportunity to focus on my day-to-day business
                    while still keeping my finger on the pulse of the times with my website.
                    Thank you for the transparent and professional cooperation!`,
        about9: `Hendrik Feige, owner of marketing, and strategy consulting must-be`,
        about10: `Alex always had a superior command of his field of activity and very good knowledge of all processes and aspects of the company. He was always very successful in expanding his professional knowledge on his own initiative. Alex has led several major projects of cleaning up our SEO profiles so as to reflect the best practices preached by Google as well as pioners. He has been strict in following the cleanest and best practices to avoid penalties, but continue growth in Spreadshirt's SEO visibility.`,
        about11: `Hugo Smoter, Chief Commercial Officer, Spreadshirt`,
        getintouch: "Get in touch",
        aboutme: "SEO Freelancer in Berlin || Alex Bieth",
        HPTitle: "SEO Consulting in Berlin || Alex Bieth SEO Freelancer",
        getintouch_title: "Get in touch SEO Berlino || SEO Freelancer",
        bloglatest: "Latest posts",
        services: "SERVICES",
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
        audit_intro: `Using the most important SEO factors, we will do an in-depth analysis of your competitors to find quick wins!`,
        audit_main: `​ ​ ​ ​ ​ What are my competitors ranking ahead of me doing that I am not, and that I could test? Who is linking to my competitors and why not to me? But don't copy, do better! ​ Know what your competitors are up to Contact Us Content of Competitor Analysis: ​ Main SEO Competitors Identification Backlink profile Keyword Analysis, main landing pages organisation and site structure Indexation Page load time comparition and other technical checks Internationalisation and more`,
        impressum_title: `Impressum SEO Berlino || SEO Freelancer in Berlin`
      }
    }, //en

    de: {
      translations: {
        intro1: "Erfahrener Freelance SEO Experte in Berlin.",
        intro2: "10 Jahre Erfahrung in SEO, SEA und Analytics.",
        intro3: "Full Stack Web-Entwickler",
        services: "SEO",
        technical: "TECHNISCH",
        about: "ÜBER MICH",
        contact: "KONTAKT",
        fullname: "Name* ",
        subject: "Betreff  ",
        message: "Nachricht*  ",
        sendMessage: "SENDEN",
        about1: "Erfahrung mit Landing Pages",
        about2: `Über 5 Jahre als Head of SEO, mit einem
                        10 Leute team.`,
        about3: `Full Stack  Web-Entwickler`,
        about4: `
                        Ich habe viele Kunden geholfen, ihre SEO mit personalisierten SEO Audits und Plänen zu steigern`,
        about5: `Erfahrung mit Technikem SEO: indexation,
                        crawling`,
        about6: `
                        Umfangreiche Arbeitserfahrung bei der Verwaltung von AdWords-Konten mit jährlichen Budgets von 1 Mio. €`,
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
        getintouch: "Kontakt",
        aboutme: "SEO Beratung || SEO Freelancer Alex Bieth",
        HPTitle: "SEO Beratung in Berlin || SEO Selständig",
        getintouch_title: "Kontakt SEO Berlino || SEO Beratung",
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
        audit_intro: `Unter Verwendung der wichtigsten SEO-Faktoren werden wir eine eingehende Analyse Ihrer Konkurrenten durchführen, um schnelle Gewinne zu finden!`,
        audit_main: `​ Was rangieren meine Konkurrenten vor mir, die ich nicht bin und die ich testen könnte? Wer verlinkt zu meiner Konkurrenz und warum nicht zu mir? Aber nicht kopieren, besser machen! Wissen Sie, was Ihre Mitbewerber vorhaben Kontaktieren Sie uns Inhalt der Konkurrenzanalyse: Haupt-SEO Wettbewerber Identifikation Backlink-Profil Keyword-Analyse, Hauptlandungsseiten Organisation und Seitenstruktur Indexierung Seite Ladezeit Vergleich und andere technische Prüfungen Internationalisierung und mehr`,
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
