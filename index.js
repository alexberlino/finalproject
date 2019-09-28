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
    locales: ["en", "de"],
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
        requrl: "/en",
        layout: "mainHPNoIndex",
        title: "SEO Consultant, Agile and Analytics Expert | SEO Berlino",
        description: "SEO Expert, 10 years experience €100m + multinationals:  Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de",
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "/en",
        layout: "mainDEHP",
        title: "SEO Berater: Consultant & Freelancer | SEO Berlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Experte, 10 Jahre Erfahrung: Montblanc, Ricoh, Spreadshirt, Holberton School, MSF, Red Cross, etc",
        alt: "https://www.seoberlino.com/en",
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "/en",
        layout: "mainHP",
        title: "SEO Consultant, Agile and Analytics Expert | SEO Berlino",
        description: "SEO Expert, 10 years experience €100m + multinationals:  Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de",
    });
});



// main pages//////////



app.get("/de/seo-beratung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "/en/seo-consultancy",
        layout: "mainDE",
        title: "SEO Beratung: Audit, Web Analyse | SEO Berlino",
        description: "SEO & Analytics Experte: SEO, Analytics, SEA und Scrum Implementierung. 10 Jahre Erfahrung mit Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-consultancy"
    });
});

app.get("/en/seo-consultancy", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "/en" + req.originalUrl.substring(3),
        title: "SEO Consultant: Audits & Analytics | SEO Berlino",
        layout: "main",
        description: "SEO & Analytics Expert: SEO, Analytics, SEA and scrum implementation. 10 years experience with Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-beratung"
    });
});



app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Blog - Search Engine Optimization Blog | SEO Berlino",
        description: "SEO Berlin Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog",
        alt: "https://www.seoberlino.com/de/blog"
    });
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "/en/blog",
        layout: "mainNoAltNoIndex",
        title: "Suchmaschinenoptimierung Blog | SEO Berlino",
        description: "SEO Blog von SEO Berlin, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com/en/blog",
        alt: "https://www.seoberlino.com/en/blog"
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
        alt: "https://www.seoberlino.com/de/seo"
    });
});

app.get("/de/seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Suchmaschinenoptimierung Tipps | SEO Berlino",
        description: "SEO Definition, Optimierung und Analyse. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "Profile and Contact - SEO Freelancer in Berlin | SEO Berlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});




/////CASE Studies


app.get("/en/casestudy", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudy", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "SEO Berlin Start-up Case Studies | SEO Berlino",
        description: "SEO Berlin Start-up Case Studies: traffic, brand dependance, main keywords, technical performance.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy"
    });
});

app.get("/en/casestudy/fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyfromatob", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB: SEO Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/fromatob"
    });
});

app.get("/en/casestudy/zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyzalando", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando: SEO Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/zalando"
    });
});


app.get("/en/casestudy/wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudywooga", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga: SEO Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/wooga"
    });
});

app.get("/en/casestudy/juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyjuniqe", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe: SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/juniqe"
    });
});

app.get("/en/casestudy/modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudymodomoto", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/modomoto"
    });
});

app.get("/en/casestudy/n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyn26", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 : SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/n26"
    });
});

app.get("/en/casestudy/hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhellofresh", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Hello Fresh: SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Hello Fresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/hellofresh"
    });
});



app.get("/en/casestudy/hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhometogo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Home ToGo: SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Home To Go: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/hometogo"
    });
});

//////ONPAGE PAGES
app.get("/en/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("duplicatecontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Duplicate Content SEO | SEO Berlino",
        description: "Duplicate Content and Semantics for SEO. Read more about the dangers of Duplicate Content and how to avoid it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/duplicatecontent"
    });
});


app.get("/de/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("duplicatecontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Duplizierter Inhalt | Duplicate Content SEO | SEO Berlino",
        description: "Suchmaschinen mögen keine Indexierung von Duplicate Content. Anschließend ist es wichtig zu entscheiden, welche Seite Ihre “Master Page” ist ",
        canonical: "https://www.seoberlino.com/de/onpage/duplicatecontent",
        alt: "https://www.seoberlino.com/en/onpage/duplicatecontent"
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
        alt: "https://www.seoberlino.com/de/onpage/bildoptimierung"
    });
});

