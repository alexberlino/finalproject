const express = require("express");
const app = express();
const {
    stringify
} = require("querystring");
var i18n = require("i18n");

var hbs = require("hbs");
var hb = require("express-handlebars");
var bodyParser = require("body-parser");
var http = require("http");

var force = require("express-force-domain");
const helmet = require('helmet')
const featurePolicy = require('feature-policy')
const sts = require('strict-transport-security');


app.use(helmet.frameguard());
app.use(helmet.referrerPolicy());
app.use(helmet.hidePoweredBy());
app.use(helmet.noSniff());


const globalSTS = sts.getSTS({
    'max-age': {
        'days': 30
    }
});
const localSTS = sts.getSTS({
    'max-age': {
        'days': 10
    },
    'includeSubDomains': true
});

// This will apply this policy to all requests
app.use(globalSTS);

app.use(featurePolicy({
    features: {
        fullscreen: ["'self'"],
        syncXhr: ["'none'"]
    }
}))

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());


app.engine(
    ".hbs",
    hb({
        extname: ".hbs",
        defaultLayout: "main-min",
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

app.use(express.static("./Public"));

app.use(i18n.init);
if (process.env.NODE_ENV === "production") {
    app.use(force("https://www.seoberlino.com"));
}
if (process.env.NODE_ENV === "production") {
    app.use(function(req, res, next) {
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


let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
} else {
    secrets = require("./secrets.json");
}

let localhost;
if (process.env.NODE_ENV == "production") {
    localhost = "https://www.seoberlino.com";
} else {
    localhost = "";
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

app.get("/setcookiesession", (req, res) => {
    req.session.checked = true;

    res.json({
        success: true
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home-min", {
        requrl: localhost + "/en",
        layout: "mainHP-min",
        title: "SEO Agency in Germany • SEO Freelance | SEO Berlino",
        description: "SEO Agency with over 10 years experience: €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: localhost + "/en",
        alt: localhost + "/de",
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home-min", {
        requrl: localhost + "/en",
        layout: "mainDEHP-min",
        title: "SEO Beratung Berlin • SEO Agentur Berlin | SEO Berlino",
        canonical: localhost + "/de",
        description: "SEO Beratung in Berlin mit SEO Berlino, Kleine SEO Firma • SEO Berater mit 10 Jahre Erfahrung, Suchmaschinenoptimierung Agentur in Berlin. Kunden: Montblanc, HelloFresh, Ricoh, Spreadshirt, Spartoo, BSH etc",
        alt: localhost + "/en",
    });
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seofreelancer-min", {
        requrl: localhost + "/de/seo-freelancer",
        layout: "mainDE-min",
        title: "SEO Freelancer in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-freelancer",
        alt: localhost + "/en/seo-freelancer"
    });
});



app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seofreelancer-min", {
        requrl: localhost + "/de/seo-freelancer",
        title: "Experienced SEO Consultant in Germany | SEO Berlino",
        layout: "main-min",
        description: "SEO Consultant in Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-freelancer",
        alt: localhost + "/de/seo-freelancer"
    });
});

app.get("/de/seo-audit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoaudit", {
        requrl: localhost + "/de/seo-audit",
        layout: "mainDE-min",
        title: "SEO Audits in Berlin | SEO Berlino",
        description: "SEO Audit - Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-audit",
        alt: localhost + "/en/seo-audit"
    });
});

app.get("/en/seo-audit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoaudit", {
        requrl: localhost + "/de/seo-audit",
        title: "SEO Audits in Berlin, Germany | SEO Berlino",
        layout: "main-min",
        description: "SEO Audits in Berlin, by experienced SEO Consultants experienced in international SEO with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-audit",
        alt: localhost + "/de/seo-audit"
    });
});

app.get("/en/seo-check", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seocheck", {
        requrl: localhost + "/de/seo-check",
        title: "SEO Check Berlin | SEO Berlino",
        layout: "main-min",
        description: "SEO Check in Berlin, by an experienced SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-check",
        alt: localhost + "/de/seo-check"
    });
});

app.get("/de/seo-check", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seocheck", {
        requrl: localhost + "/de/seo-check",
        layout: "mainDE-min",
        title: "SEO Check & SEO Analyse in Berlin | SEO Berlino",
        description: "SEO Check - SEO & Analytics Beratung. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-check",
        alt: localhost + "/en/seo-check"
    });
});

app.get("/en/seo-onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoonpage", {
        requrl: localhost + "/de/seo-onpage",
        title: "SEO Onpage Services Berlin | SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-onpage",
        alt: localhost + "/de/seo-onpage"
    });
});

