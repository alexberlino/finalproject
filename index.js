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


        if (req.headers.host == "www.seoberlino.com") {

            return res.redirect(301, 'https://www.seo-agile.com' + req.url);

        }

        if (req.headers["x-forwarded-proto"] == "https") {

            if (req.headers.host.slice(0, 3) != 'www') {
                return res.redirect(301, 'https://www.seo-agile.com' + req.url);
            }
        }

        if (req.headers["x-forwarded-proto"] !== "https") {
            return res.redirect(
                301,
                ["https://www.seo-agile.com", req.url].join("")
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
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seo-agile.com/en",
        layout: "mainDEHP",
        title: "SEO Freelancer und Agile Coach | SEO Agile Berlin",
        description: "SEO Experte und Agile Coach, 10 Jahre Erfahrung: Montblanc, Ricoh, Spreadshirt, Holberton School, MSF, Red Cross, etc",
        canonical: "https://www.seo-agile.com/de",
        alt: "https://www.seo-agile.com/en",
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seo-agile.com/en",
        layout: "mainDEHP",
        title: "SEO Freelancer und Agile Coach | SEO Agile Berlin",
        canonical: "https://www.seo-agile.com/de",
        description: "SEO Experte und Agile Coach, 10 Jahre Erfahrung: Montblanc, Ricoh, Spreadshirt, Holberton School, MSF, Red Cross, etc",
        alt: "https://www.seo-agile.com/en",
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "https://www.seo-agile.com/en",
        layout: "mainHP",
        title: "SEO Consultant and Agile Coach | SEO Agile Berlin",
        description: "SEO Consultant and Agile Coach, 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seo-agile.com/en",
        alt: "https://www.seo-agile.com/de",
    });
});



// main pages//////////



app.get("/de/seo-beratung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "https://www.seo-agile.com/en/seo-consultancy",
        layout: "mainDE",
        title: "SEO Beratung: Audit, Web Analyse | SEO Agile Berlin",
        description: "SEO & Analytics Experte: SEO, Analytics, SEA und Scrum Implementierung. 10 Jahre Erfahrung mit Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/seo-consultancy"
    });
});

app.get("/en/seo-consultancy", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        title: "SEO Consultant: Audits & Analytics | SEO Agile Berlin",
        layout: "main",
        description: "SEO & Analytics Expert: SEO, Analytics, SEA and scrum implementation. 10 years experience with Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/seo-beratung"
    });
});



app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Blog - Search Engine Optimization Blog | SEO Agile Berlin",
        description: "SEO Berlin Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seo-agile.com/en/blog",
        alt: "https://www.seo-agile.com/de/blog"
    });
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "https://www.seo-agile.com/en/blog",
        layout: "mainNoAltNoIndex",
        title: "Suchmaschinenoptimierung Blog | SEO Agile Berlin",
        description: "SEO Blog von SEO Berlin, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seo-agile.com/en/blog",
        alt: "https://www.seo-agile.com/en/blog"
    });
});


app.get("/en/seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seo", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Search Engine Optimization Tips | SEO Agile Berlin",
        description: "SEO Definition: Analysis & Optimization. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/seo"
    });
});

app.get("/de/seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seo", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Suchmaschinenoptimierung Tipps | SEO Agile Berlin",
        description: "SEO Definition, Optimierung und Analyse. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/seo"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "Profile and Contact - SEO Freelancer in Berlin | SEO Agile Berlin",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/contact"
    });
});




/////CASE Studies


app.get("/en/casestudy", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudy", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "SEO Berlin Start-up Case Studies | SEO Agile Berlin",
        description: "SEO Berlin Start-up Case Studies: traffic, brand dependance, main keywords, technical performance.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy"
    });
});

app.get("/en/casestudy/fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyfromatob", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB: SEO Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/fromatob"
    });
});

app.get("/en/casestudy/zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyzalando", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando: SEO Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/zalando"
    });
});


app.get("/en/casestudy/wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudywooga", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga: SEO Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/wooga"
    });
});

app.get("/en/casestudy/juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyjuniqe", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe: SEO Berlin Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/juniqe"
    });
});

app.get("/en/casestudy/modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudymodomoto", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/modomoto"
    });
});

app.get("/en/casestudy/n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyn26", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 : SEO Berlin Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/n26"
    });
});

app.get("/en/casestudy/hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhellofresh", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Hello Fresh: SEO Berlin Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's Hello Fresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/hellofresh"
    });
});



app.get("/en/casestudy/hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhometogo", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Home ToGo: SEO Berlin Case Study | SEO Agile Berlin",
        description: "Mini SEO Case Study about Berlin's Home To Go: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/casestudy/hometogo"
    });
});

//////ONPAGE PAGES
app.get("/en/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("duplicatecontent", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Duplicate Content SEO | SEO Agile Berlin",
        description: "Duplicate Content and Semantics for SEO. Read more about the dangers of Duplicate Content and how to avoid it.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/duplicatecontent"
    });
});