app.get("/de/onpage/bildoptimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("images", {
        requrl: "/en/onpage/images",
        layout: "mainDE",
        title: "Bildoptimierung SEO | SEO Berlino",
        description: "Für viele Wirtschaftszweige ist die Bildersuche noch immer ein wichtiger Unterbereich des SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/images"
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
        alt: "https://www.seoberlino.com/de/onpage/interne-verlinkung"
    });
});

app.get("/de/onpage/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internallinking", {
        requrl: "/en/onpage/internallinking",
        layout: "mainDE",
        title: "Interne Verlinkung SEO | SEO Berlino",
        description: "Interne Verlinkungen sind der Kern des Onpage SEO. Verstehen, wie das Crawling Ihrer Webseite durch den Google Bot funktioniert.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/internallinking"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Keyword Research and Keyword Tools for SEO | SEO Berlino",
        description: "Keyword Research is key to understand how your potential clients are searching for your product or services.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/keyword-recherche"
    });
});

app.get("/de/onpage/keyword-recherche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("keyword", {
        requrl: "/en/onpage/keywordresearch",
        layout: "mainDE",
        title: "Keyword Recherche & Keyword Tools für SEO | SEO Berlino",
        description: "Wenn Sie eingehend verstehen möchten, wie Ihre potenziellen Kunden nach den von Ihnen angebotenen Produkten, ist es unerlässlich.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/keywordresearch"
    });
});

app.get("/en/onpage/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("metas", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Meta Tags and SEO | SEO Berlino",
        description: "Page titles are often neglected, but are really important and very  simple to implement. That means you need to have them spot on.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/metas-tags-de"
    });
});

app.get("/de/onpage/metas-tags-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("metas", {
        requrl: "/en/onpage/metas",
        layout: "mainDE",
        title: "Meta Tags und wie es funktioniert | SEO Berlino",
        description: "Seitentitel werden oft vernachlässigt, sind aber wirklich wichtig und sehr einfach zu implementieren. Das bedeutet, dass du sie auf den Punkt bringen musst.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/metas"
    });
});

app.get("/en/onpage/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("content", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Content - Content Marketing | SEO Berlino",
        description: "The content is the value you want to create. If you content has no value to the user or is duplicate, your SEO will be poor.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/inhalt"
    });
});

app.get("/de/onpage/inhalt", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("content", {
        requrl: "/en/onpage/content",
        layout: "mainDE",
        title: "SEO Content (Inhalt) -  SEO Marketing | SEO Berlino",
        description: "Der Inhalt ist der Wert, den Sie schaffen wollen. Wenn Ihr Inhalt für den Benutzer keinen Wert hat oder doppelt ist, wird Ihre SEO schlecht sein.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/content"
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
        alt: "https://www.seoberlino.com/de/onpage/landingpages"
    });
});

app.get("/de/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("landingpages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Landingpage Optimierung | SEO Berlino",
        description: "Die Keywords, die Sie als die wichtigsten für Ihre Seite ausgewählt haben sollten für Inhalte und allgemeine Onpage Optimierung genutzt werden.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/landingpages"
    });
});

app.get("/en/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("structureddata", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Structured Data | SEO Berlino",
        description: "Google, Bing, Yandex and Yahoo agreed on a standardised format: schema.org for providing information about a page and to classify its content.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/structured-data-de"
    });
});

app.get("/de/onpage/structured-data-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("structureddata", {
        requrl: "/en/onpage/structureddata",
        layout: "mainDE",
        title: "Google Structured Data | SEO Berlino",
        description: "Google, Bing, Yandex und Yahoo haben sich auf ein standartisiertes Format geeinigt: mit schema.org werden Informationen über eine Seite bereitgestellt und die Inhalte klassifiziert.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/structureddata"
    });
});

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Onpage Optimization SEO | SEO Berlino",
        description: "Onpage Optimization refers to any SEO action taken on the website: content and and code of the page.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage"
    });
});