app.get("/de/seo-onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoonpage", {
        requrl: localhost + "/de/seo-onpage",
        layout: "mainDE-min",
        title: "SEO On-page • Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-onpage",
        alt: localhost + "/en/seo-onpage"
    });
});

app.get("/en/seo-page-speed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seopagespeed", {
        requrl: localhost + "/de/seo-page-speed",
        title: "SEO Page Speed (Insights) Improvements | SEO Berlino",
        layout: "main-min",
        description: "SEO Page Speed Insights Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-page-speed",
        alt: localhost + "/de/seo-page-speed"
    });
});

app.get("/de/seo-page-speed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seopagespeed", {
        requrl: localhost + "/de/seo-page-speed",
        layout: "mainDE-min",
        title: "SEO Page Speed (Insights) Beratung | SEO Berlino",
        description: "SEO und Analytics Berater- SEO. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-page-speed",
        alt: localhost + "/en/seo-page-speed"
    });
});

app.get("/en/seo-indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoindexation", {
        requrl: localhost + "/de/seo-indexation",
        title: "SEO Indexation Services  | SEO Berlino",
        layout: "main-min",
        description: "SEO Indexation Services, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-indexation",
        alt: localhost + "/de/seo-indexation"
    });
});

app.get("/de/seo-indexation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoindexation", {
        requrl: localhost + "/de/seo-indexation",
        layout: "mainDE-min",
        title: "SEO Indexierung Beratung | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-indexation",
        alt: localhost + "/en/seo-indexation"
    });
});

app.get("/en/local-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seolocal", {
        requrl: localhost + "/de/local-seo",
        title: "Local SEO: Google MyBusiness & Schema| SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/local-seo",
        alt: localhost + "/de/local-seo"
    });
});

app.get("/de/local-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seolocal", {
        requrl: localhost + "/de/local-seo",
        layout: "mainDE-min",
        title: "Local SEO - Google My Business & Schema | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/local-seo",
        alt: localhost + "/en/local-seo"
    });
});




app.get("/en/seo-wordpress", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seowordpress", {
        requrl: localhost + "/de/seo-wordpress",
        title: "SEO Services for Wordpress and Wix Users | SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-wordpress",
        alt: localhost + "/de/seo-wordpress"
    });
});

app.get("/de/seo-wordpress", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seowordpress", {
        requrl: localhost + "/de/seo-wordpress",
        layout: "mainDE-min",
        title: "SEO Beratung für Wordpress in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-wordpress",
        alt: localhost + "/en/seo-wordpress"
    });
});

app.get("/en/backlinks", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seobacklinks", {
        requrl: localhost + "/de/backlinks",
        title: "Backlinks Analysis and Strategie| SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/backlinks",
        alt: localhost + "/de/backlinks"
    });
});

app.get("/de/backlinks", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seobacklinks", {
        requrl: localhost + "/de/backlinks",
        layout: "mainDE-min",
        title: "Backlinks Analyse und Strategie | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/backlinks",
        alt: localhost + "/en/backlinks"
    });
});



app.get("/en/keyword-research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/keywordresearch", {
        requrl: localhost + "/de/keyword-research",
        title: "Keyword Research • Keyword Mapping | SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/keyword-research",
        alt: localhost + "/de/keyword-research"
    });
});



app.get("/de/keyword-research", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/keywordresearch", {
        requrl: localhost + "/de/keyword-research",
        layout: "mainDE-min",
        title: "Keyword Recherche • Keyword Mapping | SEO Berlino",
        description: "Keyword Recherche - Keywords finden. SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/keyword-research",
        alt: localhost + "/en/keyword-research"
    });
});


app.get("/en/seo-relaunch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/relaunch", {
        requrl: localhost + "/de/seo-relaunch",
        title: "SEO Support for Site Relaunch | SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-relaunch",
        alt: localhost + "/de/seo-relaunch"
    });
});



app.get("/de/seo-relaunch", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/relaunch", {
        requrl: localhost + "/de/seo-relaunch",
        layout: "mainDE-min",
        title: "SEO Beratung für Site Relaunch in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-relaunch",
        alt: localhost + "/en/seo-relaunch"
    });
});

app.get("/en/seo-copywriting", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/copywriting", {
        requrl: localhost + "/en/seo-copywriting",
        title: "Content Marketing Copywriting Services | SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-copywriting",
        alt: localhost + "/de/seo-copywriting"
    });
});



app.get("/de/seo-copywriting", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/copywriting", {
        requrl: localhost + "/en/seo-copywriting",
        title: "Content Marketing - Copywriting Beratung | SEO Berlino",
        layout: "mainDE-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/de/seo-copywriting",
        alt: localhost + "/en/seo-copywriting"
    });
});


