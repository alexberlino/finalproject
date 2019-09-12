const {
    checkPassword,
    hashPass,
    capital
} = require("./Public/hash.js");
const express = require("express");
const app = express();
var i18n = require("i18n");
var hbs = require("hbs");
var hb = require("express-handlebars");
var bodyParser = require("body-parser");
var http = require("http");
var etag = require('etag');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

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

        if (req.headers["x-forwarded-proto"] == "https") {

            if (req.headers.host.slice(0, 3) != 'www') {
                res.redirect('https://www.' + req.headers.host + req.url, 301);
            }
        }

        if (req.headers["x-forwarded-proto"] !== "https") {
            return res.redirect(
                301,
                ["https://", req.get("Host"), req.url].join("")
            );
        } else {
            next();
        }

    });
}


var compression = require("compression");
app.use(compression());

app.use(express.static("./Public"));

let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
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
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "Agile SEO & Analytics Consultant based in Berlin  | SEO Berlino",
        description: "SEO Expert, 10 years experience €100m + multinationals:  Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "/de",
        alt2: "/fr"
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDEHP",
        title: "SEO & Analytics Agile Consultant Berlin | SEO Berlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Experte, 10 Jahre Erfahrung: Montblanc, Ricoh, Spreadshirt, Holberton School, MSF, Red Cross, etc",
        alt: "/en",
        alt2: "/fr"
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "Agile SEO & Analytics Consultant based in Berlin  | SEO Berlino",
        description: "SEO Expert, 10 years experience €100m + multinationals:  Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "/de",
        alt2: "/fr"
    });
});

app.get("/fr", (req, res) => {
    i18n.setLocale(req, "fr");
    res.render("home", {
        requrl: "/en",
        layout: "mainFR",
        title: "Freelancer SEO Référencement Berlin | SEO Berlino",
        description: "Consultant SEO.  10 ans d'expérience : Spreadshirt, Ricoh, Montblanc HQ, Holberton School, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/fr",
        alt: "/en",
    });
});


app.get("/en/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("duplicatecontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Duplicate Content SEO | SEO Berlino",
        description: "Duplicate Content and Semantics for SEO. Read more about the dangers of Duplicate Content and how to avoid it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/duplicatecontent"
    });
});

app.get("/en/casestudy/fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyfromatob", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB: SEO Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's fromAtoB  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/fromatob"
    });
});

app.get("/en/casestudy/zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyzalando", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando: SEO Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's Zalando  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/zalando"
    });
});


app.get("/en/casestudy/wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudywooga", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga: SEO Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's Wooga  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/wooga"
    });
});

app.get("/en/casestudy/juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyjuniqe", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe: SEO Berlin Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's Juniqe  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/juniqe"
    });
});

app.get("/en/casestudy/modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudymodomoto", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's Modomoto  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/modomoto"
    });
});

app.get("/en/casestudy/n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyn26", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 : SEO Berlin Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's N26  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/n26"
    });
});

app.get("/en/casestudy/hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhellofresh", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Hello Fresh: SEO Berlin Case Study | SEO Berlino",
        description: "SEO Case Study: Berlin's Hello Fresh  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/hellofresh"
    });
});

app.get("/en/casestudy", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudy", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Berlin Start-up Case Studies | SEO Berlino",
        description: "SEO Berlin Start-up Case Studies: traffic, brand dependance, main keywords, technical performance.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy"
    });
});

app.get("/en/casestudy/hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhometogo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Home ToGo: SEO Berlin Case Study | SEO Berlino",
        description: "SEO Berlin Case Study: Berlin's Home ToGo  ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/casestudy/hometogo"
    });
});

app.get("/de/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("duplicatecontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Duplizierter Inhalt | Duplicate Content SEO | SEO Berlino",
        description: "Suchmaschinen mögen keine Indexierung von Duplicate Content. Anschließend ist es wichtig zu entscheiden, welche Seite Ihre “Master Page” ist ",
        canonical: "/de/onpage/duplicatecontent",
        alt: "/en/onpage/duplicatecontent"
    });
});

app.get("/en/onpage/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("images", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Image Optimization SEO | SEO Berlino",
        description: "Images optimisation enables you to get visibility on  Image Search which can still be powerful for brand visibility.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/bildoptimierung"
    });
});

