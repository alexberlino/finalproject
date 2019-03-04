const { checkPassword, hashPass, capital } = require("./Public/hash.js");
const express = require("express");
const app = express();
var i18n = require("i18n");
var hbs = require("hbs");
var hb = require("express-handlebars");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var http = require("http");
app.engine(
    ".hbs",
    hb({
        extname: ".hbs",
        defaultLayout: "main",
        helpers: {
            __: function() {
                return i18n.__.apply(this, arguments);
            },
            __n: function() {
                return i18n.__n.apply(this, arguments);
            }
        }
    })
);
app.set("view engine", ".hbs");
i18n.configure({
    locales: ["en", "de", "fr"],
    queryParameter: "lang",
    directory: __dirname + "/locales",
    autoReload: true,
    updateFiles: true,
    api: {
        __: "__", //now req.__ becomes req.__
        __n: "__n" //and req.__n can be called as req.__n
    }
});
app.use(i18n.init);

if (process.env.NODE_ENV === "production") {
    app.use(function(req, res, next) {
        if (req.headers["x-forwarded-proto"] !== "https") {
            return res.redirect(
                301,
                ["https://", req.get("Host"), req.url].join("")
            );
        }
        return next();
    });
}

var compression = require("compression");
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static("./Public"));
app.use(express.static("./SQL"));

// setup hbs

// init i18n module for this loop

// register hbs helpers in res.locals' context which provides this.locale

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
    // app.use(function(req, res, next) {
    //     if (req.secure) {
    //         next();
    //     } else {
    //         res.redirect("https://" + req.headers.host + req.url);
    //     }
    // });
} else {
    secrets = require("./secrets.json");
}

const cookieSession = require("cookie-session");
app.use(require("cookie-parser")());
app.use(require("body-parser").json());

const cookieSessionMiddleware = cookieSession({
    secret: secrets.COOKIE_PASS,
    maxAge: 100 * 60 * 60 * 24 * 4
});

app.use(cookieSessionMiddleware);

// const spicedPg = require("spiced-pg");

app.set("view engine", "handlebars");

app.engine("handlebars", hb());
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

////////////////////new routes & redirects///////////////////////////

app.get("/", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "/en",
        layout: "mainDE",
        title: "SEO Freelancer Berlin | SEO Beratung | SEO Berlino",
        description:
            "SEO Beratung in Berlin. 10 Jahre Erfahrung als Freelancer: SEO, Webanalyse, SEA. MBA, scrum, web development. Audit, Onpage, Offpage, Technisches SEO, Konkurrenzanalyse, Brand Building",
        canonical: "https://www.seoberlino.com/de",
        alt: "https://www.seoberlino.com/en",
        alt2: "https://www.seoberlino.com/fr"
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Freelancer Berlin | SEO Berlino",
        description:
            "SEO Freelancer in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de",
        alt2: "https://www.seoberlino.com/fr"
    });
});

app.get("/fr", (req, res) => {
    i18n.setLocale(req, "fr");
    res.render("homeFR", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainFR",
        title: "Freelance SEO | Consultant Référencement Berlin | SEO Berlino",
        description:
            "Freelance SEO & Consultant Référencement à Berlin.  10 ans d'expérience SEO, Analyse Web, SEA. MBA, Scrum et développement web.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});
app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Freelancer Berlin | SEO Beratungf | SEO Berlino",
        description:
            "SEO Beratung in Berlin. 10 Jahre Erfahrung als Freelancer: SEO, Webanalyse, SEA. MBA, scrum, web development. Audit, Onpage, Offpage, Technisches SEO, Konkurrenzanalyse, Brand Building",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en",
        alt2: "https://www.seoberlino.com/fr"
    });
});

app.get("/en/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("duplicatecontent", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "Duplicate Content SEO | SEO Berlino",
        description:
            "Duplicate Content and Semantics for SEO. Read more about the dangers of Duplicate Content and how to avoid it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/duplizierte-content"
    });
});

app.get("/de/on-page/duplizierte-content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("duplicatecontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Doppelter Inhalt SEO | SEO Berlino",
        description:
            "Suchmaschinen mögen keine Indexierung von Duplicate Content. Anschließend ist es wichtig zu entscheiden, welche Seite Ihre “Master Page” ist ",
        canonical: "https://www.seoberlino.com/de/on-page/duplizierte-content",
        alt: "https://www.seoberlino.com/en/onpage/duplicatecontent"
    });
});