app.get("/en/reporting-analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/seoreporting", {
        requrl: localhost + "/en/reporting-analytics",
        title: "Google Analytics and Reporting Services | SEO Berlino",
        layout: "main-min",
        description: "Google Analyics, Google Tag Manager, Data Studio for SEO Reporting. Support by expert SEO & Analytics Consultants with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/reporting-analytics",
        alt: localhost + "/de/reporting-analytics"
    });
});

app.get("/de/reporting-analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/seoreporting", {
        requrl: localhost + "/en/reporting-analytics",
        layout: "mainDE-min",
        title: "Reporting und Google Analytics Beratung in Berlin | SEO Berlino",
        description: "Google Analyics, Google Tag Manager, Data Studio für SEO Reporting. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/reporting-analytics",
        alt: localhost + "/en/reporting-analytics"
    });
});


app.get("/en/smm", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/smmberatung", {
        requrl: localhost + "/en/smm",
        title: "Social Media Marketing Services | SEO Berlino",
        layout: "mainNoAlt",
        description: "Social Media Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/smm",
        alt: localhost + "/de/smm"
    });
});

app.get("/de/smm", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/smmberatung", {
        requrl: localhost + "/en/smm",
        layout: "mainNoAltDE",
        title: "Social Media Marketing Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/en/smm",
        alt: localhost + "/en/smm"
    });
});

app.get("/en/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/competitor", {
        requrl: localhost + "/de/competitor-analysis",
        title: "Competitor Analysis for Online Marketing | SEO Berlino",
        layout: "main-min",
        description: "Competitor Analysis for SEO and Online Marketing. Experienced in international dital consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/competitor-analysis",
        alt: localhost + "/de/competitor-analysis"
    });
});



app.get("/de/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/competitor", {
        requrl: localhost + "/de/competitor-analysis",
        layout: "mainDE-min",
        title: "Wettbewerberanalyse Online Marketing | SEO Berlino",
        description: "Wettbewerberanalyse für SEO und Online Marketing. Analytics Berater mit über 10 Jahre Erfahrung. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/competitor-analysis",
        alt: localhost + "/en/competitor-analysis"
    });
});

app.get("/de/seo-pricing", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pricing", {
        requrl: localhost + "/de/seo-pricing",
        layout: "mainDE-min",
        title: "SEO Budget • Suchmaschinenoptimierung bei SEO Berlino",
        description: "SEO Freelancer und Analytics Consultant: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-pricing",
        alt: localhost + "/en/seo-pricing"
    });
});

app.get("/en/seo-pricing", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pricing", {
        requrl: localhost + "/de/seo-pricing",
        title: "SEO Cost and Budget • SEO Consultant in Germany | SEO Berlino",
        layout: "main-min",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: localhost + "/en/seo-pricing",
        alt: localhost + "/de/seo-pricing"
    });
});



app.get("/de/google-ranking-verbessern", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googleranking", {
        requrl: localhost + "/en/google-ranking",
        layout: "mainDE-min",
        title: "Verbesserung Ihrer Google-Rankings | SEO Berlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/google-ranking-verbessern",
        alt: localhost + "/en/google-ranking"
    });
});

app.get("/en/google-ranking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googleranking", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        title: "How to improve your Google Rankings | SEO Berlino",
        layout: "main-min",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: localhost + "/en/google-ranking",
        alt: localhost + "/de/google-ranking-verbessern"
    });
});


app.get("/en/seo-consultancy", function(req, res) {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoberatung-min", {
        requrl: localhost + "/de/seo-beratung",
        title: "SEO Consultancy in Berlin Germany | SEO Berlino",
        layout: "main-min",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/seo-consultancy",
        alt: localhost + "/de/seo-beratung"
    });
});


app.get("/de/seo-beratung", function(req, res) {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoberatung-min", {
        requrl: localhost + "/de/seo-beratung",
        layout: "mainDE-min",
        title: "SEO Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/seo-beratung",
        alt: localhost + "/en/seo-consultancy"
    });
});


app.get("/en/online-marketing", function(req, res) {
    i18n.setLocale(req, "en");
    res.render("otherberatung/onlinemarketing", {
        requrl: localhost + "/en/online-marketing",
        title: "Online Marketing Consultancy Berlin | SEO Berlino",
        layout: "main-min",
        description: "Online Marketing Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: localhost + "/en/online-marketing",
        alt: localhost + "/de/online-marketing"
    });
});

app.get("/de/online-marketing", function(req, res) {
    i18n.setLocale(req, "de");
    res.render("otherberatung/onlinemarketing", {
        requrl: localhost + "/en/online-marketing",
        layout: "mainDE-min",
        title: "Online Marketing Beratung in Berlin | SEO Berlino",
        description: "Online Marketing und Analytics Berater: SEA, SMM, Analytics und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/de/online-marketing",
        alt: localhost + "/en/online-marketing"
    });
});