app.get("/de/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("duplicatecontent", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Duplizierter Inhalt | Duplicate Content SEO | SEO Agile Berlin",
        description: "Suchmaschinen mögen keine Indexierung von Duplicate Content. Anschließend ist es wichtig zu entscheiden, welche Seite Ihre “Master Page” ist ",
        canonical: "https://www.seo-agile.com/de/onpage/duplicatecontent",
        alt: "https://www.seo-agile.com/en/onpage/duplicatecontent"
    });
});

app.get("/en/onpage/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("images", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Image Optimization SEO | SEO Agile Berlin",
        description: "Images optimisation enables you to get visibility on  Image Search which can still be powerful for brand visibility.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/bildoptimierung"
    });
});

app.get("/de/onpage/bildoptimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("images", {
        requrl: "https://www.seo-agile.com/en/onpage/images",
        layout: "mainDE",
        title: "Bildoptimierung SEO | SEO Agile Berlin",
        description: "Für viele Wirtschaftszweige ist die Bildersuche noch immer ein wichtiger Unterbereich des SEO. Alles, was Sie wissen müssen über Bildoptimierung.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/images"
    });
});

app.get("/en/onpage/internallinking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internallinking", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internal Linking | SEO Agile Berlin",
        description: "Internal linking is key in SEO essentially to redistribute link juice and prioritise your most important pages.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/interne-verlinkung"
    });
});

app.get("/de/onpage/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internallinking", {
        requrl: "https://www.seo-agile.com/en/onpage/internallinking",
        layout: "mainDE",
        title: "Interne Verlinkung SEO | SEO Agile Berlin",
        description: "Interne Verlinkungen sind der Kern des Onpage SEO. Verstehen, wie das Crawling Ihrer Webseite durch den Google Bot funktioniert.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/internallinking"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Keyword Research and Keyword Tools for SEO | SEO Agile Berlin",
        description: "Keyword Research is key to understand how your potential clients are searching for your product or services.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/keyword-recherche"
    });
});

app.get("/de/onpage/keyword-recherche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("keyword", {
        requrl: "https://www.seo-agile.com/en/onpage/keywordresearch",
        layout: "mainDE",
        title: "Keyword Recherche & Keyword Tools für SEO | SEO Agile Berlin",
        description: "Wenn Sie eingehend verstehen möchten, wie Ihre potenziellen Kunden nach den von Ihnen angebotenen Produkten, ist es unerlässlich.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/keywordresearch"
    });
});

app.get("/en/onpage/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("metas", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Meta Tags and SEO | SEO Agile Berlin",
        description: "Page titles are often neglected, but are really important and very  simple to implement. That means you need to have them spot on.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/metas-tags-de"
    });
});

app.get("/de/onpage/metas-tags-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("metas", {
        requrl: "https://www.seo-agile.com/en/onpage/metas",
        layout: "mainDE",
        title: "Meta Tags und wie es funktioniert | SEO Agile Berlin",
        description: "Seitentitel werden oft vernachlässigt, sind aber wirklich wichtig und sehr einfach zu implementieren. Das bedeutet, dass du sie auf den Punkt bringen musst.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/metas"
    });
});

app.get("/en/onpage/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("content", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Content - Content Marketing | SEO Agile Berlin",
        description: "The content is the value you want to create. If you content has no value to the user or is duplicate, your SEO will be poor.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/inhalt"
    });
});

app.get("/de/onpage/inhalt", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("content", {
        requrl: "https://www.seo-agile.com/en/onpage/content",
        layout: "mainDE",
        title: "SEO Content (Inhalt) -  SEO Marketing | SEO Agile Berlin",
        description: "Der Inhalt ist der Wert, den Sie schaffen wollen. Wenn Ihr Inhalt für den Benutzer keinen Wert hat oder doppelt ist, wird Ihre SEO schlecht sein.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/content"
    });
});

app.get("/en/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("landingpages", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Landing Page Optimization SEO| SEO Agile Berlin",
        description: "If you want to efficiently understand how your potential  clients are searching for the products or services you are offering, Keyword Research is critical.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/landingpages"
    });
});

app.get("/de/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("landingpages", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Landingpage Optimierung | SEO Agile Berlin",
        description: "Die Keywords, die Sie als die wichtigsten für Ihre Seite ausgewählt haben sollten für Inhalte und allgemeine Onpage Optimierung genutzt werden.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/landingpages"
    });
});

app.get("/en/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("structureddata", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Structured Data | SEO Agile Berlin",
        description: "Google, Bing, Yandex and Yahoo agreed on a standardised format: schema.org for providing information about a page and to classify its content.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/structured-data-de"
    });
});

