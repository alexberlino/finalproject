const {
    checkPassword,
    hashPass,
    capital
} = require("./Public/hash.js");
const express = require("express");
const axios = require("axios");
const app = express();
const fetch = require('node-fetch');
const {
    stringify
} = require('querystring');
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


        if (req.headers.host == "www.seo-agile.com") {

            return res.redirect(301, 'https://www.seoberlino.com' + req.url);

        }

        if (req.headers["x-forwarded-proto"] == "https") {

            if (req.headers.host.slice(0, 3) != 'www') {
                return res.redirect(301, 'https://www.seoberlino.com' + req.url);
            }
        }

        if (req.headers["x-forwarded-proto"] !== "https") {
            return res.redirect(
                301,
                ["https://www.seoberlino.com", req.url].join("")
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

app.get("/", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainDEHP",
        title: "SEO Experte in Berlin | Beratung & Consulting | seoberlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Experte Freelancer und Agile Coach. 10 Jahre Erfahrung. Kunden: Montblanc, Hello Fresh, Ricoh, Spreadshirt, Spartoo, BSH, MSF, Red Cross, etc",
        alt: "https://www.seoberlino.com/en",
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainDEHP",
        title: "SEO Experte in Berlin | Beratung & Consulting | seoberlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Experte Freelancer und Agile Coach. 10 Jahre Erfahrung. Kunden: Montblanc, Hello Fresh, Ricoh, Spreadshirt, Spartoo, BSH, MSF, Red Cross, etc",
        alt: "https://www.seoberlino.com/en",
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainHP",
        title: "SEO Expert in Berlin, Germany | SEO Consulting | seoberlino",
        description: "SEO Consultant and Agile Coach, 10 years experience €100m + multinationals:  Montblanc, Hello Fresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de",
    });
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/de/seo-freelancer",
        layout: "mainDE",
        title: "SEO Freelancer: SEO Beratung & Audits | seoberlino",
        description: "SEO & Analytics Experte: SEO, Analytics, SEA und Scrum Implementierung. 10 Jahre Erfahrung mit Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-freelancer"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Freelancer in Berlin: SEO Audits | seoberlino",
        layout: "main",
        description: "SEO Freelancer in Berlin. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-freelancer"
    });
});


app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Freelancer in Berlin Audits & Analytics | seoberlino",
        layout: "main",
        description: "SEO Freelancer Expert: SEO, Analytics, SEA and scrum implementation. 10 years experience with Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-beratung"
    });
});

app.get("/en/seo-specialist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Specialist in Berlin | seoberlino",
        layout: "main",
        description: "SEO Freelancer Expert: SEO, Analytics, SEA and scrum implementation. 10 years experience with Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-beratung"
    });
});

app.get("/en/seo-tools", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Tools | seoberlino",
        layout: "main",
        description: "SEO Freelancer Expert: SEO, Analytics, SEA and scrum implementation. 10 years experience with Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-beratung"
    });
});

app.get("/en/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Blog - Search Engine Optimization Blog | seoberlino",
        description: "SEO Berlin Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog",
        alt: "https://www.seoberlino.com/de/blog"
    });
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en/blog",
        layout: "mainNoAltNoIndex",
        title: "Suchmaschinenoptimierung Blog | seoberlino",
        description: "SEO Blog von SEO Berlin, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com/en/blog",
        alt: "https://www.seoberlino.com/en/blog"
    });
});


app.get("/en/seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How to become an SEO Expert | seoberlino",
        description: "Learn about SEO and become an expert: Onpage, Offpage, Technical SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo"
    });
});

app.get("/de/seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Optimierung für Suchmaschinen | seoberlino",
        description: "SEO Definition, Optimierung und Analyse. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "Profile and Contact - SEO Expert in Berlin | seoberlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});

app.get("/en/seo-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudy", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Berlin: Start-ups and SEO in Berlin | seoberlino",
        description: "SEO Berlin Start-up Case Studies: traffic, brand dependance, main keywords, technical performance.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-berlin"

    });
});

app.get("/de/seo-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudy", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Berlin: Start-ups and SEO in Berlin | seoberlino",
        description: "SEO Berlin Start-up Case Studies: traffic, brand dependance, main keywords, technical performance.",
        canonical: "https://www.seoberlino.com/en/seo-berlin",
        alt: "https://www.seoberlino.com/en/seo-berlin"

    });
});