app.get("/en/seo-services/berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogberlin", {
        requrl: localhost + "/en/seo-services/berlin",
        layout: "mainNoAlt",
        title: "SEO in Berlin, the place to be | SEO Berlino",
        description: "SEO Freelancer and Analytics Expert: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/en/seo-services/berlin"
    });
});

app.get("/en/jobs", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("jobs", {
        requrl: localhost + "/en/jobs",
        layout: "main-min",
        title: "SEO Consultants Jobs in Berlin, Germany | SEO Berlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: localhost + "/en/jobs",
        alt: localhost + "/de/jobs"
    });
});

app.get("/de/jobs", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("jobs", {
        requrl: localhost + "/en/jobs",
        layout: "mainDE-min",
        title: "SEO Consultants Jobs in Berlin | SEO Berlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: localhost + "/de/jobs",
        alt: localhost + "/en/jobs"
    });
});

app.get("/en/references", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("references", {
        requrl: localhost + "/en/references",
        layout: "main-min",
        title: "SEO Agency Berlin Clients References | SEO Berlino",
        description: "SEO Consultant in Berlin • SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: localhost + "/en/references",
        alt: localhost + "/de/references"
    });
});

app.get("/de/references", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("references", {
        requrl: localhost + "/en/references",
        layout: "mainDE-min",
        title: "SEO Agentur Berlin Kundenbewertungen | SEO Berlino",
        description: "10 Jahre erfahrener SEO Consulant in Berlin • €100m + Kunden:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: localhost + "/de/references",
        alt: localhost + "/en/references"
    });
});

app.get("/en/seo-services", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: localhost + "/en/seo-services",
        layout: "main-min",
        title: "SEO Services – Search Engine Optimization | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services",
        alt: localhost + "/de/seo-optimierung"
    });
});

app.get("/en/seo-services/metas", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/seo-services/https", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloghttps", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What https means for SEO | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/https",
        alt: localhost + "/de/seo-optimierung/https"
    });
});

app.get("/de/seo-optimierung/https", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/bloghttps", {
        requrl: localhost + "/en/seo-services/https",
        layout: "mainDE-min",
        title: "Was macht https für SEO? | Von http zu https | SEO Berlino",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/de/seo-optimierung/https",
        alt: localhost + "/en/seo-services/https"
    });
});

app.get("/en/seo-services/mobile", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "Importance of a Mobile Friendly Website  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/mobile",
        alt: localhost + "/de/seo-optimierung/mobile"
    });
});

app.get("/de/seo-optimierung/mobile", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogmobile", {
        requrl: localhost + "/en/seo-services/mobile",
        layout: "mainDE-min",
        title: " Mobile-Friendly Website | SEO Optimierung | SEO Berlino",
        description: "Website optimieren, SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/de/seo-optimierung/mobile",
        alt: localhost + "/en/seo-services/mobile"
    });
});

app.get("/en/seo-services/javascript", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogjava", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is Dynamic Rendering and how it affects SEO | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/javascript",
        alt: localhost + "/de/seo-optimierung/javascript"
    });
});

app.get("/de/seo-optimierung/javascript", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogjava", {
        requrl: localhost + "/en/seo-services/javascript",
        layout: "mainDE-min",
        title: "Dynamic Rendreing • Wie Javascript SEO beeinflusst | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/de/seo-optimierung/javascript",
        alt: localhost + "/en/seo-services/javascript"
    });
});


app.get("/en/seo-services/structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: localhost + "/en/seo-services/structured-data",
        layout: "main-min",
        title: "Structured Data for SEO | SEO Services | SEO Berlino",
        description: "Structured Data and Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/structured-data",
        alt: localhost + "/de/seo-optimierung/structured-data"
    });
});

app.get("/de/seo-optimierung/structured-data", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: localhost + "/en/seo-services/structured-data",
        layout: "mainDE-min",
        title: "Strukturierte Daten für SEO | SEO Berlino",
        description: "Structured Data für SEO",
        canonical: localhost + "/de/seo-optimierung/structured-data",
        alt: localhost + "/en/seo-services/structured-data"
    });
});

app.get("/en/seo-services/internal-linking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/bloginternallinking", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is Internal Linking and why it is important | SEO Berlino",
        description: "Internal Linking and Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/internal-linking",
        alt: localhost + "/de/seo-optimierung/interne-verlinkung"
    });
});