app.get("/de/onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("onpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Onpage Optimierung SEO | SEO Berlino",
        description: "Onpage Optimization bezieht sich auf alle SEO-Maßnahmen auf der Website, die direkt durchgeführt werden können.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage"
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
        alt: "https://www.seoberlino.com/de/onpage/sprachsuche"
    });
});

app.get("/de/onpage/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("voicesearch", {
        requrl: "/en/onpage/voicesearch",
        layout: "mainDE",
        title: "Sprachsuche SEO wie es funktioniert | SEO Berlino",
        description: "Google Assistant, Alexa sind nur 2 dieser Geräte, die die Suche verändern. Anstatt Suchen zu tippen, fragen die Benutzer immer häufiger nach ihrem Bedarf.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/voicesearch"
    });
});


/////RESEARCH PAGES

app.get("/en/research/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis for SEO | SEO Berlino",
        description: "SEO Competitor Analysis is important to gather information from the industry leaders: keywords, site structure, backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/mitwettbewerber"
    });
});

app.get("/de/forschung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor", {
        requrl: "/en/research/competitor-analysis",
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | SEO Berlino",
        description: "Die SEO-Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/competitor-analysis"
    });
});

app.get("/en/research/localseo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How to deal with Local SEO | SEO Berlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/local-seo-de"
    });
});

app.get("/de/forschung/local-seo-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo", {
        requrl: "/en/research/localseo",
        layout: "mainDE",
        title: "Local SEO Optimierung | SEO Berlino",
        description: "Insbesondere für lokale Unternehmen ist es von größter Bedeutung, Ihre SEO-Gesamtstrategie auf lokale SEO auszurichten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/localseo"
    });
});



////TECHNICAL PAGES

app.get("/en/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("crawlability", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO - Web Crawl | SEO Berlino",
        description: "xml format sitemap guides Google on how to crawl your site. There is no guarantee however that the Google bot will follow your instructions.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/crawling"
    });
});

app.get("/de/technical/crawling", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("crawlability", {
        requrl: "/en/technical/crawlability",
        layout: "mainDE",
        title: "Web-Crawling wie es funktioniert | SEO Berlino",
        description: "Crawling hängt unmittelbar mit Indexierung zusammen. Um die Indexierung anzupassen, beziehungsweise zu optimieren, können Sie Google dabei lenken.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/crawlability"
    });
});

app.get("/en/technical/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("indexation", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO and the importance of Indexation| SEO Berlino",
        description: "Efficient Indexation is key in order to get on well with Google's spiders. The right number depends on your site and objectives.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/indexierung"
    });
});

app.get("/de/technical/indexierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("indexation", {
        requrl: "/en/technical/indexation",
        layout: "mainDE",
        title: "SEO Indexierung wie es funktioniert | SEO Berlino",
        description: "Effiziente Indexierung ist für ein gutes Funktionieren mit den Google Spiders entscheidend.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/indexation"
    });
});
app.get("/en/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internationalisation", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internationalisation | SEO Berlino",
        description: "There are various options when operating internationally: same root  domain, different top level domains, subdomains, how to link between them, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/internationalisierung"
    });
});

app.get("/de/technical/internationalisierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internationalisation", {
        requrl: "/en/technical/internationalisation",
        layout: "mainDE",
        title: "SEO Internationalisierung | SEO Berlino",
        description: "Wenn Sie international agieren gibt es eine Vielzahl von Möglichkeiten: einheitliche Root-Domain, verschiedene Top-Level-Domains, Subdomains",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/internationalisation"
    });
});

app.get("/en/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Page Speed and SEO | SEO Berlino",
        description: "Page load speed is key in SEO: a very important aspect of Technical SEO. If your site loads fast, Search Engines will prefer it to others.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/pagespeed"
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
        alt: "https://www.seoberlino.com/en/technical/pagespeed"
    });
});

app.get("/en/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("mobile", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Mobile Friendly | SEO Berlino",
        description: "It is now critical for a site to be mobile-friendly. Otherwise is a close to a no-go resulting in poor SEO performance.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/mobilefriendly"
    });
});