app.get("/de/onpage/bildoptimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("images", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Bildoptimierung SEO | SEO Berlino",
        description: "Für viele Wirtschaftszweige ist die Bildersuche noch immer ein wichtiger Unterbereich des SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/images"
    });
});

app.get("/en/onpage/internallinking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internallinking", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internal Linking | SEO Berlino",
        description: "Internal linking is key in SEO essentially to redistribute link juice and prioritise your most important pages.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/interne-verlinkung"
    });
});

app.get("/de/onpage/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internallinking", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Interne Verlinkung SEO | SEO Berlino",
        description: "Interne Verlinkungen sind der Kern des Onpage SEO. Verstehen, wie das Crawling Ihrer Webseite durch den Google Bot funktioniert.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/internallinking"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Keyword Research and Keyword Tools for SEO | SEO Berlino",
        description: "Keyword Research is key to understand how your potential clients are searching for your product or services.Search Volume, relevance and keyword competitivity are in deciding on your best keywords.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/keyword-recherche"
    });
});

app.get("/de/onpage/keyword-recherche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("keyword", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Keyword Recherche & Keyword Tools für SEO | SEO Berlino",
        description: "Wenn Sie eingehend verstehen möchten, wie Ihre potenziellen Kunden nach den von Ihnen angebotenen Produkten oder Leistungen suchen, ist eine Keyword Recherche unerlässlich.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/keywordresearch"
    });
});

app.get("/en/onpage/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("metas", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Meta Tags SEO | SEO Berlino",
        description: "Page titles are often neglected, but are really important and very  simple to implement. That means you need to have them spot on.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/metas-tags-de"
    });
});

app.get("/de/onpage/metas-tags-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("metas", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Meta Tags - Google Suche optimieren | SEO Berlino",
        description: "Seitentitel werden oft vernachlässigt, sind allerdings extrem wichtig und sehr einfach zu realisieren. Wesentlich ist, dass Sie mit der Formulierung ins Schwarze treffen.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/metas"
    });
});

app.get("/en/onpage/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("content", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Content - Content Marketing | SEO Berlino",
        description: "The content is the value you want to create. If you content has no  value to the user, or if it is duplicate content, your content will  not be brought forward.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/inhalt"
    });
});

app.get("/de/onpage/inhalt", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("content", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Content (Inhalt) -  SEO Marketing | SEO Berlino",
        description: "Die Inhalte sind der Wert, den Sie erschaffen wollen. Wenn Ihre Inhalte für den Nutzer keinen Wert haben, oder bereits an anderer Stelle verfügbar sind, werden Sie damit nicht weit kommen. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/content"
    });
});

app.get("/en/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("landingpages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Landing Page Optimization SEO| SEO Berlino",
        description: "If you want to efficiently understand how your potential  clients are searching for the products or services you are offering, Keyword Research is critical.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/landingpages"
    });
});

app.get("/de/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("landingpages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Landingpage Optimierung | SEO Berlino",
        description: "Die Keywords, die Sie als die wichtigsten für Ihre Seite ausgewählt haben sollten für Inhalte und allgemeine Onpage Optimierung genutzt werden. Achten Sie darauf, dass keine andere Seite den Traffic für Ihre ausgewählten Keywords abzieht und dass der natürliche Traffic nicht auf einer anderen, als der dafür bestimmten Seite landet.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/landingpages"
    });
});

app.get("/en/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("structureddata", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Structured Data | SEO Berlino",
        description: "Google, Bing, Yandex and Yahoo agreed on a standardised format: schema.org for providing information about a page and to classify its content. using Structured Data will enable you to improve the way your pages are displayed.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/structured-data-de"
    });
});

app.get("/de/onpage/structured-data-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("structureddata", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Google Structured Data | SEO Berlino",
        description: "Google, Bing, Yandex und Yahoo haben sich auf ein standartisiertes Format geeinigt: mit schema.org werden Informationen über eine Seite bereitgestellt und die Inhalte klassifiziert. Sie können positiv beeinflussen wie Ihre Seiten angezeigt werden, indem Sie Structured Data nutzen.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/structureddata"
    });
});