app.get("/en/casestudy/fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyfromatob", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/fromatob"
    });
});

app.get("/en/casestudy/zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyzalando", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/zalando"
    });
});

app.get("/en/casestudy/wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudywooga", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/wooga"
    });
});

app.get("/en/casestudy/juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyjuniqe", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/juniqe"
    });
});

app.get("/en/casestudy/modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudymodomoto", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/modomoto"
    });
});

app.get("/en/casestudy/n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyn26", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 : SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/n26"
    });
});

app.get("/en/casestudy/hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhellofresh", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Hello Fresh: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Berlin Case Study about Berlin's Hello Fresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/hellofresh"
    });
});



app.get("/en/casestudy/hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhometogo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Home ToGo: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Home To Go: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/hometogo"
    });
});

//////ONPAGE PAGES
app.get("/en/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("duplicatecontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Duplicate Content SEO | | seoberlino",
        description: "Duplicate Content and Semantics for SEO. Read more about the dangers of Duplicate Content and how to avoid it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/duplicatecontent"
    });
});

app.get("/de/onpage/duplicatecontent", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("duplicatecontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Duplizierter Inhalt | Duplicate Content SEO | seoberlino",
        description: "Suchmaschinen mögen keine Indexierung von Duplicate Content. Anschließend ist es wichtig zu entscheiden, welche Seite Ihre “Master Page” ist ",
        canonical: "https://www.seoberlino.com/de/onpage/duplicatecontent",
        alt: "https://www.seoberlino.com/en/onpage/duplicatecontent"
    });
});

app.get("/en/onpage/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("images", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Image Optimization SEO | seoberlino",
        description: "Images optimisation enables you to get visibility on  Image Search which can still be powerful for brand visibility.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/bildoptimierung"
    });
});

app.get("/de/onpage/bildoptimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("images", {
        requrl: "https://www.seoberlino.com/en/onpage/images",
        layout: "mainDE",
        title: "Bildoptimierung SEO | seoberlino",
        description: "Für viele Wirtschaftszweige ist die Bildersuche noch immer ein wichtiger Unterbereich des SEO. Alles, was Sie wissen müssen über Bildoptimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/images"
    });
});

app.get("/en/onpage/internallinking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internallinking", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internal Linking | seoberlino",
        description: "Internal linking is key in SEO essentially to redistribute link juice and prioritise your most important pages.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/interne-verlinkung"
    });
});

app.get("/de/onpage/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internallinking", {
        requrl: "https://www.seoberlino.com/en/onpage/internallinking",
        layout: "mainDE",
        title: "Interne Verlinkung SEO | seoberlino",
        description: "Interne Verlinkungen sind der Kern des Onpage SEO. Verstehen, wie das Crawling Ihrer Webseite durch den Google Bot funktioniert.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/internallinking"
    });
});

app.get("/en/onpage/keywordresearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("keyword", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Keyword Research and Keyword Tools for SEO | seoberlino",
        description: "Keyword Research is key to understand how your potential clients are searching for your product or services.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/keyword-recherche"
    });
});

app.get("/de/onpage/keyword-recherche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("keyword", {
        requrl: "https://www.seoberlino.com/en/onpage/keywordresearch",
        layout: "mainDE",
        title: "Keyword Recherche & Keyword Tools für SEO | seoberlino",
        description: "Wenn Sie eingehend verstehen möchten, wie Ihre potenziellen Kunden nach den von Ihnen angebotenen Produkten, ist es unerlässlich.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/keywordresearch"
    });
});

app.get("/en/onpage/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("metas", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Meta Tags and SEO | seoberlino",
        description: "Page titles are often neglected, but are really important and very  simple to implement. That means you need to have them spot on.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/metas-tags-de"
    });
});

app.get("/de/onpage/metas-tags-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("metas", {
        requrl: "https://www.seoberlino.com/en/onpage/metas",
        layout: "mainDE",
        title: "Meta Tags und wie es funktioniert | seoberlino",
        description: "Seitentitel werden oft vernachlässigt, sind aber wirklich wichtig und sehr einfach zu implementieren. Das bedeutet, dass du sie auf den Punkt bringen musst.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/metas"
    });
});