app.get("/de/onpage/structured-data-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("structureddata", {
        requrl: "https://www.seo-agile.com/en/onpage/structureddata",
        layout: "mainDE",
        title: "Google Structured Data | SEO Agile Berlin",
        description: "Google, Bing, Yandex und Yahoo haben sich auf ein standartisiertes Format geeinigt: mit schema.org werden Informationen über eine Seite bereitgestellt und die Inhalte klassifiziert.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/structureddata"
    });
});

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Onpage Optimization SEO | SEO Agile Berlin",
        description: "Onpage Optimization refers to any SEO action taken on the website: content and and code of the page.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage"
    });
});

app.get("/de/onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("onpage", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Onpage Optimierung SEO | SEO Agile Berlin",
        description: "Onpage Optimization bezieht sich auf alle SEO-Maßnahmen auf der Website, die direkt durchgeführt werden können.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage"
    });
});

app.get("/en/onpage/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("voicesearch", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Voice Search SEO | SEO Agile Berlin",
        description: "Google Assistant, Alexa are just 2 of those devices which are transforming search. Instead of typing searches, users now more and more ask for their need vocally.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/onpage/sprachsuche"
    });
});

app.get("/de/onpage/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("voicesearch", {
        requrl: "https://www.seo-agile.com/en/onpage/voicesearch",
        layout: "mainDE",
        title: "Sprachsuche SEO wie es funktioniert | SEO Agile Berlin",
        description: "Google Assistant, Alexa sind nur 2 dieser Geräte, die die Suche verändern. Anstatt Suchen zu tippen, fragen die Benutzer immer häufiger nach ihrem Bedarf.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/onpage/voicesearch"
    });
});


/////RESEARCH PAGES

app.get("/en/research/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis for SEO | SEO Agile Berlin",
        description: "SEO Competitor Analysis is important to gather information from the industry leaders: keywords, site structure, backlinks, etc.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/forschung/mitwettbewerber"
    });
});

app.get("/de/forschung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor", {
        requrl: "https://www.seo-agile.com/en/research/competitor-analysis",
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | SEO Agile Berlin",
        description: "Die SEO-Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/research/competitor-analysis"
    });
});

app.get("/en/research/localseo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How to deal with Local SEO | SEO Agile Berlin",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/forschung/local-seo-de"
    });
});

app.get("/de/forschung/local-seo-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo", {
        requrl: "https://www.seo-agile.com/en/research/localseo",
        layout: "mainDE",
        title: "Local SEO Optimierung | SEO Agile Berlin",
        description: "Insbesondere für lokale Unternehmen ist es von größter Bedeutung, Ihre SEO-Gesamtstrategie auf lokale SEO auszurichten.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/research/localseo"
    });
});



////TECHNICAL PAGES

app.get("/en/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("crawlability", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO - Web Crawl | SEO Agile Berlin",
        description: "xml format sitemap guides Google on how to crawl your site. There is no guarantee however that the Google bot will follow your instructions.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/crawling"
    });
});

app.get("/de/technical/crawling", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("crawlability", {
        requrl: "https://www.seo-agile.com/en/technical/crawlability",
        layout: "mainDE",
        title: "Web-Crawling wie es funktioniert | SEO Agile Berlin",
        description: "Crawling hängt unmittelbar mit Indexierung zusammen. Um die Indexierung anzupassen, beziehungsweise zu optimieren, können Sie Google dabei lenken.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/crawlability"
    });
});

app.get("/en/technical/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("indexation", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO and the importance of Indexation| SEO Agile Berlin",
        description: "Efficient Indexation is key in order to get on well with Google's spiders. The right number depends on your site and objectives.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/indexierung"
    });
});

app.get("/de/technical/indexierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("indexation", {
        requrl: "https://www.seo-agile.com/en/technical/indexation",
        layout: "mainDE",
        title: "SEO Indexierung wie es funktioniert | SEO Agile Berlin",
        description: "Effiziente Indexierung ist für ein gutes Funktionieren mit den Google Spiders entscheidend.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/indexation"
    });
});
app.get("/en/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internationalisation", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internationalisation | SEO Agile Berlin",
        description: "There are various options when operating internationally: same root  domain, different top level domains, subdomains, how to link between them, etc.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/internationalisierung"
    });
});

app.get("/de/technical/internationalisierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internationalisation", {
        requrl: "https://www.seo-agile.com/en/technical/internationalisation",
        layout: "mainDE",
        title: "SEO Internationalisierung | SEO Agile Berlin",
        description: "Wenn Sie international agieren gibt es eine Vielzahl von Möglichkeiten: einheitliche Root-Domain, verschiedene Top-Level-Domains, Subdomains",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/internationalisation"
    });
});

app.get("/en/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pagespeed", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Page Speed and SEO | SEO Agile Berlin",
        description: "Page load speed is key in SEO: a very important aspect of Technical SEO. If your site loads fast, Search Engines will prefer it to others.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/pagespeed"
    });
});