//
// app.get("/en/research/wordpress", (req, res) => {
//     i18n.setLocale(req, "en");
//     res.render("wordpressseo", {
//         requrl: "/en" + req.originalUrl.substring(3),
//         layout: "main",
//         title: "WordPress SEO | SEO Berlino",
//         description: "In order to efficiently work with WordPress, especially for on-page work, it is crucial to use reliable data, and analytics is key here in  compiling reports which will enable for instance to identify the  number of visits/unique visitors and conversions for specific pages  and site sections, or compare data by device type or browser.",
//         canonical: "https://www.seoberlino.com" + req.originalUrl,
//         alt: "/de/forschung/wordpress"
//     });
// });
//
// app.get("/de/forschung/wordpress", (req, res) => {
//     i18n.setLocale(req, "de");
//     res.render("wordpressseo", {
//         requrl: "/en" + req.originalUrl.substring(3),
//         layout: "mainDE",
//         title: "SEO für WordPress | SEO Berlino",
//         description: "Für WordPress, um im SEO effizient arbeiten zu können, besonders im Bereich Onpage, sind verlässliche Daten unerlässlich.",
//         canonical: "https://www.seoberlino.com" + req.originalUrl,
//         alt: "/en/research/wordpress"
//     });
// });

app.get("/en/research/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis for SEO | SEO Berlino",
        description: "It is important to keep in mind in terms of SEO Competitor Analysis,  that you need to identify your SEO competitors, those which are  leading in terms of organic traffic acquisition, domain authority  and other important SEO factors. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/forschung/mitwettbewerber"
    });
});

app.get("/de/forschung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | SEO Berlino",
        description: "Im Zuge einer SEO-Wettbewerbsanalyse ist es wichtig herauszufinden, welche Ihrer SEO Konkurrenten bei der Organic Traffic Acquisition, der Domain Authority und anderen zentralen SEO-Faktoren führend sind. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/research/competitor-analysis"
    });
});

app.get("/en/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("crawlability", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO - Web Crawl | SEO Berlino",
        description: "xml format sitemap guides Google on how to crawl your site. Although  Google says there is no guarantee the Google bot will follow your  instructions, it is still highly recommended and in most cases,  sitemaps are beneficial.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/crawling"
    });
});

app.get("/de/technical/crawling", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("crawlability", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Web-Crawling | SEO Berlino",
        description: "Crawling hängt unmittelbar mit Indexierung zusammen. Um die Indexierung anzupassen, beziehungsweise zu optimieren, können Sie Google dabei lenken, wie es beim Crawling auf Ihrer Seite vorgeht.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/crawlability"
    });
});

app.get("/en/technical/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("indexation", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Indexation| SEO Berlino",
        description: "Efficient Indexation is key in order to get on well with Google's  spiders. Many believe the more pages indexed the better; that is  only true to a certain level.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/indexierung"
    });
});

app.get("/de/technical/indexierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("indexation", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Indexierung| SEO Berlino",
        description: "Effiziente Indexierung ist für ein gutes Funktionieren mit den Google Spiders entscheidend. Oft wird geglaubt, es gehe darum möglichst viele Seiten indexieren zu lassen, dies ist allerdings nur bedingt richtig. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/indexation"
    });
});
app.get("/en/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internationalisation", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internationalisation | SEO Berlino",
        description: "There are various options when operating internationally: same root  domain, different top level domains, subdomains, how to link between  them, how to simplify the process without negatively affecting your  SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/internationalisierung"
    });
});

app.get("/de/technical/internationalisierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internationalisation", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Internationalisierung | SEO Berlino",
        description: "Wenn Sie international agieren gibt es eine Vielzahl von Möglichkeiten: einheitliche Root-Domain, verschiedene Top-Level-Domains, Subdomains; wie diese untereinander verknüpft werden und wie der Prozess ohne negative Auswirkungen auf Ihr SEO vereinfacht werden kann.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/internationalisation"
    });
});

app.get("/en/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Page Speed | SEO Berlino",
        description: "Page load speed is key in SEO: a very important aspect of Technical SEO. If your site loads fast, Search Engines will prefer it to others.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/pagespeed"
    });
});