app.get("/de/seo-optimierung/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/bloginternallinking", {
        requrl: localhost + "/en/seo-services/internal-linking",
        layout: "mainDE-min",
        title: "Bedeutung von Interner Verlinkung | SEO Berlino",
        description: "Interne Verlinking.",
        canonical: localhost + "/de/seo-optimierung/interne-verlinkung",
        alt: localhost + "/en/seo-services/internal-linking"
    });
});

app.get("/en/seo-services/voice-search", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: localhost + "/en/seo-services/voice-search",
        layout: "main-min",
        title: "What is Voice Search for SEO | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/voice-search",
        alt: localhost + "/de/seo-optimierung/sprachsuche"
    });
});

app.get("/de/seo-optimierung/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: localhost + "/en/seo-services/voice-search",
        layout: "mainDE-min",
        title: "Was ist Sprachsuche? | SEO Berlino",
        description: "Sprachsuche und SEO.",
        canonical: localhost + "/de/seo-optimierung/sprachsuche",
        alt: localhost + "/en/seo-services/voice-search"
    });
});

app.get("/de/seo-optimierung/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/technical-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogtechnical", {
        requrl: localhost + "/en/seo-services/technical-seo",
        layout: "main-min",
        title: "What is Technical SEO? | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/en/seo-services/technical-seo",
        alt: localhost + "/de/seo-optimierung/technical-seo"
    });
});

app.get("/de/seo-optimierung/technical-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogtechnical", {
        requrl: localhost + "/en/seo-services/technical-seo",
        layout: "mainDE-min",
        title: "Was ist Technical SEO (Technisches SEO) ? | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/de/seo-optimierung/technical-seo",
        alt: localhost + "/en/seo-services/technical-seo"
    });
});

app.get("/de/seo-optimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: localhost + "/en/seo-services",
        layout: "mainDE-min",
        title: "Was ist SEO 'Optimierung' - Optimierung für Suchmaschinen | SEO Berlino",
        description: "Optimierung für Suchmaschinen, SEO Optimierung, SEO Betreuung in Berlin. SEO und Webanalyse Blog.",
        canonical: localhost + "/de/seo-optimierung",
        alt: localhost + "/en/seo-services"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainDE-min",
        title: "SEO Berlino Kontakt | SEO Berater in Berlin",
        description: "SEO Berater in Berlin, 10 Jahre Erfahrung | Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: localhost + "/de/contact",
        alt: localhost + "/en/contact"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "SEO Consultant in Berlin | Get in Touch | SEO Berlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/contact"
    });
});

app.get("/de/seo-experte", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("expert", {
        requrl: localhost + "/en/seo-expert",
        layout: "mainDE-min",
        title: "SEO Berater und Experte Berlin | SEO Berlino",
        description: "SEO Berater in Berlin, 10 Jahre Erfahrung, Experte SEO und Webanalyse. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: localhost + "/de/seo-experte",
        alt: localhost + "/en/seo-expert"
    });
});

app.get("/en/seo-expert", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("expert", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "SEO Consultant • SEO Expert in Berlin | SEO Berlino ",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-experte"
    });
});

app.get("/en/seo-services/case-study-fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyfromatob", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyzalando", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudywooga", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyjuniqe", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe Berlin SEO Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudymodomoto", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyn26", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyhellofresh", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HelloFresh SEO Case Study | SEO Berlino",
        description: "Mini SEO Berlin Case Study about Berlin's HelloFresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyhometogo", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HomeToGo SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's HomeToGo: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "" + req.originalUrl
    });
});


app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Berlino",
        description: "SEO Berlino Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: localhost + "/de/impressum",
        alt: localhost + "/de/impressum"
    });
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Berlino",
        description: "SEO Spezialist in Berlin. Impressum für SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: localhost + "/de/impressum",
        alt: localhost + "/en/impressum"
    });
});

app.get("/de/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Datenschutz | SEO Berlino",
        description: "SEO Berlino Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: localhost + "/de/datenschutz",
        alt: localhost + "/de/datenschutz"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/beratungsea", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainDE-min",
        title: "Online Marketing Beratung Freelancer | SEO Berlino",
        description: "SEA-Experte für SEA-Projekte: Google Ads, Facebook Ads, Instagram. Einrichtung, Test, Analyse und Optimierung.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/beratungsea", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "Online Marketing Consultant Berlin | SEO Berlino",
        description: "SEA Expert for SEA Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/sea"
    });
});