app.get("/de/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pagespeed", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Seitengeschwindigkeit SEO | SEO Agile Berlin",
        description: "So machen Sie Ihre Seite schneller. Für Page Speed, nutzen Sie schnelle Host-Dienste, einen schnellen DNS (“Domain Name System”) Provider",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/pagespeed"
    });
});

app.get("/en/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("mobile", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Mobile Friendly | SEO Agile Berlin",
        description: "It is now critical for a site to be mobile-friendly. Otherwise is a close to a no-go resulting in poor SEO performance.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/mobilefriendly"
    });
});

app.get("/de/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("mobile", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Mobile First | SEO Agile Berlin",
        description: "Es ist jetzt entscheidend, dass ein Standort mobil einsetzbar ist. Andernfalls ist es fast unmöglich, was zu einer schlechten SEO-Leistung führt.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/mobilefriendly"
    });
});

app.get("/en/technical/security", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("https", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is https and its impact on SEO | SEO Agile Berlin",
        description: "https is now the norm. If your site is still not on https, its migration should be on the top of your SEO to-do list.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/sicherheit"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/sicherheit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("https", {
        requrl: "https://www.seo-agile.com/en/technical/security",
        layout: "mainDE",
        title: "Was ist https wie es funktioniert  | SEO Agile Berlin",
        description: "HTTPS ist die abgesicherte Version von HTTP, dem Protokoll über welches die Daten zwischen Browser und verbundener Webseite laufen.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/security"
    });
});

app.get("/en/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("javascript", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and how it affects SEO | SEO Agile Berlin",
        description: "Javascript frameworks such as React and Angular which are client-side rendered are still very complex for Search Engines for indexation.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical/dynamic-rendering-de"
    });
});

app.get("/de/technical/dynamic-rendering-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("javascript", {
        requrl: "https://www.seo-agile.com/en/technical/dynamicrendering",
        layout: "mainDE",
        title: "Javascript Webframes SEO  | SEO Agile Berlin",
        description: "Bei JavaScript Apps wie React, Angular oder View haben Suchmaschinen wie Google noch immer große Probleme mit Crawling und Indexierung.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical/dynamicrendering"
    });
});


app.get("/en/technical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("technical", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Technical SEO | SEO Berlin | SEO Agile Berlin",
        description: "Technical SEO by a SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/technical"
    });
});

app.get("/de/technical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("technical", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was ist Technisches SEO | SEO Agile Berlin",
        description: "Technisches SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/technical"
    });
});



/////OFFPAGES

app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Offpage Optimization SEO Berlin | SEO Agile Berlin",
        description: "SEO Resources from SEO Agile Berlin: Offpage SEO is a key part of SEO and includes in particular Link Building and Brand Building.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/offpage"
    });
});

app.get("/de/offpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Offpage Optimierung SEO | SEO Agile Berlin",
        description: "Offpage SEO ist ein wichtiger Bestandteil von SEO und umfasst insbesondere Link Building und Brand Building. Erstellen Sie großartige Inhalte, um Ihr Fachwissen zu präsentieren, bauen Sie Ihre Marke auf und ziehen Sie Links und potenzielle Kunden an.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/offpage"
    });
});


app.get("/en/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("brandbuilding", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Brand Building | SEO Agile Berlin",
        description: "Your links represent your reputation and relevancy in your domain.  Link building now goes hand in hand with brand building.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/offpage/brand-building"
    });
});

app.get("/de/offpage/brand-building", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("brandbuilding", {
        requrl: "https://www.seo-agile.com/en/offpage/brandbuilding",
        layout: "mainDE",
        title: "SEO Markenentwicklung | SEO Agile Berlin",
        description: "Brand-building: beste Empfehlung für Inhaltserstellung. Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic und backlinks",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/offpage/brandbuilding"
    });
});

app.get("/en/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("backlinkanalysis", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlink Analysis & Audit | SEO Agile Berlin",
        description: "During a backlink analysis, a report needs to be done with the profile's pros and cons. It should also include an audit of competitors'.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/offpage/backlinkanalysis"
    });
});

app.get("/de/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanalysis", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlink Analyse SEO | SEO Agile Berlin",
        description: "Während einer Backlink-Analyse muss ein Bericht mit den Vor- und Nachteilen des Profils erstellt werden. Es sollte auch eine Auditierung von Wettbewerbern beinhalten.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/offpage/backlinkanalysis"
    });
});

app.get("/en/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("links", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a backlink? | SEO Agile Berlin",
        description: "Many think the more links, the better but it doesn't actually work that way. Too many low quality and/or spammy links will damage your SEO.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/offpage/toxic"
    });
});

app.get("/de/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("links", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was sind backlinks? | SEO Agile Berlin",
        description: "Viele denken, es gehe immer um eine möglichst große Anzahl von Links, dem ist allerdings nicht so.",
        canonical: "https://www.seo-agile.com/de/offpage/toxic",
        alt: "https://www.seo-agile.com/en/offpage/toxic"
    });
});