app.get("/de/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("mobile", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Mobile First | SEO Berlino",
        description: "Es ist jetzt entscheidend, dass ein Standort mobil einsetzbar ist. Andernfalls ist es fast unmöglich, was zu einer schlechten SEO-Leistung führt.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/mobilefriendly"
    });
});

app.get("/en/technical/security", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("https", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is https and its impact on SEO | SEO Berlino",
        description: "https is now the norm. If your site is still not on https, its migration should be on the top of your SEO to-do list.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/sicherheit"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/sicherheit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("https", {
        requrl: "/en/technical/security",
        layout: "mainDE",
        title: "Was ist https wie es funktioniert  | SEO Berlino",
        description: "HTTPS ist die abgesicherte Version von HTTP, dem Protokoll über welches die Daten zwischen Browser und verbundener Webseite laufen.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/security"
    });
});

app.get("/en/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("javascript", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and how it affects SEO | SEO Berlino",
        description: "Javascript frameworks such as React and Angular which are client-side rendered are still very complex for Search Engines for indexation.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/dynamic-rendering-de"
    });
});

app.get("/de/technical/dynamic-rendering-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("javascript", {
        requrl: "/en/technical/dynamicrendering",
        layout: "mainDE",
        title: "Javascript Webframes SEO  | SEO Berlino",
        description: "Bei JavaScript Apps wie React, Angular oder View haben Suchmaschinen wie Google noch immer große Probleme mit Crawling und Indexierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/dynamicrendering"
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
        alt: "https://www.seoberlino.com/de/technical"
    });
});

app.get("/de/technical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("technical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was ist Technisches SEO | SEO Berlino",
        description: "Technisches SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical"
    });
});



/////OFFPAGES

app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Offpage Optimization SEO Berlin | SEO Berlino",
        description: "Offpage SEO is a key part of SEO and includes in particular Link Building and Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage"
    });
});

app.get("/de/offpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Offpage Optimierung SEO | SEO Berlino",
        description: "Offpage SEO ist ein wichtiger Bestandteil von SEO und umfasst insbesondere Link Building und Brand Building. Erstellen Sie großartige Inhalte, um Ihr Fachwissen zu präsentieren, bauen Sie Ihre Marke auf und ziehen Sie Links und potenzielle Kunden an.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage"
    });
});


app.get("/en/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("brandbuilding", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Brand Building | SEO Berlino",
        description: "Your links represent your reputation and relevancy in your domain.  Link building now goes hand in hand with brand building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage/brand-building"
    });
});

app.get("/de/offpage/brand-building", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("brandbuilding", {
        requrl: "/en/offpage/brandbuilding",
        layout: "mainDE",
        title: "SEO Markenentwicklung | SEO Berlino",
        description: "Brand-building: beste Empfehlung für Inhaltserstellung. Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic und backlinks",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/brandbuilding"
    });
});

app.get("/en/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("backlinkanalysis", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlink Analysis & Audit | SEO Berlino",
        description: "During a backlink analysis, a report needs to be done with the profile's pros and cons. It should also include an audit of competitors'.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage/backlinkanalysis"
    });
});

app.get("/de/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanalysis", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlink Analyse SEO | SEO Berlino",
        description: "Während einer Backlink-Analyse muss ein Bericht mit den Vor- und Nachteilen des Profils erstellt werden. Es sollte auch eine Auditierung von Wettbewerbern beinhalten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/backlinkanalysis"
    });
});

app.get("/en/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("links", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a backlink? | SEO Berlino",
        description: "Many think the more links, the better but it doesn't actually work that way. Too many low quality and/or spammy links will damage your SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage/toxic"
    });
});

app.get("/de/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("links", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was sind backlinks? | SEO Berlino",
        description: "Viele denken, es gehe immer um eine möglichst große Anzahl von Links, dem ist allerdings nicht so.",
        canonical: "https://www.seoberlino.com/de/offpage/toxic",
        alt: "https://www.seoberlino.com/en/offpage/toxic"
    });
});