app.get("/en/onpage/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("images", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Image OPtimization SEO | SEO Berlino",
        description:
            "Images optimisation enables you to get visibility on  Image Search which can still be powerful for brand visibility.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/bildoptimierung"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page/bildoptimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("images", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Bildoptimierung SEO | SEO Berlino",
        description:
            "Für viele Wirtschaftszweige ist die Bildersuche noch immer ein wichtiger Unterbereich des SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/images"
    });
});

app.get("/en/onpage/internallinking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internallinking", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internal Linking | SEO Berlino",
        description:
            "Internal linking is key in SEO essentially to redistribute link juice and prioritise your most important pages.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/interne-verlinkung"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internallinking", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Interne Verlinkung SEO | SEO Berlino",
        description:
            "Interne Verlinkungen sind der Kern des Onpage SEO. Verstehen, wie das Crawling Ihrer Webseite durch den Google Bot funktioniert.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/internallinking"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Keyword Research for SEO | SEO Berlino",
        description:
            "Keyword Research is key to understand how your potential clients are searching for your product or services.Search Volume, relevance and keyword competitivity are in deciding on your best keywords.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/keyword-recherche"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page/keyword-recherche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("keyword", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Keyword Recherche für SEO | SEO Berlino",
        description:
            "Wenn Sie eingehend verstehen möchten, wie Ihre potenziellen Kunden nach den von Ihnen angebotenen Produkten oder Leistungen suchen, ist eine Keyword Recherche unerlässlich.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/keywordresearch"
    });
});

app.get("/en/onpage/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("metas", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Meta Tags SEO | SEO Berlino",
        description:
            "Page titles are often neglected, but are really important and very  simple to implement. That means you need to have them spot on.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/metas-tags-de"
    });
});

app.get("/de/on-page/metas-tags-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("metas", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Meta Tags - Google Suche optimieren | SEO Berlino",
        description:
            "Seitentitel werden oft vernachlässigt, sind allerdings extrem wichtig und sehr einfach zu realisieren. Wesentlich ist, dass Sie mit der Formulierung ins Schwarze treffen.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/metas"
    });
});

app.get("/en/onpage/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("content", {
        requrl: "/de/on-page/content",

        layout: "main",
        title: "SEO Content (Inhalt) - Content Marketing | SEO Berlino",
        description:
            "The content is the value you want to create. If you content has no  value to the user, or if it is duplicate content, your content will  not be brought forward.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/inhalt"
    });
});

app.get("/de/on-page/inhalt", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("content", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Content -  SEO Marketing | SEO Berlino",
        description:
            "Die Inhalte sind der Wert, den Sie erschaffen wollen. Wenn Ihre Inhalte für den Nutzer keinen Wert haben, oder bereits an anderer Stelle verfügbar sind, werden Sie damit nicht weit kommen. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/content"
    });
});

app.get("/en/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("landingpages", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Landing Page Optimization SEO| SEO Berlino",
        description:
            "If you want to efficiently understand how your potential  clients are searching for the products or services you are offering, Keyword Research is critical.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/landing-pages-de"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page/landing-pages-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("landingpages", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Landingpage Optimierung | SEO Berlino",
        description:
            "Die Keywords, die Sie als die wichtigsten für Ihre Seite ausgewählt haben sollten für Inhalte und allgemeine Onpage Optimierung genutzt werden. Achten Sie darauf, dass keine andere Seite den Traffic für Ihre ausgewählten Keywords abzieht und dass der natürliche Traffic nicht auf einer anderen, als der dafür bestimmten Seite landet.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/landingpages"
    });
});

app.get("/en/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("structureddata", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "What is Structured Data | SEO Berlino",
        description:
            "Google, Bing, Yandex and Yahoo agreed on a standardised format: schema.org for providing information about a page and to classify its content. using Structured Data will enable you to improve the way your pages are displayed.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/structured-data-de"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page/structured-data-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("structureddata", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Google Structured Data | SEO Berlino",
        description:
            "Google, Bing, Yandex und Yahoo haben sich auf ein standartisiertes Format geeinigt: mit schema.org werden Informationen über eine Seite bereitgestellt und die Inhalte klassifiziert. Sie können positiv beeinflussen wie Ihre Seiten angezeigt werden, indem Sie Structured Data nutzen.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/structureddata"
    });
});