app.get("/en/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/beratungscrum", {
        requrl: localhost + "/en/agile-coach-berlin",
        layout: "mainNoAlt",
        title: "Agile Coach Freelancer in Berlin | SEO Berlino",
        description: "Experienced Agile Coach for Agile implementation. Agile experience at HelloFresh and Spreadshirt. Scrum Certified Scrum Master and experienced as both Scrum Master and Product owner.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/agile-coach-berlin"
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/beratungscrum", {
        requrl: localhost + "/en/agile-coach-berlin",
        layout: "mainNoAltDE",
        title: "Agile Coach / Scrum Master in Berlin | SEO Berlino",
        description: "Implementieren Sie Scrum für Ihre Projekte. 10 Jahre erfahrener Scrum-Master und Product Owner.",
        canonical: localhost + "/en/agile-coach-berlin",
        alt: localhost + "/en/agile-coach-berlin"
    });
});

app.get("/error", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("error", {
        layout: "mainHPNoIndex",
        title: "Error",
        description: "This page should not be indexed so please ignore it."
    });
});

app.get("/en/success", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("success", {
        layout: "mainHPNoIndex",
        title: "Success, thank you for your message!",
        description: "Thank you for your message."
    });
});
app.get("/de/success", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("success", {
        layout: "mainHPNoIndex",
        title: "Danke für Ihre Nachricht!",
        description: "Danke für Ihre Nachricht"
    });
});

app.get("/en/seo-services/canonical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/canonical", {
        requrl: localhost + "/en/seo-services/canonical",
        layout: "main-min",
        title: "What is Canonical Tag and how to use it | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/canonical"
    });
});

app.get("/en/seo-services/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/hreflang", {
        requrl: localhost + "/en/seo-services/hreflang",
        layout: "main-min",
        title: "What is Hreflang and how to use it | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/hreflang"
    });
});

app.get("/de/seo-optimierung/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/hreflang", {
        requrl: localhost + "/en/seo-services/hreflang",
        layout: "mainDE-min",
        title: "Was ist Hreflang und warum ist es wichtig? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/hreflang"
    });
});



app.get("/de/seo-optimierung/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/canonical", {
        requrl: localhost + "/en/seo-services/canonical",
        layout: "mainDE-min",
        title: "Was ist ein Canonical Tag und warum ist es wichtig? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/canonical"
    });
});

app.get("/en/seo-services/404", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/404", {
        requrl: localhost + "/en/seo-services/404",
        layout: "main-min",
        title: "What does 404 - Page Not Found mean| SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/404"
    });
});

app.get("/de/seo-optimierung/404", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/404", {
        requrl: localhost + "/en/seo-services/404",
        layout: "mainDE-min",
        title: "Was bedeutet 'Fehler 404 - Not Found'? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/404"
    });
});


app.get("/en/seo-services/seobudget", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seobudget", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "SEO Budget | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/seobudget"
    });
});

app.get("/de/seo-optimierung/seobudget", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seobudget", {
        requrl: localhost + "/en/seo-services/seobudget",
        layout: "mainDE-min",
        title: "SEO  Budget| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/seobudget"
    });
});

app.get("/en/seo-services/seospecialist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seospecialist", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "SEO Specialist | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/seospecialist"
    });
});

app.get("/de/seo-optimierung/seospecialist", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seospecialist", {
        requrl: localhost + "/en/seo-services/seospecialist",
        layout: "mainDE-min",
        title: "SEO Spezialist| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/seospecialist"
    });
});

app.get("/en/seo-services/disavowtool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/disavow", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "Disavow Tool | SEO Berlino",
        description: "Disavow Tool. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/disavowtool"
    });
});

app.get("/en/seo-services/serp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/serp", {
        requrl: localhost + "/en/seo-services/serp",
        layout: "main-min",
        title: "What does SERP stand for| SEO Berlino",
        description: "SERP. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/serp"
    });
});

app.get("/de/seo-optimierung/serp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/serp", {
        requrl: localhost + "/en/seo-services/serp",
        layout: "mainDE-min",
        title: "What does SERP stand for| SEO Berlino",
        description: "SERP. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/serp"
    });
});

app.get("/en/seo-services/googleupdate", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googleupdate", {
        requrl: localhost + "/en/seo-services/googleupdate",
        layout: "main-min",
        title: "SEO Google Updates, what it means to you | SEO Berlino",
        description: "Google updates. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/googleupdate"
    });
});

app.get("/de/seo-optimierung/googleupdate", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googleupdate", {
        requrl: localhost + "/en/seo-services/googleupdate",
        layout: "mainDE-min",
        title: "Google SEO Updates | SEO Berlino",
        description: "Google updates. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/googleupdate"
    });
});



app.get("/de/seo-optimierung/disavowtool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/disavow", {
        requrl: localhost + "/en/seo-services/disavowtool",
        layout: "mainDE-min",
        title: "Was ist das Disavow Tool? | SEO Berlino",
        description: "Disavow Tool. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/disavowtool"
    });
});