////OTHER PAGES

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Berlino",
        description: "SEO Berlin Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "https://www.seoberlino.com/de/impressum"
    });
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Berlino",
        description: "SEO Spezialist in Berlin. Impressum für SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "https://www.seoberlino.com/en/impressum"
    });
});

app.get("/de/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Datenschutz | SEO Berlino",
        description: "SEO Berlin, Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: "https://www.seoberlino.com/de/datenschutz",
        alt: "https://www.seoberlino.com/de/datenschutz"
    });
});


///AUDIT PAGES


app.get("/de/audit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("audit", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Freelancer: On-page, Off-page, Technical SEO | SEO Berlino",
        description: "Lassen Sie Ihre Website mit Full SEO Audit auditieren, das mit einer To-Do-Liste (Backlog) mit nach Priorität klassifizierten Problemen geliefert wird.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/audit"
    });
});

app.get("/en/audit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("audit", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        description: "Get your site audited with Full SEO Audit that comes with a To-do list (Backlog) with issues classified by priority.",
        title: "SEO Freelancer for SEO Audits in Berlin | SEO Berlino",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/audit"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungsea", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEA Beratung Berlin | SEO Berlino",
        description: "SEA-Experte für SEA-Projekte: Google Ads, Facebook Ads, Instagram. Einrichtung, Test, Analyse und Optimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungsea", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEA Consultancy Berlin | SEO Berlino",
        description: "SEA Expert for SEA Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/sea"
    });
});

app.get("/de/analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratunganalytics", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Webanalyse Beratung Berlin | SEO Berlino",
        description: "SEO Analytics Services in Berlin, SEO Expert mit über 10 Jahren Erfahrung mit Unternehmen wie Montblanc, Spreadshirt und Ricoh.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/analytics"
    });
});

app.get("/en/analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratunganalytics", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Analytics Consultant Berlin | SEO Berlino",
        description: "SEO Analytics services in Berlin, SEO Expert with over 10 years experience with companies such as Montblanc, Spreadshirt and Ricoh.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/analytics"
    });
});

app.get("/de/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungcontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Content Beratung Berlin | SEO Berlino",
        description: "Steigern Sie den Traffic durch gezielte Inhaltserstellung. SEO Growth Hacking durch Ihren SEO-Berater in Berlin, über 10 Jahre Erfahrung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/content"
    });
});

app.get("/en/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungcontent", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Content Growth Hacking Consultant | SEO Berlino",
        description: "Boost traffic with targeted Content Creation. SEO Growth Hacking by your SEO Consultant in Berlin, over 10 years experience.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/content"
    });
});


//SCRUM PAGES



app.get("/en/scrum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungscrum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Scrum Master in Berlin, scrum for SEO Projects | SEO Berlino",
        description: "Implement Scrum for your SEO Projects. 10 Year-Experienced SEO Expert, certified scrum master and experienced as Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/scrum"
    });
});

app.get("/de/scrum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Scrum Master -Implementierung für SEO-Projekte | SEO Berlino",
        description: "Implementieren Sie Scrum für Ihre SEO-Projekte. 10 Jahre erfahrener SEO-Experte, zertifizierter Scrum-Master und erfahren als Product Owner.",
        canonical: "https://www.seoberlino.com/de/scrum",
        alt: "https://www.seoberlino.com/en/scrum"
    });
});

app.get("/en/scrum/pillars", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumpillars", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Scrum's 3 Pillars | SEO Berlino",
        description: "Scrum 3 Pillars. Learn about Scrum and how to Implement Scrum it for your SEO Projects.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/scrum"
    });
});

app.get("/en/scrum/team", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumteam", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Teams | SEO Berlino",
        description: "More about the Scrum Team and how to implement it. Agile Expert in Berlin.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});

app.get("/en/scrum/events", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumevents", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Events | SEO Berlino",
        description: "Learn about the Scrum Events and how to Implement scrum for your SEO Projects.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});


app.get("/en/scrum/artifacts", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumartifacts", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Artifacts | SEO Berlino",
        description: "Learn about scrum artifacts and Implement Scrum for your SEO Projects. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});



app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDEHP",
        title: "SEO Experte in Berlin | Kontakt SEO Berlin",
        description: "SEO Consultant Experte in Berlin. SEO Experte Freelancer in Berlin. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/en/contact",
        alt: "https://www.seoberlino.com/de/contact"
    });
});