app.get("/en/onpage/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("content", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Content - Content Marketing | seoberlino",
        description: "The content is the value you want to create. If you content has no value to the user or is duplicate, your SEO will be poor.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/inhalt"
    });
});

app.get("/de/onpage/inhalt", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("content", {
        requrl: "https://www.seoberlino.com/en/onpage/content",
        layout: "mainDE",
        title: "SEO Content (Inhalt) -  SEO Marketing | seoberlino",
        description: "Der Inhalt ist der Wert, den Sie schaffen wollen. Wenn Ihr Inhalt für den Benutzer keinen Wert hat oder doppelt ist, wird Ihre SEO schlecht sein.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/content"
    });
});

app.get("/en/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("landingpages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Landing Page Optimization SEO| seoberlino",
        description: "If you want to efficiently understand how your potential  clients are searching for the products or services you are offering, Keyword Research is critical.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/landingpages"
    });
});

app.get("/de/onpage/landingpages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("landingpages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Landingpage Optimierung | seoberlino",
        description: "Die Keywords, die Sie als die wichtigsten für Ihre Seite ausgewählt haben sollten für Inhalte und allgemeine Onpage Optimierung genutzt werden.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/landingpages"
    });
});

app.get("/en/onpage/structureddata", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("structureddata", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Structured Data | seoberlino",
        description: "Google, Bing, Yandex and Yahoo agreed on a standardised format: schema.org for providing information about a page and to classify its content.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/structured-data-de"
    });
});

app.get("/de/onpage/structured-data-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("structureddata", {
        requrl: "https://www.seoberlino.com/en/onpage/structureddata",
        layout: "mainDE",
        title: "Google Structured Data | seoberlino",
        description: "Google und Co haben sich auf ein standartisiertes Format geeinigt: mit schema.org werden Informationen über eine Seite bereitgestellt und die Inhalte klassifiziert.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/structureddata"
    });
});

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Onpage Optimization SEO | seoberlino",
        description: "Onpage Optimization refers to any SEO action taken on the website: content and and code of the page.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage"
    });
});

app.get("/de/onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("onpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Onpage Optimierung SEO | seoberlino",
        description: "Onpage Optimization bezieht sich auf alle SEO-Maßnahmen auf der Website, die direkt durchgeführt werden können.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage"
    });
});

app.get("/en/onpage/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("voicesearch", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Voice Search SEO | seoberlino",
        description: "Google Assistant, Alexa are just 2 of those devices which are transforming search. Instead of typing searches, users now more and more ask for their need vocally.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/onpage/sprachsuche"
    });
});

app.get("/de/onpage/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("voicesearch", {
        requrl: "https://www.seoberlino.com/en/onpage/voicesearch",
        layout: "mainDE",
        title: "Sprachsuche SEO wie es funktioniert | seoberlino",
        description: "Google Assistant, Alexa sind nur 2 dieser Geräte, die die Suche verändern. Anstatt Suchen zu tippen, fragen die Benutzer immer häufiger nach ihrem Bedarf.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/onpage/voicesearch"
    });
});

app.get("/en/research/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis for SEO | seoberlino",
        description: "SEO Competitor Analysis is important to gather information from the industry leaders: keywords, site structure, backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/mitwettbewerber"
    });
});

app.get("/de/forschung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor", {
        requrl: "https://www.seoberlino.com/en/research/competitor-analysis",
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | seoberlino",
        description: "Die SEO-Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/competitor-analysis"
    });
});

app.get("/en/research/localseo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How to deal with Local SEO | seoberlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/forschung/local-seo-de"
    });
});

app.get("/de/forschung/local-seo-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo", {
        requrl: "https://www.seoberlino.com/en/research/localseo",
        layout: "mainDE",
        title: "Local SEO Optimierung | seoberlino",
        description: "Insbesondere für lokale Unternehmen ist es von größter Bedeutung, Ihre SEO-Gesamtstrategie auf lokale SEO auszurichten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/research/localseo"
    });
});