////OTHER PAGES

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Agile Berlin",
        description: "SEO Berlin Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seo-agile.com/de/impressum",
        alt: "https://www.seo-agile.com/de/impressum"
    });
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Agile Berlin",
        description: "SEO Spezialist in Berlin. Impressum für SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seo-agile.com/de/impressum",
        alt: "https://www.seo-agile.com/en/impressum"
    });
});

app.get("/de/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Datenschutz | SEO Agile Berlin",
        description: "SEO Berlin, Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: "https://www.seo-agile.com/de/datenschutz",
        alt: "https://www.seo-agile.com/de/datenschutz"
    });
});


///AUDIT PAGES


app.get("/de/audit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("audit", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Freelancer: On-page, Off-page, Technical SEO | SEO Agile Berlin",
        description: "Lassen Sie Ihre Website mit Full SEO Audit auditieren, das mit einer To-Do-Liste (Backlog) mit nach Priorität klassifizierten Problemen geliefert wird.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/audit"
    });
});

app.get("/en/audit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("audit", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        description: "Get your site audited with Full SEO Audit that comes with a To-do list (Backlog) with issues classified by priority.",
        title: "SEO Freelancer for SEO Audits in Berlin | SEO Agile Berlin",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/audit"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungsea", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEA Beratung Berlin | SEO Agile Berlin",
        description: "SEA-Experte für SEA-Projekte: Google Ads, Facebook Ads, Instagram. Einrichtung, Test, Analyse und Optimierung.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungsea", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEA Consultancy Berlin | SEO Agile Berlin",
        description: "SEA Expert for SEA Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/sea"
    });
});

app.get("/de/analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratunganalytics", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Webanalyse Beratung Berlin | SEO Agile Berlin",
        description: "SEO Analytics Services in Berlin, SEO Expert mit über 10 Jahren Erfahrung mit Unternehmen wie Montblanc, Spreadshirt und Ricoh.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/analytics"
    });
});

app.get("/en/analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratunganalytics", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Analytics Consultant Berlin | SEO Agile Berlin",
        description: "SEO Analytics services in Berlin, SEO Expert with over 10 years experience with companies such as Montblanc, Spreadshirt and Ricoh.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/analytics"
    });
});

app.get("/de/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungcontent", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Content Beratung Berlin | SEO Agile Berlin",
        description: "Steigern Sie den Traffic durch gezielte Inhaltserstellung. SEO Growth Hacking durch Ihren SEO-Berater in Berlin, über 10 Jahre Erfahrung.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/content"
    });
});

app.get("/en/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungcontent", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Content Growth Hacking Consultant | SEO Agile Berlin",
        description: "Boost traffic with targeted Content Creation. SEO Growth Hacking by your SEO Consultant in Berlin, over 10 years experience.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/content"
    });
});


//SCRUM PAGES



app.get("/en/scrum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungscrum", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Agile Coach / ScrumMaster in Berlin | SEO Agile Berlin",
        description: "Implement Scrum for your Projects. 10 Year-Experienced SEO Expert, certified ScrumMaster and experienced as Product owner.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/scrum"
    });
});

app.get("/de/scrum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "ScrumMaster -Implementierung für SEO-Projekte | SEO Agile Berlin",
        description: "Implementieren Sie Scrum für Ihre SEO-Projekte. 10 Jahre erfahrener SEO-Experte, zertifizierter Scrum-Master und erfahren als Product Owner.",
        canonical: "https://www.seo-agile.com/de/scrum",
        alt: "https://www.seo-agile.com/en/scrum"
    });
});

app.get("/en/scrum/pillars", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumpillars", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Scrum's 3 Pillars | SEO Agile Berlin",
        description: "Scrum 3 Pillars: Transparency, Inspection and Adaptation. Learn about Scrum and how to Implement Scrum it for your SEO Projects.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/scrum"
    });
});

app.get("/en/scrum/team", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumteam", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Teams | SEO Agile Berlin",
        description: "Learn about Scrum and how the Scrum Team is organised and its members: Product Owner, ScrumMaster and Dev Team.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
    });
});

app.get("/en/scrum/events", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumevents", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Events | SEO Agile Berlin",
        description: "Learn about Scrum and the Scrum Events: the Sprint, Sprint Planning, Daily Scrum, Sprint review and Backlog Refinement.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
    });
});


app.get("/en/scrum/artifacts", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumartifacts", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Artifacts | SEO Agile Berlin",
        description: "Learn about Scrum and the Scrum Artifacts: the Product Backlog, The Sprint Backlog and the defintion of Done.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
    });
});



app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "SEO Experte in Berlin | Kontakt SEO Berlin",
        description: "SEO Consultant Experte in Berlin. SEO Experte Freelancer in Berlin. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seo-agile.com/de/contact",
        alt: "https://www.seo-agile.com/en/contact"
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
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Lexicon: About SEO Jargon | SEO Agile Berlin",
        description: "SEO Lexicon for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical"
    });
});