app.get("/de/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Seitengeschwindigkeit SEO | SEO Berlino",
        description: "So machen Sie Ihre Seite schneller. Für Page Speed, nutzen Sie schnelle Host-Dienste, einen schnellen DNS (“Domain Name System”) Provider",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/pagespeed"
    });
});

app.get("/en/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("mobile", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Mobile Friendly | SEO Berlino",
        description: "Since a couple of years now, more people search the web on mobile devices than on Desktop. Hence, mobile optimization is critical and the mobile version is now the master version over Desktop for indexation.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/mobilefriendly"
    });
});

app.get("/de/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("mobile", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Mobile First | SEO Berlino",
        description: "Sofern Ihre Webseite nicht für mobile Endgeräte geeignet ist, stellt dies in den meisten Fällen ein Problem dar, denn Google verfährt mittlerweile nach dem Prinzip “mobile-first”,  nutzt für die Indexierung also die Mobile Webseite.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/mobilefriendly"
    });
});

app.get("/en/technical/security", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("https", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is https | SEO Berlino",
        description: "https is now the norm. If your site is still not on https, its migration should be on the top of your SEO to-do list.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/sicherheit"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/sicherheit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("https", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was ist https | SEO Berlino",
        description: "Hyper Text Transfer Protocol Secure (HTTPS) ist die abgesicherte Version von HTTP, dem Protokoll über welches die Daten zwischen Browser und verbundener Webseite laufen. Das “S” in  HTTPS steht für “secure”. Konkret bedeutet es, dass jede Kommunikation zwischen Browser und Webseite verschlüsselt wird.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/security"
    });
});

app.get("/en/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("javascript", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript SEO | SEO Berlino",
        description: "Javascript frameworks such as React and Angular which are client-side rendered are still very complex for Search Engines for indexation as they have trouble crawling them. This causes difficult challenges for SEO Optimization. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical/dynamic-rendering-de"
    });
});

app.get("/de/technical/dynamic-rendering-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("javascript", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Javascript Webframes SEO  | SEO Berlino",
        description: "Bei JavaScript Apps wie React, Angular oder View haben Suchmaschinen wie Google noch immer große Probleme, Crawling und Indexierung auf allen Seiten angemessen durchzuführen. Wenngleich sie ankündigen, im Laufe der Zeit und durch viele Seitenaufrufen (engl. Visits) gute Ergebnisse erzielen zu können, empfehlen sie für die meisten Seiten Dynamic Rendering.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical/dynamicrendering"
    });
});

app.get("/en/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("brandbuilding", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Brand Building | SEO Berlino",
        description: "Your links represent your reputation and relevancy in your domain.  Link building now goes hand in hand with brand building. As you  increased the digital signs of recognition aka links, you are also  building visibility of your brand.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/offpage/brand-building"
    });
});

app.get("/de/offpage/brand-building", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("brandbuilding", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Markenentwicklung | SEO Berlino",
        description: "Brand-building: beste Empfehlung für Inhaltserstellung. Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic und backlinks",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/offpage/brandbuilding"
    });
});

app.get("/en/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("backlinkanalysis", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlink Analysis & Audit | SEO Berlino",
        description: "During a backlink analysis, a report needs to be done with the profile's pros and cons. In addition, it should include an audit  of competitors to understand where you stand. Then a brainstorm can be done on link  targets and content production. Finally work can be prioritised depending on  potential and complexity, setting targets: quantity and quality links  for the next quarters focusing on.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/offpage/backlinkanalysis"
    });
});

app.get("/de/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanalysis", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlink Analyse SEO | SEO Berlino",
        description: "SEO Freelancer & Consultant Backlink Analyse in Berlin. Im Zuge eines Backlink Profil Audits muss ein Bericht über die Vor- und Nachteile des Profils erstellt werden. Zudem sollte es ein Audit der Konkurrenten beinhalten um Sie und Ihre Seite im Wettbewerb verorten zu können. Danach kann ein Brainstorming über angestrebte Links stattfinden.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/offpage/backlinkanalysis"
    });
});

app.get("/en/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("links", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a backlink ? | SEO Berlino",
        description: "Many think the more links, the better but it doesn't actually work that way. Too many low quality and/or spammy links and your website will lose Google credibility and therefore visibility.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/offpage/toxic"
    });
});