app.get("/en/research/analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("analytics", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "Web Analytics for SEO | SEO Berlino",
        description:
            "In order to efficiently work in SEO, especially for on-page work, it  is crucial to use reliable data, and analytics is key here in  compiling reports which will enable for instance to identify the  number of visits/unique visitors and conversions for specific pages  and site sections, or compare data by device type or browser.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/webanalyse"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/forschung/webanalyse", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("analytics2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Webanalyse für SEO | SEO Berlino",
        description:
            "Um im SEO effizient arbeiten zu können, besonders im Bereich Onpage, sind verlässliche Daten unerlässlich.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/analytics"
    });
});

app.get("/en/research/wordpress", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("wordpressseo", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "WordPress SEO | SEO Berlino",
        description:
            "In order to efficiently work with WordPress, especially for on-page work, it is crucial to use reliable data, and analytics is key here in  compiling reports which will enable for instance to identify the  number of visits/unique visitors and conversions for specific pages  and site sections, or compare data by device type or browser.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/wordpress"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/forschung/wordpress", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("wordpressseo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO für WordPress | SEO Berlino",
        description:
            "Für WordPress, um im SEO effizient arbeiten zu können, besonders im Bereich Onpage, sind verlässliche Daten unerlässlich.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/wordpress"
    });
});

app.get("/en/research/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Competitor Analysis for SEO | SEO Berlino",
        description:
            "It is important to keep in mind in terms of SEO Competitor Analysis,  that you need to identify your SEO competitors, those which are  leading in terms of organic traffic acquisition, domain authority  and other important SEO factors. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/mitwettbewerber"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/forschung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO-Konkurrenzanalyse | SEO Berlino",
        description:
            "Im Zuge einer SEO-Konkurrenzanalyse ist es wichtig herauszufinden, welche Ihrer SEO Konkurrenten bei der Organic Traffic Acquisition, der Domain Authority und anderen zentralen SEO-Faktoren führend sind. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/competitor-analysis"
    });
});

app.get("/en/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("crawlability", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Crawling SEO - Web Crawl | SEO Berlino",
        description:
            "xml format sitemap guides Google on how to crawl your site. Although  Google says there is no guarantee the Google bot will follow your  instructions, it is still highly recommended and in most cases,  sitemaps are beneficial.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/crawling"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/crawling", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("crawlability", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Web-Crawling | SEO Berlino",
        description:
            "Crawling hängt unmittelbar mit Indexierung zusammen. Um die Indexierung anzupassen, beziehungsweise zu optimieren, können Sie Google dabei lenken, wie es beim Crawling auf Ihrer Seite vorgeht.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/crawlability"
    });
});

app.get("/en/technical/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("indexation", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Indexation| SEO Berlino",
        description:
            "Efficient Indexation is key in order to get on well with Google's  spiders. Many believe the more pages indexed the better; that is  only true to a certain level.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/indexierung"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/indexierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("indexation", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Indexierung| SEO Berlino",
        description:
            "Effiziente Indexierung ist für ein gutes Funktionieren mit den Google Spiders entscheidend. Oft wird geglaubt, es gehe darum möglichst viele Seiten indexieren zu lassen, dies ist allerdings nur bedingt richtig. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/indexation"
    });
});
app.get("/en/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internationalisation", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Internatinalisation | SEO Berlino",
        description:
            "There are various options when operating internationally: same root  domain, different top level domains, subdomains, how to link between  them, how to simplify the process without negatively affecting your  SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/internationalisierung"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/internationalisierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internationalisation", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Internationalisierung | SEO Berlino",
        description:
            "Wenn Sie international agieren gibt es eine Vielzahl von Möglichkeiten: einheitliche Root-Domain, verschiedene Top-Level-Domains, Subdomains; wie diese untereinander verknüpft werden und wie der Prozess ohne negative Auswirkungen auf Ihr SEO vereinfacht werden kann.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/internationalisation"
    });
});