app.get("/de/lexical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lexical", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "SEO Lexicon und SEO Jargon | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Find out about SEO and all those words which can scare you.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical"
    });
});


app.get("/en/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("nofollow", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Nofollow Links and SEO | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon for you to understand how NoFollow links work and how they affect your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/nofollow"
    });
});

app.get("/de/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("nofollow", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Nofollow Links wie es funktioniert | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. SEO Lexical about SEO Jargon. Understand NoFollow Links and how they affect your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/nofollow"
    });
});


app.get("/en/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("rankbrain", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Rankbrain | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon for you to understand how Rankbrain works and how it affects your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/rankbrain"
    });
});

app.get("/de/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("rankbrain", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was beudeutet Rankbrain | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Was beudeutet Rankbrain und warum ist das für SEO wichtig?",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/rankbrain"
    });
});

app.get("/en/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("altattribute", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Alt Attribute for SEO Images | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon for you to understand how alt attributs work and how it affects your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/alt-attribute"
    });
});

app.get("/de/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("altattribute", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Alt Attribute für SEO Bildoptimierung | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Alt Attribute für Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/alt-attribute"
    });
});

app.get("/en/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("amppages", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Accelerated Mobile Pages and SEO | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon for you to understand how AMP Papes work and how it affects your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/amp-pages"
    });
});

app.get("/de/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("amppages", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "AMP (Accelerated Mobile Pages) für SEO | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. AMP (Accelerated Mobile Pages) für Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/amp-pages"
    });
});

app.get("/en/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("canonical", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Canonicals for SEO | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon for you to understand how canonicals work and how it affects your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/canonical"
    });
});

app.get("/de/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("canonical", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Canonicals für SEO | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Canonicals für Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/canonical"
    });
});

app.get("/en/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlekwtool", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google Keyword Planner for SEO | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon for you to understand how the Google Keyword Tool works and how it affects your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlekwtool", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Google Keyword Planner für Suchmaschinenoptimierung | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Google Keyword Planner für Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlepagespeed", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Google PageSpeed für Suchmaschinenoptimierung | SEO Agile Berlin",
        description: "Google PageSpeed für Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlepagespeed", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google PageSpeed for SEO | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Google PageSpeed for SEO is a very important tool. Learn here how to use it.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("hreflang", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "hreflang for SEO | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how hreflang work and how they can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/hreflang"
    });
});

app.get("/de/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("hreflang", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "hreflang für SEO | SEO Agile Berlin",
        description: "hreflang für Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/hreflang"
    });
});

app.get("/en/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("longtail", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Long Tail | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand what is long-tail and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/long-tail"
    });
});

app.get("/de/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("longtail", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Long Tail für SEO | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Long tail und Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/long-tail"
    });
});

app.get("/en/lexical/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("robots", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Robots.txt file | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how Robots.txt works and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/robots"
    });
});

app.get("/de/lexical/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("robots", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Robots.txt für SEO | SEO Agile Berlin",
        description: "SEO Lexicon für SEO. Robots.txt und Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/robots"
    });
});

app.get("/en/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchconsole", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Search Console | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how to use Google's Search Console and how it can help you to improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/search-console"
    });
});

app.get("/de/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchconsole", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Search Console für SEO | SEO Agile Berlin",
        description: "SEO Lexicon über SEO Jargon. Google's Search Console und Suchmaschinenoptimierung",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/search-console"
    });
});

app.get("/en/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchvolume", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Search Volume and how to use it for SEO | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/search-volume"
    });
});

app.get("/de/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchvolume", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Search Volume für SEO | SEO Agile Berlin",
        description: "SEO Lexicon über SEO Jargon. Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/search-volume"
    });
});

app.get("/en/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("sitemaps", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Sitemaps | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how Sitemaps work and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/sitemaps"
    });
});

app.get("/de/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("sitemaps", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren Sitemaps für SEO | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how Sitemaps work and how they can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/sitemaps"
    });
});

app.get("/en/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("noindex", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex and SEO | SEO Agile Berlin",
        description: "SEO Lexicon about SEO Jargon. Understand how noindex works and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/noindex"
    });
});

app.get("/de/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("noindex", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren noindex für SEO | SEO Agile Berlin",
        description: "SEO Lexicon über SEO Jargon. Verstehen Sie, wie noindex funktioniert und wie es Ihre SEO verbessern kann.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/noindex"
    });
});

app.get("/en/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("redirects", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a redirect and how to use it for SEO | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how redirects work and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/redirects"
    });
});

app.get("/de/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("redirects", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren redirects für SEO | SEO Agile Berlin",
        description: "SEO Lexikalisch über SEO Jargon. Verstehen Sie, wie Redirects funktionieren und wie sie Ihre SEO verbessern können.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/redirects"
    });
});

