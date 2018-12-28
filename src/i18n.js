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
        HPTitle: `SEO Expert Freelancer, Search Engine Optimization Consultant | SEO Berlino`,
        descriptionHP: `SEO Freelancer in Berlin: Audit, Onpage, Offpage, Technical SEO, Competitor Analysis, Analytics, Brand Building`,
        beratung: `SEO Consultancy`,
        beratungText: `For every SEO Consultation, a personal conversation is needed at the beginning to discuss your needs
              and how to best work together to define realistic KPIs and goals.
              With my experience I can efficiently give you some estimates of new traffic you can get with a plan
              of how to reach it and the resources needed to achieve it. From conception to integration and control, I will keep you informed on what has been done and implemented
                and which goals have been achieved.`,

        audit: `Audit`,
        auditText: `The SEO Audit helps to define where your website stands compared to your main competitors, and enables to set realistic objectives
                     based on gained visibily. In the audit, onpage, offpage and technical SEO aspects are covered. Subsequently
                      you will receive a detailed report on the results of the SEO audit.`,
        KWResearch: `Keyword Research`,
        KWResearchText: `
A very important cornerstone for all future SEO measures is the keyword analysis. Here we generate a list of relevant keywords for your product or service. Another result of keyword analysis is the definition of threshold keywords.`,
        OnPageOptimization: `Onpage Optimization`,
        OnPageOptimizationText: `The Onpage
  Optimization refers to any SEO action taken on the website that
  can be done directly. That concerns first and foremost
  the optimization of the content and the code of the page. It includes
  as well the elaboration of the content strategy and potential
  technical issues.`,
        OffpagePageOptimization: `Offpage Optimization`,
        OffpagePageOptimizationText: `Offpage
        Optimization is certainly the most complex process in SEO
     as well as the one of the most important factors. It is about
        link building through brand awareness. To do so it is necessary to identify
        topic related to your topic which bring traffic, your influencers, blogs and other websites
        with whom you share common grounds.`,

        getintouch_title: `SEO Expert Freelancer in Berlin | seoBerlino`,
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
        offpageHP3: `brand building opportunities,,`,
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

        offpage_main: `Backlinks still play an imporstant role in SEO and can help your
        website get more visibility. They are for Google a sign of
        trust from a website to another. The more (quality) backlinks you
        get pointing your site, the more popular will your website be rated.
        Of course many factors come into play: -timing of new backlinks
        -quality of the website pointing the link to yours. These aspects
        are critical in how to positively improve your backlink profile and
        boost your Domain Authority. 



        1. Auditing your backlink profile (number and quality of current backlinks)
        2. Checking on how competitors get (quality) backlinks and find any opportunities.
        3. Taking into account the specificity of the industry and the local aspect, will suggest creative opportunities to get backlinks
        4. Suggesting an action plan to boost your backlink profile.
                        `,
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
        footer2: `about this website`,
        boost1: `BOOST YOUR TRAFFIC WITH`,
        boost2: `OPTIMIZED KEYWORD TARGETING!`
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
        audit: `Audit`,
        auditText: ` Das SEO Audit hilft zu definieren, wo Ihre Website im Vergleich zu Ihren Hauptkonkurrenten steht, und ermöglicht es Ihnen, realistische Ziele zu setzen basierend auf visibily gewonnen. In der Prüfung werden Onpage-, Offpage- und technische SEO-Aspekte behandelt. Anschließend Sie erhalten einen detaillierten Bericht über die Ergebnisse des SEO-Audits.`,
        KWResearch: `Keywordanalyse`,
        KWResearchText: `Ein ganz wichtiger Grundstein für alle zukünftigen SEO Maßnahmen
        ist die Keywordanalyse. Hier generiere ich eine Liste der für Ihr Produkt oder Ihre
        Dienstleistungen relevanten Keywords. Ein weiteres Ergebnis der Keywordanalyse ist die Definition von Schwellenkeywords.`,
        OnPageOptimization: `Onpage Optimierung`,
        OnPageOptimizationText: `Die Onpage Optimierung bezieht sich auf jede SEO-Aktion, die auf der Website ausgeführt wird
   kann direkt gemacht werden. Das betrifft in erster Linie die Optimierung des Inhalts und des Codes der Seite. Es enthält
   auch die Ausarbeitung der inhaltlichen Strategie und des Potenzials Technische Probleme.`,
        OffpagePageOptimization: `Offpage Optimierung`,
        OffpagePageOptimizationText: `Offpage Optimierung ist sicherlich der komplexeste Prozess in SEO sowie einer der wichtigsten Faktoren. Es geht um Linkbuilding durch Markenbekanntheit. Dazu muss man sich identifizieren themenbezogenes thema, das den verkehr bringt, ihre Influencer, blogs und andere websites mit wem Sie Gemeinsamkeiten haben. `,
        services: `SEO`,
        servicesL: `beratung`,
        beratung: `SEO Beratung`,
        beratungText: `Für jede SEO-Beratung ist zu Beginn ein persönliches Gespräch erforderlich, um Ihre Bedürfnisse zu besprechen und wie man am besten zusammenarbeitet, um realistische KPIs und Ziele zu definieren. Mit meiner Erfahrung kann ich Ihnen einige Schätzungen des neuen Verkehrs geben, die Sie mit einem Plan erhalten können wie man es erreicht und welche Ressourcen dafür benötigt werden. Von der Konzeption bis zur Integration und Kontrolle werde ich Sie auf dem Laufenden halten, was getan und umgesetzt wurde und welche Ziele wurden erreicht.`,
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
        HPTitle: `SEO Experte Freelancer | Suchmaschinenoptimierung | Beratung seoBerlino`,
        descriptionHP: `SEO Beratung in Berlin: Audit, Onpage, Offpage, Technisches SEO, Mitbewerberanalyse, Webanalyse, Brand Building`,

        getintouch_title: `SEO Experte Freelancer in Berlin | Kontakt | seoberlino`,
        bloglatest: `Neueste Beiträge`,
        services: `BERATUNG`,
        onpageSEO1: `Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.`,
        onpageSEO2: `Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. Alex Bieth wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte.`,

        offpage_main: `1. Auditing your backlink profile (number and quality of current
                        backlinks) 2. Checking on how competitors get (quality) backlinks
                        and find any opportnities. 3. Taking into account the specificity of
                        the industry and the local aspect, will suggest creative
                        opportunities to get backlinks 4. Suggesting an action plan to boost
                        your backlink profile What we can do for you About Backlinks
                        Backlinks still play an imporstant role in SEO and can help your
                        website get more visibility. Backlinks are for Google a sign of
                        trust from a website to another. The more (quality) backlinks you
                        get pointing your site, the more popular will your website be rated.
                        Of course many factors come into play: -timing of new backlinks
                        -quality of the website pointing the link to yours. These aspects
                        are critical in how to positively improve your backlink profile and
                        boost your Domain Authority.`,
        offpage_intro: `Backlinks sind für Google ein Vertrauensbeweis von einer Website zu einer anderen.
                                Je mehr (Qualitäts-) Backlinks Sie erhalten, desto mehr zeigen Sie Ihre Website an
                                beliebt wird Ihre Website bewertet.`,

        technical_intro: `Technisches SEO-Optimierung gruppiert alle On-Page-SEO, die nicht ist`,
        technical_main: `Technisches SEO-Optimierung gruppiert alle On-Page-SEO, die nicht inhaltlich ist. Für ein technisches Audit werden wir einen Aktionsplan für diese Themen prüfen, berichten und präsentieren: Seitengeschwindigkeit, Konsequenzen von Google-Algorithmen, Crawl (Robots, Noindex / Follow, Sitemaps, etc.), Weiterleitungen, Duplicate Content & Canonicals, Indexierung, URL Kanonisierung, Bildoptimierung, Seitenstruktur, interne Verlinkung etc ... `,
        research_intro: `Unter Verwendung der wichtigsten SEO-Faktoren werden wir eine eingehende Analyse Ihrer Konkurrenten durchführen, um schnelle Gewinne zu finden!`,
        research_main: `​ Was rangieren meine Konkurrenten vor mir, die ich nicht bin und die ich testen könnte? Wer verlinkt zu meiner Konkurrenz und warum nicht zu mir? Aber nicht kopieren, besser machen! Wissen Sie, was Ihre Mitbewerber vorhaben Kontaktieren Sie uns Inhalt der Konkurrenzanalyse: Haupt-SEO Wettbewerber Identifikation Backlink-Profil Keyword-Analyse, Hauptlandungsseiten Organisation und Seitenstruktur Indexierung Seite Ladezeit Vergleich und andere technische Prüfungen Internationalisierung und mehr`,
        impressum_title: `Impressum SEO Berlino || SEO Beratung in Berlin`,
        footer1: `Alle Rechte vorbehalten. 2018 Alex Bieth`,
        footer2: `über diese Webseite`,
        boost1: `NUR MIT DEN BESTEN KEYWORDS`,
        boost2: `KOMMT DER BESTE TRAFFIC!`
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
        intro1: `Hallo ! Je suis Alex, 10 ans d'expérience, expert SEO franco-anglais basé à Berlin depuis 2010.`,
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
        audit: `Audit SEO`,
        auditText: `
L’ audit permet de définir la position de votre site par rapport à vos principaux concurrents et de fixer des objectifs réalistes.
                     basé sur la visibilité acquise. Dans l’ audit, les aspects de référencement onpage, offpage et techniques sont couverts. Par la suite
                      vous recevrez un rapport détaillé sur les résultats de l'audit.`,
        KWResearch: `Analyse Mots Clés`,
        KWResearchText: `
L'analyse des mots clés est une partie très importante du référencement. Une liste de mots-clés pertinents pour votre produit ou service sera élaborée.`,
        OnPageOptimization: `Optimisation Onpage`,
        OnPageOptimizationText: `L'optimisation "onpage" fait référence au contenu: code et texte.
              De plus, il est important d'y intégrer la production future de contenu avec des priorités en fonction du potentiel des mots clés ciblés.`,
        OffpagePageOptimization: `Optimisation Offpage`,
        OffpagePageOptimizationText: `L'optimisation offpage est certainement la plus complexe du processus mais aussi l'une des plus
        importante.`,

        blog: `blog (en anglais)`,
        analyticsHP1: `SEO Local`,
        analyticsHP2: `analyse web, reporting et controlling,`,
        analyticsHP3: `Analyse de la concurrence,`,
        analyticsHP6: `Optimisation Google Ads`,
        onpageHP1: `Recherche de mots clés`,
        offpageHP3: `opportunités de brand building`,
        offpageHP4: `recherche influencers`,
        offpageHP5: `toxic links`,
        onpageHP2: `optimisation landing page`,
        onpageHP3: `liens internees et architecture du site,`,
        onpageHP4: `meta tags & headers,`,
        onpageHP5: `related tags & breadcrumb`,
        beratung: `Conseils SEO`,
        beratungText: `Pour chaque consultation, une conversation avec vous
        est nécessaire pour comprendre votre situation présente, vos prioriétés, ainsi que vos ressources.
              Nous définissons ensuite des indicateurs de performance et des objectifs de référencement réalistes,
              Nous devons aussi établir comment votre entreprise peut efficacement utiliser ses
               ressources internes et être intégrées au projet. Après l'audit vous pouvez
               utliser mes services comme une consultation d'accompagnement, durant laquelle
               mes recommandations de référencement sont mises en œuvre jusqu'à
              la conception complète.
              La transparence est garantie pour chaque client  avec un rapport détaillé avec
              les mesures mises en œuvre et objectifs atteints.`,

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
        aboutmetitle: `qui je suis`,

        getintouch: `Contact`,
        aboutme: `SEO Experte und Freelancer in Berlin | SEO Berlino`,
        HPTitle: `Expert Référencement Freelance SEO français | SEO Berlino`,
        descriptionHP: `Expert SEO/Référencement français à Berlin: Audit, Onpage, Offpage, SEO technique, Analyse concurrence, Analyse Web, Brand Building`,
        getintouch_title: `Expert SEO / Référencement Freelance français à Berlin | seoberlino`,
        services: `SERVICES`,

        impressum_title: `Impressum SEO Berlino | SEO Beratung in Berlin`,
        footer1: `tous droits réservés. 2018 Alex Bieth`,
        boost1: `BIEN IDENTIFIER SES MOTS CLÉS`,
        boost2: `POUR PLUS DE TRAFIC DE QUALITÉ`,
        offpage_main: `1. Audit de vos liens (nombre et qualité) 2. Comment vos compétiteurs obtiennent des liens, comment s'en inspirer et faire mieux 3. Prennant en compte la spécificité de votre industrie, comment créativement créer du contenu qui apportera liens et trafic.
                         4. Suggesting an action plan to boost
                        your backlink profile What we can do for you

                        About Backlinks
                        Backlinks still play an imporstant role in SEO and can help your
                        website get more visibility. Backlinks are for Google a sign of
                        trust from a website to another. The more (quality) backlinks you
                        get pointing your site, the more popular will your website be rated.
                        Of course many factors come into play: -timing of new backlinks
                        -quality of the website pointing the link to yours. These aspects
                        are critical in how to positively improve your backlink profile and
                        boost your Domain Authority.`
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