app.get("/en/technical/crawlability", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("crawlability", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO - Web Crawl | seoberlino",
        description: "xml format sitemap guides Google on how to crawl your site. There is no guarantee however that the Google bot will follow your instructions.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/crawling"
    });
});

app.get("/de/technical/crawling", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("crawlability", {
        requrl: "https://www.seoberlino.com/en/technical/crawlability",
        layout: "mainDE",
        title: "Web-Crawling wie es funktioniert | seoberlino",
        description: "Crawling hängt unmittelbar mit Indexierung zusammen. Um die Indexierung anzupassen, beziehungsweise zu optimieren, können Sie Google dabei lenken.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/crawlability"
    });
});

app.get("/en/technical/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("indexation", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO and the importance of Indexation| seoberlino",
        description: "Efficient Indexation is key in order to get on well with Google's spiders. The right number depends on your site and objectives.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/indexierung"
    });
});

app.get("/de/technical/indexierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("indexation", {
        requrl: "https://www.seoberlino.com/en/technical/indexation",
        layout: "mainDE",
        title: "SEO Indexierung wie es funktioniert | seoberlino",
        description: "Effiziente Indexierung ist für ein gutes Funktionieren mit den Google Spiders entscheidend.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/indexation"
    });
});
app.get("/en/technical/internationalisation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("internationalisation", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Internationalisation | seoberlino",
        description: "There are various options when operating internationally: same root  domain, different top level domains, subdomains, how to link between them, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/internationalisierung"
    });
});

app.get("/de/technical/internationalisierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("internationalisation", {
        requrl: "https://www.seoberlino.com/en/technical/internationalisation",
        layout: "mainDE",
        title: "SEO Internationalisierung | seoberlino",
        description: "Wenn Sie international agieren gibt es eine Vielzahl von Möglichkeiten: einheitliche Root-Domain, verschiedene Top-Level-Domains, Subdomains",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/internationalisation"
    });
});

app.get("/en/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Page Speed and SEO | seoberlino",
        description: "Page load speed is key in SEO: a very important aspect of Technical SEO. If your site loads fast, Search Engines will prefer it to others.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/pagespeed"
    });
});

app.get("/de/technical/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Seitengeschwindigkeit SEO | seoberlino",
        description: "So machen Sie Ihre Seite schneller. Für Page Speed, nutzen Sie schnelle Host-Dienste, einen schnellen DNS (“Domain Name System”) Provider",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/pagespeed"
    });
});

app.get("/en/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("mobile", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Mobile Friendly | seoberlino",
        description: "It is now critical for a site to be mobile-friendly. Otherwise is a close to a no-go resulting in poor SEO performance.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/mobilefriendly"
    });
});

app.get("/de/technical/mobilefriendly", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("mobile", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Mobile First | seoberlino",
        description: "Es ist jetzt entscheidend, dass ein Standort mobil einsetzbar ist. Andernfalls ist es fast unmöglich, was zu einer schlechten SEO-Leistung führt.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/mobilefriendly"
    });
});

app.get("/en/technical/security", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("https", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is https and its impact on SEO | seoberlino",
        description: "https is now the norm. If your site is still not on https, its migration should be on the top of your SEO to-do list.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/sicherheit"
    });
    i18n.setLocale(req, "en");
});

app.get("/de/technical/sicherheit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("https", {
        requrl: "https://www.seoberlino.com/en/technical/security",
        layout: "mainDE",
        title: "Was ist https wie es funktioniert  | seoberlino",
        description: "HTTPS ist die abgesicherte Version von HTTP, dem Protokoll über welches die Daten zwischen Browser und verbundener Webseite laufen.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/security"
    });
});

app.get("/en/technical/dynamicrendering", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("javascript", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and how it affects SEO | seoberlino",
        description: "Javascript frameworks such as React and Angular which are client-side rendered are still very complex for Search Engines for indexation.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical/dynamic-rendering-de"
    });
});

app.get("/de/technical/dynamic-rendering-de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("javascript", {
        requrl: "https://www.seoberlino.com/en/technical/dynamicrendering",
        layout: "mainDE",
        title: "Javascript Webframes SEO  | seoberlino",
        description: "Bei JavaScript Apps wie React, Angular oder View haben Suchmaschinen wie Google noch immer große Probleme mit Crawling und Indexierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical/dynamicrendering"
    });
});