app.get("/de/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("links", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was sind backlinks ? | SEO Berlino",
        description: "Viele denken, es gehe immer um eine möglichst große Anzahl von Links, dem ist allerdings nicht so. Zu viele Links von geringer Qualität und Spam senken Ihre Glaubwürdigkeit bei Suchmaschinen (engl. Google Credibility) und schaden somit Ihrer Sichtbarkeit.",
        canonical: "/de/offpage/toxic",
        alt: "/en/offpage/toxic"
    });
});

app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Blog - Search Engine Optimization Blog | SEO Berlino",
        description: "SEO Berlin Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "/en/blog",
        alt: "/de/blog"
    });
});

app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Blog - Search Engine Optimization Blog | SEO Berlino",
        description: "SEO Berlin Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "/en/blog",
        alt: "/de/blog"
    });
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Suchmaschinenoptimierung Blog | SEO Berlino",
        description: "SEO Blog von SEO Berlin, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "/en/blog",
        alt: "/en/blog"
    });
});

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Impressum | SEO Berlino",
        description: "SEO Berlin Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "/de/impressum",
        alt: "/de/impressum"
    });
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Impressum | SEO Berlino",
        description: "SEO Spezialist in Berlin. Impressum für SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/impressum"
    });
});



app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Offpage Optimization SEO Berlin | SEO Berlino",
        description: "Offpage SEO is a key part of SEO and includes in particular Link Building and Brand Building. Create great content to show your expertise, build your brand and attracted links and potential customers.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/offpage"
    });
});

app.get("/de/offpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Offpage Optimierung SEO | SEO Berlino",
        description: "Offpage Optimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/offpage"
    });
});


app.get("/de/audit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("audit", {
        layout: "mainDE",
        title: "SEO Audits: On-page, Off-page, Technical SEO | SEO Berlino",
        description: "Get your site audited with Full SEO Audit that comes with a To-do list (Backlog) with issues classified by priority.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/audit"
    });
});

app.get("/en/audit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("audit", {
        layout: "main",
        description: "Get your site audited with Full SEO Audit that comes with a To-do list (Backlog) with issues classified by priority.",
        title: "SEO Audits by SEO Experts in Berlin | SEO Berlino",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/audit"
    });
});

//////////////////////

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungsea", {
        layout: "mainDE",
        title: "SEA Beratung Berlin | SEO Berlino",
        description: "SEO Audit in Berlin",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungsea", {
        layout: "main",
        title: "SEA Consultancy Berlin | SEO Berlino",
        description: "SEO Audit in Berlin",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/sea"
    });
});



app.get("/en/scrum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungscrum", {
        layout: "mainDE",
        title: "Implement and use scrum for SEO Projects | SEO Berlino",
        description: "Implement Scrum for your SEO Projects. 10 Year-Experienced SEO Expert, certified scrum master and experienced as Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/scrum"
    });
});

app.get("/de/scrum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        layout: "mainDE",
        title: "Scrum-Implementierung für SEO-Projekte | SEO Berlino",
        description: "Implement Scrum for your SEO Projects. 10 Year-Experienced SEO Expert, certified scrum master and experienced as Product owner.",
        canonical: "https://www.seoberlino.com/de/scrum",
        alt: "/en/scrum"
    });
});




app.get("/de/analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratunganalytics", {
        layout: "mainDE",
        title: "SEO Webanalyse Beratung Berlin | SEO Berlino",
        description: "SEO Audit in Berlin",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/analytics"
    });
});

app.get("/en/analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratunganalytics", {
        layout: "main",
        title: "SEO Analytics Consultant Berlin | SEO Berlino",
        description: "SEO Audit in Berlin",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/analytics"
    });
});

app.get("/de/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungcontent", {
        layout: "mainDE",
        title: "SEO Content Beratung Berlin | SEO Berlino",
        description: "SEO Audit in Berlin",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/content"
    });
});

app.get("/en/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungcontent", {
        layout: "main",
        title: "SEO Content Growth Hacking Consultant | SEO Berlino",
        description: "Boost traffic with targeted Content Creation. SEO Growth Hacking by your SEO Consultant in Berlin, over 10 years experience.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/content"
    });
});