app.get("/en/seo-services/longtail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/longtail", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What are Long Tail Keywords | SEO Berlino",
        description: "Long Tail Keywords. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/longtail"
    });
});

app.get("/de/seo-optimierung/longtail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/longtail", {
        requrl: localhost + "/en/seo-services/longtail",
        layout: "mainDE-min",
        title: "Was sind Long Tail Keywords? | SEO Berlino",
        description: "Long Tail Keywords. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/longtail"
    });
});

app.get("/en/seo-services/searchvolume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/searchvolume", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is Keyword Search Volume and why it is important | SEO Berlino",
        description: "Search Volume. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/searchvolume"
    });
});


app.get("/en/seo-services/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Berlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/de/seo-optimierung/searchvolume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/searchvolume", {
        requrl: localhost + "/en/seo-services/searchvolume",
        layout: "mainDE-min",
        title: "Was sind Keyword Suchvolumen  | SEO Berlino",
        description: "Suchvolumen, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/searchvolume"
    });
});

app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is AMP (Accelerated Mobile Pages) and how do they work | SEO Berlino",
        description: "AMP, Accelerated Mobile Pages, SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/amp"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: localhost + "/en/seo-services/amp",
        layout: "mainDE-min",
        title: "Was sind AMP (Accelerated Mobile Pages)? | SEO Berlino",
        description: "AMP (Accelerated Mobile Pages). Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/amp"
    });
});

app.get("/en/seo-services/removeurl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/removeurl", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is the Remove URL Tool and how does it work | SEO Berlino",
        description: "Remove URL Tool, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/removeurl"
    });
});

app.get("/de/seo-optimierung/removeurl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/removeurl", {
        requrl: localhost + "/en/seo-services/removeurl",
        layout: "mainDE-min",
        title: "Was ist der Remove URL Tool  | SEO Berlino",
        description: "Remove URL Tool. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/removeurl"
    });
});

app.get("/en/seo-services/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/rankbrain", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is Rank Brain and how does it work | SEO Berlino",
        description: "Rank Brain, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/rankbrain"
    });
});

app.get("/de/seo-optimierung/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/rankbrain", {
        requrl: localhost + "/en/seo-services/rankbrain",
        layout: "mainDE-min",
        title: "Was ist Rank Brain und wie funktioniert | SEO Berlino",
        description: "Rank Brain, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/rankbrain"
    });
});

app.get("/en/seo-services/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/redirect", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What are 301 and 302 Redirects and what is the difference | SEO Berlino",
        description: "Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/redirects"
    });
});

app.get("/de/seo-optimierung/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/redirect", {
        requrl: localhost + "/en/seo-services/redirects",
        layout: "mainDE-min",
        title: "Was sind 301 und 302 Redirects (Weiterleitungen) | SEO Berlino",
        description: "Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/redirects"
    });
});

app.get("/en/seo-services/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/noindex", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is noindex and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/noindex"
    });
});

app.get("/de/seo-optimierung/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/noindex", {
        requrl: localhost + "/en/seo-services/noindex",
        layout: "mainDE-min",
        title: "Was ist noindex und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/noindex"
    });
});

app.get("/en/seo-services/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/nofollow", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is a nofollow link and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/nofollow"
    });
});

app.get("/de/seo-optimierung/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/nofollow", {
        requrl: localhost + "/en/seo-services/nofollow",
        layout: "mainDE-min",
        title: "Was ist ein nofollow link und wie funktioniert es? | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/nofollow"
    });
});

app.get("/en/seo-services/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/robots", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is Robots.txt and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/robots"
    });
});

app.get("/de/seo-optimierung/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/robots", {
        requrl: localhost + "/en/seo-services/robots",
        layout: "mainDE-min",
        title: "Was ist Robots.txt und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/robots"
    });
});

app.get("/en/seo-services/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/sitemaps", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What is an xml Sitemap and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/sitemaps", {
        requrl: localhost + "/en/seo-services/sitemaps",
        layout: "mainDE-min",
        title: "Was ist ein xml Sitemap und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/sitemaps"
    });
});

app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "What are AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: localhost + "/en/seo-services/amp",
        layout: "mainDE-min",
        title: "Was sind AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/amp"
    });
});

app.get("/en/seo-services/searchengines", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/suchmaschinen", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main-min",
        title: "Search Engines | SEO Berlino",
        description: "Search Enginles, Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/searchengines"
    });
});

app.get("/de/seo-optimierung/searchengines", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/suchmaschinen", {
        requrl: localhost + "/en/seo-services/amp",
        layout: "mainDE-min",
        title: "Suchmaschinen | SEO Berlino",
        description: "Suchmaschinen, Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/searchengines"
    });
});

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap", {});
});