app.get("/en/technical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("technical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Technical SEO | SEO Berlin | seoberlino",
        description: "Technical SEO by a SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/technical"
    });
});

app.get("/de/technical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("technical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was ist Technisches SEO | | seoberlino",
        description: "Technisches SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical"
    });
});

app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Offpage Optimization SEO Berlin | seoberlino",
        description: "SEO Resources from seoberlino: Offpage SEO is a key part of SEO and includes in particular Link Building and Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage"
    });
});

app.get("/de/offpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Offpage Optimierung SEO | seoberlino",
        description: "Offpage SEO ist ein wichtiger Bestandteil von SEO und umfasst insbesondere Link Building und Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage"
    });
});


app.get("/en/offpage/brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("brandbuilding", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Brand Building | seoberlino",
        description: "Your links represent your reputation and relevancy in your domain.  Link building now goes hand in hand with brand building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage/brand-building"
    });
});

app.get("/de/offpage/brand-building", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("brandbuilding", {
        requrl: "https://www.seoberlino.com/en/offpage/brandbuilding",
        layout: "mainDE",
        title: "SEO Markenentwicklung | seoberlino",
        description: "Brand-building: beste Empfehlung für Inhaltserstellung. Inhaltserstellung: mehr Traffic Markenbekanntheit, traffic und backlinks",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/brandbuilding"
    });
});

app.get("/en/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("backlinkanalysis", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlink Analysis & Audit | seoberlino",
        description: "During a backlink analysis, a report needs to be done with the profile's pros and cons. It should also include an audit of competitors'.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage/backlinkanalysis"
    });
});

app.get("/de/offpage/backlinkanalysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("backlinkanalysis", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlink Analyse SEO | seoberlino",
        description: "Während einer Backlink-Analyse muss ein Bericht mit den Vor- und Nachteilen des Profils erstellt werden. Es sollte auch eine Auditierung von Wettbewerbern beinhalten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage/backlinkanalysis"
    });
});

app.get("/en/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("links", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a backlink? | seoberlino",
        description: "Many think the more links, the better but it doesn't actually work that way. Too many low quality and/or spammy links will damage your SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage/toxic"
    });
});

app.get("/de/offpage/toxic", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("links", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Was sind backlinks? | seoberlino",
        description: "Viele denken, es gehe immer um eine möglichst große Anzahl von Links, dem ist allerdings nicht so.",
        canonical: "https://www.seoberlino.com/de/offpage/toxic",
        alt: "https://www.seoberlino.com/en/offpage/toxic"
    });
});

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | seoberlino",
        description: "SEO Berlin Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "https://www.seoberlino.com/de/impressum"
    });
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | seoberlino",
        description: "SEO Spezialist in Berlin. Impressum für SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "https://www.seoberlino.com/en/impressum"
    });
});

app.get("/de/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Datenschutz | seoberlino",
        description: "SEO Berlin, Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: "https://www.seoberlino.com/de/datenschutz",
        alt: "https://www.seoberlino.com/de/datenschutz"
    });
});

app.get("/de/seo-consultant", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("audit", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Consultant Onpage, Offpage, Technical Audits| seoberlino",
        description: "Lassen Sie Ihre Website mit Full SEO Audit auditieren, das mit einer To-Do-Liste (Backlog) mit nach Priorität klassifizierten Problemen geliefert wird.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-consultant"
    });
});

app.get("/en/seo-consultant", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("audit", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        description: "Get your site audited with Full SEO Audit that comes with a To-do list (Backlog) with issues classified by priority.",
        title: "SEO Consultant for SEO Audits in Berlin | seoberlino",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-consultant"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungsea", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEA Beratung Berlin | seoberlino",
        description: "SEA-Experte für SEA-Projekte: Google Ads, Facebook Ads, Instagram. Einrichtung, Test, Analyse und Optimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungsea", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEA Consultancy Berlin | seoberlino",
        description: "SEA Expert for SEA Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/sea"
    });
});

app.get("/de/analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratunganalytics", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Webanalyse Experte Berlin | seoberlino",
        description: "SEO Analytics Services in Berlin, SEO Expert mit über 10 Jahren Erfahrung mit Unternehmen wie Montblanc, Spreadshirt und Ricoh.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/analytics"
    });
});

