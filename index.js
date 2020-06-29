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

app.set("view engine", "handlebars");

app.engine("handlebars", hb());
app.use(
    require("body-parser").urlencoded({
        extended: false
    })
);

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainDEHP",
        title: "SEO Beratung • Online Marketing • Agile | seoberlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Beratung Freelancer und Agile Coach. 10 Jahre Erfahrung Suchmaschinenoptimierung Berlin. Kunden: Montblanc, Hello Fresh, Ricoh, Spreadshirt, Spartoo, BSH, MSF, Red Cross, etc",
        alt: "https://www.seoberlino.com/en",
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainHP",
        title: "SEO Marketing Consultant in Berlin, Germany | seoberlino",
        description: "SEO Consultant, 10 years experience €100m + multinationals:  Montblanc, Hello Fresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de",
    });
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en/seo-freelancer",
        layout: "mainDE",
        title: "SEO Freelancer Berlin - SEO Audits | seoberlino",
        description: "SEO & Analytics Experte: SEO, Analytics, SEA und Scrum Implementierung. 10 Jahre Erfahrung mit Montblanc, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "https://www.seoberlino.com/en/seo-freelancer"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Consultant in Berlin • Audits & Consulting | seoberlino",
        layout: "main",
        description: "SEO Consultant Freelancer in Berlin. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-freelancer",
        alt: "https://www.seoberlino.com/de/seo-freelancer"
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
        title: "SEO Expert & Agile Coach in Berlin • Profile | seoberlino",
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
        title: "SEO Berlin: fromAtoB SEO Case Study | seoberlino",
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
        title: "SEO Berlin: Zalando SEO Case Study | seoberlino",
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
        title: "SEO Berlin: Wooga SEO Case Study | seoberlino",
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
        title: "SEO Berlin: Juniqe SEO Case Study | seoberlino",
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
        title: "SEO Berlin: N26 SEO Case Study | seoberlino",
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
        title: "SEO Berlin: HelloFresh SEO Case Study | seoberlino",
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
        title: "SEO Berlin: HomeToGo SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's HomeToGo: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/casestudy/hometogo"
    });
});

app.get("/en/onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("onpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Onpage Optimization SEO | seoberlino",
        description: "Onpage Optimization refers to any SEO action taken on the website: content and and code of the page.",
        canonical: "https://www.seoberlino.com/en/onpage",
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
        canonical: "https://www.seoberlino.com/de/onpage",
        alt: "https://www.seoberlino.com/en/onpage"
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
        title: "Technical SEO | Technisches SEO | seoberlino",
        description: "Technical SEO bezeichnet Optimierungen von Webseiten und Servern die Spidern helfen das Crawling und Indexieren Ihrer Seite effektiver zu gestalten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/technical"
    });
});

app.get("/en/offpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("offpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlinks and Offpage SEO | seoberlino",
        description: "Backlinks and Offpage SEO represent a key part of SEO and include in particular Link Building and Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/offpage"
    });
});

app.get("/de/offpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("offpage", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlinks & Offpage SEO | seoberlino",
        description: "Backlinks sind ein wichtiger Bestandteil von SEO und umfassen insbesondere Link Building und Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/offpage"
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


app.get("/en/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Agile Coach / Scrum Master in Berlin | seoberlino",
        description: "Implement Scrum for your Projects. 10 Year-Experienced SEO Expert, certified Scrum Master and experienced as Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Agile Coach / Scrum Master in Berlin | seoberlino",
        description: "Implementieren Sie Scrum für Ihre Projekte. 10 Jahre erfahrener SEO-Experte, zertifizierter Scrum-Master und erfahren als Product Owner.",
        canonical: "https://www.seoberlino.com/en/agile-coach-berlin",
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Experte & Agile Coach in Berlin | seoberlino ",
        description: "SEO Consultant Experte in Berlin, 10 Jahre Erfahrung | Kontaktieren Sie uns jetzt für weitere Details.",
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
        layout: "mainDEHP",
        title: "SEO Lexikon und SEO Jargon | seoberlino",
        description: "SEO Lexikon für SEO: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/lexical"
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

////blog pages/////////
app.get("/en/blog/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog1", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | | seoberlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/linkbuilding-in-2020", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/linkbuilding-in-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/analytics", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-freelancer#analytics",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/analytics", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer#analytics",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-consultant", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-consultant", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/blog/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogvoice", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | | seoberlino",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/article/voicesearch", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/voicesearch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogclutch", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Services Company in Germany | seoberlino",
        description: "Clutch has selected seoberlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/clutch", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/clutch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogasia", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | seoberlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/seo-in-asia-korea-china-japan-2020", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/beyond-mobile-first", (req, res) => {
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

app.get("/en/article/beyond-mobile-first", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/voice-search-challenges", (req, res) => {
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


app.get("/en/article/voice-search-challenges", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/voice-search-challenges",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/why-you-need-implement-structured-data", (req, res) => {
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

app.get("/en/article/why-you-need-implement-structured-data", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/why-you-need-implement-structured-data",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/link-building-to-brandbuilding", (req, res) => {
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

app.get("/en/article/link-building-to-brandbuilding", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/link-building-to-brandbuilding",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/how-to-get-those-first-links", (req, res) => {
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

app.get("/en/article/how-to-get-those-first-links", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/how-to-get-those-first-links",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/seo-in-asia-korea-china-japan-2019", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

//////////////// Redirects////////////////

app.get("/en/lexical/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/lexical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical/*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/lexical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/audit", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/audit", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-freelancer",
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

app.get("/de/scrum*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/scrum*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/onpage/*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/consultant", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/consultant", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});




app.get("/en/onpage/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage/*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/offpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/offpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical/*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/technical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/technical/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/technical",
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
//////////////// Redirects////////////////

var nodemailer = require('nodemailer');

app.post('/email', function(req, res) {

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
});

app.all("*", function(req, res) {
    res.writeHead(404);
    res.end();
});
// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));