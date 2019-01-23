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
        whatisSEO: `Search engine optimization is the term used to describe the
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
        cookie2: `You can read about them`,
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
        servicesL: `Services`,
        servicesU: `SERVICES`,
        technical: `TECHNICAL SEO`,
        about: `About`,
        contact: `CONTACT`,
        fullname: `Full Name* `,
        subject: `Subject:`,
        message: `Message*`,
        sendMessage: `SEND`,
        whatis: `what is`,
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
        beratung: `seo consultancy`,
        beratungText: `For every SEO Consultation, a personal conversation is needed at the beginning to discuss your needs
              and how to best work together to define realistic KPIs and goals.
              With my experience I can efficiently give you some estimates of new traffic you can get with a plan
              of how to reach it and the resources needed to achieve it. From conception to integration and control, I will keep you informed on what has been done and implemented
                and which goals have been achieved.`,

        audit: `audit`,
        auditText: `The SEO Audit helps to define where your website stands compared to your main competitors, and enables to set realistic objectives
                     based on gained visibility. In the audit, onpage, offpage and technical SEO aspects are covered. Subsequently
                      you will receive a detailed report on the results of the SEO audit.`,
        KWResearch: `keyword research`,
        KWResearchText: `
A very important cornerstone for all future SEO measures is the keyword analysis. Here we generate a list of relevant keywords for your product or service. Another result of keyword analysis is the definition of threshold keywords.`,
        OnPageOptimization: `onpage optimization`,
        OnPageOptimizationText: `The Onpage
  Optimization refers to any SEO action taken on the website that
  can be done directly. That concerns first and foremost
  the optimization of the content and the code of the page. It includes
  as well the elaboration of the content strategy and potential
  technical issues.`,
        OffpagePageOptimization: `offpage optimization`,
        OffpagePageOptimizationText: `Offpage
        Optimization is certainly the most complex process in SEO
     as well as the one of the most important factors. It is about
        link building through brand awareness. To do so it is necessary to identify
        topic related to your topic which bring traffic, your influencers, blogs and other websites
        with whom you share common grounds.`,
        researchMPh1: `Analytics, Research and more`,
        researchHP1: `    If you have a local business, like a shop, or have people
            visiting your office frequently, optimizing your website is also
            about making sure people are able to find you in real life. But
            even if your not actively getting visitors in your building, but
            are targeting an audience that is located in the same
            geographical area as you are, you need to optimize for that
            area. This is what we call “local SEO.”`,
        researchHP2: `    Web analytics is the measurement, collection, analysis and
                reporting of web data for purposes of understanding and
                optimizing web usage. ... Web analytics provides information
                about the number of visitors to a website and the number of page
                views.`,
        seolong: `Search Engine Optimization`,
        researchHP3: `The basics of search engine advertising. Search engine
                advertising (SEA) is a branch of search engine marketing (SEM).
                While search engine optimization (SEO) centers on improving
                accessibility with the use of keywords, SEA places the paid
                advert directly into the search engine results and on partner
                websites.`,
        getintouch_title: `SEO Freelancer in Berlin -  Get in touch | SEO Berlino`,
        blog: `blog`,
        bloglatest: `Latest posts`,
        services: `CONSULTANCY`,
        analyticsHP1: `Local SEO`,
        analyticsHP2: `Analytics and reporting`,
        analyticsHP3: `Competitor analysis`,
        analyticsHP4: `new website best practice`,
        analyticsHP6: `SEA (Google Ads)`,
        onpageHP1: `Keyword research`,
        onpageHP2: `Landing page optimization`,
        onpageHP3: `Internal linking`,
        onpageHP4: `Meta tags and headings`,
        onpageHP5: `Breadcrumb`,
        onpageHP6: `Content & semantics`,
        onpageHP7: `Image Optimization`,
        onpageHP8: `Structured data`,
        onpageHP9: `Duplicate content`,
        onpageHP10: `voice search`,
        offpageHP1: `Backlink analysis`,
        offpageHP2: `Backlink profile`,
        offpageHP3: `Brand building`,
        offpageHP4: `Influencers`,
        offpageHP5: `Links to avoid`,
        technicalHP1: `Indexation`,
        technicalHP2: `Crawlability`,
        technicalHP3: `Internationalisation`,
        technicalHP4: `Pagespeed`,
        technicalHP5: `Mobile-friendly`,
        technicalHP6: `Javascript`,
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
        servicestitle: `SEO Consultation | SEO Expert Consultant | SEO Berlino`,
        servicesh1: `SEO Services`,
        footer1: `All Right Reserved 2018 Alex Bieth`,
        footer2: `about this website`,
        boost1: `Grow traffic and visibility.`,
        boost2: `Optimized Keyword Targeting, Brand Building.`,
        boost3: `SEO Consultancy, Audit.`,
        boost4: `FULL AUDIT`,
        boost5: `TO
        EFFICIENTLY PLAN TASKS BY PRIORITY`,
        boost6: `CREATE SHARABLE CONTENT THAT `,
        boost7: `MATTERS -`,
        boost8: `AND BUILD BRAND AWARENESS`,
        boost9: `OPTIMIZED KEYWORD TARGETING`,
        boost10: `TO BOOST`,
        boost11: `YOUR TRAFFIC`,

        auditintro: `Audits can vary in scope depending on the website's needs and maturity.
      A full audit though will cover all aspects of SEO which over the years has become more and more complex and segmented.
      The main aspects of SEO can simply be categorized in three main fields: offpage, onpage and technical SEO, but there is a lot of overlapping.
      Also efficient and reliable web analytics set-up and knowing your competitors (Competitor Analysis) are critical if you want to make progress, understand and set your priorities and control them efficiently   `,
        auditMPT1: `What is Offpage SEO`,
        auditMPT2: `Why is Offpage so important`,
        auditMPT3: `What is Link Building`,

        auditintro2: `The first step in Audit it to make sure to know the  which are key to your business, which
        ones your are already ranking and those for which you are not, select the ones which are more likely
  to bring the best traffic depending on your site's strength: if your site is quite new, you may not want to target
  keywords which have great Search Volume but which are too competitive.   Content of course is the most important, but you also need to include words your visitors use to search for your services, and welcome them with  quality landing pages. Keep in mind you should  produce content for users not just for SEO. Linking internally in an efficient way is also key for user experience and search engine bots.`,

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
        onpageintroT3: `Importance of on-page SEO `,

        onpageintroT4: `Essential on-page SEO factors `,
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
                effectively to help improve organic rankings.`,
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
        technicalintro4: `Make sure you are not unintentionally
          blocking crawlers from indexing your website.`,
        technicalintro5: `Speed your site up. Search engines prefer sites that load
        quickly: page speed is considered an important ranking signal.`,
        technicalintro6: `Create an XML sitemap. An XML sitemap is a file that helps
        search engines to understand your website whilst crawling it `,
        technicalintro7: ` Consider enabling AMP. AMP is a Google-backed project which
          aims to speed up the delivery of content on mobile devices
          through the use of special code known as AMP HTML. AMP
          versions of your web pages load extremely quickly on mobile
          devices. Google sometimes highlights
          AMP pages in prominent carousels in search results – giving
          them an important search advantage.`,
        technicalintro8: ` Add structured data markup to your website. Structured data
              markup is code which you add to your website to help search
              engines better understand the content on it. This data can
              help search engines index your site more effectively and
              provide more relevant results. `,
        technicalintro9: `Register your site with Google Search Console and Bing
        Webmaster Tools. Google Search Console and Bing Webmaster
        Tools are free tools from Google and Microsoft respectively
        that allow you to submit your website to their search engines
        for indexing. These services  allow you to keep an eye on the
        general performance of your site from a search engine
        prospective.`,
        offpageMP: `   Offpage SEO refers to techniques that can be used to improve the position of a website in the search engine results page (SERPs).  OffPage SEO has to do with promotion methods with the aim to get higher rankings  in the SERPs. Unlike On-page SEO, Off-page SEO refers to activities which are performed outside the boundaries of the website. The most important are: Link Building, Social Media Marketing and Social bookmarking.`,
        offpageMP2: `Off page SEO gives search engines an indication on how other websites and users perceive the particular website. A website that is high quality and useful is more likely to have references (links) from other websites; more mentions on social media and it is more likely to be bookmarked and shared.`,
        offpageMP3: `Link building is the most popular and effective off-Page SEO method. By building external links to your website, your trying to gather votes of confidence from other relevant websites. Old methods which now do not work: blog directories, forum signatures, comment links, link exchange, Reality is quality of links than the number. To get quality links the best is to understand what content you can produce that will add value to potential customers and to influencers and then bring it to them:  `,
        offpageMP4: `Social Media is part of offpage SEO and a form of backlinking which could bring you traffic and recognition. Although most of the links from social media are nofollow they still have value. Social Media mentions are gaining ground as ranking factors and proper configuration of social media profiles can also boost SEO.`,

        offpageMP5: `Social bookmarking is not as popular as it used to be in the past but it is still a good way to get traffic to your website. Depending on your niche you can find web sites like reddit.com, stumbleupon.com, scoop.it and delicious.com (to name a few) to promote your content.`,

        linkstoavoidtitle: `links to avoid`,
        linkstoavoid1: `    Many think the more links, the better but it doesn't actually work
    that way. Too many low quality and/or spammy links and your website
    will lose "Google credibility" and therefore visibility.`,
        linkstoavoid2: `Since a few years already, you as website owner are responsible for
the backlinks pointing to your site, so you need to constantly
monitor, identify bad links and clean up your backlink profile.
First step using the disavow tool then to try pro-actively to remove
them.`,
        linkstoavoid3: `Getting a backlink that appears on every page of a site is rarely a
good idea especially if it not set as nofollow. First the position
of the link on the page is a key factor so if your link is in the
footer its positioning is all but optimal. Second, your numerous
backlinks will in fact count as only one and its value will be
minimal if negative.        Other type of links to avoid: links from unrelated websites, from sites of different
        languages and/or countries and from websites flagged as spammy`,
        linkstoavoid4: `Once you have identified those toxic links, the best is first to use
the Google disavow tool to inform Google you are aware of them and want to bring them to
Google's attention. Please note that you need to be connected to the
website's search console account in order to log into the tool.
Google then advises you to actively get in touch with the respective
webmasters and ask them to remove them.`,
        brandbuildingMP1: `Your links represent your reputation and relevancy in your domain.
Linkbuilding now goes hand in hand with brand building. As you
increased the "digital signs of recognition" aka links, you are also
building visibility of your brand. The best links are those which
are where your potential customers are browsing the web or looking
for companies such as yours. If these backlinks bring you quality
traffic that means it is indeed in the right place and brings value
to your online reputation (aka domain / page authority)`,
        brandbuildingMP2: `After doing an audit of your link profile and of your main SEO
competitors, a plan is needed to proactively develop your link
building profile. This is on one hand a never ending job and on the
other the new quality links need to be coming in at regular
intervals.`,
        brandbuildingMP3: `An important part in brand building is searching and finding the
influencers sources and websites where your potential users visit
when investigation or potentially deciding on which company to use.`,
        brandbuildingMP4: `Looking at what the content your relevant influencers share, you can
get some inspiration on the content you need to start producing.
Also you need to identify parallel search terms and topics with
significant search volume, which are not yet on your Keyword list.`,

        BLanalysisT1: `Fact: Backlinks are still very important in 2019`,
        BLanalysisT2: `Quality over quantity`,
        BLanalysisT3: `Refering Domains: page authority over domain authority`,
        BLanalysisT4: `Competitors`,
        BLanalysisT5: `Anchor text, nofollow/follow links`,
        BLanalysisT6: `gov & edu links`,

        BLanalysis1: `During a Backlink Profile Audit, a report needs to be done with the profile's pros and cons. In addition, it should include an audit
of competitors to understand where you stand. Then a brainstorm can be done on link
targets and content production. Finally work can be prioritised depending on
potential and complexity,  setting targets: quantity and quality links
for the next quarters focusing on `,
        BLanalysis2: ` Like it has been the case since over 20 years, backlinks are key to SEO
 success and still define the reputation and popularity of your
 brand on the web. However, backlinks do not work like 20 years
 ago, and far from it. It is now much more about quality of the
 links and relevancy. It is crucial to understand where you stand,
 plan, execute and control your backlink activities.
`,
        BLanalysis3: `Getting many backlinks from any website, paying links off from
unrelated websites, or websites operating from a different country
or with a different language are some example of wasted efforts.
Most importantly, if the website which is linking to you has a
poor reputation itself its value will be only minimum; worse if it
is considered a spammy website, the link might even lower your
website's reputation.`,
        BLanalysis4: `  Getting a link from a reputable and relevant (to your industry)
  website is a great achievement. However keep in mind the actual
  page the link is appearing on is the real deal. If the page itself
  has little exposure, little number of internal links and/or
  traffic, its impact will not be as positive as if it was on the
  homepage for example. On the contrary, if it appears in every page
  of the site, this might seen as spammy backlinking so avoid that
  extreme as well.`,
        BLanalysis5: `  It is very important and useful to look at your successful
  competitors to analyse: how they get their (high quality) links,
  the domain authority and quality of their backlink profile, ratio
  follow/nofollow, anchor text, ratio quality links, number &
  quality of referring domains`,
        BLanalysis6: ` Needs to be as natural as possible, avoiding "click here" or other misleading
 text. Very often the brand name is the most used anchor text. Make
 sure the ratio of nofollow links is not too high. nofollow means
 that the website linking does not want to "commit" the link as
 sign a trust and therefore pass link juice (authority). It is
 totally acceptable to have a certain percentage of nofollow links
 but if this ration gets to high, this is sign that your website is
 not trusted.{" "}`,
        BLanalysis7: `".gov" and ".edu" sites have by essence a lot more trust and power
  as ".com" for instance. If you have the opportunity to get a link
  from such sites and it makes sense to your business - bringing in
  at the same time quality & relevant traffic - this link will very
  likely be beneficial.`,
        analyticsMPT1: `Reliable data to make confident decisions
`,
        analyticsMP1: `In order to efficiently work in SEO, especially for on-page work, it
  is crucial to use *reliable data*, and analytics is key here in
  compiling reports which will enable for instance to identify the
  number of visits/unique visitors and conversions for specific pages
  and site sections, or compare data by device type or browser.`,

        analyticsMP2: `Google offers a free version for an analytics tool: Google
  Analytics. Its set-up is quite straight-forward but you will still
  needs`,
        analyticsMPT3: `Google Analytics First steps`,
        analyticsMP3: `Activation in code (head) for each page you want to track.
  Create Accounts / Views for each account: All Data, Test, Master
  Create Filters: exclude all bots traffic and internal traffic
  Create Reports and Dashboards
  Correctly setup UTM for your marketing campaigns
  Optimize continuously, analysing reports and acting accordingly
  (new reports, new filters, etc)

`,
        analyticsMPT4: `Google Search Console Integration`,
        analyticsMP4: `To get more valuable insight especially in terms of keywords, it is
  better to integrate Google Search Console to Google Analytics. GA
  itself does not show any keywords; they appear as "not provided".`,
        analyticsMPT5: `Relevant Tools and Resources`,
        bestpractMPh1: `SEO Competitor Analysis`,
        bestpractMPT1: `Know who your SEO Competitors are`,
        bestpractMP1: `It is important to keep in mind in terms of SEO Competitor Analysis,
        that you need to identify your *SEO* competitors, those which are
        leading in terms of organic traffic acquisition, domain authority
        and other important SEO factors. These are the websites which rank
        the best and the most consistently for the main keywords you have
        identified, and/or those websites which rank best for long tail
        keywords.`,
        bestpractMPT2: `why do a competitor analysis`,
        bestpractMP2: `To improve the way you do business online, it is very difficult to
            be successful if you ignore the competition. The same applies with
            SEO. Knowing how your competitors operate, what they offer helps to
            find out: keywords you are possibly missing one, backlink
            oppportunities, and benchmarks. Copying however is not really a long
            time efficient strategy; the best is to get inspired to offer better
            value to your customers.`,
        bestpractMPT3: `What is their content and how do they organise their website
`,
        bestpractMP3: `How are is the website organised and structured, including main
        navigation items and the internal linking strategy. What is included
        in their Sitemap(s).`,
        bestpractMPT4: `How do they get backlinks`,
        bestpractMP4: `Analyse their backlink profile`,
        bestpractMPT5: `How can you do better?`,
        bestpractMP5: `    Competitor analysis is great to be aware of what your competitors
            are doing, how their site is structured, how their get their
            backlinks, and check if you are missing out on low hanging fruit.
            But by no means should you copy and paste how they do business. Get
            rather inspired, and plan to do better.`,
        bestpractMPT6: `To do`,
        bestpractMP6: `A Competitor analysis comprises of backlink
        audit, on-page audit and keyword research. Analysing how competitors
        get most of their traffic also helps to establish content creation
        strategy.`,
        seaMPT1: `What is SEA? And what SEO and SEA have in common ?`,
        seaMP1: `Paid Search uses the same base as SEO in keywords, and of course
        share the same space in SERPs (Search Engine Result Pages). With
        poor SEO visibility, SEA helps you to get those first visits to get
        going and/or get visibility and brand awareness using the Display
        Network.`,
        seaMPT2: `Adwords Set-up`,
        seaMP2: `            Google Ads is not extremely competitive which means CPC (cost per
                    click) are very high for pretty much any industry. Doing a thorough
                    Keyword Research is key before starting a campaign. It is also
                    important to think budget and choose your strategy: visibility, ROI,
                    etc. Adwords Set-up`,
        seaMPT3: `Adwords Account Optimization`,
        seaMP3: `Once you have chosen your budget strategy, created your campaigns,
        adgroups and ads, optimization begins:

         Keywords bid ajustments
          landing pages testing, CVR here is good indicator
         ads testing
         work on that Quality Score to optimize your bids

            ad & remove keywords, vary match accordingly (main matches are
            exact, phrase, broad)

        negative list adding
          display network adjustments`,
        seaMPT4: `SEO / SEA Consistency `,
        seaMP4: `        A great way to transmit a stronger message on SERPs is to be
                consistent in your language and word choice in SEO and SEA.

                    consitent form of address for non-english languages such as
                    German, French, Italian, etc

                    same wording and style in Ads and meta descriptions so that the
                    user has more chances to recognise your brand.`,
        seaMPT5: `Google Ads Data for SEO `,
        seaMP5: `    Google Ads are expensive but on top of getting you that visibility
            and orders, it is a precious goldmine for keywords, especially if
            the account is well managed (with impressions, meaning high enough
            bids)`,
        localMPT1: ``,
        relevanttools: `Relevant Tools and Resources`,
        localMP1: `Especially for local business, it is paramount to align your SEO
        overall strategy to local SEO. It is important to keep in mind that
        the most important factor in personalised search results is
        location.`,
        localMPT2: ``,
        localMP2: `In the audit which is affected by both on-page an off-page, local
        SEO factors such as city/ region mention will be taken in account.`,
        localMPT3: ``,
        localMP3: `If you have a local business, like a shop, or have people visiting
        your office frequently, optimizing your website is also about making
        sure people are able to find you in real life. But even if your not
        actively getting visitors in your building, but are targeting an
        audience that is located in the same geographical area as you are,
        you need to optimize for that area. Ground-rule these days is that
        it’s by far the easiest to optimize if you have a proper address in
        a region/city. The thing is that if you want to optimize for, for
        instance, a service area that you are not located in physically,
        your main tool for optimization is content. You should simply write
        a lot about that area. We found that often, this leads to forced
        pages that have little to do with the business at hand.`,
        localMPT4: ``,
        localMP4: `    Local SEO isn’t just about search engines. Yes, there is a lot you
            can do online to optimize your website for a local audience. But if
            you are running a local business, things like word-of-mouth and a
            print brochure also contribute to local SEO. If you mention your
            website and social profiles on your offline communication/promotion
            as well, your Facebook likes might go up, your Twitter followers
            could increase, and the direct traffic on your website will get
            higher. One way or another, this will be visible to Google as well,
            beit indirect perhaps.`,
        localMPT5: ``,
        localMP5: ``,
        crawlabilityMPintro: `Crawlibility goes hand in hand with indexation. In order to adjust
        and optimize indexation, you can improve and guide Google on how it
        crawls your site.`,
        crawlabilityMPT1: ``,
        crawlabilityMP1: `xml format sitemap guide Google on how to crawl your site. Although
                    Google says there is no guaranty the Google bot will follow your
                    instructions, it is still highly recommended and in most cases,
                    sitemaps are beneficial. It contains useful information about each
                    page on your site, including when a page was last modified; what
                    priority it has on your site; how frequently it is updated. In
                    BigCommerce, your XML site is created automatically; if you are
                    using another platform you may need to use a sitemap generator to
                    build one.`,
        crawlabilityMPT2: ``,
        crawlabilityMP2: `Robots set instructions depending on the user agent which parts of
        the site can be accessed. Making sure you are not excluding the
        relevant search engine bots is therefore of course paramount.`,
        crawlabilityMP3: `You can also guide the Google bot in the code with tags for each
        page the most common ones being: "follow/noFollow" and
        "index/noindex"`,
        crawlabilityMPT3: ``,
        crawlabilityMPT4: ``,
        crawlabilityMP4: `You can directly submit urls to the Google index in the Google
        Search Console. This is particularly useful if you have crawling
        issues and there are some pages you want to have crawl and indexed
        in priority.`,
        crawlabilityMPT5: ``,
        crawlabilityMP5: `        An important factor which links crawalability and indexation is that
                for sites with many pages (indexed or not), there is a limit to how
                much your site will be crawled each time the Google bot visits your
                site. It is therefore important to keep an eye and understand which
                pages are indexed and why they need to be indexed (not all pages
                need to be indexed in particular in case of duplicate content)`,
        crawlabilityMPT6: ``,
        crawlabilityMP6: ``,

        dynamicrenderingMPT1: ``,
        dynamicrenderingMP1: `    For JavaScript apps such as React, Angular or View, search engines
            such as Google still struggle to properly crawl and index all pages.
            Although they say they can achieve this over time after many visits,
            they do recommend for most sites to use dynamic rendering. Get
            started with dynamic rendering. Currently, it's difficult to process
            JavaScript and not all search engine crawlers are able to process it
            successfully or immediately.`,
        dynamicrenderingMPT2: ``,
        dynamicrenderingMP2: `Dynamic rendering means switching between client-side rendered and
            pre-rendered content for specific user agents. Dynamic rendering is
            good for indexable, public JavaScript-generated content that changes
            rapidly, or content that uses JavaScript features that aren't
            supported by the crawlers you care about. Not all sites need to use
            dynamic rendering, and it's worth noting that dynamic rendering is a
            workaround for crawlers. Dynamic rendering requires your web server
            to detect crawlers for example by checking the user agent.`,
        dynamicrenderingMPT3: ``,
        dynamicrenderingMP3: `Requests from crawlers are routed to a renderer, requests from users
            are served normally. Where needed, the dynamic renderer serves a
            version of the content that's suitable to the crawler, for example,
            it may serve a static HTML version.`,
        dynamicrenderingMPT4: ``,
        dynamicrenderingMP4: `To setup dynamic rendering for your content, install and configure a
                    dynamic renderer to transform your content into static HTML that's
                    easier for crawlers to consume. Some common dynamic renderers are
                    Puppeteer, Rendertron, and prerender.io. Choose the user agents that
                    you think should receive your static HTML and refer to your specific
                    configuration details on how to update or add user agents.`,
        dynamicrenderingMPT5: ``,
        dynamicrenderingMP5: ``,
        dynamicrenderingMPT6: ``,
        dynamicrenderingMP6: ``,

        indexationMPT1: `Only have indexed pages which deserve to be indexed`,
        indexationMP1: ` Efficient Indexation is key in order to get on well with Google's
         spiders. Many believe the more pages indexed the better; that is
         only true to a certain level. If you have many non-valuable,
         not-visited or duplicate pages indexed for example, the bot will
         likely limit your "crawling credit" and discard those pages which
         you value most.`,
        indexationyMPT2: `Investigate your indexation `,
        indexationMP2: `Make sure all the important pages are indexed and that those you
                do not want indexed are not. You can check the number of indexed
                pages in the Search Console, and also use Google commands with
                'site:yoursite.com' to check which pages are indexed.
        `,
        indexationMP22: `Check on duplicate or irrelevant indexed pages and work on a
                        plan to have those pages de-indexed. The best way is to return a
                        410 status codes for those unwanted pages till they are
                        de-indexed.`,
        indexationMPT3: `Redirects`,
        indexationMP3: `
                Check on your redirects, make sure you are using the correct
                status codes. Make sure you are limiting the number of redirects, if a big
                majority of the pages Google is crawling are redirects, or worse
                chains of redirects, your site will be negatively impacted by
                this.
             `,

        indexationMPT4: ``,
        indexationMP4: `While you are auditing you indexation, check for metas. Are there any description /titles missing? Are they unique and
                all make sense targeting specific keywords which make sense to
                your overall strategy? It is not recommended to change url structure, but make sure you
                have a readable url structure, with as little special characters
                and numbers as possible. Preferably your ulrs should be
                descriptive and as unique as possible. ,
              `,
        indexationMPT5: ``,
        indexationMP5: ``,
        indexationMPT6: ``,
        indexationMP6: ``,

        internationalMPT1: ``,
        internationalMP1: `There are various options when operating internationally: same root
        domain, different top level domains, subdomains, how to link between
        them, how to simplify the process without negatively affecting your
        SEO.`,
        internationalMPT2: `Same domain or multiple localised domains`,
        internationalMP2: `  If you are using the same root domain for internationalisation,
          you will be concentrating your backlink efforts to one main
          domain. However the complexity is to be dealt with. For instance
          href lang metas need to be implemented, avoid any duplicate
          content, use canonicals when necessary.`,
        internationalMP3: `  If you are using different root domains for internationalisation,
          there are pros and cons compared to same root, effectively easing
          complexity and building a local identity with the possibility to
          optimize server location. However, you will need to make sure to
          link them from your "master" domain, and manage different backlink
          startegies for each domain.`,

        internationalMP4: ` An Audit and careful planning will help you set-up an effective
         SEO strategy depending on your requirements and resources. Make
         sure the language meta tags and settings the Search console are
         set-up, evaluate any possible SEO damage if using client-side
         rendering with a mixed url structure.`,
        internationalMPT5: ``,
        internationalMP5: ``,
        internationalMPT6: ``,
        internationalMP6: ``,
        mobileMPh1: `Mobile First - Mobile friendly websites`,
        mobileMPT1: ``,
        mobileMP1: `  If your website it not mobile friendly, in most cases, you are in
          trouble. Google now uses the mobile version for indexation so
          called mobile first. If you are not sure, you can use Google's
          tool below.`,
        mobileMPT2: ``,
        mobileMP2: `A ‘responsive’ website design adjusts itself automatically
        so that it can be navigated and read easily on any device. Google
        is clear about the fact that having a responsive site is
        considered a very significant ranking signal by its algorithms.
        And, with the introduction of Google’s ‘mobile first’ approach to
        indexing content, a responsive website is now more important than
        ever. So it makes sense to ensure that your website is fully
        responsive and will display in the best format possible for
        mobile, tablet or desktop users.`,
        mobileMPT3: ``,
        mobileMP3: `With mobile-first indexing, Googlebot primarily crawls and indexes
        pages with the smartphone agent. However Google will continue to
        show the device URL that is the most appropriate to users in
        Search results.`,
        mobileMP4: ` This means that you for instance text showing on the desktop
         version but not on the mobile one may very likely be ignored for
         indexation and page relavancy. If there is too much text for the
         mobile version use 'show more'.`,
        mobileMPT5: ``,
        mobileMP5: ` In terms of performance, you need to make sure that your mobile
         version loads fast and in the right format. You can use Google's
         PageSpeed Developer Tool`,
        mobileMPT6: ``,
        mobileMP6: ``,

        speedMPT1: ``,
        speedMP1: `There are several ways you can speed up your site: Use fast hosting.
        Use a fast DNS (‘domain name system’) provider Minimise ‘HTTP
        requests’ - keep the use of scripts and plugins to a minimum Use one
        CSS stylesheet (the code which is used to tell a website browser how
        to display your website) instead of multiple CSS stylesheets or
        inline CSS Ensure your image files are as small as possible (without
        being too pixelated) Compress your web pages (this can be done using
        a tool called GZIP) Minify your site’s code - rid of any unnecessary
        spaces, line breaks or indentation in your HTML, CSS and Javascript
        (see Google’s Minify Resources page for help with this). If your
        pages are slow to load, Google will figure it out and will
        categorize your website as poor user experience, therefore suffering
        in terms of organic visibility. If you haven't done it yet, I
        strongly advise you to use the PageSpeed Insights tool (link below){" "}`,
        speedMPT2: ``,
        speedMP2: `            Please note that Lighthouse belongs to Google and their advice
                    is (a bit too) specific to Google Chrome, so for instance it
                    will advise you to use new image formats which may not be usable
                    and rendered on other browser such as Firefox or Safari.`,
        speedMPT3: ``,
        speedMP3: ``,
        speedMPT4: ``,
        speedMP4: ``,
        speedMPT5: ``,
        speedMP5: ``,
        speedMPT6: ``,
        speedMP6: ``,

        securityMPT1: ``,
        securityMP1: ` Hyper Text Transfer Protocol Secure (HTTPS) is the secure version
         of HTTP, the protocol over which data is sent between browser and
         the connected website. The 'S' of HTTPS stands for 'Secure'. It
         means all communications between browser and website are
         encrypted.`,
        securityMPT2: ``,
        securityMP2: ` HTTPS is often used to protect highly confidential online
         transactions like online banking and online shopping order forms.
         But has now become to norm.`,
        securityMPT3: ``,
        securityMP3: `          Https for "early-adopters" may have given them an advantage on
                  their competitors, these times are over. If you haven't made the
                  transition yet, it needs to be very high on your priority list.
                  Since summer 2018, Chrome now shows a "not secure" warning so
                  beware of a sharp increase in bounce rate should you now have
                  implemented it yet, on top of lower rankings.`,
        securityMPT4: ``,
        securityMP4: `Plan your site migration carefully, incluing identify pages to
        redirect (which should be the most valuable ones), and those you
        should not. Timing is key to avoid risks, so avoid doing it before
        your high season.`,
        securityMPT5: ``,
        securityMP5: ``,
        securityMPT6: ``,
        securityMP6: ``,

        contentMPT1: `What does "content is king" really mean `,
        contentMP1: `    The content is the value you want to create. If you content has no
            value to the user, or if it is duplicate content, your content will
            not be brought forward. Check content quality, good usage of
            semantics, still using the most important keywords and variations in
            the right places, while keeping focus on relevancy for the user and
            not focus on SEO only.`,
        contentMPT2: `Content optimization is not keyword stuffing`,
        contentMP2: `Content is King, but far away are the times when Google got tricked
        with keyword stuffing. As Google bots constantly improve to assess
        your website's content, your site will be penealised in rankings if
        your content doesn't make much sense linguisitcally or for the user.`,
        contentMPT3: `The effects of mobile first on content`,
        contentMP3: `Since mobile first indexation, the content on your mobile version is
        the master one for both mobile and desktop indexation. This means
        the content on the mobile version is the one which counts. Space on
        mobile is more limited than on desktop so choose your content
        carefully: engage your users, don't bore them with too much content,
        but enough to guide google bots.`,
        contentMPT4: ``,
        contentMP4: ``,
        contentMPT5: ``,
        contentMP5: ``,
        contentMPT6: ``,
        contentMP6: ``,

        duplicateMPT1: `    Duplicate Content, the biggest threat to making content king `,
        duplicateMP1: `Search Engines do not like duplicate content indexed. If you have
        many similar pages and you are not flagging them, these pages will
        not rank well.`,
        duplicateMPT2: `Indexation audit`,
        duplicateMP2: `Identify duplicate content, assess status and design for the master
        page, deindex unnecessary pages using canonicals, 410s or redirects
        accordingly.`,
        duplicateMPT3: ``,
        duplicateMP3: `Duplicate content can either be confusing for users (and indeed
        search engine algorithms); it can also be used to try to manipulate
        search rankings or win more traffic. As a result, search engines
        aren’t keen on it, and Google and Bing advise webmasters to fix any
        duplicate content issues they find. You can fix duplicate content
        issues by: Preventing your CMS publishing multiple versions of a
        page or post (for example, by disabling Session IDs where they are
        not vital to the functionality of your website and getting rid of
        printer-friendly versions of your content). Using the canonical link
        element to let search engines know where the ‘main’ version of your
        content resides.`,
        duplicateMPT4: `Using Canonicals`,
        duplicateMP4: `Canonicals are best used when you have very similar pages fro
                imstance same t-shirt in different colours. You don't want to index
                the same t-shirt for each colour, although you want to keep the urls
                for the user to browse through the options. Beware though that
                sometimes canonicals are sometimes ignored by Google so it is
                important to monitor the results of canonicals implementation and
                follow up with a new strategy if necessary.`,
        duplicateMPT5: `Same language country, different territory target`,
        duplicateMP5: `A possible cause for duplicate content is when targeting
        different territoris (UK and US for instance) with different domains
        or urls but with a very similar content. Make sure then that you
        have well implemented href lang!`,
        duplicateMPT6: ``,
        duplicateMP6: ``,

        imagesMPT1: ``,
        imagesMP1: `            Image Search still represents for most industry an important SEO
                    subchannel. Given how Image search now works, many Image "visits"
                    are only virtual and therefore invisible in analytics reports. Image
                    Search is still a fantastic opportunity to improve brand awareness.`,
        imagesMPT2: ``,
        imagesMP2: `    Make sure images are well optimized from image hosting to image alt
            tags. In case, your website actively uses images, help you with a
            strategy to improve brand awareness.{" "}`,
        imagesMPT3: ``,
        imagesMP3: `The alt attribute often called "alt tag" gives important information
        to the Google bot regarding what the piture is about. If the image
        path is incorrect, the alt (alternative) attribute will show
        instead.`,
        imagesMPT4: ``,
        imagesMP4: `The title appears as tooltip when there is a mouse-over above the
        image. Use it to give more information about the picture. Although
        not as important for SEO as the alt attribute, it should not be
        neglected. Avoid copy and pasting the same text you have as alt
        attribute.`,
        imagesMPT5: `image size and format`,
        imagesMP5: `If your image is too big, this will affect pagespeed,
        especially for mobile traffic.`,
        imagesMPT6: ``,
        imagesMP6: ``,

        internalMPT1: ``,
        internalMP1: `Internal Linking is core for on-page SEO, especially for big
        websites. Link juice redistribution, prioritization of key pages or
        site sections to name a few reasons. Google crawls websites by
        following links, internal and external, using a bot called Google
        bot. This bot arrives at the homepage of a website, starts to render
        the page and follows the first link. By following links Google can
        work out the relationship between the various pages, posts and other
        content. This way Google finds out which pages on your site cover
        similar subject matter.`,
        internalMPT2: `Internal Linking AUdit`,
        internalMP2: `Review and audit your current internal linking settings, including
                navigation, sub-navigations, breadcrumb and tags, taking into
                account business prioritization. Report action plan with main
                priority points and explanations for each points.`,
        internalMPT3: ``,
        internalMP3: `In addition to understanding the relationship between content,
                Google divides link value between all links on a web page. Often,
                the homepage of a website has the greatest link value because it has
                the most backlinks. That link value will be shared between all the
                links found on that homepage. The link value passed to the following
                page will be divided between the links on that page, and so on.
                Therefore, your newest blog posts will get more link value if you
                link to them from the homepage, instead of only on the category
                page. And Google will find new posts quicker if they’re linked to
                from the homepage. When you get the concept that links pass their
                link value on, you’ll understand that more links to a post mean more
                value. Because Google deems a page that gets lots of valuable links
                as more important, you’ll increase the chance of that page ranking.`,
        internalMPT4: ``,
        internalMP4: `It’s crucial for your SEO to evaluate and improve internal linking
                    strategy on a regular basis. By adding the right internal links you
                    make sure Google understands the relevance of pages, the
                    relationship between pages and the value of pages. The ideal
                    structure We always advise website owners to imagine their website
                    to be a pyramid with the most important content on top. We call
                    those articles cornerstone content. There should be lots of links to
                    that most essential content from topically-related pages in the
                    pyramid, which passes most link value on to those pages. However,
                    you should also link from those top pages to subpages about related
                    topics. Linking internally to related content shows Google what
                    pages hold information about similar topics.`,
        internalMPT5: ``,
        internalMP5: `Don’t forget to link from the top too Besides linking from
                    topically-related posts and pages, it’s possible to make your
                    cornerstone content more authoritative by adding links to it from
                    the homepage or the top navigation. This will give the most
                    important posts or pages a lot of link value and makes them stronger
                    in Google’s eyes. Linking to taxonomies If you run a blog it could
                    be beneficial to add internal links to the taxonomies the post
                    belongs to. Adding links to the category and tags helps Google to
                    understand the structure of your blog and helps visitors to more
                    easily navigate to related posts. At Yoast we always link to the
                    matching categories and tags in the sidebar of each post:`,
        internalMPT6: ``,
        internalMP6: ``,

        keywordMPT1: ``,
        keywordMP1: `Keyword Research is critical to understand how your potential
        clients are searching for the products or services you are offering.`,
        keywordMPT2: ``,
        keywordMP2: `          The keywords you are using for your site are possibly not the ones
                  your potential clients are using to look for your services.`,
        keywordMPT3: ``,
        keywordMP3: `Good keyword research starts with gathering data: keywords currently bringing traffic, keywords with impressions but no clicks, ppc data if any, keywords used by competitors, Keyword tools
`,
        keywordMPT4: `Which keywords have the most value for you?
`,
        keywordMP4: ` Search Volume is not the most important factor, but if there is no
         seach volume for the terms you want to optimize your site for, you
         are already making your life difficult.`,
        keywordMPT5: ``,
        keywordMP5: ` Equally, targeting high competitive keywords with very high Search
         Volumes, or Keywords not related to products or services which you
         offer will cause problems.`,
        keywordMPT6: ``,
        keywordMP6: `  Set up a list of keywords: main keywords, broad terms, related
          terms, long tail, each type of keywords having different
          objectives the huge majority of searches now represent a maximum
          of 50 searches per month.`,
        keywordMP7: `is creating a lof of disruption in terms of keywords research
          since people use different phrases depending on whether they type
          of speak. In general voice search keywords are longer and they are
          in the form of a question.`,

        landingMPT1: ``,
        landingMP1: `Often, companies create Landing pages and then expect it to perform
            as it is. There are actually many factors that will make a landing
            page work, from design & UX to SEO. Users need to easily understand
            your website. They should be able to find what they want in a
            heartbeat. They should know where to click and how to navigate
            through your site. And it should be fast! A beautifully designed
            website is nice, but you should definitely make it your top priority
            to create a user-friendly website first!s`,
        landingMPT2: `User Journey`,
        landingMP2: `Check how the page fits within the website, does it make sense in
        the user journey?`,
        landingMPT3: `Linking`,
        landingMP3: ` how is the page linked internally and externally`,
        landingMPT4: `Keyword targeting`,
        landingMP4: `keyword targeting: content and semantics`,
        landingMPT5: `technical`,
        landingMP5: `including pagespeed image optimization`,
        landingMPT6: ``,
        landingMP6: ``,

        metasMPT1: ``,
        metasMP1: `Page titles are often neglected, but are really important and very
        simple to implement. That means you need to have them spot on. Each
        page should have unique titles, clearly stating the page main focus,
        using terms that users are searching, so according to your keywords
        list.`,
        metasMPT2: ``,
        metasMP2: `Meta descriptions are not required t have your page rank well. Even
            if your meta description is empty or missing, Google will take some
            text from the page and fill in the gap. If you have one but Google
            is not using it, that means Google did not find it relevant enough
            for the searched term. Either way, meta descriptions are important
            for CTR, searched terms if included in your description will appear
            in bold and you can also confirm to the user your entry is the most
            relevant for the search and add that difference that will make the
            click happen.`,
        metasMPT3: ``,
        metasMP3: `you should have one h1 per page with h1 being your main keyword for
            the page.`,
        metasMPT4: `what to check`,
        metasMP4: `Crawling through the website to analyse and identify:

         missing or empty metas,
         duplicate or unclear metas,
         too long or too short metas.`,
        metasMPT5: ``,
        metasMP5: ``,
        metasMPT6: ``,
        metasMP6: ``,

        structuredMPT1: ``,
        structuredMP1: `Google, Bing, Yandex and Yahoo agreed on a standardised format:
        schema.org for providing information about a page and to classify
        its content. using Structured Data will enable you to improve the
        way your pages are displayed. Structured Data Additionally,
        structured data enhances search results through the addition of
        ‘rich snippets’ - for example, you can use structured data to add
        star ratings to reviews; prices to products; or reviewer
        information(example below). Because they are more visually appealing
        and highlight immediately useful information to searchers, these
        enhanced results can improve your click-through rate (CTR), and
        generate additional traffic to your site. Because sites with results
        featuring higher CTRs are generally considered to receive
        preferential treatment in search engines, it is worth making the
        effort to add structured data to your site.`,
        structuredMPT2: `Examples of Structured Data`,
        structuredMP2: `    You can use Structured Data to provide additional information about
            creative work, events, organisation, a person, a place or a product.
            Here is a list of the most common used of Structured Data: *
            Organization information * Local business Markup * Product and Offer
            * Breadcrumb * Ratings * Site navigation`,
        structuredMPT3: ``,
        structuredMP3: ``,
        structuredMPT4: ``,
        structuredMP4: ``,
        structuredMPT5: ``,
        structuredMP5: ``,
        structuredMPT6: ``,
        structuredMP6: ``,

        voiceMPT1: `What is Voice Search and why it's Important to be ready for
        it`,
        voiceMP1: `        Google Assistant, Alexa are just of those devices which are
                transforming search. Instead of typing searches, users now more and
                more ask for their need vocally. Voice search is already disrupting
                online marketing. It already represents an important share of the
                number of searches. In order to be ready for it, every website needs
                to understand how it changes classical SEO.`,
        voiceMPT2: `Questions`,
        voiceMP2: `The main difference with traditional search is that many voice
        search requests are questions, so they begin with where, how, what,
        etc.`,
        voiceMPT3: `Longer Search terms`,
        voiceMP3: `            The second main difference is that the "keywords" are longer, mostly
                    because the requests are questions and because users are more
                    descriptive when voally expressing their needs, compared to typing.`,
        voiceMPT4: `Increasing Search Volume`,
        voiceMP4: `Search volumes for such searches are still lower than the classical
        searches equivalent, but the volumes are continuously increasing and
        the keywords are more segmented, meaning there are more questions
        for the equivalent classical search term`,
        voiceMPT5: ``,
        voiceMP5: `One of the main advantage to be ready and optimized for search term
        is that you can be featured at "position 0" with the featured
        snippet, answering directly to the question of the search.`,
        voiceMPT6: ``,
        voiceMP6: ``
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
        intro1: `Erfahrener SEO Consultant in Berlin.`,
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
        seolong: `Suchmaschinenoptimierung`,
        brandbuilding1: `Brand-building: beste Empfehlung für
        Inhaltserstellung`,
        brandbuilding2: `Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic
         und backlinks`,
        brandbuilding3: `Basierend auf den Interessen von Anwendern und Influencern, um die Qualität der Verbindung zu verbessern
        Kreationsqualität und Markenbewusstsein.`,
        blog: `blog (auf englisch)`,
        analyticsHP1: `Lokale SEO`,
        whatis: `was ist`,
        analyticsHP2: `Analytics,`,
        analyticsHP3: `Konkurrenzanalyse`,
        analyticsHP4: `Neue Webseite, SEO bewährte Praktiken`,
        analyticsHP5: `hierfür passend Untersuchung`,
        analyticsHP6: `SEA (Google Ads)`,

        onpageHP1: `Keyword Recherche`,
        onpageHP2: `landing page Optimierung`,
        onpageHP3: `Website-Architektur,`,
        onpageHP4: `Metas Tags`,
        onpageHP5: `verbunden tags`,
        onpageHP6: `Inhalt und Semantik`,
        onpageHP7: `Bildoptimierung,`,
        onpageHP8: `Structured Data,`,
        onpageHP9: `Duplizierter Inhalt`,
        onpageHP10: `Sprachsuche`,
        offpageHP1: `Backlink Analyse,`,
        offpageHP2: `Backlink Konkurrenzanalyse,`,
        offpageHP3: `Markenbildung`,
        offpageHP4: `Influencers`,
        offpageHP5: `Links`,
        technicalHP1: `Indexierung`,
        technicalHP2: `Crawlfähigkeit`,
        technicalHP3: `Internationalisierung,`,
        technicalHP4: `Seitengeschwindigkeit,`,
        technicalHP5: `Mobile-friendliness,`,
        technicalHP6: `Javascript`,
        technicalHP7: `Sicherheit und Website-Migration`,
        audit: `Audit`,
        auditText: ` Das SEO Audit hilft zu definieren, wo Ihre Website im Vergleich zu Ihren Hauptkonkurrenten steht, und ermöglicht es Ihnen, realistische Ziele zu setzen basierend auf visibility gewonnen. In der Prüfung werden Onpage-, Offpage- und technische SEO-Aspekte behandelt. Anschließend Sie erhalten einen detaillierten Bericht über die Ergebnisse des SEO-Audits.`,
        KWResearch: `Keyword Recherche`,
        KWResearchText: `Ein ganz wichtiger Grundstein für alle zukünftigen SEO Maßnahmen
        ist die Keyword Recherche. Hier generiere ich eine Liste der für Ihr Produkt oder Ihre
        Dienstleistungen relevanten Keywords. Ein weiteres Ergebnis der Keyword Recherche ist die Definition von Schwellenkeywords.`,
        OnPageOptimization: `Onpage Optimierung`,
        OnPageOptimizationText: `Die Onpage Optimierung bezieht sich auf jede SEO-Aktion, die auf der Website ausgeführt wird
   kann direkt gemacht werden. Das betrifft in erster Linie die Optimierung des Inhalts und des Codes der Seite. Es enthält
   auch die Ausarbeitung der inhaltlichen Strategie und des Potenzials Technische Probleme.`,
        OffpagePageOptimization: `Offpage Optimierung`,
        OffpagePageOptimizationText: `Offpage Optimierung ist sicherlich der komplexeste Prozess in SEO sowie einer der wichtigsten Faktoren. Es geht um Linkbuilding durch Markenbekanntheit. Dazu muss man sich identifizieren themenbezogenes thema, das den verkehr bringt, ihre Influencer, blogs und andere websites mit wem Sie Gemeinsamkeiten haben. `,
        servicesL: `Leistungen`,
        servicesU: `LEISTUNGEN`,
        beratung: `SEO Beratung`,
        beratungText: `Für jede SEO-Beratung ist zu Beginn ein persönliches Gespräch erforderlich, um Ihre Bedürfnisse zu besprechen und wie man am besten zusammenarbeitet, um realistische KPIs und Ziele zu definieren. Mit meiner Erfahrung kann ich Ihnen einige Schätzungen des neuen Verkehrs geben, die Sie mit einem Plan erhalten können wie man es erreicht und welche Ressourcen dafür benötigt werden. Von der Konzeption bis zur Integration und Kontrolle werde ich Sie auf dem Laufenden halten, was getan und umgesetzt wurde und welche Ziele wurden erreicht.`,
        technical: `TECHNISCHES SEO`,
        optimization: `optimierung`,
        about: `Über mich`,
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
        HPTitle: `SEO Consultant in Berlin | SEO Berlino`,
        descriptionHP: `SEO Beratung in Berlin: Audit, Onpage, Offpage, Technisches SEO, Konkurrenzanalyse, Webanalyse, Brand Building`,

        getintouch_title: `SEO Consultant in Berlin | Kontakt | seoberlino`,
        servicestitle: `SEO Beratung | SEO Expert | SEO Berlino`,
        servicesh1: `SEO Leistungen`,
        bloglatest: `Neueste Beiträge`,
        services: `BERATUNG`,
        onpageSEO1: `Wichtiger erster Schritt: Bei der Keyword-Recherche wird ermittelt, wie Ihre Zielnutzer nach Ihrem Produkt oder Ihrer Dienstleistung suchen.`,
        onpageSEO2: `Dies muss vor Beginn der Arbeit auf der Seite geschehen. Competitor Analysis hilft, die Recherche zu erweitern und sicherzustellen, dass kein wichtiges Keyword ausgelassen wird. Obwohl Google seit Hummingbird eher semantisch vorgegangen ist, um den Inhalt der Website zu bewerten, und sich auf die Sprachsuche und Entitäten konzentriert hat, ist die Kenntnis Ihrer wichtigen Keywords bei der Strukturierung von Inhalten und Metadaten immer noch wichtig. Alex Bieth wird dann eine Überprüfung Ihrer Website vornehmen, um den Inhalt für jede wichtige Zielseite, Website-Struktur, Metadaten und Bilder zu überprüfen. Weitere wichtige Überprüfungen betreffen die strukturierte Datenimplementierung und andere technische Aspekte.`,

        offpage_main: `
Backlinks spielen im SEO eine wichtige Rolle und können Ihrer Webseite zu mehr Visibility verhelfen. Google wertet sie als Zeichen des Vertrauens von einer Website zur anderen. Je mehr solche (qualitativ hochwertige) Backlinks auf Ihre Seite verweisen, als desto beliebter wird Ihre Webseite eingestuft. Natürlich spielen hierbei viele Faktoren eine Rolle:
-Timing der neuen Backlinks
-Qualität der Webseite, die auf Ihre Seite verweist
-Qualität der Seite mit dem Link, innerhalb der verweisenden Webseite

Diese Aspekte sind entscheidend um Ihr Backlink Profil zu verbessern und Ihre Domainpopularität anzukurbeln.

Wie es geht:
Priorisierter Aktionsplan mit:

1. Backlink Profil Audit (Anzahl und Qualität der aktuellen backlinks)
2. Untersuchung wie Konkurrenten (quality) Backlinks erzielen und Erkennen von Möglichkeiten für die eigene Webseite
3. Berücksichtigung branchenspezifischer und lokaler Besonderheiten, Vorschläge für kreative Möglichkeiten zur Erzielung von Backlink
4. Vorschläge für Inhaltserstellung zu bestimmten Themen, basiert auf Suchvolumen und Wettbewerbsschwierigkeiten`,
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
        boost1: `Traffic und Sichtbarkeit steigern.`,
        boost2: `Optimiertes Keyword Targeting, Brand Building.`,
        boost3: `Beratung für Suchmaschinenoptimierung, Audit.`,
        boost4: `KOMPLETTES AUDIT`,
        boost5: `ZUR EFFIZIENTEN, PRIORISIERTEN  AUFGABENPLANUNG `,
        boost6: `ERSTELLUNG RELEVANTER`,
        boost7: `TEILBARER INHALT`,
        boost8: `UND AUFBAU VON MARKENBEANNTHEIT `,
        boost9: `OPTIMIERTES KEYWORD TARGETING`,
        boost10: `UM IHREN TRAFFIC`,
        boost11: `ANZUKURBELN`,

        whatisSEO: `Suchmaschienenoptimierung (engl. Search Engine Optimization, kurz SEO) beschreibt Prozesse zur Optimierung einer Webseite für Suchmaschinen. SEO ist wichtig, damit Suchanfragen von Qualitätsbesuchern, die das suchen was Ihre Webseite anbietet, auf Ihre Seite verweisen. Angesichts der Weiterentwicklung der Algorithmen innerhalb der letzten Jahre ist auch die Benutzerfreundlichkeit einer Webseite wichtig, um deren Glaubwürdigeit und “Respekt” bei Suchmaschinen wie Google, Bing und Yandex zu steigern. Suchmaschinen nutzen immer komplexere Algorithmen um zu bestimmen welche Seiten in ihren Index aufgenommen werden, sowie in welcher Reihenfolge diese als Suchergebnisse angezeigt werden. SEO ist sozusagen die Sprache, die Suchmaschinen verstehen und in der ihnen daher so viel wie möglich über Ihre Webseite “gesagt” bzw. Information übermittelt werden sollte.`,
        auditintro: `Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab. Die Hauptaspekte des SEO können in drei wesentliche Bereiche unterteilt werden: Offpage, Onpage und Technisches SEO, es gibt dabei jedoch viele Überschneidungen. Zudem sind ein effizientes und verlässliches Web-Analyse Set-Up sowie eine Kourrenzanalyse essentiell, wenn Sie Fortschritte machen, Ihre Prioritäten setzen und effizient kontrollieren wollen.   `,
        auditMPT1: `Was ist Offpage SEO`,
        auditMPT2: `Warum ist Offpage wichtig`,
        auditMPT3: `Was ist Link Building`,
        auditintro2: `Im ersten Schritt eines Audits gilt es sicherzustellen, welche Stichwörter Schlüsselbegriffe für Ihr Geschäft sind, welche davon Sie bereits ranken und unter den übrigen diejenigen auszuwählen, welche in Abhängigeit von der Stärke Ihrer Webseite den besten Traffic erzielen können: Wenn Ihre Seite noch neu ist, möchten Sie vielleicht lieber keine Keywords anvisieren, bei denen das Suchvolumen zwar groß, jedoch auch die Konurrenz enorm hoch ist. `,

        auditintro3: `Es ist extrem wichtig die Indexierung im Blick zu behalten, damit Sie keine Crawling Credits   verlieren. Vermeiden Sie daher inhaltliche Doppelungen, welche die Suchmaschinen-Bots mit schwachen Indexierungsnachrichten verwirren. Stellen Sie außerdem sicher, dass auch Ihre Mobile Webseite schnell lädt. Stellen Sie sicher, dass Ihre Webseite “https” verwendet.`,
        auditintro4: `Sobald Sie davon überzeugt sind, tolle Inhalte und eine Webseite zu haben, auf die Sie stolz sein können, können Sie mit viel Selbstvertrauen Qualitätslinks anfragen, die auf Ihre Seite verweisen. Links sind auch weiterhin der Schlüssel im SEO and immer schwieriger proaktiv zu erlangen, gerade wenn Sie noch neu im Geschäft sind. PR, Social Media, Mund-zu-Mund-Empfehlungen and andere mediale Präsenz steigert Ihre Sichtbarkeit (engl. Visibility) und zunehmend mehr Webseiten werden sich von sich aus mit Ihnen verlinken, wenn Ihre Webseite sich von der Konkurrenz abhebt. Bevor es soweit ist, gibt es Möglicheiten loszulegen bei gleichzeitiger Verbesserung Ihres Markenimages und Ihrer Fachkenntnis.  `,
        auditintro5: `Lernen Sie Ihre Konkurrenten mittels einer Konkurrenzanalyse kennen. Arbeiten Sie mit Lokalem SEO (engl. Local SEO) um sich den Markt in Ihrer Umgebung zu sichern und Paid Search um zusätzliche Seitenaufrufe zu generieren, während Sie weiter an Ihrem SEO arbeiten. Wenn Sie nicht mit Analytics Ihren Traffic genau beobachten, werden Sie einige Verbesserungsmöglichkeiten nicht erkennen. Diese Themen werden im Bereich Research und Analytics behandelt.`,
        onpageintro: `Onpage Optimierung bezeichnet alle Maßnahmen, die direkt auf der eigenen Webseite getroffen werden können um deren Position in der Suchmaschinenplatzierung (engl. Search Ranking) zu verbessern. Beispiele hierfür sind Maßnahmen zur Optimierung Ihrer Inhalte oder zur Verbesserung der Metabeschreibung und Titel-Tags (engl. Title Tags).`,
        onpageintro2: `Das Wichtigste zuerst: Keyword Recherche. Wenn Sie nicht die richtigen Stichwörter wählen oder wichtige vergessen, werden Sie Schwierigkeiten haben den besten Traffic für Ihre Webseite zu erzielen. Zudem müssen Sie wissen, welche Fragen am häufigsten in Suchmaschinen eingegeben werden, sowie andere, Ihrem Geschäft ähnliche Themen kennen.  `,
        onpageintroT3: `die Wichtigkeit von Onpage SEO `,

        onpageintroT4: `Wesentliche Onpage SEO Faktoren`,

        onpageintro3: `Warum gehen Leute auf Ihre Webseite? Sehr wahrscheinlich weil Sie Informationen liefert, nach denen sie suchen. Darum sollten Sie exzellente Inhalte verfassen. Suchmaschinen wie Google lesen Ihre Texte. Der Inhalt einer Webseite bestimmt wesenlich welche Seite die höchste Suchmaschinenplatzierung (engl. Ranking) erhält. Die Inhalte sollten daher die richtigen Stichwörter behandeln und dabei informativ und einfach zu lesen sein. `,

        onpageintro4: `    Onpage SEO setzt sich aus all jenen Elementen des SEO zusammen, die sich am besten kontrollieren lassen. Wenn Sie eine Webseite haben, können Sie die technischen Aspekte und die Qualität Ihrer Inhalte selbst kontrollieren. Alle Onpage-Aspekte sollten angepackt werden, denn sie liegen in Ihren eigenen Händen. Wenn Sie eine großartige Webseite erstellen wird sie auf jeden Fall im Ranking auftauchen. Zudem steigert ein gründliches Onpage SEO die Wahrscheinlichkeit dafür, dass auch Ihre Strategie im Offpage SEO erfolgreich ist. Linkaufbau (engl. Link Building) für eine mittelmäßige Seite ist harte Arbeit. Schließlich möchte niemand schlecht geschriebene oder wenig interessante Artikel verlinken.`,

        technicalintro: `    Technical SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern (engl. Search Engine Spiders) helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten und somit das natürliche Ranking zu verbessern.`,

        technicalintro2: ` Suchmaschinen behandeln Webseiten mit bestimmten technischen Eigenschaften bevorzugt: eine sichere Verbindung, ein responsives Design oder eine schnelle Ladezeit (engl. Page Speed) – mit Technical SEO können Sie sicherstellen, dass diese Kriterien auf Ihre Webseite zutreffen.`,

        technicalintro3: `Nutzen Sie das Sicherheitsprotokoll Secure Sockets Layer (SSL) – Es ist eine Sicherheitstechnologie die einen verschlüsselten Link zwischen einem Webserver und einem Browser erstellt. Eine Seite die SSL nutzt ist leicht zu erkennen: die URL der Webseite beginnt mit “https” und nicht mit “http”. Vor einigen Jahren kündigte Google an, im Ranking Webseiten mit dem sicheren Protokoll “https” gegenüber unsicheren bevorzugt behandeln zu wollen. Indem Sie einfach ein SSL-Zertifikat auf Ihrer Webseite installieren, können Sie von dieser Vorzugsbehandlung profitieren. `,

        technicalintro4: `Stellen Sie sicher, dass Sie nicht unabsichtlich Crawlers am Indexieren Ihrer Webseite hindern.`,
        technicalintro5: `Machen Sie Ihre Seite schneller. Suchmaschinen bevorzugen Seiten, die schnell laden: schnelle Ladezeit (engl. Page Speed) gilt als wichtiges Ranking-Kriterium.`,
        technicalintro6: `Erstellen Sie ein XML Sitemap. Ein XML Sitemap ist ein File das Suchmaschinen während des Crawling dabei hilft, Ihre Webseite zu verstehen. `,
        technicalintro7: ` Ziehen Sie in Erwägung AMP zu aktivieren. AMP ist ein Google-unterstütztes Projekt mit dem Ziel durch Einsatz des speziellen Codes AMP HTML die Liefergeschwindigeit von Inhalten auf Mobilen Endgeräten zu beschleunigen. AMP Versionen Ihrer Webseite laden auf Mobilen Geräten extrem schnell. Manchmal werden AMP Seiten von Google in den Suchergebnissen auch als hervorstechende Carousels markiert – was ihnen einen wichtigen Vorteil unter den Suchergebnissen verschafft.`,
        technicalintro8: ` Zeichnen Sie Ihre Daten aus, indem Sie mit Structured Data Markup arbeiten. Structured Data Markup ist ein Code den Sie in Ihre Webseite einbinden um Suchmaschinen dabei zu helfen deren Inhalte besser zu verstehen. Diese Daten können Suchmaschinen dabei unterstützen, Ihre Seite effektiver zu indexieren und relevantere Suchergebnisse zu liefern. `,

        technicalintro9: `Registrieren Sie Ihre Seite bei Google Search Console und Bing Webmaster Tools.  Google Search Console und Bing Webmaster Tools sind kostenlose Instrumente von Google beziehungsweise Microsoft die es Ihnen ermöglichen, Ihre Webseite bei den entsprechenden Suchmaschinen zur Indexierung einzureichen. Durch diesen Service können Sie die allgemeine Leistungsfähigkeit Ihrer Webseite aus Perspektive einer Suchmaschine im Blick behalten.`,
        researchMPh1: `Analytics, Forschung und mehr`,
        researchHP1: `Wenn Sie ein Ladenlokal haben, wie ein Geschäft oder ein Büro in dem Sie oft Besucher empfangen, ist ein wichtiger Aspekt Ihrer Webseitenoptimierung sicherzustellen, dass Menschen Sie auch im wirklichen Leben finden. Selbst wenn Sie nicht aktiv Besucher in Ihren Räumlichkeiten empfangen, sich aber an eine Zielgruppe richten, die sich geografisch im selben Gebiet befindet wie Sie, sollten Sie ----. Das nennen wir “Local SEO”.`,

        researchHP2: `Webanalyse ist die Messung, Sammlung, Analyse und Meldung von Webdaten mit dem Ziel Webnutzung zu verstehen und zu optimieren. Die Webanalyse liefert Informationen über die Anzahl der Besucher auf einer Webseite und die Zahl der Seitenaufrufe.`,

        researchHP3: `Die Grundlagen der Suchmaschinenwerbung (engl. Search Engine Advertising, kurz SEA). SEA ist ein Teilbereich des Suchmachinenmarketings (Search Engine Marketing, kurz SEM). Während sich SEO auf die verbesserte Zugänglichkeit von Stichwörtern (Keywords) fokussiert, werden im SEA bezahlte Werbeanzeigen direkt bei den Suchmaschinenergebnissen oder auf Partnerwebseiten platziert.`,

        offpageMP: `  Offpage SEO bezeichnet Techniken, die angewandt werden um die Position einer Webseite innerhalb der Suchergebnisseite (engl. Search Engine Result Page, kurz SERP) zu verbessern. Offpage SEO hängt mit Werbemethoden zusammen, die ein besseres Ranking in den SERPs zum Ziel haben. Anders als Onpage SEO bezieht sich Offpage SEO auf Maßnahmen, welche außerhalb der Grenzen der eigenen Webseite erfolgen. Die wichtigsten sind: Linkaufbau (engl. Link Building), Social Media Marketing und Social Bookmarking.`,

        offpageMP2: `Offpage SEO gibt den Suchmaschinen Aufschluss darüber, wie andere Webseiten eine bestimmte Webseite wahrnehmen. Bei einer Webseite von hohem Nutzen und Qualität ist die Wahrscheinlichkeit größer, dass sie Referenzen (Verlinkungen) von anderen Webseiten und viele Erwähnungen in Sozialen Medien hat, zudem wird sie vermutlich häufiger geteilt oder mit Lesezeichen (engl. Bookmarks) versehen.`,

        offpageMP3: `Linkaufbau (engl. Link Building) ist die gängigste und effektivste Offpage-Methode. Durch das Erstellen externer Links auf Ihre Webseite versuchen Sie Vertrauensbekundungen anderer wichtiger Webseiten zu generieren. Veraltete Methoden, die heutzutage nicht mehr funktionieren: Blogverzeichnisse (engl. Blog Directories), Forensignaturen (engl. Forum Signatures), Kommentar-hinzufügen-Links (engl. Comment Links), Textlinktausch (engl. Link Exchange). Um Qualitätslinks (engl. Quality Links) aufzubauen ist es ratsam, zunächst zu erkennen welche Inhalte Sie erstellen können, um potentiellen Kunden und Influencern einen Mehrwert zu bieten und diese Inhalte im zweiten Schritt bereitzustellen.`,

        offpageMP4: `Social Media ist Teil des Offpage SEO und eine Art der Rückverlinkung (engl. Backlinking) die Ihnen Traffic und Aufmersamkeit verschaffen kann. Die meisten Links aus Sozialen Medien sind zwar NoFollow-Links, sie sind jedoch trotzdem nützlich. Erwähnungen in Sozialen Medien gewinnen als Ranking-Faktoren an Boden und die passende Konfiguration von Social Media Profilen kann auch das SEO ankurbeln.`,

        offpageMP5: `Social Boomarking ist nicht mehr so gängig wie in der Vergangenheit, stellt aber noch immer eine gute Möglichkeit dar, um Traffic auf Ihrer Webseite zu generieren. Je nach Nische, in welcher Sie tätig sind, können Sie passende Webseiten wie reddit.com, stumbleupon.com, scoop.it oder delicious.com (um nur einige zu nennen) nutzen, um Ihre Inhalte zu bewerben.`,
        linkstoavoidtitle: `links to avoid`,
        linkstoavoid1: `    Many think the more links, the better but it doesn't actually work
            that way. Too many low quality and/or spammy links and your website
            will lose "Google credibility" and therefore visibility.`,
        linkstoavoid2: `Since a few years already, you as website owner are responsible for
            the backlinks pointing to your site, so you need to constantly
            monitor, identify bad links and clean up your backlink profile.
            First step using the disavow tool then to try pro-actively to remove
            them.`,
        linkstoavoid3: `Getting a backlink that appears on every page of a site is rarely a
            good idea especially if it not set as nofollow. First the position
            of the link on the page is a key factor so if your link is in the
            footer its positioning is all but optimal. Second, your numerous
            backlinks will in fact count as only one and its value will be
            minimal if negative.        Other type of links to avoid: links from unrelated websites, from sites of different
                languages and/or countries and from websites flagged as spammy`,
        linkstoavoid4: `Once you have identified those toxic links, the best is first to use
            the Google disavow tool to inform Google you are aware of them and want to bring them to
            Google's attention. Please note that you need to be connected to the
            website's search console account in order to log into the tool.
            Google then advises you to actively get in touch with the respective
            webmasters and ask them to remove them.`,
        brandbuildingMP1: `Your links represent your reputation and relevancy in your domain.
            Linkbuilding now goes hand in hand with brand building. As you
            increased the "digital signs of recognition" aka links, you are also
            building visibility of your brand. The best links are those which
            are where your potential customers are browsing the web or looking
            for companies such as yours. If these backlinks bring you quality
            traffic that means it is indeed in the right place and brings value
            to your online reputation (aka domain / page authority)`,
        brandbuildingMP2: `After doing an audit of your link profile and of your main SEO
            competitors, a plan is needed to proactively develop your link
            building profile. This is on one hand a never ending job and on the
            other the new quality links need to be coming in at regular
            intervals.`,
        brandbuildingMP3: `An important part in brand building is searching and finding the
            influencers sources and websites where your potential users visit
            when investigation or potentially deciding on which company to use.`,
        brandbuildingMP4: `Looking at what the content your relevant influencers share, you can
            get some inspiration on the content you need to start producing.
            Also you need to identify parallel search terms and topics with
            significant search volume, which are not yet on your Keyword list.`,
        BLanalysisT1: `Fact: Backlinks are still very important in 2019`,
        BLanalysisT2: `Quality over quantity`,
        BLanalysisT3: `Refering Domains: page authority over domain authority`,
        BLanalysisT4: `Competitors`,
        BLanalysisT5: `Anchor text, nofollow/follow links`,
        BLanalysisT6: `gov & edu links`,
        BLanalysis1: `During a Backlink Profile Audit, a report needs to be done with the profile's pros and cons. In addition, it should include an audit
            of competitors to understand where you stand. Then a brainstorm can be done on link
            targets and content production. Finally work can be prioritised depending on
            potential and complexity,  setting targets: quantity and quality links
            for the next quarters focusing on `,
        BLanalysis2: ` Like it has been the case since over 20 years, backlinks are key to SEO
            success and still define the reputation and popularity of your
            brand on the web. However, backlinks do not work like 20 years
            ago, and far from it. It is now much more about quality of the
            links and relevancy. It is crucial to understand where you stand,
            plan, execute and control your backlink activities.
            `,
        BLanalysis3: `Getting many backlinks from any website, paying links off from
            unrelated websites, or websites operating from a different country
            or with a different language are some example of wasted efforts.
            Most importantly, if the website which is linking to you has a
            poor reputation itself its value will be only minimum; worse if it
            is considered a spammy website, the link might even lower your
            website's reputation.`,
        BLanalysis4: `  Getting a link from a reputable and relevant (to your industry)
            website is a great achievement. However keep in mind the actual
            page the link is appearing on is the real deal. If the page itself
            has little exposure, little number of internal links and/or
            traffic, its impact will not be as positive as if it was on the
            homepage for example. On the contrary, if it appears in every page
            of the site, this might seen as spammy backlinking so avoid that
            extreme as well.`,
        BLanalysis5: `  It is very important and useful to look at your successful
            competitors to analyse: how they get their (high quality) links,
            the domain authority and quality of their backlink profile, ratio
            follow/nofollow, anchor text, ratio quality links, number &
            quality of referring domains`,
        BLanalysis6: ` Needs to be as natural as possible, avoiding "click here" or other misleading
            text. Very often the brand name is the most used anchor text. Make
            sure the ratio of nofollow links is not too high. nofollow means
            that the website linking does not want to "commit" the link as
            sign a trust and therefore pass link juice (authority). It is
            totally acceptable to have a certain percentage of nofollow links
            but if this ration gets to high, this is sign that your website is
            not trusted.{" "}`,
        BLanalysis7: `".gov" and ".edu" sites have by essence a lot more trust and power
            as ".com" for instance. If you have the opportunity to get a link
            from such sites and it makes sense to your business - bringing in
            at the same time quality & relevant traffic - this link will very
            likely be beneficial.`,
        analyticsMPT1: `Reliable data to make confident decisions
          `,
        analyticsMP1: `In order to efficiently work in SEO, especially for on-page work, it
            is crucial to use *reliable data*, and analytics is key here in
            compiling reports which will enable for instance to identify the
            number of visits/unique visitors and conversions for specific pages
            and site sections, or compare data by device type or browser.`,

        analyticsMP2: `Google offers a free version for an analytics tool: Google
            Analytics. Its set-up is quite straight-forward but you will still
            needs`,
        analyticsMPT3: `Google Analytics First steps`,
        analyticsMP3: `Activation in code (head) for each page you want to track.
            Create Accounts / Views for each account: All Data, Test, Master
            Create Filters: exclude all bots traffic and internal traffic
            Create Reports and Dashboards
            Correctly setup UTM for your marketing campaigns
            Optimize continuously, analysing reports and acting accordingly
            (new reports, new filters, etc)

          `,
        analyticsMPT4: `Google Search Console Integration`,
        analyticsMP4: `To get more valuable insight especially in terms of keywords, it is
            better to integrate Google Search Console to Google Analytics. GA
            itself does not show any keywords; they appear as "not provided".`,
        analyticsMPT5: `Relevant Tools and Resources`,
        bestpractMPh1: `SEO Competitor Analysis`,
        bestpractMPT1: `Know who your SEO Competitors are`,
        bestpractMP1: `It is important to keep in mind in terms of SEO Competitor Analysis,
        that you need to identify your *SEO* competitors, those which are
        leading in terms of organic traffic acquisition, domain authority
        and other important SEO factors. These are the websites which rank
        the best and the most consistently for the main keywords you have
        identified, and/or those websites which rank best for long tail
        keywords.`,
        bestpractMPT2: `why do a competitor analysis`,
        bestpractMP2: `To improve the way you do business online, it is very difficult to
            be successful if you ignore the competition. The same applies with
            SEO. Knowing how your competitors operate, what they offer helps to
            find out: keywords you are possibly missing one, backlink
            oppportunities, and benchmarks. Copying however is not really a long
            time efficient strategy; the best is to get inspired to offer better
            value to your customers.`,
        bestpractMPT3: `What is their content and how do they organise their website
`,
        bestpractMP3: `How are is the website organised and structured, including main
        navigation items and the internal linking strategy. What is included
        in their Sitemap(s).`,
        bestpractMPT4: `How do they get backlinks`,
        bestpractMP4: `Analyse their backlink profile`,
        bestpractMPT5: `How can you do better?`,
        bestpractMP5: `    Competitor analysis is great to be aware of what your competitors
            are doing, how their site is structured, how their get their
            backlinks, and check if you are missing out on low hanging fruit.
            But by no means should you copy and paste how they do business. Get
            rather inspired, and plan to do better.`,
        bestpractMPT6: `To do`,
        bestpractMP6: `A Competitor analysis comprises of backlink
        audit, on-page audit and keyword research. Analysing how competitors
        get most of their traffic also helps to establish content creation
        strategy.`,
        localMPT1: ``,
        relevanttools: `Relevant Tools and Resources`,
        localMP1: `Especially for local business, it is paramount to align your SEO
        overall strategy to local SEO. It is important to keep in mind that
        the most important factor in personalised search results is
        location.`,
        localMPT2: ``,
        localMP2: `In the audit which is affected by both on-page an off-page, local
        SEO factors such as city/ region mention will be taken in account.`,
        localMPT3: ``,
        localMP3: `If you have a local business, like a shop, or have people visiting
        your office frequently, optimizing your website is also about making
        sure people are able to find you in real life. But even if your not
        actively getting visitors in your building, but are targeting an
        audience that is located in the same geographical area as you are,
        you need to optimize for that area. Ground-rule these days is that
        it’s by far the easiest to optimize if you have a proper address in
        a region/city. The thing is that if you want to optimize for, for
        instance, a service area that you are not located in physically,
        your main tool for optimization is content. You should simply write
        a lot about that area. We found that often, this leads to forced
        pages that have little to do with the business at hand.`,
        localMPT4: ``,
        localMP4: `    Local SEO isn’t just about search engines. Yes, there is a lot you
            can do online to optimize your website for a local audience. But if
            you are running a local business, things like word-of-mouth and a
            print brochure also contribute to local SEO. If you mention your
            website and social profiles on your offline communication/promotion
            as well, your Facebook likes might go up, your Twitter followers
            could increase, and the direct traffic on your website will get
            higher. One way or another, this will be visible to Google as well,
            beit indirect perhaps.`,
        localMPT5: ``,
        localMP5: ``,
        crawlabilityMPintro: `Crawlibility goes hand in hand with indexation. In order to adjust
        and optimize indexation, you can improve and guide Google on how it
        crawls your site.`,
        crawlabilityMPT1: ``,
        crawlabilityMP1: `xml format sitemap guide Google on how to crawl your site. Although
                    Google says there is no guaranty the Google bot will follow your
                    instructions, it is still highly recommended and in most cases,
                    sitemaps are beneficial. It contains useful information about each
                    page on your site, including when a page was last modified; what
                    priority it has on your site; how frequently it is updated. In
                    BigCommerce, your XML site is created automatically; if you are
                    using another platform you may need to use a sitemap generator to
                    build one.`,
        crawlabilityMPT2: ``,
        crawlabilityMP2: `Robots set instructions depending on the user agent which parts of
        the site can be accessed. Making sure you are not excluding the
        relevant search engine bots is therefore of course paramount.`,
        crawlabilityMP3: `You can also guide the Google bot in the code with tags for each
        page the most common ones being: "follow/noFollow" and
        "index/noindex"`,
        crawlabilityMPT3: ``,
        crawlabilityMPT4: ``,
        crawlabilityMP4: `You can directly submit urls to the Google index in the Google
        Search Console. This is particularly useful if you have crawling
        issues and there are some pages you want to have crawl and indexed
        in priority.`,
        crawlabilityMPT5: ``,
        crawlabilityMP5: `        An important factor which links crawalability and indexation is that
                for sites with many pages (indexed or not), there is a limit to how
                much your site will be crawled each time the Google bot visits your
                site. It is therefore important to keep an eye and understand which
                pages are indexed and why they need to be indexed (not all pages
                need to be indexed in particular in case of duplicate content)`,
        crawlabilityMPT6: ``,
        crawlabilityMP6: ``,

        dynamicrenderingMPT1: ``,
        dynamicrenderingMP1: `    For JavaScript apps such as React, Angular or View, search engines
            such as Google still struggle to properly crawl and index all pages.
            Although they say they can achieve this over time after many visits,
            they do recommend for most sites to use dynamic rendering. Get
            started with dynamic rendering. Currently, it's difficult to process
            JavaScript and not all search engine crawlers are able to process it
            successfully or immediately.`,
        dynamicrenderingMPT2: ``,
        dynamicrenderingMP2: `Dynamic rendering means switching between client-side rendered and
            pre-rendered content for specific user agents. Dynamic rendering is
            good for indexable, public JavaScript-generated content that changes
            rapidly, or content that uses JavaScript features that aren't
            supported by the crawlers you care about. Not all sites need to use
            dynamic rendering, and it's worth noting that dynamic rendering is a
            workaround for crawlers. Dynamic rendering requires your web server
            to detect crawlers for example by checking the user agent.`,
        dynamicrenderingMPT3: ``,
        dynamicrenderingMP3: `Requests from crawlers are routed to a renderer, requests from users
            are served normally. Where needed, the dynamic renderer serves a
            version of the content that's suitable to the crawler, for example,
            it may serve a static HTML version.`,
        dynamicrenderingMPT4: ``,
        dynamicrenderingMP4: `To setup dynamic rendering for your content, install and configure a
                    dynamic renderer to transform your content into static HTML that's
                    easier for crawlers to consume. Some common dynamic renderers are
                    Puppeteer, Rendertron, and prerender.io. Choose the user agents that
                    you think should receive your static HTML and refer to your specific
                    configuration details on how to update or add user agents.`,
        dynamicrenderingMPT5: ``,
        dynamicrenderingMP5: ``,
        dynamicrenderingMPT6: ``,
        dynamicrenderingMP6: ``,

        indexationMPT1: `Only have indexed pages which deserve to be indexed`,
        indexationMP1: ` Efficient Indexation is key in order to get on well with Google's
         spiders. Many believe the more pages indexed the better; that is
         only true to a certain level. If you have many non-valuable,
         not-visited or duplicate pages indexed for example, the bot will
         likely limit your "crawling credit" and discard those pages which
         you value most.`,
        indexationyMPT2: `Investigate your indexation `,
        indexationMP2: `Make sure all the important pages are indexed and that those you
                do not want indexed are not. You can check the number of indexed
                pages in the Search Console, and also use Google commands with
                'site:yoursite.com' to check which pages are indexed.
        `,
        indexationMP22: `Check on duplicate or irrelevant indexed pages and work on a
                        plan to have those pages de-indexed. The best way is to return a
                        410 status codes for those unwanted pages till they are
                        de-indexed.`,
        indexationMPT3: `Redirects`,
        indexationMP3: `
                Check on your redirects, make sure you are using the correct
                status codes. Make sure you are limiting the number of redirects, if a big
                majority of the pages Google is crawling are redirects, or worse
                chains of redirects, your site will be negatively impacted by
                this.
             `,

        indexationMPT4: ``,
        indexationMP4: `While you are auditing you indexation, check for metas. Are there any description /titles missing? Are they unique and
                all make sense targeting specific keywords which make sense to
                your overall strategy? It is not recommended to change url structure, but make sure you
                have a readable url structure, with as little special characters
                and numbers as possible. Preferably your ulrs should be
                descriptive and as unique as possible. ,
              `,
        indexationMPT5: ``,
        indexationMP5: ``,
        indexationMPT6: ``,
        indexationMP6: ``,

        internationalMPT1: ``,
        internationalMP1: `There are various options when operating internationally: same root
        domain, different top level domains, subdomains, how to link between
        them, how to simplify the process without negatively affecting your
        SEO.`,
        internationalMPT2: `Same domain or multiple localised domains`,
        internationalMP2: `  If you are using the same root domain for internationalisation,
          you will be concentrating your backlink efforts to one main
          domain. However the complexity is to be dealt with. For instance
          href lang metas need to be implemented, avoid any duplicate
          content, use canonicals when necessary.`,
        internationalMP3: `  If you are using different root domains for internationalisation,
          there are pros and cons compared to same root, effectively easing
          complexity and building a local identity with the possibility to
          optimize server location. However, you will need to make sure to
          link them from your "master" domain, and manage different backlink
          startegies for each domain.`,

        internationalMP4: ` An Audit and careful planning will help you set-up an effective
         SEO strategy depending on your requirements and resources. Make
         sure the language meta tags and settings the Search console are
         set-up, evaluate any possible SEO damage if using client-side
         rendering with a mixed url structure.`,
        internationalMPT5: ``,
        internationalMP5: ``,
        internationalMPT6: ``,
        internationalMP6: ``,
        mobileMPh1: `Mobile First - Mobile friendly websites`,
        mobileMPT1: ``,
        mobileMP1: `  If your website it not mobile friendly, in most cases, you are in
          trouble. Google now uses the mobile version for indexation so
          called mobile first. If you are not sure, you can use Google's
          tool below.`,
        mobileMPT2: ``,
        mobileMP2: `A ‘responsive’ website design adjusts itself automatically
        so that it can be navigated and read easily on any device. Google
        is clear about the fact that having a responsive site is
        considered a very significant ranking signal by its algorithms.
        And, with the introduction of Google’s ‘mobile first’ approach to
        indexing content, a responsive website is now more important than
        ever. So it makes sense to ensure that your website is fully
        responsive and will display in the best format possible for
        mobile, tablet or desktop users.`,
        mobileMPT3: ``,
        mobileMP3: `With mobile-first indexing, Googlebot primarily crawls and indexes
        pages with the smartphone agent. However Google will continue to
        show the device URL that is the most appropriate to users in
        Search results.`,
        mobileMP4: ` This means that you for instance text showing on the desktop
         version but not on the mobile one may very likely be ignored for
         indexation and page relavancy. If there is too much text for the
         mobile version use 'show more'.`,
        mobileMPT5: ``,
        mobileMP5: ` In terms of performance, you need to make sure that your mobile
         version loads fast and in the right format. You can use Google's
         PageSpeed Developer Tool`,
        mobileMPT6: ``,
        mobileMP6: ``,

        speedMPT1: ``,
        speedMP1: `There are several ways you can speed up your site: Use fast hosting.
        Use a fast DNS (‘domain name system’) provider Minimise ‘HTTP
        requests’ - keep the use of scripts and plugins to a minimum Use one
        CSS stylesheet (the code which is used to tell a website browser how
        to display your website) instead of multiple CSS stylesheets or
        inline CSS Ensure your image files are as small as possible (without
        being too pixelated) Compress your web pages (this can be done using
        a tool called GZIP) Minify your site’s code - rid of any unnecessary
        spaces, line breaks or indentation in your HTML, CSS and Javascript
        (see Google’s Minify Resources page for help with this). If your
        pages are slow to load, Google will figure it out and will
        categorize your website as poor user experience, therefore suffering
        in terms of organic visibility. If you haven't done it yet, I
        strongly advise you to use the PageSpeed Insights tool (link below){" "}`,
        speedMPT2: ``,
        speedMP2: `            Please note that Lighthouse belongs to Google and their advice
                    is (a bit too) specific to Google Chrome, so for instance it
                    will advise you to use new image formats which may not be usable
                    and rendered on other browser such as Firefox or Safari.`,
        speedMPT3: ``,
        speedMP3: ``,
        speedMPT4: ``,
        speedMP4: ``,
        speedMPT5: ``,
        speedMP5: ``,
        speedMPT6: ``,
        speedMP6: ``,

        securityMPT1: ``,
        securityMP1: ` Hyper Text Transfer Protocol Secure (HTTPS) is the secure version
         of HTTP, the protocol over which data is sent between browser and
         the connected website. The 'S' of HTTPS stands for 'Secure'. It
         means all communications between browser and website are
         encrypted.`,
        securityMPT2: ``,
        securityMP2: ` HTTPS is often used to protect highly confidential online
         transactions like online banking and online shopping order forms.
         But has now become to norm.`,
        securityMPT3: ``,
        securityMP3: `          Https for "early-adopters" may have given them an advantage on
                  their competitors, these times are over. If you haven't made the
                  transition yet, it needs to be very high on your priority list.
                  Since summer 2018, Chrome now shows a "not secure" warning so
                  beware of a sharp increase in bounce rate should you now have
                  implemented it yet, on top of lower rankings.`,
        securityMPT4: ``,
        securityMP4: `Plan your site migration carefully, incluing identify pages to
        redirect (which should be the most valuable ones), and those you
        should not. Timing is key to avoid risks, so avoid doing it before
        your high season.`,
        securityMPT5: ``,
        securityMP5: ``,
        securityMPT6: ``,
        securityMP6: ``,
        seaMPT1: `What is SEA? And what SEO and SEA have in common ?`,
        seaMP1: `Paid Search uses the same base as SEO in keywords, and of course
        share the same space in SERPs (Search Engine Result Pages). With
        poor SEO visibility, SEA helps you to get those first visits to get
        going and/or get visibility and brand awareness using the Display
        Network.`,
        seaMPT2: `Adwords Set-up`,
        seaMP2: `            Google Ads is not extremely competitive which means CPC (cost per
                    click) are very high for pretty much any industry. Doing a thorough
                    Keyword Research is key before starting a campaign. It is also
                    important to think budget and choose your strategy: visibility, ROI,
                    etc. Adwords Set-up`,
        seaMPT3: `Adwords Account Optimization`,
        seaMP3: `Once you have chosen your budget strategy, created your campaigns,
        adgroups and ads, optimization begins:

         Keywords bid ajustments
          landing pages testing, CVR here is good indicator
         ads testing
         work on that Quality Score to optimize your bids

            ad & remove keywords, vary match accordingly (main matches are
            exact, phrase, broad)

        negative list adding
          display network adjustments`,
        seaMPT4: `SEO / SEA Consistency `,
        seaMP4: `        A great way to transmit a stronger message on SERPs is to be
                consistent in your language and word choice in SEO and SEA.

                    consitent form of address for non-english languages such as
                    German, French, Italian, etc

                    same wording and style in Ads and meta descriptions so that the
                    user has more chances to recognise your brand.`,
        seaMPT5: `Google Ads Data for SEO `,
        seaMP5: `    Google Ads are expensive but on top of getting you that visibility
            and orders, it is a precious goldmine for keywords, especially if
            the account is well managed (with impressions, meaning high enough
            bids)`,

        contentMPT1: `What does "content is king" really mean `,
        contentMP1: `    The content is the value you want to create. If you content has no
                        value to the user, or if it is duplicate content, your content will
                        not be brought forward. Check content quality, good usage of
                        semantics, still using the most important keywords and variations in
                        the right places, while keeping focus on relevancy for the user and
                        not focus on SEO only.`,
        contentMPT2: `Content optimization is not keyword stuffing`,
        contentMP2: `Content is King, but far away are the times when Google got tricked
                    with keyword stuffing. As Google bots constantly improve to assess
                    your website's content, your site will be penealised in rankings if
                    your content doesn't make much sense linguisitcally or for the user.`,
        contentMPT3: `The effects of mobile first on content`,
        contentMP3: `Since mobile first indexation, the content on your mobile version is
                    the master one for both mobile and desktop indexation. This means
                    the content on the mobile version is the one which counts. Space on
                    mobile is more limited than on desktop so choose your content
                    carefully: engage your users, don't bore them with too much content,
                    but enough to guide google bots.`,
        contentMPT4: ``,
        contentMP4: ``,
        contentMPT5: ``,
        contentMP5: ``,
        contentMPT6: ``,
        contentMP6: ``,

        duplicateMPT1: `    Duplicate Content, the biggest threat to making content king `,
        duplicateMP1: `Search Engines do not like duplicate content indexed. If you have
                    many similar pages and you are not flagging them, these pages will
                    not rank well.`,
        duplicateMPT2: `Indexation audit`,
        duplicateMP2: `Identify duplicate content, assess status and design for the master
                    page, deindex unnecessary pages using canonicals, 410s or redirects
                    accordingly.`,
        duplicateMPT3: ``,
        duplicateMP3: `Duplicate content can either be confusing for users (and indeed
                    search engine algorithms); it can also be used to try to manipulate
                    search rankings or win more traffic. As a result, search engines
                    aren’t keen on it, and Google and Bing advise webmasters to fix any
                    duplicate content issues they find. You can fix duplicate content
                    issues by: Preventing your CMS publishing multiple versions of a
                    page or post (for example, by disabling Session IDs where they are
                    not vital to the functionality of your website and getting rid of
                    printer-friendly versions of your content). Using the canonical link
                    element to let search engines know where the ‘main’ version of your
                    content resides.`,
        duplicateMPT4: `Using Canonicals`,
        duplicateMP4: `Canonicals are best used when you have very similar pages fro
                            imstance same t-shirt in different colours. You don't want to index
                            the same t-shirt for each colour, although you want to keep the urls
                            for the user to browse through the options. Beware though that
                            sometimes canonicals are sometimes ignored by Google so it is
                            important to monitor the results of canonicals implementation and
                            follow up with a new strategy if necessary.`,
        duplicateMPT5: `Same language country, different territory target`,
        duplicateMP5: `A possible cause for duplicate content is when targeting
                    different territoris (UK and US for instance) with different domains
                    or urls but with a very similar content. Make sure then that you
                    have well implemented href lang!`,
        duplicateMPT6: ``,
        duplicateMP6: ``,

        imagesMPT1: ``,
        imagesMP1: `            Image Search still represents for most industry an important SEO
                                subchannel. Given how Image search now works, many Image "visits"
                                are only virtual and therefore invisible in analytics reports. Image
                                Search is still a fantastic opportunity to improve brand awareness.`,
        imagesMPT2: ``,
        imagesMP2: `    Make sure images are well optimized from image hosting to image alt
                        tags. In case, your website actively uses images, help you with a
                        strategy to improve brand awareness.{" "}`,
        imagesMPT3: ``,
        imagesMP3: `The alt attribute often called "alt tag" gives important information
                    to the Google bot regarding what the piture is about. If the image
                    path is incorrect, the alt (alternative) attribute will show
                    instead.`,
        imagesMPT4: ``,
        imagesMP4: `The title appears as tooltip when there is a mouse-over above the
                    image. Use it to give more information about the picture. Although
                    not as important for SEO as the alt attribute, it should not be
                    neglected. Avoid copy and pasting the same text you have as alt
                    attribute.`,
        imagesMPT5: `image size and format`,
        imagesMP5: `If your image is too big, this will affect pagespeed,
                    especially for mobile traffic.`,
        imagesMPT6: ``,
        imagesMP6: ``,

        internalMPT1: ``,
        internalMP1: `Internal Linking is core for on-page SEO, especially for big
                    websites. Link juice redistribution, prioritization of key pages or
                    site sections to name a few reasons. Google crawls websites by
                    following links, internal and external, using a bot called Google
                    bot. This bot arrives at the homepage of a website, starts to render
                    the page and follows the first link. By following links Google can
                    work out the relationship between the various pages, posts and other
                    content. This way Google finds out which pages on your site cover
                    similar subject matter.`,
        internalMPT2: `Internal Linking AUdit`,
        internalMP2: `Review and audit your current internal linking settings, including
                            navigation, sub-navigations, breadcrumb and tags, taking into
                            account business prioritization. Report action plan with main
                            priority points and explanations for each points.`,
        internalMPT3: ``,
        internalMP3: `In addition to understanding the relationship between content,
                            Google divides link value between all links on a web page. Often,
                            the homepage of a website has the greatest link value because it has
                            the most backlinks. That link value will be shared between all the
                            links found on that homepage. The link value passed to the following
                            page will be divided between the links on that page, and so on.
                            Therefore, your newest blog posts will get more link value if you
                            link to them from the homepage, instead of only on the category
                            page. And Google will find new posts quicker if they’re linked to
                            from the homepage. When you get the concept that links pass their
                            link value on, you’ll understand that more links to a post mean more
                            value. Because Google deems a page that gets lots of valuable links
                            as more important, you’ll increase the chance of that page ranking.`,
        internalMPT4: ``,
        internalMP4: `It’s crucial for your SEO to evaluate and improve internal linking
                                strategy on a regular basis. By adding the right internal links you
                                make sure Google understands the relevance of pages, the
                                relationship between pages and the value of pages. The ideal
                                structure We always advise website owners to imagine their website
                                to be a pyramid with the most important content on top. We call
                                those articles cornerstone content. There should be lots of links to
                                that most essential content from topically-related pages in the
                                pyramid, which passes most link value on to those pages. However,
                                you should also link from those top pages to subpages about related
                                topics. Linking internally to related content shows Google what
                                pages hold information about similar topics.`,
        internalMPT5: ``,
        internalMP5: `Don’t forget to link from the top too Besides linking from
                                topically-related posts and pages, it’s possible to make your
                                cornerstone content more authoritative by adding links to it from
                                the homepage or the top navigation. This will give the most
                                important posts or pages a lot of link value and makes them stronger
                                in Google’s eyes. Linking to taxonomies If you run a blog it could
                                be beneficial to add internal links to the taxonomies the post
                                belongs to. Adding links to the category and tags helps Google to
                                understand the structure of your blog and helps visitors to more
                                easily navigate to related posts. At Yoast we always link to the
                                matching categories and tags in the sidebar of each post:`,
        internalMPT6: ``,
        internalMP6: ``,

        keywordMPT1: ``,
        keywordMP1: `Keyword Research is critical to understand how your potential
                    clients are searching for the products or services you are offering.`,
        keywordMPT2: ``,
        keywordMP2: `          The keywords you are using for your site are possibly not the ones
                              your potential clients are using to look for your services.`,
        keywordMPT3: ``,
        keywordMP3: `Good keyword research starts with gathering data: keywords currently bringing traffic, keywords with impressions but no clicks, ppc data if any, keywords used by competitors, Keyword tools
            `,
        keywordMPT4: `Which keywords have the most value for you?
            `,
        keywordMP4: ` Search Volume is not the most important factor, but if there is no
                     seach volume for the terms you want to optimize your site for, you
                     are already making your life difficult.`,
        keywordMPT5: ``,
        keywordMP5: ` Equally, targeting high competitive keywords with very high Search
                     Volumes, or Keywords not related to products or services which you
                     offer will cause problems.`,
        keywordMPT6: ``,
        keywordMP6: `  Set up a list of keywords: main keywords, broad terms, related
                      terms, long tail, each type of keywords having different
                      objectives the huge majority of searches now represent a maximum
                      of 50 searches per month.`,
        keywordMP7: `is creating a lof of disruption in terms of keywords research
                      since people use different phrases depending on whether they type
                      of speak. In general voice search keywords are longer and they are
                      in the form of a question.`,

        landingMPT1: ``,
        landingMP1: `Often, companies create Landing pages and then expect it to perform
                        as it is. There are actually many factors that will make a landing
                        page work, from design & UX to SEO. Users need to easily understand
                        your website. They should be able to find what they want in a
                        heartbeat. They should know where to click and how to navigate
                        through your site. And it should be fast! A beautifully designed
                        website is nice, but you should definitely make it your top priority
                        to create a user-friendly website first!s`,
        landingMPT2: `User Journey`,
        landingMP2: `Check how the page fits within the website, does it make sense in
                    the user journey?`,
        landingMPT3: `Linking`,
        landingMP3: ` how is the page linked internally and externally`,
        landingMPT4: `Keyword targeting`,
        landingMP4: `keyword targeting: content and semantics`,
        landingMPT5: `technical`,
        landingMP5: `including pagespeed image optimization`,
        landingMPT6: ``,
        landingMP6: ``,

        metasMPT1: ``,
        metasMP1: `Page titles are often neglected, but are really important and very
                    simple to implement. That means you need to have them spot on. Each
                    page should have unique titles, clearly stating the page main focus,
                    using terms that users are searching, so according to your keywords
                    list.`,
        metasMPT2: ``,
        metasMP2: `Meta descriptions are not required t have your page rank well. Even
                        if your meta description is empty or missing, Google will take some
                        text from the page and fill in the gap. If you have one but Google
                        is not using it, that means Google did not find it relevant enough
                        for the searched term. Either way, meta descriptions are important
                        for CTR, searched terms if included in your description will appear
                        in bold and you can also confirm to the user your entry is the most
                        relevant for the search and add that difference that will make the
                        click happen.`,
        metasMPT3: ``,
        metasMP3: `you should have one h1 per page with h1 being your main keyword for
                        the page.`,
        metasMPT4: `what to check`,
        metasMP4: `Crawling through the website to analyse and identify:

                     missing or empty metas,
                     duplicate or unclear metas,
                     too long or too short metas.`,
        metasMPT5: ``,
        metasMP5: ``,
        metasMPT6: ``,
        metasMP6: ``,

        structuredMPT1: ``,
        structuredMP1: `Google, Bing, Yandex and Yahoo agreed on a standardised format:
                    schema.org for providing information about a page and to classify
                    its content. using Structured Data will enable you to improve the
                    way your pages are displayed. Structured Data Additionally,
                    structured data enhances search results through the addition of
                    ‘rich snippets’ - for example, you can use structured data to add
                    star ratings to reviews; prices to products; or reviewer
                    information(example below). Because they are more visually appealing
                    and highlight immediately useful information to searchers, these
                    enhanced results can improve your click-through rate (CTR), and
                    generate additional traffic to your site. Because sites with results
                    featuring higher CTRs are generally considered to receive
                    preferential treatment in search engines, it is worth making the
                    effort to add structured data to your site.`,
        structuredMPT2: `Examples of Structured Data`,
        structuredMP2: `    You can use Structured Data to provide additional information about
                        creative work, events, organisation, a person, a place or a product.
                        Here is a list of the most common used of Structured Data: *
                        Organization information * Local business Markup * Product and Offer
                        * Breadcrumb * Ratings * Site navigation`,
        structuredMPT3: ``,
        structuredMP3: ``,
        structuredMPT4: ``,
        structuredMP4: ``,
        structuredMPT5: ``,
        structuredMP5: ``,
        structuredMPT6: ``,
        structuredMP6: ``,

        voiceMPT1: `What is Voice Search and why it's Important to be ready for
                    it`,
        voiceMP1: `        Google Assistant, Alexa are just of those devices which are
                            transforming search. Instead of typing searches, users now more and
                            more ask for their need vocally. Voice search is already disrupting
                            online marketing. It already represents an important share of the
                            number of searches. In order to be ready for it, every website needs
                            to understand how it changes classical SEO.`,
        voiceMPT2: `Questions`,
        voiceMP2: `The main difference with traditional search is that many voice
                    search requests are questions, so they begin with where, how, what,
                    etc.`,
        voiceMPT3: `Longer Search terms`,
        voiceMP3: `            The second main difference is that the "keywords" are longer, mostly
                                because the requests are questions and because users are more
                                descriptive when voally expressing their needs, compared to typing.`,
        voiceMPT4: `Increasing Search Volume`,
        voiceMP4: `Search volumes for such searches are still lower than the classical
                    searches equivalent, but the volumes are continuously increasing and
                    the keywords are more segmented, meaning there are more questions
                    for the equivalent classical search term`,
        voiceMPT5: ``,
        voiceMP5: `One of the main advantage to be ready and optimized for search term
                    is that you can be featured at "position 0" with the featured
                    snippet, answering directly to the question of the search.`,
        voiceMPT6: ``,
        voiceMP6: ``
      }
    }, //de

    //     fr: {
    //       translations: {
    //         hey1: `SEO Expert à Berlin `,
    //         hey2: `Web Dévelopeur Full Stack `,
    //         hey3: `Audit On-page`,
    //         hey4: `Recherche de mots clés`,
    //         hey5: `SEO Technique`,
    //         hey6: `Analyse Web`,
    //         hey7: `Analyse compétiteurs`,
    //         hey8: `Audit Off-Page`,
    //         clients: `clients`,
    //         intro1: `Hallo ! Je suis Alex, 10 ans d'expérience, expert SEO franco-anglais basé à Berlin depuis 2010.`,
    //         intro2: `9 années d'experience en SEO, SEA et Analyse Web.`,
    //         intro3: `Dévelopeur Full Stack`,
    //         intro4: `Analyse, action plan avec prios, controlling`,
    //         intro5: `MBA`,
    //         intro6: `5 ans en charge du SEO à Spreadshirt (équipe de 10 personnes)`,
    //         intro7: `+400% de croisssance en traffic et ventes SEO  (DACH, US, FR)`,
    //         intro8: `plus d'un an d'expérience comme freelancer SEO`,
    //         intro9: ` Audit complet ou spécifique`,
    //         cookie1: `Ce site web utilise des cookies génériques.`,
    //         cookie2: `Vous pouvez lire quels cookies sont utilisés sur ce site.`,
    //         cookie3: `accepter et continuer, ou lire la liste des cookies utilisés.`,
    //         cookie4: `Continuer`,
    //         cookie5: `Lire liste des cookies`,
    //         analytics1: `Installation Google Analytics `,
    //         analytics2: `Audit Google Analytics `,
    //         analytics3: `Optimisation Google Analytics (filtres, groupements canal, UTM)`,
    //         analytics4: `Reports & Dashboards`,
    //         analytics5: `Adobe SiteCatalyst /
    //         Marketing Cloud / Omniture`,
    //         brandbuilding1: `Brand-building`,
    //         brandbuilding2: ` Content targeting: more traffic for brand awareness, traffic
    //  and backlinks`,
    //         brandbuilding3: `Based on user & influencers interests to boost quality link
    // creation quality and brand awareness.`,
    //         audit: `Audit SEO`,
    //         auditText: `
    // L’ audit permet de définir la position de votre site par rapport à vos principaux concurrents et de fixer des objectifs réalistes.
    //                      basé sur la visibilité acquise. Dans l’ audit, les aspects de référencement onpage, offpage et techniques sont couverts. Par la suite
    //                       vous recevrez un rapport détaillé sur les résultats de l'audit.`,
    //         KWResearch: `Analyse Mots Clés`,
    //         KWResearchText: `
    // L'analyse des mots clés est une partie très importante du référencement. Une liste de mots-clés pertinents pour votre produit ou service sera élaborée.`,
    //         OnPageOptimization: `Optimisation Onpage`,
    //         OnPageOptimizationText: `L'optimisation "onpage" fait référence au contenu: code et texte.
    //               De plus, il est important d'y intégrer la production future de contenu avec des priorités en fonction du potentiel des mots clés ciblés.`,
    //         OffpagePageOptimization: `Optimisation Offpage`,
    //         OffpagePageOptimizationText: `L'optimisation offpage est certainement la plus complexe du processus mais aussi l'une des plus
    //         importante.`,
    //
    //         blog: `blog (en anglais)`,
    //         optimization: `optimization`,
    //         analyticsHP1: `SEO Local`,
    //         analyticsHP2: `analyse web, reporting et controlling,`,
    //         analyticsHP3: `Analyse de la concurrence,`,
    //         analyticsHP6: `Optimisation Google Ads`,
    //         onpageHP1: `Recherche de mots clés`,
    //         offpageHP3: `opportunités de brand building`,
    //         offpageHP4: `recherche influencers`,
    //         offpageHP5: `liens`,
    //         onpageHP2: `optimisation landing page`,
    //         onpageHP3: `liens internees et architecture du site,`,
    //         onpageHP4: `meta tags & headings,`,
    //         onpageHP5: `related tags & breadcrumb`,
    //         beratung: `Conseils SEO`,
    //         beratungText: `Pour chaque consultation, une conversation avec vous
    //         est nécessaire pour comprendre votre situation présente, vos prioriétés, ainsi que vos ressources.
    //               Nous définissons ensuite des indicateurs de performance et des objectifs de référencement réalistes,
    //               Nous devons aussi établir comment votre entreprise peut efficacement utiliser ses
    //                ressources internes et être intégrées au projet. Après l'audit vous pouvez
    //                utliser mes services comme une consultation d'accompagnement, durant laquelle
    //                mes recommandations de référencement sont mises en œuvre jusqu'à
    //               la conception complète.
    //               La transparence est garantie pour chaque client  avec un rapport détaillé avec
    //               les mesures mises en œuvre et objectifs atteints.`,
    //
    //         onpageHP8: `structured data,`,
    //         onpageHP9: `contenu dupliqué & canonicalization`,
    //         onpageHP10: `ready for voice search`,
    //         onpageHP6: `Contenu et semantique`,
    //         onpageHP7: `Optimisation des images,`,
    //         offpageHP1: `Analyse Backlinks des concurrents,`,
    //         offpageHP2: `Analyse Backlinks`,
    //         technicalHP1: `Indexation, redirects et urls`,
    //         technicalHP2: `crawlability, robots.txt, sitemaps`,
    //
    //         technicalHP3: `Internationalisation,`,
    //         technicalHP4: `pagespeed`,
    //
    //         technicalHP5: `Mobile-friendliness`,
    //         technicalHP6: `Applications Javascript et SEO`,
    //         technicalHP7: `Sécurité (https) & migrations`,
    //
    //         servicesL: `Services`,
    //         technical: `SEO TECHNIQUE`,
    //         about: `SUR MOI`,
    //         contact: `CONTACT`,
    //         fullname: `Nom* `,
    //         subject: `Sujet  `,
    //         message: `Message*  `,
    //         sendMessage: `ENVOYER`,
    //         aboutmetitle: `qui je suis`,
    //
    //         getintouch: `Contact`,
    //         aboutme: `SEO Experte und Freelancer in Berlin | SEO Berlino`,
    //         HPTitle: `Expert Référencement Freelance SEO | SEO Berlino`,
    //         descriptionHP: `Expert SEO/Référencement français à Berlin: Audit, Onpage, Offpage, SEO technique, Analyse concurrence, Analyse Web, Brand Building`,
    //         getintouch_title: `Expert SEO / Référencement Freelance français à Berlin | seoberlino`,
    //
    //         impressum_title: `Impressum SEO Berlino | SEO Beratung in Berlin`,
    //         footer1: `tous droits réservés. 2018 Alex Bieth`,
    //         boost1: `BIEN IDENTIFIER SES MOTS CLÉS`,
    //         boost2: `POUR PLUS DE TRAFIC DE QUALITÉ`,
    //         offpage_main: `1. Audit de vos liens (nombre et qualité) 2. Comment vos compétiteurs obtiennent des liens, comment s'en inspirer et faire mieux 3. Prennant en compte la spécificité de votre industrie, comment créativement créer du contenu qui apportera liens et trafic.
    //                          4. Suggesting an action plan to boost
    //                         your backlink profile What we can do for you
    //
    //                         About Backlinks
    //                         Backlinks still play an imporstant role in SEO and can help your
    //                         website get more visibility. Backlinks are for Google a sign of
    //                         trust from a website to another. The more (quality) backlinks you
    //                         get pointing your site, the more popular will your website be rated.
    //                         Of course many factors come into play: -timing of new backlinks
    //                         -quality of the website pointing the link to yours. These aspects
    //                         are critical in how to positively improve your backlink profile and
    //                         boost your Domain Authority.`,
    //         whatisSEO: `        Search engine optimization is the term used to describe the
    //                                 processes to optimize a website for search engines. SEO is
    //                                 important for getting high quality visitors from search which
    //                                 are searching what the website has to offer. Given how the
    //                                 algotiths have evolved these last years, there is also much
    //                                 focus on user-friendliness of the website to increase its
    //                                 credibility and "respect" from search engines such as Google,
    //                                 Bing and Yandex. Search engines use more and more complex
    //                                 algorithms to determine which pages to include in their index
    //                                 and the order they show these pages in the search results. SEO
    //                                 is the way to ‘speak’ to search engines in a language they can
    //                                 understand and give them as much information about your website
    //                                 as possible.`,
    //
    //         auditintro: `Audits can vary in scope depending on the website's needs and maturity.
    //                                 A full audit though will cover all aspets of SEO which over the years has become more and mroe complex and segmented.
    //                                 The main aspects of SEO can simply be categorized in three main fields: offpage, onpage and technical SEO, but there is a lot of overlapping.
    //                                 Also efficient and reliable web analytics set-up and knowing your competitors (Competitor Analysis) are critical if you want to make progress and know your priorities and control efficiently   `,
    //         auditintro: `Audits can vary in scope depending on the website's needs and maturity.
    //                               A full audit though will cover all aspects of SEO which over the years has become more and more complex and segmented.
    //                               The main aspects of SEO can simply be categorized in three main fields: offpage, onpage and technical SEO, but there is a lot of overlapping.
    //                               Also efficient and reliable web analytics set-up and knowing your competitors (Competitor Analysis) are critical if you want to make progress, understand and set your priorities and control them efficiently   `,
    //
    //         auditintro2: `The first step in Audit it to make sure to know the  which are key to your business, which ones your are already ranking and those for which you are not, select the ones which are more likely
    //                           to bring the best traffic depending on your site's strength: if your site is quite new, you may not want to target keywords which have great Search Volume but which are too competitive.    Content of course is the most important, but using the language
    //                               your users like to use thanks to quality landing
    //                               pages, and producing content for users not just for SEO. Link
    //                               internally in an efficient way is also key for user experience and search engine bots.`,
    //
    //         auditintro3: `Keeping an eye on indexation is extremely important so that you
    //                                     don't waste crawling credits. Avoid however duplicate content
    //                                     that would confuse search engine bots with poor indexation messages. Make sure also your
    //                                     mobile version loads fast. Make sure that your website uses https.`,
    //         auditintro4: `Once you are confident you have great content and a website you are proud of, you can with more confidence ask for quality links pointing to your website. Links are still key in SEO and more and more difficult to pro-actively collect if you are still new in your business. PR, social media, word of mouth and other media coverage increase visibility and more and more websites will starting linking to you naturally if you have a website which stands out from the competition.
    //                                 Before that happens, there are ways to get going while taking care of your brand image and expertise in your field.  `,
    //         auditintro5: `Know your competitors with a competitor analysis. Go Local to secure the market close to you and paid search to get those extra visits while you work on your SEO.
    //                                 If you are not using analytics as a tool to closely monitor your traffic, you are losing opportunities that will guide you to make improvements. These themes are covered in the Research and Analytics section.`,
    //         onpageintro: `Onpage optimization refers to all measures that can be taken
    //                                     directly within the website in order to improve its position in
    //                                     the search rankings. Examples of this include measures to
    //                                     optimize the content or improve the meta description and title
    //                                     tags.`,
    //         onpageintro2: `First things first: Keyword Research; if you are not targeting the right keywords, or missing out on the most important ones, you will struggle to get the best traffic for your site.
    //                                 Also, you need to know which questions are most searched and other themes close related to your business.  `,
    //         onpageintro3: `Why do people visit your site? Most
    //                                 likely because it contains information they’re looking for.
    //                                 Therefore you should write excellent content. Search engines
    //                                 like Google read your text. Which site ranks highest is for a
    //                                 large part based on the content of a website. That content
    //                                 should be about the right keywords, informative, and easy to
    //                                 read. `,
    //         onpageintro4: `    On-page SEO consists of all the elements of SEO you can control
    //                                     best. If you own a website, you can control the technical issues
    //                                     and the quality of your content. On-page issues should all be
    //                                     tackled as they’re in your own hands. If you create an awesome
    //                                     website, it will definitely start ranking. Focusing on on-page
    //                                     SEO will also increase the probability that your off-page SEO
    //                                     strategy will be successful. Link building with a poor site is a
    //                                     very tough job. Nobody wants to link to articles that are badly
    //                                     written or not interesting.`,
    //         technicalintro: `    Technical SEO refers to website and server optimizations that
    //                                         help search engine spiders crawl and index your site more
    //                                         effectively to help improve organic rankings.`,
    //         technicalintro2: `Search engines give preferential treatment in search results to
    //                                         websites that display certain technical characteristics:
    //                                         a secure connection, a responsive design or a fast
    //                                         loading time — and technical SEO is the work you need to do to
    //                                         ensure your website does so. `,
    //         technicalintro3: `Use SSL. Secure Sockets Layer – It is a security
    //                                 technology which creates an encrypted link between a web
    //                                 server and a browser. You can recognise a site using SSL
    //                                 easily: the website URL starts with ‘https’ rather than
    //                                 ‘http’. A few years ago, Google announced that they will start giving
    //                                 preference in rankings to websites using secure HTTPS over non-secure ones;
    //                                 this can be simply done by installing an SSL certificate on
    //                                 your website. `,
    //         technicalintro4: `Make sure you are not unintentionally
    //                                   blocking crawlers from indexing your website.`,
    //         technicalintro5: `Speed your site up. Search engines prefer sites that load
    //                                 quickly: page speed is considered an important ranking signal.`,
    //         technicalintro6: `Create an XML sitemap. An XML sitemap is a file that helps
    //                                 search engines to understand your website whilst crawling it `,
    //         technicalintro7: ` Consider enabling AMP. AMP is a Google-backed project which
    //                                   aims to speed up the delivery of content on mobile devices
    //                                   through the use of special code known as AMP HTML. AMP
    //                                   versions of your web pages load extremely quickly on mobile
    //                                   devices. Google sometimes highlights
    //                                   AMP pages in prominent carousels in search results – giving
    //                                   them an important search advantage.`,
    //         technicalintro8: ` Add structured data markup to your website. Structured data
    //                                       markup is code which you add to your website to help search
    //                                       engines better understand the content on it. This data can
    //                                       help search engines index your site more effectively and
    //                                       provide more relevant results. `,
    //         technicalintro9: `Register your site with Google Search Console and Bing
    //                                 Webmaster Tools. Google Search Console and Bing Webmaster
    //                                 Tools are free tools from Google and Microsoft respectively
    //                                 that allow you to submit your website to their search engines
    //                                 for indexing. These services  allow you to keep an eye on the
    //                                 general performance of your site from a search engine
    //                                 prospective.`,
    //         offpageMP: `   Offpage SEO refers to techniques that can be used to improve the position of a website in the search engine results page (SERPs).  OffPage SEO has to do with promotion methods with the aim to get higher rankings  in the SERPs. Unlike On-page SEO, Off-page SEO refers to activities which are performed outside the boundaries of the website. The most important are: Link Building, Social Media Marketing and Social bookmarking.`,
    //         offpageMP2: `Off page SEO gives search engines an indication on how other websites and users perceive the particular website. A website that is high quality and useful is more likely to have references (links) from other websites; more mentions on social media and it is more likely to be bookmarked and shared.`,
    //         offpageMP3: `Link building is the most popular and effective off-Page SEO method. By building external links to your website, your trying to gather votes of confidence from other relevant websites. Old methods which now do not work: blog directories, forum signatures, comment links, link exchange, Reality is quality of links than the number. To get quality links the best is to understand what content you can produce that will add value to potential customers and to influencers and then bring it to them:  `,
    //         offpageMP4: `Social Media is part of offpage SEO and a form of backlinking which could bring you traffic and recognition. Although most of the links from social media are nofollow they still have value. Social Media mentions are gaining ground as ranking factors and proper configuration of social media profiles can also boost SEO.`,
    //
    //         offpageMP5: `Social bookmarking is not as popular as it used to be in the past but it is still a good way to get traffic to your website. Depending on your niche you can find web sites like reddit.com, stumbleupon.com, scoop.it and delicious.com (to name a few) to promote your content.`,
    //
    //         linkstoavoidtitle: `links to avoid`,
    //         linkstoavoid1: `    Many think the more links, the better but it doesn't actually work
    //                             that way. Too many low quality and/or spammy links and your website
    //                             will lose "Google credibility" and therefore visibility.`,
    //         linkstoavoid2: `Since a few years already, you as website owner are responsible for
    //                         the backlinks pointing to your site, so you need to constantly
    //                         monitor, identify bad links and clean up your backlink profile.
    //                         First step using the disavow tool then to try pro-actively to remove
    //                         them.`,
    //         linkstoavoid3: `Getting a backlink that appears on every page of a site is rarely a
    //                         good idea especially if it not set as nofollow. First the position
    //                         of the link on the page is a key factor so if your link is in the
    //                         footer its positioning is all but optimal. Second, your numerous
    //                         backlinks will in fact count as only one and its value will be
    //                         minimal if negative.        Other type of links to avoid: links from unrelated websites, from sites of different
    //                                 languages and/or countries and from websites flagged as spammy`,
    //         linkstoavoid4: `Once you have identified those toxic links, the best is first to use
    //                         the Google disavow tool to inform Google you are aware of them and want to bring them to
    //                         Google's attention. Please note that you need to be connected to the
    //                         website's search console account in order to log into the tool.
    //                         Google then advises you to actively get in touch with the respective
    //                         webmasters and ask them to remove them.`,
    //         brandbuildingMP1: `Your links represent your reputation and relevancy in your domain.
    //                         Linkbuilding now goes hand in hand with brand building. As you
    //                         increased the "digital signs of recognition" aka links, you are also
    //                         building visibility of your brand. The best links are those which
    //                         are where your potential customers are browsing the web or looking
    //                         for companies such as yours. If these backlinks bring you quality
    //                         traffic that means it is indeed in the right place and brings value
    //                         to your online reputation (aka domain / page authority)`,
    //         brandbuildingMP2: `After doing an audit of your link profile and of your main SEO
    //                         competitors, a plan is needed to proactively develop your link
    //                         building profile. This is on one hand a never ending job and on the
    //                         other the new quality links need to be coming in at regular
    //                         intervals.`,
    //         brandbuildingMP3: `An important part in brand building is searching and finding the
    //                         influencers sources and websites where your potential users visit
    //                         when investigation or potentially deciding on which company to use.`,
    //         brandbuildingMP4: `Looking at what the content your relevant influencers share, you can
    //                         get some inspiration on the content you need to start producing.
    //                         Also you need to identify parallel search terms and topics with
    //                         significant search volume, which are not yet on your Keyword list.`,
    //         BLanalysis1: `During a Backlink Profile Audit, a report needs to be done with the profile's pros and cons. In addition, it should include an audit
    //                         of competitors to understand where you stand. Then a brainstorm can be done on link
    //                         targets and content production. Finally work can be prioritised depending on
    //                         potential and complexity,  setting targets: quantity and quality links
    //                         for the next quarters focusing on `,
    //         BLanalysis2: ` Like it has been the case since over 20 years, backlinks are key to SEO
    //                          success and still define the reputation and popularity of your
    //                          brand on the web. However, backlinks do not work like 20 years
    //                          ago, and far from it. It is now much more about quality of the
    //                          links and relevancy. It is crucial to understand where you stand,
    //                          plan, execute and control your backlink activities.
    //                         `,
    //         BLanalysis3: `Getting many backlinks from any website, paying links off from
    //                         unrelated websites, or websites operating from a different country
    //                         or with a different language are some example of wasted efforts.
    //                         Most importantly, if the website which is linking to you has a
    //                         poor reputation itself its value will be only minimum; worse if it
    //                         is considered a spammy website, the link might even lower your
    //                         website's reputation.`,
    //         BLanalysis4: `  Getting a link from a reputable and relevant (to your industry)
    //                           website is a great achievement. However keep in mind the actual
    //                           page the link is appearing on is the real deal. If the page itself
    //                           has little exposure, little number of internal links and/or
    //                           traffic, its impact will not be as positive as if it was on the
    //                           homepage for example. On the contrary, if it appears in every page
    //                           of the site, this might seen as spammy backlinking so avoid that
    //                           extreme as well.`,
    //         BLanalysis5: `  It is very important and useful to look at your successful
    //                           competitors to analyse: how they get their (high quality) links,
    //                           the domain authority and quality of their backlink profile, ratio
    //                           follow/nofollow, anchor text, ratio quality links, number &
    //                           quality of referring domains`,
    //         BLanalysis6: ` Needs to be as natural as possible, avoiding "click here" or other misleading
    //                          text. Very often the brand name is the most used anchor text. Make
    //                          sure the ratio of nofollow links is not too high. nofollow means
    //                          that the website linking does not want to "commit" the link as
    //                          sign a trust and therefore pass link juice (authority). It is
    //                          totally acceptable to have a certain percentage of nofollow links
    //                          but if this ration gets to high, this is sign that your website is
    //                          not trusted.{" "}`,
    //         BLanalysis7: `".gov" and ".edu" sites have by essence a lot more trust and power
    //                           as ".com" for instance. If you have the opportunity to get a link
    //                           from such sites and it makes sense to your business - bringing in
    //                           at the same time quality & relevant traffic - this link will very
    //                           likely be beneficial.`
    //       }
    //     }, //fr

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