///////////////

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Onpage Optimization SEO | SEO Berlino",
        description: "Onpage Optimization refers to any SEO action taken on the website that can be done directly. That concerns first and foremost the optimization of the content and the code of the page. It includes as well the elaboration of the content strategy and potential technical issues.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage"
    });
});

app.get("/de/onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("onpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Onpage Optimierung SEO | SEO Berlino",
        description: "Onpage Optimization refers to any SEO action taken on the website that can be done directly. That concerns first and foremost the optimization of the content and the code of the page. It includes as well the elaboration of the content strategy and potential technical issues.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage"
    });
});

app.get("/en/onpage/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("voicesearch", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Voice Search SEO | SEO Berlino",
        description: "Google Assistant, Alexa are just 2 of those devices which are transforming search. Instead of typing searches, users now more and more ask for their need vocally.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/onpage/sprachsuche"
    });
});

app.get("/de/onpage/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("voicesearch", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Sprachsuche SEO | SEO Berlino",
        description: "Google Assistant, Alexa are just 2 of those devices which are transforming search. Instead of typing searches, users now more and more ask for their need vocally.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/onpage/voicesearch"
    });
});

app.get("/en/research/localseo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Local SEO | SEO Berlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO, keeping in mind that  the most important factor in personalised search results is  location.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/forschung/local-seo-de"
    });
});

app.get("/de/forschung/local-seo-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Local SEO Optimierung | SEO Berlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO, keeping in mind that  the most important factor in personalised search results is  location.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/research/localseo"
    });
});





app.get("/en/technical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("technical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Technical SEO | SEO Berlin | SEO Berlino",
        description: "Technical SEO by a SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/technical"
    });
});

app.get("/de/technical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("technical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was ist Technisches SEO | SEO Berlino",
        description: "Technisches SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern (engl. Search Engine Spiders) helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten und somit das natürliche Ranking zu verbessern.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/technical"
    });
});





app.get("/en/seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Search Engine Optimization Tips | SEO Berlino",
        description: "SEO Definition: Analysis & Optimization. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo"
    });
});

app.get("/de/seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Suchmaschinenoptimierung Tipps | SEO Berlino",
        description: "SEO Definition, Optimierung und Analyse. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo"
    });
});

app.get("/de/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Datenschutz | SEO Berlino",
        description: "SEO Berlin, Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "/de/datenschutz",
        alt: "/de/datenschutz"
    });
});

app.get("/en/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: "/de" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Datenschuzt | SEO Berlino",
        description: "SEO Berlin, Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "/de/datenschutz",
        alt: "/de/datenschutz"
    });
});

app.get("/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/forschung/webanalyse", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/freeaudit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seonews", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/backlinks", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/backlinks", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/freeaudit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/partnership", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/partnership", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical/ladegeschwindigkeit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("de/on-page/structured-data-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/research/sea", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/forschung/suchmaschinenwerbung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/off-page", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("de/off-page/backlink-analyse", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technik/security", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/onpage/content", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/technical/security", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/seo-tips", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-for-small-businesses", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-for-small-businesses", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});




app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "Get in touch - SEO Freelancer in Berlin | SEO Berlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/contact"
    });
});

app.get("/fr/contact", (req, res) => {
    i18n.setLocale(req, "fr");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainFR",
        title: "SEO Expert Berlin - Contact | SEO Berlino",
        description: "SEO Expert basé à Berlin. 10 années d'expérience: SEO, Analyse Web & SEA. MBA, Scrum et dévelopement web.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/contact"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDEHP",
        title: "SEO Experte in Berlin | Kontakt SEO Berlin",
        description: "SEO Consultant Experte in Berlin. SEO Experte Freelancer in Berlin. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/contact"
    });
});



app.get("/de/seo-beratung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Freelancer Beratung: Audit, Web Analyse | SEO Berlino",
        description: "SEO Beratung in Berlin. SEO Experte. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren . Ein komplettes Audit deckt jedoch alle Aspekte des über die Jahre sehr komplex gewordenen SEO ab.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-consultancy"
    });
});