app.get("/en/analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratunganalytics", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Analytics Expert Berlin | seoberlino",
        description: "SEO Analytics services in Berlin, SEO Expert with over 10 years experience with companies such as Montblanc, Spreadshirt and Ricoh.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/analytics"
    });
});

app.get("/de/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Content Growth Hacking SEO Experte Berlin | seoberlino",
        description: "Steigern Sie den Traffic durch gezielte Inhaltserstellung. SEO Growth Hacking durch Ihren SEO-Berater in Berlin, über 10 Jahre Erfahrung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/content"
    });
});

app.get("/en/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Content Growth Hacking Consultant Berlin | seoberlino",
        description: "Boost traffic with targeted Content Creation. SEO Growth Hacking by your SEO Consultant in Berlin, over 10 years experience.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/content"
    });
});

app.get("/en/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Agile Coach / ScrumMaster in Berlin | seoberlino",
        description: "Implement Scrum for your Projects. 10 Year-Experienced SEO Expert, certified ScrumMaster and experienced as Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/agile-coach-berlin"
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Agile Coach / ScrumMaster in Berlin | seoberlino",
        description: "Implementieren Sie Scrum für Ihre Projekte. 10 Jahre erfahrener SEO-Experte, zertifizierter Scrum-Master und erfahren als Product Owner.",
        canonical: "https://www.seoberlino.com/de/agile-coach-berlin",
        alt: "https://www.seoberlino.com/en/agile-coach-berlin"
    });
});

app.get("/en/scrum/pillars", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumpillars", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Scrum's 3 Pillars | seoberlino",
        description: "Scrum 3 Pillars: Transparency, Inspection and Adaptation. Learn about Scrum and how to Implement Scrum it for your SEO Projects.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/scrum/team", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumteam", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Teams | seoberlino",
        description: "Learn about Scrum and how the Scrum Team is organised and its members: Product Owner, ScrumMaster and Dev Team.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});

app.get("/en/scrum/events", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumevents", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Events | seoberlino",
        description: "Learn about Scrum and the Scrum Events: the Sprint, Sprint Planning, Daily Scrum, Sprint review and Backlog Refinement.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});


app.get("/en/scrum/artifacts", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("scrumartifacts", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "About Scrum: Scrum Artifacts | seoberlino",
        description: "Learn about Scrum and the Scrum Artifacts: the Product Backlog, The Sprint Backlog and the defintion of Done.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Experte in Berlin | Kontakt SEO Berlin",
        description: "SEO Consultant Experte in Berlin. SEO Experte Freelancer in Berlin. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/de/contact",
        alt: "https://www.seoberlino.com/en/contact"
    });
});

app.get("/error", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("error", {
        layout: "mainHPNoIndex",
        title: "Error",
        description: "This page should not be indexed so please ignore it.",
    });
});

app.get("/en/success", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("success", {
        layout: "mainHPNoIndex",
        title: "Success, thank you for your message!",
        description: "Thank you for your message.",
    });
});
app.get("/de/success", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("success", {
        layout: "mainHPNoIndex",
        title: "Danke für Ihre Nachricht!",
        description: "Danke für Ihre Nachricht",
    });
});
///LEXICON PAGES

app.get("/en/lexical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lexical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Lexicon: About SEO Jargon | seoberlino",
        description: "SEO Lexicon for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical"
    });
});

app.get("/de/lexical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lexical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "SEO Lexicon und SEO Jargon | seoberlino",
        description: "SEO Lexicon für SEO. Find out about SEO and all those words which can scare you.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical"
    });
});


app.get("/en/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("nofollow", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Nofollow Links and SEO | seoberlino",
        description: "SEO Lexicon about SEO Jargon for you to understand how NoFollow links work and how they affect your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/nofollow"
    });
});

app.get("/de/lexical/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("nofollow", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Nofollow Links wie es funktioniert | seoberlino",
        description: "SEO Lexicon für SEO. SEO Lexical about SEO Jargon. Understand NoFollow Links and how they affect your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/nofollow"
    });
});

app.get("/en/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("rankbrain", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Rankbrain | seoberlino",
        description: "SEO Lexicon about SEO Jargon for you to understand how Rankbrain works and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/rankbrain"
    });
});

