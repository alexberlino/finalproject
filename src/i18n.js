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
        analyticsHP1: `local SEO`,
        analyticsHP2: `analytics and reporting`,
        analyticsHP3: `competitor analysis`,
        analyticsHP4: `new website best practice`,
        analyticsHP6: `SEA (Google Ads)`,
        onpageHP1: `keyword research`,
        onpageHP2: `landing page optimization`,
        onpageHP3: `internal linking`,
        onpageHP4: `meta tags and headings`,
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
        offpageHP5: `links to avoid`,
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
        servicestitle: `SEO Consultation | SEO Expert Consultant | SEO Berlino`,
        servicesh1: `SEO Services`,
        footer1: `All Right Reserved 2018 Alex Bieth`,
        footer2: `about this website`,
        boost1: `BOOST YOUR TRAFFIC WITH`,
        boost2: `OPTIMIZED KEYWORD TARGETING!`,

        auditintro: `Audits can vary in scope depending on the website's needs and maturity.
      A full audit though will cover all aspects of SEO which over the years has become more and more complex and segmented.
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
        crawlabilityMPT1: ``,
        crawlabilityMP1: ``,
        crawlabilityMPT2: ``,
        crawlabilityMP2: ``,
        crawlabilityMPT3: ``,
        crawlabilityMP3: ``,
        crawlabilityMPT4: ``,
        crawlabilityMP4: ``,
        crawlabilityMPT5: ``,
        crawlabilityMP5: ``,
        crawlabilityMPT6: ``,
        crawlabilityMP6: ``,

        dynamicrenderingMPT1: ``,
        dynamicrenderingMP1: ``,
        dynamicrenderingMPT2: ``,
        dynamicrenderingMP2: ``,
        dynamicrenderingMPT3: ``,
        dynamicrenderingMP3: ``,
        dynamicrenderingMPT4: ``,
        dynamicrenderingMP4: ``,
        dynamicrenderingMPT5: ``,
        dynamicrenderingMP5: ``,
        dynamicrenderingMPT6: ``,
        dynamicrenderingMP6: ``,

        indexationMPT1: ``,
        indexationMP1: ``,
        indexationyMPT2: ``,
        indexationMP2: ``,
        indexationMPT3: ``,
        indexationMP3: ``,
        indexationMPT4: ``,
        indexationMP4: ``,
        indexationMPT5: ``,
        indexationMP5: ``,
        indexationMPT6: ``,
        indexationMP6: ``,

        internationalMPT1: ``,
        internationalMP1: ``,
        internationalMPT2: ``,
        internationalMP2: ``,
        internationalMPT3: ``,
        internationalMP3: ``,
        internationalMPT4: ``,
        internationalMP4: ``,
        internationalMPT5: ``,
        internationalMP5: ``,
        internationalMPT6: ``,
        internationalMP6: ``,

        mobileMPT1: ``,
        mobileMP1: ``,
        mobileMPT2: ``,
        mobileMP2: ``,
        mobileMPT3: ``,
        mobileMP3: ``,
        mobileMPT4: ``,
        mobileMP4: ``,
        mobileMPT5: ``,
        mobileMP5: ``,
        mobileMPT6: ``,
        mobileMP6: ``,

        speedMPT1: ``,
        speedMP1: ``,
        speedMPT2: ``,
        speedMP2: ``,
        speedMPT3: ``,
        speedMP3: ``,
        speedMPT4: ``,
        speedMP4: ``,
        speedMPT5: ``,
        speedMP5: ``,
        speedMPT6: ``,
        speedMP6: ``,

        securityMPT1: ``,
        securityMP1: ``,
        securityMPT2: ``,
        securityMP2: ``,
        securityMPT3: ``,
        securityMP3: ``,
        securityMPT4: ``,
        securityMP4: ``,
        securityMPT5: ``,
        securityMP5: ``,
        securityMPT6: ``,
        securityMP6: ``,

        contentMPT1: ``,
        contentMP1: ``,
        contentMPT2: ``,
        contentMP2: ``,
        contentMPT3: ``,
        contentMP3: ``,
        contentMPT4: ``,
        contentMP4: ``,
        contentMPT5: ``,
        contentMP5: ``,
        contentMPT6: ``,
        contentMP6: ``,

        duplicateMPT1: ``,
        duplicateMP1: ``,
        duplicateMPT2: ``,
        duplicateMP2: ``,
        duplicateMPT3: ``,
        duplicateMP3: ``,
        duplicateMPT4: ``,
        duplicateMP4: ``,
        duplicateMPT5: ``,
        duplicateMP5: ``,
        duplicateMPT6: ``,
        duplicateMP6: ``,

        imagesMPT1: ``,
        imagesMP1: ``,
        imagesMPT2: ``,
        imagesMP2: ``,
        imagesMPT3: ``,
        imagesMP3: ``,
        imagesMPT4: ``,
        imagesMP4: ``,
        imagesMPT5: ``,
        imagesMP5: ``,
        imagesMPT6: ``,
        imagesMP6: ``,

        internalMPT1: ``,
        internalMP1: ``,
        internalMPT2: ``,
        internalMP2: ``,
        internalMPT3: ``,
        internalMP3: ``,
        internalMPT4: ``,
        internalMP4: ``,
        internalMPT5: ``,
        internalMP5: ``,
        internalMPT6: ``,
        internalMP6: ``,

        keywordMPT1: ``,
        keywordMP1: ``,
        keywordMPT2: ``,
        keywordMP2: ``,
        keywordMPT3: ``,
        keywordMP3: ``,
        keywordMPT4: ``,
        keywordMP4: ``,
        keywordMPT5: ``,
        keywordMP5: ``,
        keywordMPT6: ``,
        keywordMP6: ``,

        landingMPT1: ``,
        landingMP1: ``,
        landingMPT2: ``,
        landingMP2: ``,
        landingMPT3: ``,
        landingMP3: ``,
        landingMPT4: ``,
        landingMP4: ``,
        landingMPT5: ``,
        landingMP5: ``,
        landingMPT6: ``,
        landingMP6: ``,

        metasMPT1: ``,
        metasMP1: ``,
        metasMPT2: ``,
        metasMP2: ``,
        metasMPT3: ``,
        metasMP3: ``,
        metasMPT4: ``,
        metasMP4: ``,
        metasMPT5: ``,
        metasMP5: ``,
        metasMPT6: ``,
        metasMP6: ``,

        structuredMPT1: ``,
        structuredMP1: ``,
        structuredMPT2: ``,
        structuredMP2: ``,
        structuredMPT3: ``,
        structuredMP3: ``,
        structuredMPT4: ``,
        structuredMP4: ``,
        structuredMPT5: ``,
        structuredMP5: ``,
        structuredMPT6: ``,
        structuredMP6: ``,

        voiceMPT1: ``,
        voiceMP1: ``,
        voiceMPT2: ``,
        voiceMP2: ``,
        voiceMPT3: ``,
        voiceMP3: ``,
        voiceMPT4: ``,
        voiceMP4: ``,
        voiceMPT5: ``,
        voiceMP5: ``,
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
                as possible.`,
        auditintro: `Audits can vary in scope depending on the website's needs and maturity.
              A full audit though will cover all aspects of SEO which over the years has become more and more complex and segmented.
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
        researchHP3: `The basics of search engine advertising. Search engine
                        advertising (SEA) is a branch of search engine marketing (SEM).
                        While search engine optimization (SEO) centers on improving
                        accessibility with the use of keywords, SEA places the paid
                        advert directly into the search engine results and on partner
                        websites.`,
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
            bids)`
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