app.get("/en/seo-consultancy", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "/en" + req.originalUrl.substring(3),
        title: "SEO Consultant: SEO Services | SEO Berlino",
        layout: "main",
        description: "SEO & Analytics Consultancy services: SEO, Analytics, SEA and scrum implementation. 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross…",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-beratung"
    });
});

//////lexicalpages////////

app.get("/en/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("nofollow", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Nofollow Links | SEO Berlino",
        description: "Understand NoFollow Links and how they affect your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/nofollow"
    });
});

app.get("/de/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("nofollow", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Nofollow Links | SEO Berlino",
        description: "Understand NoFollow Links and how they affect your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/nofollow"
    });
});


app.get("/en/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("rankbrain", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Rankbrain | SEO Berlino",
        description: "Understand Rankbrain and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/rankbrain"
    });
});

app.get("/de/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("rankbrain", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Was beudeutet Rankbrain | SEO Berlino",
        description: "Was beudeutet Rankbrain und warum ist das für SEO wichtig?",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/rankbrain"
    });
});

app.get("/en/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("altattribute", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Alt Attribute for SEO Images | SEO Berlino",
        description: "Understand Alt Attribute and how can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/alt-attribute"
    });
});

app.get("/de/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("altattribute", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Alt Attribute für SEO Bildoptimierung | SEO Berlino",
        description: "Alt Attribute für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/alt-attribute"
    });
});

app.get("/en/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("amppages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "AMP for SEO | SEO Berlino",
        description: "Understand AMP and how can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/amp-pages"
    });
});

app.get("/de/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("amppages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "AMP (Accelerated Mobile Pages) für SEO | SEO Berlino",
        description: "AMP (Accelerated Mobile Pages) für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/amp-pages"
    });
});

app.get("/en/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("canonical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Canonicals for SEO | SEO Berlino",
        description: "Understand Canonicals work and how they can help you improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/canonical"
    });
});

app.get("/de/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("canonical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Canonicals für SEO | SEO Berlino",
        description: "Canonicals für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/canonical"
    });
});

app.get("/en/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlekwtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google Keyword Planner for SEO | SEO Berlino",
        description: "Understand Google's Keyword PLanner and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlekwtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Google Keyword Planner für Suchmaschinenoptimierung | SEO Berlino",
        description: "Google Keyword Planner für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlepagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Google PageSpeed für Suchmaschinenoptimierung | SEO Berlino",
        description: "Google PageSpeed für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlepagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google PageSpeed for SEO | SEO Berlino",
        description: "Google PageSpeed for SEO is a very important tool. Learn here how to use it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("hreflang", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "hreflang for SEO | SEO Berlino",
        description: "Understand how hreflang work and how they can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/hreflang"
    });
});

app.get("/de/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("hreflang", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "hreflang für SEO | SEO Berlino",
        description: "hreflang für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/hreflang"
    });
});

app.get("/en/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("longtail", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Long Tail | SEO Berlino",
        description: "Understand what is long-tail and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/long-tail"
    });
});

app.get("/de/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("longtail", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was bedeutet Long Tail für SEO | SEO Berlino",
        description: "Long tail und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/long-tail"
    });
});

app.get("/en/lexical/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("robots", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Robots.txt file | SEO Berlino",
        description: "Understand how Robots.txt works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/robots"
    });
});

app.get("/de/lexical/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("robots", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was bedeutet Robots.txt für SEO | SEO Berlino",
        description: "Robots.txt und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/robots"
    });
});

app.get("/en/lexical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lexical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Lexicon | SEO Berlino",
        description: "SEO Lexicon for SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical"
    });
});

app.get("/error", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("error", {
        layout: "mainHP",
        title: "Error",
        description: "",
    });
});

app.get("/success", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("success", {
        layout: "mainHP",
        title: "Success!",
        description: "",
    });
});

app.get("/de/lexical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lexical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Lexicon | SEO Berlino",
        description: "SEO Lexicon für SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical"
    });
});

app.get("/en/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchconsole", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Search Console | SEO Berlino",
        description: "Understand how to use Google's Search Console and how it can help you to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/search-console"
    });
});