////EMAIL PAGES

app.get("/error", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("error", {
        layout: "mainHPNoIndex",
        title: "Error",
        description: "This page should not be indexed so please ignore it.",
    });
});

app.get("/success", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("success", {
        layout: "mainHPNoIndex",
        title: "Success!",
        description: "This page should not be indexed so please ignore it.",
    });
});


////LEXICON PAGES

app.get("/en/lexical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lexical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Lexicon: About SEO Jargon | SEO Berlino",
        description: "SEO Lexicon for SEO. Learn about SEO Jargon and what some terms mean. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical"
    });
});

app.get("/de/lexical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lexical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "SEO Lexicon und SEO Jargon | SEO Berlino",
        description: "SEO Lexicon für SEO. Find out about SEO and all those words which can scare you.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical"
    });
});


app.get("/en/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("nofollow", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Nofollow Links and SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand NoFollow Links and how they affect your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/nofollow"
    });
});

app.get("/de/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("nofollow", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Nofollow Links wie es funktioniert | SEO Berlino",
        description: "SEO Lexicon für SEO. SEO Lexical about SEO Jargon. Understand NoFollow Links and how they affect your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/nofollow"
    });
});


app.get("/en/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("rankbrain", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Rankbrain | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand Rankbrain and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/rankbrain"
    });
});

app.get("/de/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("rankbrain", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was beudeutet Rankbrain | SEO Berlino",
        description: "SEO Lexicon für SEO. Was beudeutet Rankbrain und warum ist das für SEO wichtig?",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/rankbrain"
    });
});

app.get("/en/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("altattribute", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Alt Attribute for SEO Images | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand Alt Attribute and how can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/alt-attribute"
    });
});

app.get("/de/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("altattribute", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Alt Attribute für SEO Bildoptimierung | SEO Berlino",
        description: "SEO Lexicon für SEO. Alt Attribute für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/alt-attribute"
    });
});

app.get("/en/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("amppages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Accelerated Mobile Pages and SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand AMP and how can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/amp-pages"
    });
});

app.get("/de/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("amppages", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "AMP (Accelerated Mobile Pages) für SEO | SEO Berlino",
        description: "SEO Lexicon für SEO. AMP (Accelerated Mobile Pages) für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/amp-pages"
    });
});

app.get("/en/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("canonical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Canonicals for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand Canonicals work and how they can help you improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/canonical"
    });
});

app.get("/de/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("canonical", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Canonicals für SEO | SEO Berlino",
        description: "SEO Lexicon für SEO. Canonicals für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/canonical"
    });
});

app.get("/en/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlekwtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google Keyword Planner for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand Google's Keyword PLanner and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlekwtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Google Keyword Planner für Suchmaschinenoptimierung | SEO Berlino",
        description: "SEO Lexicon für SEO. Google Keyword Planner für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlepagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Google PageSpeed für Suchmaschinenoptimierung | SEO Berlino",
        description: "Google PageSpeed für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlepagespeed", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google PageSpeed for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Google PageSpeed for SEO is a very important tool. Learn here how to use it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("hreflang", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "hreflang for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how hreflang work and how they can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/hreflang"
    });
});

app.get("/de/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("hreflang", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "hreflang für SEO | SEO Berlino",
        description: "hreflang für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/hreflang"
    });
});

app.get("/en/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("longtail", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Long Tail | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand what is long-tail and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/long-tail"
    });
});

app.get("/de/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("longtail", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Long Tail für SEO | SEO Berlino",
        description: "SEO Lexicon für SEO. Long tail und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/long-tail"
    });
});

app.get("/en/lexical/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("robots", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Robots.txt file | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how Robots.txt works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/robots"
    });
});