app.get("/de/lexical/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("rankbrain", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was beudeutet Rankbrain | seoberlino",
        description: "SEO Lexicon für SEO. Was beudeutet Rankbrain und warum ist das für SEO wichtig?",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/rankbrain"
    });
});

app.get("/en/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("altattribute", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Alt Attribute for SEO Images | seoberlino",
        description: "SEO Lexicon about SEO Jargon for you to understand how alt attributs work and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/alt-attribute"
    });
});

app.get("/de/lexical/alt-attribute", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("altattribute", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Alt Attribute für SEO Bildoptimierung | seoberlino",
        description: "SEO Lexicon für SEO. Alt Attribute für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/alt-attribute"
    });
});

app.get("/en/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("amppages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Accelerated Mobile Pages and SEO | seoberlino",
        description: "SEO Lexicon about SEO Jargon for you to understand how AMP Papes work and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/amp-pages"
    });
});

app.get("/de/lexical/amp-pages", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("amppages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "AMP (Accelerated Mobile Pages) für SEO | seoberlino",
        description: "SEO Lexicon für SEO. AMP (Accelerated Mobile Pages) für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/amp-pages"
    });
});

app.get("/en/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("canonical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Canonicals for SEO | seoberlino",
        description: "SEO Lexicon about SEO Jargon for you to understand how canonicals work and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/canonical"
    });
});

app.get("/de/lexical/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("canonical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Canonicals für SEO | seoberlino",
        description: "SEO Lexicon für SEO. Canonicals für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/canonical"
    });
});

app.get("/en/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlekwtool", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google Keyword Planner for SEO | seoberlino",
        description: "SEO Lexicon about SEO Jargon for you to understand how the Google Keyword Tool works and how it affects your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-keyword-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlekwtool", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Google Keyword Planner für SEO | seoberlino",
        description: "SEO Lexicon für SEO. Google Keyword Planner für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/google-keyword-tool"
    });
});

app.get("/de/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googlepagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Google PageSpeed für Suchmaschinenoptimierung | seoberlino",
        description: "Google PageSpeed für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/google-pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googlepagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google PageSpeed for SEO | seoberlino",
        description: "SEO Lexical about SEO Jargon. Google PageSpeed for SEO is a very important tool. Learn here how to use it.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/google-pagespeed"
    });
});

app.get("/en/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("hreflang", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "hreflang for SEO | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how hreflang work and how they can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/hreflang"
    });
});

app.get("/de/lexical/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("hreflang", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "hreflang für SEO | seoberlino",
        description: "hreflang für Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/hreflang"
    });
});

app.get("/en/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("longtail", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Long Tail | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand what is long-tail and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/long-tail"
    });
});

app.get("/de/lexical/long-tail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("longtail", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Long Tail für SEO | seoberlino",
        description: "SEO Lexicon für SEO. Long tail und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/long-tail"
    });
});

app.get("/en/lexical/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("robots", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Robots.txt file | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how Robots.txt works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/robots"
    });
});

app.get("/de/lexical/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("robots", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Robots.txt für SEO | seoberlino",
        description: "SEO Lexicon für SEO. Robots.txt und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/robots"
    });
});

app.get("/en/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchconsole", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Google's Search Console | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how to use Google's Search Console and how it can help you to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/search-console"
    });
});

app.get("/de/lexical/search-console", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchconsole", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Search Console für SEO | seoberlino",
        description: "SEO Lexicon über SEO Jargon. Google's Search Console und Suchmaschinenoptimierung",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/search-console"
    });
});

app.get("/en/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("searchvolume", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Search Volume and how to use it for SEO | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/search-volume"
    });
});

app.get("/de/lexical/search-volume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("searchvolume", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Was bedeutet Search Volume für SEO | seoberlino",
        description: "SEO Lexicon über SEO Jargon. Understand Search Volume and how to use it to improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/search-volume"
    });
});

app.get("/en/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("sitemaps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Sitemaps | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how Sitemaps work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/sitemaps"
    });
});

app.get("/de/lexical/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("sitemaps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren Sitemaps für SEO | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how Sitemaps work and how they can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/sitemaps"
    });
});