app.get("/de/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchconsole", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Wie funktioniert Search Console für SEO | SEO Berlino",
        description: "Google's Search Console und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/search-console"
    });
});

app.get("/en/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchvolume", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Search Volume and how to use it for SEO | SEO Berlino",
        description: "Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/search-volume"
    });
});

app.get("/de/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchvolume", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was bedeutet Search Volume für SEO | SEO Berlino",
        description: "Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/search-volume"
    });
});

app.get("/en/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("sitemaps", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Sitemaps | SEO Berlino",
        description: "Understand how Sitemaps work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/sitemaps"
    });
});

app.get("/de/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("sitemaps", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Wie funktionieren Sitemaps für SEO | SEO Berlino",
        description: "Understand how Sitemaps work and how they can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/sitemaps"
    });
});

app.get("/en/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("noindex", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex | SEO Berlino",
        description: "Understand how noindex works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/noindex"
    });
});

app.get("/de/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("noindex", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Wie funktionieren noindex für SEO | SEO Berlino",
        description: "Understand how noindex works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/noindex"
    });
});

app.get("/en/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("redirects", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a redirect and how to use it for SEO | SEO Berlino",
        description: "Understand how redirects work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/redirects"
    });
});

app.get("/de/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("redirects", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Wie funktionieren redirects für SEO | SEO Berlino",
        description: "Understand how redirects work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/redirects"
    });
});

app.get("/en/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lighthouse", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a Lighthouse and how to use it for SEO | SEO Berlino",
        description: "Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/lighthouse"
    });
});

app.get("/de/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lighthouse", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Wie funktioniert Lighthouse für SEO | SEO Berlino",
        description: "Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/lighthouse"
    });
});

app.get("/en/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("removeurltool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove url Tool? | SEO Berlino",
        description: "Understand how the Remove url Tool works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/remove-url-tool"
    });
});

app.get("/de/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("removeurltool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Wie funktioniert Remove URL Tool| SEO Berlino",
        description: "Understand how the Remove url Tool work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/remove-url-tool"
    });
});

app.get("/en/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("disavowtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Google'S Disavow Tool and how to use it for SEO | SEO Berlino",
        description: "Understand how the Disavow Tool works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/lexical/disavow-tool"
    });
});

app.get("/de/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("disavowtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Links für ungültig erklären | Disavow Tool | SEO Berlino",
        description: "Disavow Tool und Suchmaschinenoptimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/lexical/disavow-tool"
    });
});
//////blog pages/////////
app.get("/en/article/linkbuilding-in-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2019 | SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/article/seo-in-asia-korea-china-japan-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogasia", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea in 2019 | SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog2", {
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "SEO Beyond Mobile First | SEO Berlin | SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog5", {
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "SEO Voice Search Challenges| SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog6", {
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "Why you need to implement Structured Data | SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog7", {
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "Link Building to Brand Building | SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog8", {
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "How to get those first links | SEO Berlin | SEO Berlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
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



app.get("/de/off-page/toxic", function(request, response) {
    response.writeHead(301, {
        Location: "/de/offpage/toxic",
        Expires: new Date().toGMTString()
    });
    response.end();
});



var nodemailer = require('nodemailer');


app.post("/email", (req, res) => {
    console.log(req.body.name)
    nodemailer.createTestAccount((error, account) => {
        const htmlEmail = `
        <h3> Contact Details </h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

        let transporter = nodemailer.createTransport({
            host: 'smtp.mailgun.org',
            port: 465,
            secure: true,
            auth: {
                user: secrets.EMAIL_USER,
                pass: secrets.EMAIL_PASS
            }
        });


        let mailOptions = {
            from: secrets.EMAIL_USER,
            to: secrets.MAIL_TO,
            subject: "New Message from seoberlino",
            text: req.body.message,
            html: htmlEmail
        }; //closemailoptions
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("error sending mail", error);

                res.writeHead(301, {
                    Location: "/error"
                });
                res.end();
            } else {
                res.writeHead(301, {
                    Location: "/success"
                });
                res.end();
            }

        }); //transporter
    });

}); //main
app.all("*", function(req, res) {
    res.writeHead(404);
    res.end();
});
// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));

////////////////DO NOT TOUCH/////////////////////////