app.get("/en/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pagespeed", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Page Speed | SEO Berlino",
        description:
            "Page load speed is key in SEO: a very important aspect of Technical SEO. If your site loads fast, Search Engines will prefer it to others.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/ladegeschwindigkeit"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/ladegeschwindigkeit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Seitengeschwindigkeit | SEO Berlino",
        description:
            "So machen Sie Ihre Seite schneller. Nutzen Sie schnelle Host-Dienste, einen schnellen DNS (“Domain Name System”) Provider",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/pagespeed"
    });
});

app.get("/en/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("mobile", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Mobile Friendly| SEO Berlino",
        description:
            "Since a couple of years now, more people search the web on mobile devices than on Desktop. Hence, mobile optimization is critical and the mobile version is now the master version over Desktop for indexation.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/mobilefriendly"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("mobile", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Mobile First| SEO Berlino",
        description:
            "Sofern Ihre Webseite nicht für mobile Endgeräte geeignet ist, stellt dies in den meisten Fällen ein Problem dar, denn Google verfährt mittlerweile nach dem Prinzip “mobile-first”,  nutzt für die Indexierung also die Mobile Webseite.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/mobilefriendly"
    });
});

app.get("/en/technical/security", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("https", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "What is https | SEO Berlino",
        description:
            "https is now the norm. If your site is still not on https, its migration should be on the top of your SEO to-do list.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/sicherheit"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/sicherheit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("https", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Was ist https | SEO Berlino",
        description:
            "Hyper Text Transfer Protocol Secure (HTTPS) ist die abgesicherte Version von HTTP, dem Protokoll über welches die Daten zwischen Browser und verbundener Webseite laufen. Das “S” in  HTTPS steht für “secure”. Konkret bedeutet es, dass jede Kommunikation zwischen Browser und Webseite verschlüsselt wird.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/security"
    });
});

app.get("/en/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("javascript", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Javascript SEO | SEO Berlino",
        description:
            "Javascript frameworks such as React and Angular which are client-side rendered are still very complex for Search Engines for indexation as they have trouble crawling them. This causes difficult challenges for SEO Optimization. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik/dynamic-rendering-de"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik/dynamic-rendering-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("javascript", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Javascript Webframes SEO  | SEO Berlino",
        description:
            "Bei JavaScript Apps wie React, Angular oder View haben Suchmaschinen wie Google noch immer große Probleme, Crawling und Indexierung auf allen Seiten angemessen durchzuführen. Wenngleich sie ankündigen, im Laufe der Zeit und durch viele Seitenaufrufen (engl. Visits) gute Ergebnisse erzielen zu können, empfehlen sie für die meisten Seiten Dynamic Rendering.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/dynamicrendering"
    });
});

app.get("/en/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("brandbuilding", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Brand Building | SEO Berlino",
        description:
            "Your links represent your reputation and relevancy in your domain.  Link building now goes hand in hand with brand building. As you  increased the digital signs of recognition aka links, you are also  building visibility of your brand.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/off-page/brand-building"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/off-page/brand-building", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("brandbuilding2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Markenentwicklung | SEO Berlino",
        description:
            "Brand-building: beste Empfehlung für Inhaltserstellung. Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic und backlinks",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/brandbuilding"
    });
});

app.get("/en/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("backlinkanalysis", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Backlink Analysis | SEO Berlino",
        description:
            "During a backlink analysis, a report needs to be done with the profile's pros and cons. In addition, it should include an audit  of competitors to understand where you stand. Then a brainstorm can be done on link  targets and content production. Finally work can be prioritised depending on  potential and complexity, setting targets: quantity and quality links  for the next quarters focusing on.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/off-page/backlinkanalysis"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/off-page/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanalysis2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Backlink Analyse SEO | SEO Berlino",
        description:
            "Im Zuge eines Backlink Profil Audits muss ein Bericht über die Vor- und Nachteile des Profils erstellt werden. Zudem sollte es ein Audit der Konkurrenten beinhalten um Sie und Ihre Seite im Wettbewerb verorten zu können. Danach kann ein Brainstorming über angestrebte Links stattfinden.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/backlinkanalysis"
    });
});