app.get("/en/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lighthouse", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a Lighthouse and how to use it for SEO | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/lighthouse"
    });
});

app.get("/de/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lighthouse", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Lighthouse für SEO | SEO Agile Berlin",
        description: "SEO Lexicon über SEO Jargon. SEO Lexical about SEO Jargon. Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/lighthouse"
    });
});

app.get("/en/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("removeurltool", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove url Tool? | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how the Remove url Tool works and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/remove-url-tool"
    });
});

app.get("/de/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("removeurltool", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Remove URL Tool| SEO Agile Berlin",
        description: "SEO Lexicon über SEO Jargon. Understand how the Remove url Tool work and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/remove-url-tool"
    });
});

app.get("/en/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("disavowtool", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Disavow Tool and how to use it | SEO Agile Berlin",
        description: "SEO Lexical about SEO Jargon. Understand how the Disavow Tool works and how it can improve your SEO",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/de/lexical/disavow-tool"
    });
});

app.get("/de/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("disavowtool", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Disavow Tool und wie es funktioniert| SEO Agile Berlin",
        description: "SEO Lexicon über SEO Jargon. Disavow Tool und Suchmaschinenoptimierung.",
        canonical: "https://www.seo-agile.com" + req.originalUrl,
        alt: "https://www.seo-agile.com/en/lexical/disavow-tool"
    });
});



//////blog pages/////////
app.get("/en/article/linkbuilding-in-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2019 | SEO Agile Berlin",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});


app.get("/en/article/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogvoice", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Agile Berlin",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});


app.get("/en/article/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogclutch", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEOBerlino Top SEO Services Company in Germany | SEO Agile Berlin",
        description: "Clutch has selected SEO Agile Berlin as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});


app.get("/en/article/seo-in-asia-korea-china-japan-2019", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogasia", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea in 2019 | SEO Agile Berlin",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});

app.get("/en/article/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog2", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        title: "SEO Beyond Mobile First | SEO Berlin | SEO Agile Berlin",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});

app.get("/en/article/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog5", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        title: "SEO Voice Search Challenges| SEO Agile Berlin",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});

app.get("/en/article/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog6", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        title: "Why you need to implement Structured Data | SEO Agile Berlin",
        description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});

app.get("/en/article/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog7", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        title: "Link Building to Brand Building | SEO Agile Berlin",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
    });
});

