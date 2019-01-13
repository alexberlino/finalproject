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
        whatisSEO: `        Search engine optimization is the term used to describe the
                processes to optimize a website for search engines. SEO is
                important for getting high quality visitors from search which
                are searching what the website has to offer. Given how the
                algotiths have evolved these last years, there is also much
                focus on user-friendliness of the website to increase its
                credibility and "respect" from search engines such as Google,
                Bing and Yandex. Search engines use more and more complex
                algorithms to determine which pages to include in their index
                and the order they show these pages in the search results. SEO
                is the way to ‘speak’ to search engines in a language they can
                understand and give them as much information about your website
                as possible.`,
        clients: `current and former clients`,
        intro1: `Experienced SEO Consultant in Berlin.`,
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
        HPTitle: `SEO Consultant - SEO Freelancer | SEOBerlino`,
        descriptionHP: `SEO Freelancer in Berlin: Audit, Onpage, Offpage, Technical SEO, Competitor Analysis, Analytics, Brand Building`,
        beratung: `SEO Consultancy`,
        beratungText: `For every SEO Consultation, a personal conversation is needed at the beginning to discuss your needs
              and how to best work together to define realistic KPIs and goals.
              With my experience I can efficiently give you some estimates of new traffic you can get with a plan
              of how to reach it and the resources needed to achieve it. From conception to integration and control, I will keep you informed on what has been done and implemented
                and which goals have been achieved.`,

        audit: `Audit`,
        auditText: `The SEO Audit helps to define where your website stands compared to your main competitors, and enables to set realistic objectives
                     based on gained visibility. In the audit, onpage, offpage and technical SEO aspects are covered. Subsequently
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

        getintouch_title: `SEO Freelancer in Berlin -  Get in touch | SEO Berlino`,
        blog: `blog`,
        bloglatest: `Latest posts`,
        services: `SERVICES`,
        analyticsHP1: `local SEO`,
        analyticsHP2: `analytics and reporting`,
        analyticsHP3: `competitor analysis`,
        analyticsHP4: `new website best practice`,
        analyticsHP6: `SEA (Google Ads)`,
        onpageHP1: `keyword research`,
        onpageHP2: `landing page optimization`,
        onpageHP3: `internal linking`,
        onpageHP4: `meta tags and headers`,
        onpageHP5: `breadcrumb`,
        onpageHP6: `content & semantics`,
        onpageHP7: `images & media`,
        onpageHP8: `structured data`,
        onpageHP9: `duplicate content`,
        onpageHP10: `voice search`,
        offpageHP1: `backlink analysis`,
        offpageHP2: `backlink profile`,
        offpageHP3: `brand building`,
        offpageHP4: `influencers`,
        offpageHP5: `toxic links`,
        technicalHP1: `indexation`,
        technicalHP2: `crawlability`,
        technicalHP3: `internationalisation`,
        technicalHP4: `pagespeed`,
        technicalHP5: `mobile-friendly`,
        technicalHP6: `dynamic rendering`,
        technicalHP7: `https site migration`,

        onpageSEO1: `Important first step, keyword research is the process of understanding how your target users search for your product or service.`,
        onpageSEO2: `It has to be done before starting the on-page work. Competitor Analysis help to expand the research and make sure no important keyword is omitted. ​ Although since Hummingbird, Google is more semantically driven to assess the website's content, and focussed on Voice search and entities, knowing your important keywords is still important when structuring content and metadata. We will then do an audit of your website checking content for each important landing page, site structure, metadata, images. ​ Additional important checks will cover structured data implementation and other technical aspects.`,

        offpage_main: `Backlinks still play an important role in SEO and can help your website get more visibility. They are for Google a sign of trust from a website to another. The more (quality) backlinks you get pointing to your site, the more popular will your website be rated. Of course many factors come into play:
-timing of the new backlinks
-quality of the website pointing the link to yours.
-quality of the page with the link, within the website


These aspects are critical to positively improve your backlink profile and boost your Domain Authority.

How it is done:
Prioritised Action plan with:

1. Backlink profile audit (number and quality of current backlinks)
2. Investigation on how competitors get (quality) backlinks and find opportunities.
3. Taking into account the specificity of the industry and the local aspect, suggestion on creative opportunities to get backlinks
4. Suggestion of content creation themes based on Search Volume and competitive difficulty
                        `,
        offpage_intro: `Backlinks are for Google a sign of trust from a website to another.
                        The more (quality) backlinks you get pointing your site, the more
                        popular will your website be rated.`,
        technical_intro: `Technical SEO Optimization regroups all on-page SEO which is not
                        content related.`,
        technical_main: `Technical SEO Optimization regroups all on-page SEO which is not content related. For a Technical Audit, we will review, report and present an action plan for these topics: ​ Pagespeed, consequences of Google algorithms changes, crawl (robots, noindex/follow, sitemaps, etc), redirects, duplicate content & canonicals, indexation, URL Canonicalization, image optimization, site structure, internal linking etc...`,
        research_intro: `Using the most important SEO factors, we will do an in-depth analysis of your competitors to find quick wins!`,
        research_main: `​ ​ ​ ​ ​ What are my competitors ranking ahead of me doing that I am not, and that I could test? Who is linking to my competitors and why not to me? But don't copy, do better! ​ Know what your competitors are up to Contact Us Content of Competitor Analysis: ​ Main SEO Competitors Identification Backlink profile Keyword Analysis, main landing pages organisation and site structure Indexation Page load time comparision and other technical checks Internationalisation and more`,
        impressum_title: `Impressum SEO Berlino | SEO Expert in Berlin`,
        footer1: `All Right Reserved 2018 Alex Bieth`,
        footer2: `about this website`,
        boost1: `BOOST YOUR TRAFFIC WITH`,
        boost2: `OPTIMIZED KEYWORD TARGETING!`,

        auditintro: `Audits can vary in scope depending on the website's needs and maturity.
      A full audit though will cover all aspets of SEO which over the years has become more and more complex and segmented.
      The main aspects of SEO can simply be categorized in three main fields: offpage, onpage and technical SEO, but there is a lot of overlapping.
      Also efficient and reliable web analytics set-up and knowing your competitors (Competitor Analysis) are critical if you want to make progress, understand and set your priorities and control them efficiently   `,

        auditintro2: `The first step in Audit it to make sure to know the  which are key to your business, which ones your are already ranking and those for which you are not, select the ones which are more likely
  to bring the best traffic depending on your site's strength: if your site is quite new, you may not want to target keywords which have great Search Volume but which are too competitive.    Content of course is the most important, but using the language
      your users like to use thanks to quality landing
      pages, and producing content for users not just for SEO. Link
      internally in an efficient way is also key for user experience and search engine bots.`,

        auditintro3: `Keeping an eye on indexation is extremely important so that you
            don't waste crawling credits. Avoid however duplicate content
            that would confuse search engine bots with poor indexation messages. Make sure also your
            mobile version loads fast. Make sure that your website uses https.`,
        auditintro4: `Once you are confident you have great content and a website you are proud of, you can with more confidence ask for quality links pointing to your website. Links are still key in SEO and more and more difficult to pro-actively collect if you are still new in your business. PR, social media, word of mouth and other media coverage increase visibility and more and more websites will starting linking to you naturally if you have a website which stands out from the competition.
        Before that happens, there are ways to get going while taking care of your brand image and expertise in your field.  `,
        auditintro5: `Know your competitors with a competitor analysis. Go Local to secure the market close to you and paid search to get those extra visits while you work on your SEO.
        If you are not using analytics as a tool to closely monitor your traffic, you are losing opportunities that will guide you to make improvements. These themes are covered in the Research and Analytics section.`,
        onpageintro: `Onpage optimization refers to all measures that can be taken
            directly within the website in order to improve its position in
            the search rankings. Examples of this include measures to
            optimize the content or improve the meta description and title
            tags.`,
        onpageintro2: `First things first: Keyword Research; if you are not targeting the right keywords, or missing out on the most important ones, you will struggle to get the best traffic for your site.
        Also, you need to know which questions are most searched and other themes close related to your business.  `,
        onpageintro3: `Why do people visit your site? Most
        likely because it contains information they’re looking for.
        Therefore you should write excellent content. Search engines
        like Google read your text. Which site ranks highest is for a
        large part based on the content of a website. That content
        should be about the right keywords, informative, and easy to
        read. `,
        onpageintro4: `    On-page SEO consists of all the elements of SEO you can control
            best. If you own a website, you can control the technical issues
            and the quality of your content. On-page issues should all be
            tackled as they’re in your own hands. If you create an awesome
            website, it will definitely start ranking. Focusing on on-page
            SEO will also increase the probability that your off-page SEO
            strategy will be successful. Link building with a poor site is a
            very tough job. Nobody wants to link to articles that are badly
            written or not interesting.`,
        technicalintro: `    Technical SEO refers to website and server optimizations that
                help search engine spiders crawl and index your site more
                effectively (to help improve organic rankings).`,
        technicalintro2: `Search engines give preferential treatment in search results to
                websites that display certain technical characteristics:
                a secure connection, a responsive design or a fast
                loading time — and technical SEO is the work you need to do to
                ensure your website does so. `,
        technicalintro3: `Use SSL. Secure Sockets Layer – It is a security
        technology which creates an encrypted link between a web
        server and a browser. You can recognise a site using SSL
        easily: the website URL starts with ‘https’ rather than
        ‘http’. A few years ago, Google announced that they will start giving
        preference in rankings to websites using secure HTTPS over non-secure ones;
        this can be simply done by installing an SSL certificate on
        your website. `,
        technicalintro4: `  Crazy but it happens: Make sure you are not unintentionally
          blocking crawlers from indexing your website.`,
        technicalintro5: `Speed your site up. Search engines prefer sites that load
        quickly: page speed is considered an important ranking signal.`,
        technicalintro6: `Create an XML sitemap. An XML sitemap is a file that helps
        search engines to understand your website whilst crawling it –
        you can think of it as being like a ‘search roadmap’ of sorts,
        telling search engines exactly where each page is. `,
        technicalintro7: ` Consider enabling AMP. AMP is a Google-backed project which
          aims to speed up the delivery of content on mobile devices
          through the use of special code known as AMP HTML. AMP
          versions of your web pages load extremely quickly on mobile
          devices. They do this by stripping your content and code down
          to the bare bones, leaving text, images and video intact but
          disabling scripts, comments and forms. Because they load so
          fast, AMP versions of pages are far more likely to be read and
          shared by your users, increasing dwell time and the number of
          backlinks pointing to your content – all good things from an
          SEO point of view. On top of that, Google sometimes highlights
          AMP pages in prominent carousels in search results – giving
          you an important search bump.`,
        technicalintro8: `      Add structured data markup to your website. Structured data
              markup is code which you add to your website to help search
              engines better understand the content on it. This data can
              help search engines index your site more effectively and
              provide more relevant results. `,
        technicalintro9: `Register your site with Google Search Console and Bing
        Webmaster Tools. Google Search Console and Bing Webmaster
        Tools are free tools from Google and Microsoft respectively
        that allow you to submit your website to their search engines
        for indexing. When you are ready to launch your website, you
        should submit its XML sitemap (see above) to both Google
        Search Console and Webmaster Tools so that they can crawl your
        new site and start to display results from it in search
        results. These services also allow you to keep an eye on the
        general performance of your site from a search engine
        prospective - other things you can do with the tools include:
        testing your site’s mobile usability accessing search
        analytics viewing backlinks to your site disavowing spammy
        links and much more besides. Technical SEO Resources You may
        find the below resources helpful for learning more about
        technical SEO`
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
        intro9: ` Voll/Spezifisch Audit mit Zusammenfassung`,
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
        analyticsHP6: `SEA (Google Ads)`,
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
        technicalHP6: `Javascript apps und SEO: dynamisches Rendering`,
        technicalHP7: `Sicherheit und Website-Migration`,
        audit: `Audit`,
        auditText: ` Das SEO Audit hilft zu definieren, wo Ihre Website im Vergleich zu Ihren Hauptkonkurrenten steht, und ermöglicht es Ihnen, realistische Ziele zu setzen basierend auf visibility gewonnen. In der Prüfung werden Onpage-, Offpage- und technische SEO-Aspekte behandelt. Anschließend Sie erhalten einen detaillierten Bericht über die Ergebnisse des SEO-Audits.`,
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
        HPTitle: `SEO Freelancer | SEO Beratung | SEO Berlino`,
        descriptionHP: `SEO Beratung in Berlin: Audit, Onpage, Offpage, Technisches SEO, Konkurrenzanalyse, Webanalyse, Brand Building`,

        getintouch_title: `SEO Experte Freelancer in Berlin | Kontakt | seoberlino`,
        bloglatest: `Neueste Beiträge`,
        services: `BERATUNG`,
        onpageSEO1: `Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.`,
        onpageSEO2: `Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. Alex Bieth wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte.`,

        offpage_main: `1. Auditing your backlink profile (number and quality of current
                        backlinks) 2. Checking on how competitors get (quality) backlinks
                        and find any opportunities. 3. Taking into account the specificity of
                        the industry and the local aspect, will suggest creative
                        opportunities to get backlinks 4. Suggesting an action plan to boost
                        your backlink profile What we can do for you About Backlinks
                        Backlinks still play an important role in SEO and can help your
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
        boost2: `KOMMT DER BESTE TRAFFIC!`,
        whatisSEO: `        Search engine optimization is the term used to describe the
                processes to optimize a website for search engines. SEO is
                important for getting high quality visitors from search which
                are searching what the website has to offer. Given how the
                algorithms have evolved these last years, there is also much
                focus on user-friendliness of the website to increase its
                credibility and "respect" from search engines such as Google,
                Bing and Yandex. Search engines use more and more complex
                algorithms to determine which pages to include in their index
                and the order they show these pages in the search results. SEO
                is the way to ‘speak’ to search engines in a language they can
                understand and give them as much information about your website
                as possible.`
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
        HPTitle: `Expert Référencement Freelance SEO | SEO Berlino`,
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
                        boost your Domain Authority.`,
        whatisSEO: `        Search engine optimization is the term used to describe the
                                processes to optimize a website for search engines. SEO is
                                important for getting high quality visitors from search which
                                are searching what the website has to offer. Given how the
                                algotiths have evolved these last years, there is also much
                                focus on user-friendliness of the website to increase its
                                credibility and "respect" from search engines such as Google,
                                Bing and Yandex. Search engines use more and more complex
                                algorithms to determine which pages to include in their index
                                and the order they show these pages in the search results. SEO
                                is the way to ‘speak’ to search engines in a language they can
                                understand and give them as much information about your website
                                as possible.`,

        auditintro: `Audits can vary in scope depending on the website's needs and maturity.
                                A full audit though will cover all aspets of SEO which over the years has become more and mroe complex and segmented.
                                The main aspects of SEO can simply be categorized in three main fields: offpage, onpage and technical SEO, but there is a lot of overlapping.
                                Also efficient and reliable web analytics set-up and knowing your competitors (Competitor Analysis) are critical if you want to make progress and know your priorities and control efficiently   `
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