app.get("/en/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("links", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "What is a backlink ? | SEO Berlino",
        description:
            "Many think the more links, the better but it doesn't actually work that way. Too many low quality and/or spammy links and your website will lose Google credibility and therefore visibility.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/off-page/toxic"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/off-page/toxic", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("links", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Was sind backlinks ? | SEO Berlino",
        description:
            "Viele denken, es gehe immer um eine möglichst große Anzahl von Links, dem ist allerdings nicht so. Zu viele Links von geringer Qualität und Spam senken Ihre Glaubwürdigkeit bei Suchmaschinen (engl. Google Credibility) und schaden somit Ihrer Sichtbarkeit.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/toxic"
    });
});

app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Blog - Search Engine Optimization Blog | SEO Berlino",
        description:
            "SEO Berlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Blog - Suchmaschinenoptimierung Blog | SEO Berlino",
        description:
            "SEO Blog von SEO Berlino, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com/en/blog"
    });
});

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Consultant in Berlin - Impressum | SEO Berlino",
        description:
            "SEO Berlino Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "https://www.seoberlino.com/de/impressum"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Impressum SEO Berlino SEO Experte in Berlin | SEO Berlino",
        description:
            "Impressum, SEO Berlino, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/impressum"
    });
});

app.get("/en/seonews", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seonews", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Google SEO News | SEO Berlino",
        description:
            "SEO News around the web, from SEO Berlino, SEO and Analytics Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seonews"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/seonews", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seonews", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Nachrichten | SEO Berlino",
        description: "SEO Nachrichten von SEO Berlino. SEO Berater in Berlin. ",
        canonical: "https://www.seoberlino.com/en/seonews"
    });
});

app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Offpage Optimization SEO Berlin | SEO Berlino",
        description:
            "Offpage SEO is a key part of SEO and includes in particular Link Building and Brand Building. Create great content to show your expertise, build your brand and attracted links and potential customers.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/off-page"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/off-page", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Offpage Optimierung SEO | SEO Berlino",
        description: "Offpage Optimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage"
    });
});

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "Onpage Optimization SEO | SEO Berlino",
        description:
            "Onpage Optimization refers to any SEO action taken on the website that can be done directly. That concerns first and foremost the optimization of the content and the code of the page. It includes as well the elaboration of the content strategy and potential technical issues.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("onpage2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Onpage Optimierung SEO | SEO Berlino",
        description: "Offpage Optimierung,",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage"
    });
});

app.get("/en/onpage/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("voicesearch", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Voice Search SEO | SEO Berlino",
        description:
            "Google Assistant, Alexa are just 2 of those devices which are transforming search. Instead of typing searches, users now more and more ask for their need vocally.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/on-page/sprachsuche"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/on-page/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("voicesearch", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Sprachsuche SEO | SEO Berlino",
        description: "Offpage Optimierung,",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/voicesearch"
    });
});

app.get("/en/research/localseo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Local SEO | SEO Berlino",
        description:
            "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO, keeping in mind that  the most important factor in personalised search results is  location.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/local-seo-de"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/forschung/local-seo-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Local SEO Optimierung | SEO Berlino",
        description: "Offpage Optimierung,",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/localseo"
    });
});

app.get("/en/research/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("sea", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Search Engine Advertising and SEO| SEO Berlino",
        description:
            "Paid Search uses the same base as SEO in keywords, and of course  share the same space in SERPs (Search Engine Result Pages). ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/suchmaschinenwerbung"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/forschung/suchmaschinenwerbung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("sea2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Suchmaschinenwerbung und SEO | SEO Berlin | SEO Berlino",
        description: "Offpage Optimierung,",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/sea"
    });
});

app.get("/en/technical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("technical", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "What is Technical SEO | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technik"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technik", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("technical2", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "Was ist Technisches SEO | SEO Berlin | SEO Berlino",
        description:
            "Technisches SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern (engl. Search Engine Spiders) helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten und somit das natürliche Ranking zu verbessern.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical"
    });
});

app.get("/en/research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("research", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "Research and Analytics SEO | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/forschung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("research2", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Webanalyse und Research Berlin SEO  | SEO Berlino",
        description:
            "Wenn Sie ein Ladenlokal haben, wie ein Geschäft oder ein Büro in dem Sie oft Besucher empfangen, ist ein wichtiger Aspekt Ihrer Webseitenoptimierung sicherzustellen, dass Menschen Sie auch im wirklichen Leben finden.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research"
    });
});