app.get("/en/article/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog8", {
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seo-agile.com/en" + req.originalUrl.substring(3),
        title: "How to get those first links | SEO Berlin | SEO Agile Berlin",
        description: "Read this article about SEO and Backlinking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: "https://www.seo-agile.com" + req.originalUrl
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

app.get("/de/off-page/backlink-analyse", function(request, response) {
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

app.get("/un/seonews", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/ad/research/bestpractices", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/landing-pages-de", function(request, response) {
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
app.get("/lo/technical/dynamicrendering", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/research/sea", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/duplicatecontent", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/mobile-friendly-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/research/bestpractices", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/seonews", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/contact", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/technical/indexation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/research/localseo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/technical/internationalisation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/cookies", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/offpage/brandbuilding", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/research/sea", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/contact", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/images", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/duplicatecontent", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research/localseo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/offpage/brandbuilding", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/seonews", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/link-building-to-brand-building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research/bestpractices", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/undefined/impressum", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/article/link-building-to-brand-building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/crawlability", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/offpage/toxic", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/pagespeed", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/security", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technical/crawlability", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/research/localseo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/resources", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/offpage/backlinkanalysis", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/offpage/backlinkanalysis", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/images", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/cookies", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/technical/crawlability", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/technical/mobilefriendly", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/resources", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/admin", function(request, response) {
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
app.get("/de/technik/pagespeed", function(request, response) {
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
app.get("/de/on-page/metas", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/off-page/backlinkanalysis", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/off-page/backlink-analyse", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/bildoptimierung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research/sea", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/metas", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/structureddata", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/images", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/structureddata", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/DomainAuthority", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/09/What-does-mobile-first-really-means-and-how-to-get-ready-for-it", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/LinkBuilding", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/date/2018-05", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/_api/common-services/notification/invoke", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/MajesticSEO", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Outreach", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/berlin-neukoelln", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/ratings", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/googlehome", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/date/2018-03", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/breadcrumb", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/MobileSEO", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/G2Crowd", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/PWA", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/schema", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/backlinking-check", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Buzzsumo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/technical-seo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Moz", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/MyBusiness", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/dynamic-rendering-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/en/technical", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ened/", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/internallinking", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/structured-data-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/ladegeschwindigkeit", function(request, response) {
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
app.get("/enog/category/MobileFirst", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technical/indexation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/technical/indexation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/deed/", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/offpage/brandbuilding", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/sprachsuche", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/internationalisation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/article/linkbuilding-getting-it-right-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Rankings", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/landingpages", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/security", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/technical/internationalisation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Google-Algorithm", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/technical/mobilefriendly", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/duplicatecontent", function(request, response) {
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
app.get("/lo/article/beyond-mobile-first", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/technical/dynamicrendering", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/enws", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/technical", function(request, response) {
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


app.get("/de/on-page/internallinking", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/crawlability", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/contact", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/content", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/internallinking", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/interne-verlinkung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research/competitor-analysis", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/sicherheit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/indexierung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/technical", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/competitor-analysis", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/keywordresearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/research/bestpractices", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/internationalisation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/article/link-building-to-brand-building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/off-page/brandbuilding", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/enchnical-seo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/indexation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/indexation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/offpage/backlinkanalysis", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/inhalt", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/keywordresearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/feed/", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/dechnical-seo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/keyword-recherche", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/research/sea", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/crawling", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/about", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/internallinking", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/technical/pagespeed", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/off-page/brand-building-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo", function(request, response) {
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
app.get("/de/technical/dynamicrendering", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/engin", function(request, response) {
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
app.get("/de/seo-for-small-businesses", function(request, response) {
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
app.get("/fr/onpage/images", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/seit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/technical/crawlability", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/admin", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/internationalisation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/crawlability", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/dynamicrendering", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/mobilefriendly", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/technical/pagespeed", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/inprint", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/indexation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technik/dynamicrendering", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/forschung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/seo-freelancer", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/en/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/resources", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/login", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/seo-freelancer", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/cookies", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/en/technical", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/en/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/research/localseo", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/research/sea", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/impressum", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/about", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/login", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/structureddata", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/aboutthiswebsite", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/research/bestpractices", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/landing-pages-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/off-page/brand-building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/on-page/metas-tags-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/forschung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/off-page", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/on-page", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/technik", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/metas", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage/en/casestudy", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/article/how-to-get-those-first-links", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/on-page-audit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/article/beyond-mobile-first", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/09/en/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/08/en/blog", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/keywordresearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/content", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/metas", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/images", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/dedefined/impressum", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/endefined/impressum", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/resources", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/article/how-to-get-those-first-links", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/article/beyond-mobile-first", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/article/beyond-mobile-first", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/article/link-building-to-brand-building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/technical/dynamic-rendering-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/onpage/interne-verlinkung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/forschung/mitwettbewerber", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/onpage/structured-data-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/technical/internationalisierung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/forschung/suchmaschinenwerbung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/onpage/keyword-recherche", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/offpage/brand-building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/onpage/bildoptimierung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/onpage/sprachsuche", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/technical/sicherheit", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/technical/crawling", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/technical/indexierung", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/keywordresearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/landingpages", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/structureddata", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/metas", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/duplicatecontent", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/technical", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/contact", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/login", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/cookies", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/en/casestudy", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/article/linkbuilding-getting-it-right-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/resources", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/cookies", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/content", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technical/internationalisation", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/aboutthiswebsite", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/11/Link-Building-to-Brand-Building", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/05/15/Linkbuilding-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/08/Why-you-need-to-implement-Structured-Data-on-your-website", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/12/Who-and-How-to-contact-other-websites-to-link-to-you", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/GoogleSearch Commands", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/featuredsnippets", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/LinkProspector", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/featured-snippets", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/localSEO", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/ContentMarketing", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/category/VoiceSearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Influencers", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/GoogleAssistant", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/MobileFirst", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/long-tail", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Twitter", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/JSON-LD", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/PWAMP", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/CTR", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/AMP", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/dedefined", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/structureddata", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/en/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Domain-Authority", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/research/bestpractices", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/mobilefriendly", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/images", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/onpage/internallinking", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/technical/dynamicrendering", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/content", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/landingpages", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/structured-data", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/seo-sea-jargon", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/landingpages", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/onpage/voicesearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/offpage/toxic", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/Content-Marketing", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/linkbuilding-getting-it-right-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/blog/tag/google-home", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/reporttemplate.pdf", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/endefined/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/en/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/en/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/en/research", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/technical/en/casestudy", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/lexical/en/casestudy", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/research/local-seo-de", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/onpage/internallinking", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/casestudy/en/casestudy", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Mobilefirst", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/about", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/logo.jpg", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/un/article/linkbuilding-getting-it-right-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/content", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/single-post/2018/03/12/Who-and-How-to-contact-other-websites-to-link-to-you?_amp_", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/offpage/brandbuilding", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/onpage/keywordresearch", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/ad/article/beyond-mobile-first", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/research/analytics", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/offpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/de/onpage", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/undefined/services", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/login", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/lo/article/linkbuilding-getting-it-right-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/article/linkbuilding-getting-it-right-in-2018", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/fr/seonews", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/GoogleAlgorithm", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Mobile-first", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Penguin", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Possum", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/Google", function(request, response) {
    response.writeHead(410, {
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/news/tag/2017", function(request, response) {
    response.writeHead(410, {
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