app.get("/en/seo-services/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/bloglinksgettingitright", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | SEO Berlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Berlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogclutch", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Company in Germany 2019 | SEO Berlino",
        description: "Clutch has selected SEO Berlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/clutch_2021", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogclutch2", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Company in Germany 2021 | SEO Berlino",
        description: "Clutch has selected SEO Berlino as one of the top SEO companies in Germany for 2021. Read the Press Release from Clutch.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogasia", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | SEO Berlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile-first", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Beyond Mobile First | SEO Blog | SEO Berlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: localhost + "/en/seo-services/beyond-mobile-first"
    });
});

app.get(
    "/en/seo-services/why-you-need-implement-structured-data",
    (req, res) => {
        i18n.setLocale(req, "en");
        res.render("blogtech/blogstructureddata", {
            requrl: localhost + "/en" + req.originalUrl.substring(3),
            layout: "mainNoAlt",
            title: "Structured Data SEO | SEO Berlino",
            description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
            canonical: localhost + "" + req.originalUrl
        });
    }
);

app.get("/en/seo-services/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbrandbuilding", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building to Brand Building | SEO Berlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogfirstlinks", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "How to get those first backlinks | SEO Berlino",
        description: "Read this article about SEO and Back linking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/site-migration-seo-checklist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogsitemigration", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Site migration SEO Checklist | SEO Berlino",
        description: "Read this article about site migration and what to do before you start migration.",
        canonical: localhost + "" + req.originalUrl
    });
});

var nodemailer = require("nodemailer");

app.post("/en/email", function(req, res) {

    if (req.body.address
        .length != 0) {

        console.log("failed");
    } else {

        nodemailer.createTestAccount((error, account) => {
            const htmlEmail = `
                    <h3> Contact Details </h3>
                    <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>Email: ${req.body.email}</li>
                        <li>Website: ${req.body.website}</li>
                        <li>Beratung: ${req.body.beratung}</li>
                        <li>Consultancy: ${req.body.budget}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${req.body.message}</p>
                    `;
            let transporter = nodemailer.createTransport({
                host: "smtp.mailgun.org",
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
                        Location: localhost + "/error"
                    });
                    res.end();
                } else {
                    res.writeHead(301, {
                        Location: localhost + "/en/success"
                    });
                    res.end();
                }
            });
        });
    }
});


app.post("/de/email", function(req, res) {

    if (req.body.address
        .length != 0) {
        res.end();
    } else {

        nodemailer.createTestAccount((error, account) => {
            const htmlEmail = `
                    <h3> Contact Details </h3>
                    <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>Email: ${req.body.email}</li>
                        <li>Website: ${req.body.website}</li>
                        <li>Beratung: ${req.body.beratung}</li>
                        <li>Consultancy: ${req.body.budget}</li>
                    </ul>
                    <h3>Message</h3>
                    <p>${req.body.message}</p>
                    `;
            let transporter = nodemailer.createTransport({
                host: "smtp.mailgun.org",
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
                        Location: localhost + "/error"
                    });
                    res.end();
                } else {
                    res.writeHead(301, {
                        Location: localhost + "/de/success"
                    });
                    res.end();
                }
            });
        });
    }
});


//////////////// Redirects////////////////
app.get("/en/article/beyond-mobile-first", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/content", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-copywriting",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/content", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-copywriting",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/metas", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/indexation", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/indexation", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/seoaudit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/seoaudit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/on-page*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/clutch", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/clutch",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/audit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/audit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/casestudy/n26", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-n26",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/zalando", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hometogo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-zalando", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-hometogo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/seo-case-studies",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/scrum*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/scrum*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/seo-in-asia-korea-china-japan-2019", function(
    request,
    response
) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voicesearch", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/voice-search",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voice-search-challenges", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/voice-search-challenges",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/consultant", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/onpage/keyword-recherche", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/blog/canonical", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-optimierung/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/technical-seo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-optimierung/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-optimierung/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/technical*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/competitor-analysis", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/competitor-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/competitor-analysis", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/competitor-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/localSEO", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/local-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/localSEO", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/local-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/backlink*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo-optimierung/backlink*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/pagespeed", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-page-speed",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-optimierung/pagespeed", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-page-speed",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-relaunch", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-relaunch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-relaunch", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-relaunch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/crawl", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/international", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-relaunch",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-consultant", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-expert",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/de/seo-optimierung/crawl", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/international", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-relaunch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/mitwettbewerber", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/competitor-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/de/seo-page-speed", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-page-speed",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/images", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/images", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.all("*", function(req, res) {
    res.status(404).render("error", {
        title: "Error 404 - Page Not Found"
    });

});
// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));