app.get("/en/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("noindex", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex and SEO | seoberlino",
        description: "SEO Lexicon about SEO Jargon. Understand how noindex works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/noindex"
    });
});

app.get("/de/lexical/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("noindex", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren noindex für SEO | seoberlino",
        description: "SEO Lexicon über SEO Jargon. Verstehen Sie, wie noindex funktioniert und wie es Ihre SEO verbessern kann.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/noindex"
    });
});

app.get("/en/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("redirects", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a redirect and how to use it for SEO | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how redirects work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/redirects"
    });
});

app.get("/de/lexical/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("redirects", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktionieren redirects für SEO | seoberlino",
        description: "SEO Lexikalisch über SEO Jargon. Verstehen Sie, wie Redirects funktionieren und wie sie Ihre SEO verbessern können.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/redirects"
    });
});

app.get("/en/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lighthouse", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a Lighthouse and how to use it for SEO | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/lighthouse"
    });
});

app.get("/de/lexical/lighthouse", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lighthouse", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Lighthouse für SEO | seoberlino",
        description: "SEO Lexicon über SEO Jargon. SEO Lexical about SEO Jargon. Understand how Lighthouse work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/lighthouse"
    });
});

app.get("/en/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("removeurltool", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove url Tool? | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how the Remove url Tool works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/remove-url-tool"
    });
});

app.get("/de/lexical/remove-url-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("removeurltool", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Wie funktioniert Remove URL Tool| seoberlino",
        description: "SEO Lexicon über SEO Jargon. Understand how the Remove url Tool work and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/remove-url-tool"
    });
});

app.get("/en/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("disavowtool", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Disavow Tool and how to use it | seoberlino",
        description: "SEO Lexical about SEO Jargon. Understand how the Disavow Tool works and how it can improve your SEO",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/lexical/disavow-tool"
    });
});

app.get("/de/lexical/disavow-tool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("disavowtool", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDENoIndex",
        title: "Disavow Tool und wie es funktioniert| seoberlino",
        description: "SEO Lexicon über SEO Jargon. Disavow Tool und Suchmaschinenoptimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical/disavow-tool"
    });
});
////blog pages/////////
app.get("/en/article/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | | seoberlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogvoice", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | | seoberlino",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogclutch", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEOBerlino Top SEO Services Company in Germany | seoberlino",
        description: "Clutch has selected seoberlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogasia", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | seoberlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog2", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Beyond Mobile First | SEO Berlin | seoberlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog5", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Voice Search Challenges| seoberlino",
        description: "SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA. MBA, Scrum qualified and web development trained.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog6", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Why you need to implement Structured Data | seoberlino",
        description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog7", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Link Building to Brand Building | seoberlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog8", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "How to get those first links | SEO Berlin | seoberlino",
        description: "Read this article about SEO and Backlinking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
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

app.get("/en/article/seo-in-asia-korea-china-japan-2019", function(request, response) {
    response.writeHead(301, {
        Location: "/en/article/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/audit", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-consultant",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/audit", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-consultant",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/scrum", function(request, response) {
    response.writeHead(301, {
        Location: "/de/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/scrum", function(request, response) {
    response.writeHead(301, {
        Location: "/en/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-consultancy", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-beratung", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});



var nodemailer = require('nodemailer');

app.post('/email', function(req, res) {


    // var recaptcha_url = "https://www.google.com/recaptcha/api/siteverify?";
    // recaptcha_url += "secret=" + secrets.KEY + "&";
    // recaptcha_url += "response=" + req.body["g-recaptcha-response"] + "&";
    // recaptcha_url += "remoteip=" + req.connection.remoteAddress;
    // axios.get(recaptcha_url, function(error, resp, body) {
    //     body = JSON.parse(body);
    //     if (body.success !== undefined && !body.success) {
    //         return response.send({
    //             "message": "Captcha validation failed"
    //         });
    //     }
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
            subject: "New Message from your website",
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
                    Location: "/en/success"
                });
                res.end();
            }

        }); //transporter
    });
    // });





});








app.all("*", function(req, res) {
    res.writeHead(404);
    res.end();
});
// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));

////////////////DO NOT TOUCH/////////////////////////