app.get("/en/seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seo", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Berlin | SEO Berlino",
        description:
            "SEO Berlin: SEO Freelancer. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seo2", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Berlin Suchmaschinenoptimierung | SEO Berlino",
        description:
            "SEO Berlin: SEO Freelancer. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo"
    });
});

app.get("/en/freeaudit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("freeaudit", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "Free SEO Audit Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/freeaudit"
    });
});

app.get("/de/freeaudit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("freeaudit", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Check Kostenlos Berlin | SEO Berlino",
        description:
            "SEO Check Kostenlos. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/freeaudit"
    });
});

app.get("/en/partnership", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("partnership", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Partnership Berlin | SEO Berlino",
        description:
            "SEO Partnership with Consultant in Berlin: Audit for Sponsor. SEO Consultant with close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/partnership"
    });
});

app.get("/de/partnership", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("partnership", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Partnerschaft Berlin | SEO Berlino",
        description:
            "SEO Partnerschaft. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/partnership"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Consultant Berlin - Contact | SEO Berlino",
        description:
            "SEO Consultant Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Berater Berlin | SEO Experte | SEO Berlino",
        description:
            "SEO Berater Berlin. SEO Experte Freelancer in Berlin. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/contact"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("freelancer", {
        requrl: "/de" + req.originalUrl.substring(3),
        title: "SEO Consultant Berlin | SEO Berlino",
        layout: "main",
        description:
            "SEO Consultant Freelancer in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-freelancer"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/seo-for-small-businesses", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("servicesfreelancers", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Beratung für Kleinunternehmen Berlin | SEO Berlino",

        description:
            "SEO Audit für Kleinunternehmen in Berlin. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-for-small-businesses"
    });
});

app.get("/en/seo-for-small-businesses", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("servicesfreelancers", {
        requrl: "/de" + req.originalUrl.substring(3),

        layout: "main",
        title: "SEO Consultant Berlin for small Businesses| SEO Berlino",
        description:
            "SEO Consultant in Berlin for . Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-for-small-businesses"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("freelancer", {
        requrl: "/en" + req.originalUrl.substring(3),

        layout: "mainDE",
        title: "SEO Freelancer Berlin  | SEO Berlino",
        description:
            "SEO Freelancer in Berlin. Seo Expert. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-freelancer"
    });
});

app.get("/en/article/linkbuilding-in-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        layout: "main",
        title: "Link Building in 2019 | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog2", {
        layout: "main",
        title: "SEO Beyond Mobile First | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog5", {
        layout: "main",
        title: "SEO Voice Search Challenges | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog6", {
        layout: "main",
        title:
            "Why you need to implement Structured Data | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog7", {
        layout: "main",
        title: "Link Building to Brand Building | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog8", {
        layout: "main",
        title: "How to get those first links | SEO Berlin | SEO Berlino",
        description:
            "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap");
});

app.get("/setcookiesession", (req, res) => {
    req.session.checked = true;

    res.json({
        success: true
    });
});

app.get("/checknotice", (req, res, next) => {
    if (req.session.checked) {
        res.json({
            success: true
        });
    } else {
        next();
    }
});

/////////////redirects and 410///////////////////////

app.get("/archives/*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/single-post/*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/blog",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/technik",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/resources", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/en/resources", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/de/services", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/en/services", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/de/research", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/forschung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/onpage", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/on-page",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/off-page",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/services", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/ad/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/admin", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/login", function(request, response) {
    response.writeHead(410);
    response.end();
});
app.get("/en/login", function(request, response) {
    response.writeHead(410);
    response.end();
});
app.get("en/en/blog", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/lo/*", function(request, response) {
    response.writeHead(410), response.end();
});

app.get("/fr/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/endefined/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/un/*", function(request, response) {
    response.writeHead(410);
    response.end();
});
app.get("/en/en/*", function(request, response) {
    response.writeHead(410);
    response.end();
});
app.get("/de/de/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.get("/undefined/*", function(request, response) {
    response.writeHead(410);
    response.end();
});

app.all("*", function(req, res) {
    res.writeHead(404);
    res.end();
});

// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));

////////////////DO NOT TOUCH/////////////////////////
