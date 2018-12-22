import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        hey1: `SEO Expert in Berlin`,
        hey2: `scrum trained & web developer `,
        hey3: `On-page Audit`,
        hey4: `Keyword Research`,
        hey5: `Technical SEO`,
        hey6: `Analytics Expertise`,
        hey7: `Competitor Analysis`,
        hey8: `Off-Page Audit`,
        clients: `current and former clients`,
        intro1: `Hi! My name is Alex, I am an SEO Expert in Berlin with MBA and scrum training.`,
        intro2: `9 years experience in SEO, SEA and Analytics.`,
        intro3: `Trained Full Stack Web Developer`,
        intro4: `Analysis, Action Plan with Prioritization, and Controlling`,
        intro5: `Business Expertise (MBA)`,
        intro6: `5 years as Head of SEO (Spreadshirt)`,
        intro7: `+400% increase in SEO orders (DACH, US, FR)`,
        intro8: `Over 1 year experience working as a freelancer`,
        intro9: ` Full/Specific Audit with Executive Summary`,
        cookie1: `This website uses very basic and generic cookies.`,
        cookie2: `You can read about which cookies are used`,
        cookie3: `or accept to continue.`,
        cookie4: `Accept`,
        cookie5: `Read`,
        analytics1: `Google Analytics Set-up`,
        analytics2: `Google Analytics Check`,
        analytics3: `Google Analytics Optimization such as Url filtering and
      Channel regrouping and UTM best practices`,
        analytics4: `Reports & Dashboard Creation`,
        analytics5: `Proficiency in other Analytics tools such Adobe SiteCatalyst /
Marketing Cloud / Omniture`,
        brandbuilding1: `Brand-building: provide you with best recommendation for
content creation`,
        brandbuilding2: ` Content targeting: more traffic for brand awareness, traffic
 and backlinks`,
        brandbuilding3: `Based on user & influencers interests to boost quality link
creation quality and brand awareness.`,
        services: `SEO`,
        servicesL: `services`,
        technical: `TECHNICAL SEO`,
        about: `ABOUT ME`,
        contact: `CONTACT`,
        fullname: `Full Name* `,
        subject: `Subject:`,
        message: `Message*`,
        sendMessage: `SEND`,
        about1: `Proven results with 400% increase in SEO sales for multiple websites as head of SEO`,
        about2: `Over 9 years experience in SEO, SEA and using various Analytics tools`,
        about3: `Trained Full Stack Web Developer`,
        about4: `Trained in Scrum and experience implementing it with team of 10.`,
        about5: `Extensive experience in Technical SEO: indexation,
                crawlability, site architecture and internal linking optimization`,
        about6: `Crazy about data and reports to help decision making and prioritization `,
        about7: `Experience with setting up Roadmaps, Actions plans, Technical Dashboards, Analytics reports`,

        getintouch: `Get in touch`,
        aboutme: `SEO Expert in Berlin | 10 years experience | Alex Bieth`,
        aboutmetitle: `aboutme`,
        HPTitle: `SEO Freelancer in Berlin, SEO Consultant | SEO Berlino`,
        descriptionHP: `SEO Freelancer in Berlin: Audit, Onpage, Offpage, Technical SEO, Competitor Analysis, Analytics, Brand Building`,

        getintouch_title: `Get in touch Alex Bieth | SEO Expert in Berlin`,
        blog: `blog`,
        bloglatest: `Latest posts`,
        services: `SERVICES`,
        analyticsHP1: `local SEO`,
        analyticsHP2: `analytics and reporting set-up or/and control,`,
        analyticsHP3: `competitor analysis,`,
        analyticsHP4: `new website, SEO best practices`,
        analyticsHP5: `ad-hoc research`,
        analyticsHP6: `SEA (Adwords) optimization`,
        onpageHP1: `keyword research`,
        onpageHP2: `landing page optimization`,
        onpageHP3: `internal linking and site architecture,`,
        onpageHP4: `meta tags and headers,`,
        onpageHP5: `related tags and breadcrumb`,
        onpageHP6: `content and semantics`,
        onpageHP7: `images & media,`,
        onpageHP8: `structured data,`,
        onpageHP9: `duplicate content and canonicalization`,
        onpageHP10: `ready for voice search`,
        offpageHP1: `backlink competitor analysis,`,
        offpageHP2: `backlink profile,`,
        offpageHP3: `brandbuilding opportunities,,`,
        offpageHP4: `relevant influencers research,`,
        offpageHP5: `toxic links cleaning`,
        technicalHP1: `indexation, redirects and urls`,
        technicalHP2: `crawlability, robots.txt, sitemaps`,
        technicalHP3: `internationalisation,`,
        technicalHP4: `pagespeed,`,
        technicalHP5: `mobile-friendliness,`,
        technicalHP6: `Javascript apps/websites and SEO: dynamic rendering`,
        technicalHP7: `security issues and site migration`,

        onpageSEO1: `Important first step, keyword research is the process of understanding how your target users search for your product or service.`,
        onpageSEO2: `It has to be done before starting the on-page work. Competitor Analysis help to expand the research and make sure no important keyword is omitted. ​ Although since Hummingbird, Google is more semantically driven to assess the website's content, and focussed on Voice search and entities, knowing your important keywords is still important when structuring content and metadata. We will then do an audit of your website checking content for each important landing page, site structure, metadata, images. ​ Additional important checks will cover structured data implementation and other technical aspects.`,

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
        impressum_title: `Impressum SEO Berlino | SEO Expert in Berlin`,
        footer1: `All Right Reserved 2018 Alex Bieth`,
        footer2: `about this website`
      }
    }, //en

    de: {
      translations: {
        hey1: `SEO Experte in Berlin `,
        hey2: `Full Stack Web-Entwickler`,
        hey3: `On-page Prüfung`,
        hey4: `Keyword-Recherche`,
        hey5: `Technisches SEO`,
        hey6: `Analytics`,
        hey7: `Mitbewerberanalyse`,
        hey8: `Off-Page Prüfung`,
        clients: `kunden`,
        intro1: `Hi! Ich bin Alex, ein erfahrener Freelance SEO Experte in Berlin mit MBA und in scrum ausgebildet.`,
        intro2: `9 Jahre Erfahrung in SEO, SEA und Analytics.`,
        intro3: `Full Stack Web-Entwickler`,
        intro4: `Analyse, Aktionsplan mit Priorisierung, und Controlling`,
        intro5: `Geschäftskompetenz (MBA)`,
        intro6: `5 Jahre als  Head of SEO (bei Spreadshirt)`,
        intro7: `+400% SEO Auftragseingang (DACH, US, FR)`,
        intro8: `Mehr als 1 Jahre Erfahrung als Freelancer`,
        intro9: ` Voll/Speczifisch Audit mit Zusammenfassung`,
        cookie1: `Diese Website verwendet sehr einfache und generische Cookies.`,
        cookie2: `Sie können lesen, welche Cookies verwendet werden`,
        cookie3: `oder akzeptieren, um fortzufahren.`,
        cookie4: `Zustimmen`,
        cookie5: `Lesen`,
        analytics1: `Google Analytics Installation`,
        analytics2: `Google Analytics Untersuchung`,
        analytics3: `Google Analytics Optimierung zB Url Filtern und
              Channel regrouping und UTM best practices`,
        analytics4: `Reports & Dashboard`,
        analytics5: `Adobe SiteCatalyst /
        Marketing Cloud / Omniture Fähigkeit`,
        brandbuilding1: `Brand-building: beste Empfehlung für
        Inhaltserstellung`,
        brandbuilding2: `Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic
         und backlinks`,
        brandbuilding3: `Basierend auf den Interessen von Anwendern und Influencern, um die Qualität der Verbindung zu verbessern
        Kreationsqualität und Markenbewusstsein.`,
        blog: `blog (auf englisch)`,
        analyticsHP1: `lokale SEO`,
        analyticsHP2: `analytics und Berichterstattung, Konfiguration oder/und Kontrolle,`,
        analyticsHP3: `Konkurrenzanalyse,`,
        analyticsHP4: `neue Webseite, SEO bewährte Praktiken`,
        analyticsHP5: `hierfür passend Untersuchung`,
        analyticsHP6: `SEA (Adwords) Optimierung`,
        onpageHP1: `Stichwortforschung`,
        onpageHP2: `landing page Optimierung`,
        onpageHP3: `interne Linking und Website-Architektur,`,
        onpageHP4: `Metas Tags & headers,`,
        onpageHP5: `verbunden tags und Breadcrumb`,
        onpageHP6: `Inhalt und Semantik`,
        onpageHP7: `Bildoptimierung,`,
        onpageHP8: `Structured Data,`,
        onpageHP9: `Duplizierter Inhalt und Kanonisierung`,
        onpageHP10: `Sprachsuche`,
        offpageHP1: `Backlink Konkurrenzanalyse,`,
        offpageHP2: `Backlink Analyse,`,
        offpageHP3: `Markenbildung Chancen,`,
        offpageHP4: `Influencers Forschung,`,
        offpageHP5: `Toxic Links Cleaning`,
        technicalHP1: `Indexierung, redirects und urls`,
        technicalHP2: `Crawlfähigkeit, robots.txt, Sitemaps`,
        technicalHP3: `Internationalisierung,`,
        technicalHP4: `Seitengeschwindigkeit,`,
        technicalHP5: `Mobile-friendliness,`,
        technicalHP6: `Javascrips apps und SEO: dynamisches Rendering`,
        technicalHP7: `Sicherheit und Website-Migration`,

        services: `SEO`,
        servicesL: `beratung`,
        technical: `TECHNISCHES SEO`,
        about: `ÜBER MICH`,
        contact: `KONTAKT`,
        fullname: `Name* `,
        subject: `Betreff  `,
        message: `Nachricht*  `,
        sendMessage: `SENDEN`,
        aboutmetitle: `übermich`,
        about1: `Nachgewiesene Ergebnisse mit 400% mehr SEO-Umsatz für mehrere Websites als SEO-Leiter`,
        about2: `9 Jahre Erfahrung in SEO, SEA und Analytics.`,
        about3: `Full Stack Web-Entwickler`,
        about4: `In scrum ausgebildet, in einem Team von 10 verwendet.`,
        about5: `Langjährige Erfahrung im technischen SEO: Indexierung,
                Crawlablity, Site-Architektur und interne Verknüpfungsoptimierung`,
        about6: `Verrückt nach Daten und Berichten, um Entscheidungen zu treffen und Prioritäten zu setzen `,
        about7: `Erfahrung mit der Erstellung von Roadmaps, Aktionsplänen, technischen Dashboards und Analyseberichten`,

        getintouch: `Kontakt`,
        aboutme: `SEO Experte || SEO Freelancer in Berlin | SEO Berlino`,
        HPTitle: `SEO Beratung in Berlin | SEO Berlino`,
        descriptionHP: `SEO Beratung in Berlin: Audit, Onpage, Offpage, Technisches SEO, Mitbewerberanalyse, Webanalyse, Brand Building`,

        getintouch_title: `Kontakt Alex Bieth | SEO Expert in Berlin seoberlino`,
        bloglatest: `Neueste Beiträge`,
        services: `BERATUNG`,
        onpageSEO1: `Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.`,
        onpageSEO2: `Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. Alex Bieth wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte.`,

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

        technical_intro: `Technisches SEO-Optimierung gruppiert alle On-Page-SEO, die nicht ist`,
        technical_main: `Technisches SEO-Optimierung gruppiert alle On-Page-SEO, die nicht inhaltlich ist. Für ein technisches Audit werden wir einen Aktionsplan für diese Themen prüfen, berichten und präsentieren: Seitengeschwindigkeit, Konsequenzen von Google-Algorithmen, Crawl (Robots, Noindex / Follow, Sitemaps, etc.), Weiterleitungen, Duplicate Content & Canonicals, Indexierung, URL Kanonisierung, Bildoptimierung, Seitenstruktur, interne Verlinkung etc ... `,
        research_intro: `Unter Verwendung der wichtigsten SEO-Faktoren werden wir eine eingehende Analyse Ihrer Konkurrenten durchführen, um schnelle Gewinne zu finden!`,
        research_main: `​ Was rangieren meine Konkurrenten vor mir, die ich nicht bin und die ich testen könnte? Wer verlinkt zu meiner Konkurrenz und warum nicht zu mir? Aber nicht kopieren, besser machen! Wissen Sie, was Ihre Mitbewerber vorhaben Kontaktieren Sie uns Inhalt der Konkurrenzanalyse: Haupt-SEO Wettbewerber Identifikation Backlink-Profil Keyword-Analyse, Hauptlandungsseiten Organisation und Seitenstruktur Indexierung Seite Ladezeit Vergleich und andere technische Prüfungen Internationalisierung und mehr`,
        impressum_title: `Impressum SEO Berlino || SEO Beratung in Berlin`,
        footer1: `Alle Rechte vorbehalten. 2018 Alex Bieth`,
        footer2: `über diese Webseite`
      }
    }, //de

    fr: {
      translations: {
        hey1: `SEO Expert à Berlin `,
        hey2: `Web Dévelopeur Full Stack `,
        hey3: `Audit On-page`,
        hey4: `Recherche de mots clés`,
        hey5: `SEO Technique`,
        hey6: `Analyse Web`,
        hey7: `Analyse compétiteurs`,
        hey8: `Audit Off-Page`,
        clients: `clients`,
        intro1: `Hallo ! Je suis Alex, expert SEO franco-anglais basé à Berlin depuis 2010.`,
        intro2: `9 années d'experience en SEO, SEA et Analyse Web.`,
        intro3: `Dévelopeur Full Stack`,
        intro4: `Analyse, action plan avec prios, controlling`,
        intro5: `MBA`,
        intro6: `5 ans en charge du SEO à Spreadshirt (équipe de 10 personnes)`,
        intro7: `+400% de croisssance en traffic et ventes SEO  (DACH, US, FR)`,
        intro8: `plus d'un an d'expérience comme freelancer SEO`,
        intro9: ` Audit complet ou spécifique`,
        cookie1: `Ce site web utilise des cookies génériques.`,
        cookie2: `Vous pouvez lire quels cookies sont utilisés sur ce site.`,
        cookie3: `accepter et continuer, ou lire la liste des cookies utilisés.`,
        cookie4: `Continuer`,
        cookie5: `Lire liste des cookies`,
        analytics1: `Installation Google Analytics `,
        analytics2: `Audit Google Analytics `,
        analytics3: `Optimisation Google Analytics (filtres, groupements canal, UTM)`,
        analytics4: `Reports & Dashboards`,
        analytics5: `Adobe SiteCatalyst /
        Marketing Cloud / Omniture`,
        brandbuilding1: `Brand-building`,
        brandbuilding2: ` Content targeting: more traffic for brand awareness, traffic
 and backlinks`,
        brandbuilding3: `Based on user & influencers interests to boost quality link
creation quality and brand awareness.`,

        blog: `blog (en anglais)`,
        analyticsHP1: `SEO Local`,
        analyticsHP2: `analyse web, reporting et controlling,`,
        analyticsHP3: `Analyse de la concurrence,`,
        analyticsHP6: `Optimisation Google Ads`,
        onpageHP1: `Recherche de mots clés`,
        offpageHP3: `opportunités de brandbuilding`,
        offpageHP4: `recherche influencers`,
        offpageHP5: `toxic links`,
        onpageHP2: `optimisation landing page`,
        onpageHP3: `liens internees et architecture du site,`,
        onpageHP4: `meta tags & headers,`,
        onpageHP5: `related tags & breadcrumb`,

        onpageHP8: `structured data,`,
        onpageHP9: `contenu dupliqué & canonicalization`,
        onpageHP10: `ready for voice search`,
        onpageHP6: `Contenu et semantique`,
        onpageHP7: `Optimisation des images,`,
        offpageHP1: `Analyse Backlinks des concurrents,`,
        offpageHP2: `Analyse Backlinks`,
        technicalHP1: `Indexation, redirects et urls`,
        technicalHP2: `crawlability, robots.txt, sitemaps`,

        technicalHP3: `Internationalisation,`,
        technicalHP4: `pagespeed`,

        technicalHP5: `Mobile-friendliness`,
        technicalHP6: `Applications Javascript et SEO`,
        technicalHP7: `Sécurité (https) & migrations`,

        services: `SEO`,
        servicesL: `services`,
        technical: `SEO TECHNIQUE`,
        about: `SUR MOI`,
        contact: `CONTACT`,
        fullname: `Nom* `,
        subject: `Sujet  `,
        message: `Message*  `,
        sendMessage: `ENVOYER`,
        aboutmetitle: `qui suis-je`,

        getintouch: `Contact`,
        aboutme: `SEO Experte und Freelancer in Berlin | SEO Berlino`,
        HPTitle: `Expert SEO (Référencement) français à Berlin | SEO Berlino`,
        descriptionHP: `Expert SEO/Référencement français à Berlin: Audit, Onpage, Offpage, SEO technique, Analyse de la concurrence, Analyse Web, Brand Building`,
        getintouch_title: `Contact Alex Bieth | Expert SEO / Référencement seoberlino.com`,
        services: `SERVICES`,

        impressum_title: `Impressum SEO Berlino | SEO Beratung in Berlin`,
        footer1: `tous droits réservés. 2018 Alex Bieth`
      }
    }, //fr

    fallbackLng: `en`,
    debug: true,

    // have a common namespace used around the full app
    ns: [`translations`],
    defaultNS: `translations`,

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: `,`
    },

    react: {
      wait: true
    }
  } //resources
}); //init

export default i18n;