app.get("/de/lexical/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("robots", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Robots.txt für SEO | SEO Berlino",
        description: "SEO Lexicon für SEO. Robots.txt und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/robots"
    });
});

app.get("/en/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchconsole", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Search Console | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how to use Google's Search Console and how it can help you to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/search-console"
    });
});

app.get("/de/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchconsole", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Search Console für SEO | SEO Berlino",
        description: "SEO Lexicon über SEO Jargon. Google's Search Console und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/search-console"
    });
});

app.get("/en/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchvolume", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Search Volume and how to use it for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/search-volume"
    });
});

app.get("/de/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchvolume", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Search Volume für SEO | SEO Berlino",
        description: "SEO Lexicon über SEO Jargon. Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/search-volume"
    });
});

app.get("/en/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("sitemaps", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Sitemaps | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how Sitemaps work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/sitemaps"
    });
});

app.get("/de/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("sitemaps", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren Sitemaps für SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how Sitemaps work and how they can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/sitemaps"
    });
});

app.get("/en/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("noindex", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex and SEO | SEO Berlino",
        description: "SEO Lexicon about SEO Jargon. Understand how noindex works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/noindex"
    });
});

app.get("/de/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("noindex", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren noindex für SEO | SEO Berlino",
        description: "SEO Lexicon über SEO Jargon. Verstehen Sie, wie noindex funktioniert und wie es Ihre SEO verbessern kann.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/noindex"
    });
});

app.get("/en/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("redirects", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a redirect and how to use it for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how redirects work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/redirects"
    });
});

app.get("/de/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("redirects", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren redirects für SEO | SEO Berlino",
        description: "SEO Lexikalisch über SEO Jargon. Verstehen Sie, wie Redirects funktionieren und wie sie Ihre SEO verbessern können.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/redirects"
    });
});

app.get("/en/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lighthouse", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a Lighthouse and how to use it for SEO | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/lighthouse"
    });
});

app.get("/de/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lighthouse", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Lighthouse für SEO | SEO Berlino",
        description: "SEO Lexicon über SEO Jargon. SEO Lexical about SEO Jargon. Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/lighthouse"
    });
});

app.get("/en/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("removeurltool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove url Tool? | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how the Remove url Tool works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/remove-url-tool"
    });
});

app.get("/de/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("removeurltool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Remove URL Tool| SEO Berlino",
        description: "SEO Lexicon über SEO Jargon. Understand how the Remove url Tool work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/remove-url-tool"
    });
});

app.get("/en/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("disavowtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Disavow Tool and how to use it | SEO Berlino",
        description: "SEO Lexical about SEO Jargon. Understand how the Disavow Tool works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/disavow-tool"
    });
});

app.get("/de/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("disavowtool", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Disavow Tool und wie es funktioniert| SEO Berlino",
        description: "SEO Lexicon über SEO Jargon. Disavow Tool und Suchmaschinenoptimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/disavow-tool"
    });
});



//////blog pages/////////
app.get("/en/article/linkbuilding-in-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2019 | SEO Berlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/article/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogvoice", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Berlino",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/article/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogclutch", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEOBerlino Top SEO Services Company in Germany | SEO Berlino",
        description: "Clutch has selected SEO Berlino as one of the top SEO companies in Germany for 2019.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/article/seo-in-asia-korea-china-japan-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogasia", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea in 2019 | SEO Berlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog2", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "SEO Beyond Mobile First | SEO Berlin | SEO Berlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog5", {
        requrl: "/en" + req.originalUrl.substring(3),
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
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "Why you need to implement Structured Data | SEO Berlino",
        description: "SEO Blog articles about Structured Data and why you need to implement them to improve your SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog7", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "Link Building to Brand Building | SEO Berlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog8", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "/en" + req.originalUrl.substring(3),
        title: "How to get those first links | SEO Berlin | SEO Berlino",
        description: "Read this article about SEO and Backlinking and how to get your first backlinks in a simple way.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap");
});


/////410 PAGES

app.get("/fr", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/datenschutz", (req, res) => {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
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






app.get("/fr/contact", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
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