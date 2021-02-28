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


app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "/en",
        layout: "mainDEHP",
        title: "SEO Beratung | SEO Agentur Berlin | SEO Berlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Beratung in Berlin mit SEO Berlino, SEO Agentur • SEO Berater mit 10 Jahre Erfahrung, Suchmaschinenoptimierung Agentur in Berlin. Kunden: Montblanc, HelloFresh, Ricoh, Spreadshirt, Spartoo, BSH etc",
        alt: "/en"
    });
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seofreelancer", {
        requrl: "/de/seo-freelancer",
        layout: "mainDE",
        title: "SEO Freelancer Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "/en/seo-freelancer"
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "/en",
        layout: "mainHP",
        title: "SEO Agency in Germany • SEO Consultancy | SEO Berlino",
        description: "SEO Agency - SEO Consultancy, with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "/de"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seofreelancer", {
        requrl: "/de/seo-freelancer",
        title: "Experienced SEO Freelancer in Berlin, Germany | SEO Berlino",
        layout: "main",
        description: "SEO Freelancer in Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-freelancer",
        alt: "/de/seo-freelancer"
    });
});

app.get("/de/seo-audit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoaudit", {
        requrl: "/de/seo-audit",
        layout: "mainDE",
        title: "SEO Audits in Berlin | SEO Berlino",
        description: "SEO Audit - Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-audit",
        alt: "/en/seo-audit"
    });
});

app.get("/en/seo-audit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoaudit", {
        requrl: "/de/seo-audit",
        title: "SEO Audits in Berlin, Germany | SEO Berlino",
        layout: "main",
        description: "SEO Audits in Berlin, by experienced SEO Consultants experienced in international SEO with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-audit",
        alt: "/de/seo-audit"
    });
});

app.get("/en/seo-check", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seocheck", {
        requrl: "/de/seo-check",
        title: "SEO Check Berlin | SEO Berlino",
        layout: "main",
        description: "SEO Check in Berlin, by an experienced SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-check",
        alt: "/de/seo-check"
    });
});

app.get("/de/seo-check", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seocheck", {
        requrl: "/de/seo-check",
        layout: "mainDE",
        title: "SEO Check & SEO Analyse in Berlin | SEO Berlino",
        description: "SEO Check - SEO & Analytics Beratung. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-check",
        alt: "/en/seo-check"
    });
});

app.get("/en/seo-onpage", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoonpage", {
        requrl: "/de/seo-onpage",
        title: "SEO Onpage Services Berlin | SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-onpage",
        alt: "/de/seo-onpage"
    });
});

app.get("/de/seo-onpage", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoonpage", {
        requrl: "/de/seo-onpage",
        layout: "mainDE",
        title: "SEO Onpage Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-onpage",
        alt: "/en/seo-onpage"
    });
});

app.get("/en/seo-page-speed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seopagespeed", {
        requrl: "/de/seo-page-speed",
        title: "SEO Page Speed (Insights) Improvements | SEO Berlino",
        layout: "main",
        description: "SEO Page Speed Insights Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-page-speed",
        alt: "/de/seo-page-speed"
    });
});

app.get("/de/seo-page-speed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seopagespeed", {
        requrl: "/de/seo-page-speed",
        layout: "mainDE",
        title: "SEO Page Speed (Insights) Beratung | SEO Berlino",
        description: "SEO und Analytics Berater- SEO. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-page-speed",
        alt: "/en/seo-page-speed"
    });
});

app.get("/en/seo-indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoindexation", {
        requrl: "/de/seo-indexation",
        title: "SEO Indexation Services Berlin | SEO Berlino",
        layout: "main",
        description: "SEO Indexation Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-indexation",
        alt: "/de/seo-indexation"
    });
});

app.get("/de/seo-indexation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoindexation", {
        requrl: "/de/seo-indexation",
        layout: "mainDE",
        title: "SEO Indexierung Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-indexation",
        alt: "/en/seo-indexation"
    });
});

app.get("/en/local-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seolocal", {
        requrl: "/de/local-seo",
        title: "Local SEO: Google MyBusiness & Schema| SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/local-seo",
        alt: "/de/local-seo"
    });
});

app.get("/de/local-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seolocal", {
        requrl: "/de/local-seo",
        layout: "mainDE",
        title: "Local SEO - Google My Business & Schema | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/local-seo",
        alt: "/en/local-seo"
    });
});




app.get("/en/seo-wordpress", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seowordpress", {
        requrl: "/de/seo-wordpress",
        title: "SEO Services for Wordpress and Wix Users | SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-wordpress",
        alt: "/de/seo-wordpress"
    });
});



app.get("/de/seo-wordpress", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seowordpress", {
        requrl: "/de/seo-wordpress",
        layout: "mainDE",
        title: "SEO Beratung für Wordpress in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-wordpress",
        alt: "/en/seo-wordpress"
    });
});



app.get("/en/backlinks", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seobacklinks", {
        requrl: "/de/backlinks",
        title: "Backlinks Analysis and Strategie| SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/backlinks",
        alt: "/de/backlinks"
    });
});



app.get("/de/backlinks", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seobacklinks", {
        requrl: "/de/backlinks",
        layout: "mainDE",
        title: "Backlinks Analyse und Strategie | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/backlinks",
        alt: "/en/backlinks"
    });
});



app.get("/en/keyword-research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/keywordresearch", {
        requrl: "/de/keyword-research",
        title: "Keyword Research • Keyword Mapping | SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/keyword-research",
        alt: "/de/keyword-research"
    });
});



app.get("/de/keyword-research", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/keywordresearch", {
        requrl: "/de/keyword-research",
        layout: "mainDE",
        title: "Keyword Recherche • Keyword Mapping | SEO Berlino",
        description: "Keyword Recherche - Keywords finden. SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/keyword-research",
        alt: "/en/keyword-research"
    });
});


app.get("/en/seo-relaunch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung/relaunch", {
        requrl: "/de/seo-relaunch",
        title: "SEO Support for Site Relaunch | SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-relaunch",
        alt: "/de/seo-relaunch"
    });
});



app.get("/de/seo-relaunch", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung/relaunch", {
        requrl: "/de/seo-relaunch",
        layout: "mainDE",
        title: "SEO Beratung für Site Relaunch in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-relaunch",
        alt: "/en/seo-relaunch"
    });
});

app.get("/en/seo-copywriting", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/copywriting", {
        requrl: "/en/seo-copywriting",
        title: "Content Marketing Copywriting Services | SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-copywriting",
        alt: "/de/seo-copywriting"
    });
});



app.get("/de/seo-copywriting", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/copywriting", {
        requrl: "/en/seo-copywriting",
        title: "Content Marketing - Copywriting Beratung | SEO Berlino",
        layout: "mainDE",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/de/seo-copywriting",
        alt: "/en/seo-copywriting"
    });
});


app.get("/en/reporting-analytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/seoreporting", {
        requrl: "/en/reporting-analytics",
        title: "Google Analytics and Reporting Services | SEO Berlino",
        layout: "main",
        description: "Google Analyics, Google Tag Manager, Data Studio for SEO Reporting. Support by expert SEO & Analytics Consultants with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/reporting-analytics",
        alt: "/de/reporting-analytics"
    });
});

app.get("/de/reporting-analytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/seoreporting", {
        requrl: "/en/reporting-analytics",
        layout: "mainDE",
        title: "Reporting und Google Analytics Beratung in Berlin | SEO Berlino",
        description: "Google Analyics, Google Tag Manager, Data Studio für SEO Reporting. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/reporting-analytics",
        alt: "/en/reporting-analytics"
    });
});


app.get("/en/smm", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/smmberatung", {
        requrl: "/en/smm",
        title: "Social Media Marketing Services | SEO Berlino",
        layout: "mainNoAlt",
        description: "Social Media Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/smm",
        alt: "/de/smm"
    });
});

app.get("/de/smm", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/smmberatung", {
        requrl: "/en/smm",
        layout: "mainNoAltDE",
        title: "Social Media Marketing Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/en/smm",
        alt: "/en/smm"
    });
});

app.get("/en/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/competitor", {
        requrl: "/de/competitor-analysis",
        title: "Competitor Analysis for Online Marketing | SEO Berlino",
        layout: "main",
        description: "Competitor Analysis for SEO and Online Marketing. Experienced in international dital consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/competitor-analysis",
        alt: "/de/competitor-analysis"
    });
});



app.get("/de/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/competitor", {
        requrl: "/de/competitor-analysis",
        layout: "mainDE",
        title: "Wettbewerberanalyse Online Marketing | SEO Berlino",
        description: "Wettbewerberanalyse für SEO und Online Marketing. Analytics Berater mit über 10 Jahre Erfahrung. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/competitor-analysis",
        alt: "/en/competitor-analysis"
    });
});

app.get("/de/seo-pricing", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pricing", {
        requrl: "/de/seo-pricing",
        layout: "mainDE",
        title: "SEO Budget • Suchmaschinenoptimierung bei SEO Berlino",
        description: "SEO Freelancer und Analytics Consultant: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-pricing",
        alt: "/en/seo-pricing"
    });
});

app.get("/en/seo-pricing", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pricing", {
        requrl: "/de/seo-pricing",
        title: "SEO Cost and Budget • SEO Consultant in Germany | SEO Berlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-pricing",
        alt: "/de/seo-pricing"
    });
});



app.get("/de/google-ranking-verbessern", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googleranking", {
        requrl: "/en/google-ranking",
        layout: "mainDE",
        title: "Verbesserung Ihrer Google-Rankings | SEO Berlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/google-ranking-verbessern",
        alt: "/en/google-ranking"
    });
});

app.get("/en/google-ranking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googleranking", {
        requrl: "/en" + req.originalUrl.substring(3),
        title: "How to improve your Google Rankings | SEO Berlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/google-ranking",
        alt: "/de/google-ranking-verbessern"
    });
});


app.get("/en/seo-consultancy", function(req, res) {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoberatung", {
        requrl: "/de/seo-beratung",
        title: "SEO Consultancy in Berlin Germany | SEO Berlino",
        layout: "main",
        description: "SEO Onpage Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/seo-consultancy",
        alt: "/de/seo-beratung"
    });
});


app.get("/de/seo-beratung", function(req, res) {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoberatung", {
        requrl: "/de/seo-beratung",
        layout: "mainDE",
        title: "SEO Beratung in Berlin | SEO Berlino",
        description: "SEO Freelance Berater und Analytics Berater: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-beratung",
        alt: "/en/seo-consultancy"
    });
});


app.get("/en/online-marketing", function(req, res) {
    i18n.setLocale(req, "en");
    res.render("otherberatung/onlinemarketing", {
        requrl: "/en/online-marketing",
        title: "Online Marketing Consultancy Berlin | SEO Berlino",
        layout: "main",
        description: "Online Marketing Services Berlin, experienced in international SEO. Audits by an SEO Consultant with over 10 years experience. Clients: Montblanc, Spreadshirt, etc",
        canonical: "https://www.seoberlino.com/en/online-marketing",
        alt: "/de/online-marketing"
    });
});

app.get("/de/online-marketing", function(req, res) {
    i18n.setLocale(req, "de");
    res.render("otherberatung/onlinemarketing", {
        requrl: "/en/online-marketing",
        layout: "mainDE",
        title: "Online Marketing Beratung in Berlin | SEO Berlino",
        description: "Online Marketing und Analytics Berater: SEA, SMM, Analytics und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/online-marketing",
        alt: "/en/online-marketing"
    });
});

app.get("/en/seo-services/berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogberlin", {
        requrl: "/en/seo-services/berlin",
        layout: "mainNoAlt",
        title: "SEO in Berlin, the place to be | SEO Berlino",
        description: "SEO Freelancer and Analytics Expert: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-services/berlin"
    });
});

app.get("/en/jobs", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("jobs", {
        requrl: "/en/jobs",
        layout: "main",
        title: "SEO Consultants Jobs in Berlin, Germany | SEO Berlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en/jobs",
        alt: "/de/jobs"
    });
});

app.get("/de/jobs", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("jobs", {
        requrl: "/en/jobs",
        layout: "mainDE",
        title: "SEO Consultants Jobs in Berlin | SEO Berlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/de/jobs",
        alt: "/en/jobs"
    });
});

app.get("/en/references", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("references", {
        requrl: "/en/references",
        layout: "main",
        title: "Clients References, SEO Consultant Berlin | SEO Berlino",
        description: "SEO Consulant in Berlin • SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en/references",
        alt: "/de/references"
    });
});

app.get("/de/references", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("references", {
        requrl: "/en/references",
        layout: "mainDE",
        title: "Kundenbewertungen, SEO Berater Berlin | SEO Berlino",
        description: "10 Jahre erfahrener SEO Consulant in Berlin • €100m + Kunden:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/de/references",
        alt: "/en/references"
    });
});

app.get("/en/seo-services", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "/en/seo-services",
        layout: "main",
        title: "SEO Services – Search Engine Optimization | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services",
        alt: "/de/seo-optimierung"
    });
});

app.get("/en/seo-services/metas", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/https", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloghttps", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What https means for SEO | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/https",
        alt: "/de/seo-optimierung/https"
    });
});

app.get("/de/seo-optimierung/https", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/bloghttps", {
        requrl: "/en/seo-services/https",
        layout: "mainDE",
        title: "Was macht https für SEO? | Von http zu https | SEO Berlino",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/https",
        alt: "/en/seo-services/https"
    });
});

app.get("/en/seo-services/mobile", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Importance of a Mobile Friendly Website  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/mobile",
        alt: "/de/seo-optimierung/mobile"
    });
});

app.get("/de/seo-optimierung/mobile", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogmobile", {
        requrl: "/en/seo-services/mobile",
        layout: "mainDE",
        title: " Mobile-Friendly Website | SEO Optimierung | SEO Berlino",
        description: "Website optimieren, SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/mobile",
        alt: "/en/seo-services/mobile"
    });
});

app.get("/en/seo-services/javascript", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogjava", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How Javascript affects SEO | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/javascript",
        alt: "/de/seo-optimierung/javascript"
    });
});

app.get("/de/seo-optimierung/javascript", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogjava", {
        requrl: "/en/seo-services/javascript",
        layout: "mainDE",
        title: "Wie Javascript SEO beeinflusst | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/javascript",
        alt: "/en/seo-services/javascript"
    });
});


app.get("/en/seo-services/structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: "/en/seo-services/structured-data",
        layout: "main",
        title: "Structured Data for SEO | SEO Services | SEO Berlino",
        description: "Structured Data and Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/structured-data",
        alt: "/de/seo-optimierung/structured-data"
    });
});

app.get("/de/seo-optimierung/structured-data", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: "/en/seo-services/structured-data",
        layout: "mainDE",
        title: "Strukturierte Daten für SEO | SEO Berlino",
        description: "Structured Data für SEO",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/structured-data",
        alt: "/en/seo-services/structured-data"
    });
});

app.get("/en/seo-services/internal-linking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/bloginternallinking", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Internal Linking and why it is important | SEO Berlino",
        description: "Internal Linking and Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/internal-linking",
        alt: "/de/seo-optimierung/interne-verlinkung"
    });
});

app.get("/de/seo-optimierung/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/bloginternallinking", {
        requrl: "/en/seo-services/internal-linking",
        layout: "mainDE",
        title: "Bedeutung von Interner Verlinkung | SEO Berlino",
        description: "Interne Verlinking.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/interne-verlinkung",
        alt: "/en/seo-services/internal-linking"
    });
});

app.get("/en/seo-services/voice-search", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: "/en/seo-services/voice-search",
        layout: "main",
        title: "What is Voice Search for SEO | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/voice-search",
        alt: "/de/seo-optimierung/sprachsuche"
    });
});

app.get("/de/seo-optimierung/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: "/en/seo-services/voice-search",
        layout: "mainDE",
        title: "Was ist Sprachsuche? | SEO Berlino",
        description: "Sprachsuche und SEO.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/sprachsuche",
        alt: "/en/seo-services/voice-search"
    });
});

app.get("/de/seo-optimierung/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/technical-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogtechnical", {
        requrl: "/en/seo-services/technical-seo",
        layout: "main",
        title: "What is Technical SEO? | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/technical-seo",
        alt: "/de/seo-optimierung/technical-seo"
    });
});

app.get("/de/seo-optimierung/technical-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogtechnical", {
        requrl: "/en/seo-services/technical-seo",
        layout: "mainDE",
        title: "Was ist Technical SEO (Technisches SEO) ? | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/technical-seo",
        alt: "/en/seo-services/technical-seo"
    });
});

app.get("/de/seo-optimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "/en/seo-services",
        layout: "mainDE",
        title: "Was ist SEO 'Optimierung' - Optimierung für Suchmaschinen | SEO Berlino",
        description: "Optimierung für Suchmaschinen, SEO Optimierung, SEO Betreuung in Berlin. SEO und Webanalyse Blog.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung",
        alt: "/en/seo-services"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Berlino Kontakt | SEO Berater in Berlin",
        description: "SEO Berater in Berlin, 10 Jahre Erfahrung | Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/de/contact",
        alt: "/en/contact"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Consultant in Berlin | Get in Touch | SEO Berlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/contact"
    });
});

app.get("/de/seo-experte", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("expert", {
        requrl: "/en/seo-expert",
        layout: "mainDE",
        title: "SEO Berater und Experte | SEO Berlino",
        description: "SEO Berater in Berlin, 10 Jahre Erfahrung, Experte SEO und Webanalyse. Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/de/seo-experte",
        alt: "/en/seo-expert"
    });
});

app.get("/en/seo-expert", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("expert", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Consultant • SEO Expert in Berlin | SEO Berlino ",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-experte"
    });
});

app.get("/en/seo-services/case-study-fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyfromatob", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyzalando", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudywooga", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyjuniqe", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe Berlin SEO Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudymodomoto", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyn26", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyhellofresh", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HelloFresh SEO Case Study | SEO Berlino",
        description: "Mini SEO Berlin Case Study about Berlin's HelloFresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyhometogo", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HomeToGo SEO Berlin Case Study | SEO Berlino",
        description: "Mini SEO Case Study about Berlin's HomeToGo: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | SEO Berlino",
        description: "SEO Berlino Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "/de/impressum"
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
        alt: "/en/impressum"
    });
});

app.get("/de/datenschutz", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("datenschutz", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Datenschutz | SEO Berlino",
        description: "SEO Berlino Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: "https://www.seoberlino.com/de/datenschutz",
        alt: "/de/datenschutz"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/beratungsea", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Online Marketing Beratung Freelancer | SEO Berlino",
        description: "SEA-Experte für SEA-Projekte: Google Ads, Facebook Ads, Instagram. Einrichtung, Test, Analyse und Optimierung.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/beratungsea", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Online Marketing Consultant Berlin | SEO Berlino",
        description: "SEA Expert for SEA Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/sea"
    });
});

app.get("/en/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/beratungscrum", {
        requrl: "/en/agile-coach-berlin",
        layout: "mainNoAlt",
        title: "Agile Coach Freelancer in Berlin | SEO Berlino",
        description: "Experienced Agile Coach for Agile implementation. Agile experience at HelloFresh and Spreadshirt. Scrum Certified Scrum Master and experienced as both Scrum Master and Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/agile-coach-berlin"
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/beratungscrum", {
        requrl: "/en/agile-coach-berlin",
        layout: "mainNoAltDE",
        title: "Agile Coach / Scrum Master in Berlin | SEO Berlino",
        description: "Implementieren Sie Scrum für Ihre Projekte. 10 Jahre erfahrener Scrum-Master und Product Owner.",
        canonical: "https://www.seoberlino.com/en/agile-coach-berlin",
        alt: "/en/agile-coach-berlin"
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
        requrl: "/en/seo-services/canonical",
        layout: "main",
        title: "What is Canonical Tag and how to use it | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/canonical"
    });
});

app.get("/en/seo-services/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/hreflang", {
        requrl: "/en/seo-services/hreflang",
        layout: "main",
        title: "What is Hreflang and how to use it | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/hreflang"
    });
});

app.get("/de/seo-optimierung/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/hreflang", {
        requrl: "/en/seo-services/hreflang",
        layout: "mainDE",
        title: "Was ist Hreflang und warum ist es wichtig? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/hreflang"
    });
});



app.get("/de/seo-optimierung/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/canonical", {
        requrl: "/en/seo-services/canonical",
        layout: "mainDE",
        title: "Was ist Canonical Tag und warum ist es wichtig? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/canonical"
    });
});

app.get("/en/seo-services/404", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/404", {
        requrl: "/en/seo-services/404",
        layout: "main",
        title: "What does 404 - Page Not Found mean| SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/404"
    });
});

app.get("/de/seo-optimierung/404", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/404", {
        requrl: "/en/seo-services/404",
        layout: "mainDE",
        title: "Was bedeutet 'Fehler 404 - Not Found'? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/404"
    });
});

app.get("/en/seo-services/crawler", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/crawler", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What does status code 404 mean | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/crawler"
    });
});

app.get("/de/seo-optimierung/crawler", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/crawler", {
        requrl: "/en/seo-services/crawler",
        layout: "mainDE",
        title: "Wie funktioniert ein Crawler? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/crawler"
    });
});

app.get("/en/seo-services/googleanalytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googleanalytics", {
        requrl: "/en/seo-services/googleanalytics",
        layout: "main",
        title: "Google Analytics  | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/googleanalytics"
    });
});

app.get("/de/seo-optimierung/googleanalytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googleanalytics", {
        requrl: "/en/seo-services/googleanalytics",
        layout: "mainDE",
        title: "Google Analytics einrichten | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/googleanalytics"
    });
});

app.get("/en/seo-services/googlesearchconsole", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googlesearchconsole", {
        requrl: "/en/seo-services/googlesearchconsole",
        layout: "main",
        title: "Search Console | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/googlesearchconsole"
    });
});

app.get("/de/seo-optimierung/googlesearchconsole", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googlesearchconsole", {
        requrl: "/en/seo-services/googlesearchconsole",
        layout: "mainDE",
        title: "Search Console einrichten | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/googlesearchconsole"
    });
});


app.get("/en/seo-services/seobudget", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seobudget", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Budget | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/seobudget"
    });
});

app.get("/de/seo-optimierung/seobudget", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seobudget", {
        requrl: "/en/seo-services/seobudget",
        layout: "mainDE",
        title: "SEO  Budget| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/seobudget"
    });
});

app.get("/en/seo-services/seospecialist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seospecialist", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Specialist | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/seospecialist"
    });
});

app.get("/de/seo-optimierung/seospecialist", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seospecialist", {
        requrl: "/en/seo-services/seospecialist",
        layout: "mainDE",
        title: "SEO Spezialist| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/seospecialist"
    });
});

app.get("/en/seo-services/disavowtool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/disavow", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Disavow Tool | SEO Berlino",
        description: "Disavow Tool. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/disavowtool"
    });
});

app.get("/en/seo-services/serp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/serp", {
        requrl: "/en/seo-services/serp",
        layout: "main",
        title: "What does SERP stand for| SEO Berlino",
        description: "SERP. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/serp"
    });
});

app.get("/de/seo-optimierung/serp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/serp", {
        requrl: "/en/seo-services/serp",
        layout: "mainDE",
        title: "What does SERP stand for| SEO Berlino",
        description: "SERP. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/serp"
    });
});

app.get("/en/seo-services/googleupdate", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googleupdate", {
        requrl: "/en/seo-services/googleupdate",
        layout: "main",
        title: "Experience Google Update, what it means to you | SEO Berlino",
        description: "Google updates. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/googleupdate"
    });
});

app.get("/de/seo-optimierung/googleupdate", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googleupdate", {
        requrl: "/en/seo-services/googleupdate",
        layout: "mainDE",
        title: "Google updates | SEO Berlino",
        description: "Google updates. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/googleupdate"
    });
});



app.get("/de/seo-optimierung/disavowtool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/disavow", {
        requrl: "/en/seo-services/disavowtool",
        layout: "mainDE",
        title: "Was ist das Disavow Tool? | SEO Berlino",
        description: "Disavow Tool. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/disavowtool"
    });
});

app.get("/en/seo-services/longtail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/longtail", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Long Tail Keywords | SEO Berlino",
        description: "Long Tail Keywords. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/longtail"
    });
});

app.get("/de/seo-optimierung/longtail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/longtail", {
        requrl: "/en/seo-services/longtail",
        layout: "mainDE",
        title: "Was sind Long Tail Keywords? | SEO Berlino",
        description: "Long Tail Keywords. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/longtail"
    });
});

app.get("/en/seo-services/searchvolume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/searchvolume", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Keyword Search Volume and why it is important | SEO Berlino",
        description: "Search Volume. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/searchvolume"
    });
});


app.get("/en/seo-services/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Berlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/de/seo-optimierung/searchvolume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/searchvolume", {
        requrl: "/en/seo-services/searchvolume",
        layout: "mainDE",
        title: "Was sind Keyword Suchvolumen  | SEO Berlino",
        description: "Suchvolumen, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/searchvolume"
    });
});

app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is AMP (Accelerated Mobile Pages) and how do they work | SEO Berlino",
        description: "AMP, Accelerated Mobile Pages, SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/amp"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: "/en/seo-services/amp",
        layout: "mainDE",
        title: "Was sind AMP (Accelerated Mobile Pages)? | SEO Berlino",
        description: "AMP (Accelerated Mobile Pages). Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/amp"
    });
});

app.get("/en/seo-services/removeurl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/removeurl", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove URL Tool and how does it work | SEO Berlino",
        description: "Remove URL Tool, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/removeurl"
    });
});

app.get("/de/seo-optimierung/removeurl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/removeurl", {
        requrl: "/en/seo-services/removeurl",
        layout: "mainDE",
        title: "Was ist der Remove URL Tool  | SEO Berlino",
        description: "Remove URL Tool. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/removeurl"
    });
});

app.get("/en/seo-services/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/rankbrain", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Rank Brain and how does it work | SEO Berlino",
        description: "Rank Brain, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/rankbrain"
    });
});

app.get("/de/seo-optimierung/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/rankbrain", {
        requrl: "/en/seo-services/rankbrain",
        layout: "mainDE",
        title: "Was ist Rank Brain und wie funktioniert | SEO Berlino",
        description: "Rank Brain, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/rankbrain"
    });
});

app.get("/en/seo-services/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/redirect", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are 301 and 302 Redirects and what is the difference | SEO Berlino",
        description: "Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/redirects"
    });
});

app.get("/de/seo-optimierung/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/redirect", {
        requrl: "/en/seo-services/redirects",
        layout: "mainDE",
        title: "Was sind 301 und 302 Redirects (Weiterleitungen) | SEO Berlino",
        description: "Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/redirects"
    });
});

app.get("/en/seo-services/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/noindex", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/noindex"
    });
});

app.get("/de/seo-optimierung/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/noindex", {
        requrl: "/en/seo-services/noindex",
        layout: "mainDE",
        title: "Was ist noindex und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/noindex"
    });
});

app.get("/en/seo-services/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/nofollow", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is nofollow and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/nofollow"
    });
});

app.get("/de/seo-optimierung/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/nofollow", {
        requrl: "/en/seo-services/nofollow",
        layout: "mainDE",
        title: "Was ist nofollow und wie funktioniert es? | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/nofollow"
    });
});

app.get("/en/seo-services/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/robots", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Robots.txt and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/robots"
    });
});

app.get("/de/seo-optimierung/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/robots", {
        requrl: "/en/seo-services/robots",
        layout: "mainDE",
        title: "Was ist Robots.txt und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/robots"
    });
});

app.get("/en/seo-services/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/sitemaps", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is an xml Sitemap and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/sitemaps", {
        requrl: "/en/seo-services/sitemaps",
        layout: "mainDE",
        title: "Was ist ein xml Sitemap und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/sitemaps"
    });
});

app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: "/en/seo-services/amp",
        layout: "mainDE",
        title: "Was sind AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/amp"
    });
});

app.get("/en/seo-services/searchengines", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/suchmaschinen", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Search Engines | SEO Berlino",
        description: "Search Enginles, Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/de/seo-optimierung/searchengines"
    });
});

app.get("/de/seo-optimierung/searchengines", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/suchmaschinen", {
        requrl: "/en/seo-services/amp",
        layout: "mainDE",
        title: "Suchmaschinen | SEO Berlino",
        description: "Suchmaschinen, Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "/en/seo-services/searchengines"
    });
});

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap", {});
});


app.get("/en/seo-services/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/bloglinksgettingitright", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | SEO Berlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Berlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogclutch", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Company in Germany 2019 | SEO Berlino",
        description: "Clutch has selected SEO Berlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogasia", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | SEO Berlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile-first", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Beyond Mobile First | SEO Blog | SEO Berlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: "https://www.seoberlino.com/en/seo-services/beyond-mobile-first"
    });
});

app.get(
    "/en/seo-services/why-you-need-implement-structured-data",
    (req, res) => {
        i18n.setLocale(req, "en");
        res.render("blogtech/blogstructureddata", {
            requrl: "/en" + req.originalUrl.substring(3),
            layout: "mainNoAlt",
            title: "Structured Data SEO | SEO Berlino",
            description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
            canonical: "https://www.seoberlino.com" + req.originalUrl
        });
    }
);

app.get("/en/seo-services/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbrandbuilding", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building to Brand Building | SEO Berlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogfirstlinks", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "How to get those first backlinks | SEO Berlino",
        description: "Read this article about SEO and Back linking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/site-migration-seo-checklist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogsitemigration", {
        requrl: "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Site migration SEO Checklist | SEO Berlino",
        description: "Read this article about site migration and what to do before you start migration.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
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
                        Location: "https://www.seoberlino.com/error"
                    });
                    res.end();
                } else {
                    res.writeHead(301, {
                        Location: "https://www.seoberlino.com/en/success"
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
                        Location: "https://www.seoberlino.com/error"
                    });
                    res.end();
                } else {
                    res.writeHead(301, {
                        Location: "https://www.seoberlino.com/de/success"
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
        Location: "https://www.seoberlino.com/en/seo-services/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/content", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-copywriting",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/content", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-copywriting",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/metas", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/indexation", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/indexation", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/seoaudit", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/seoaudit", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/on-page*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/clutch", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/clutch",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/audit", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/audit", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-audit",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/casestudy/n26", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-n26",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/zalando", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hometogo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-zalando", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-hometogo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/seo-case-studies",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/scrum*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/scrum*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/agile-coach-berlin",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/seo-in-asia-korea-china-japan-2019", function(
    request,
    response
) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voicesearch", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/voice-search",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voice-search-challenges", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/voice-search-challenges",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/consultant", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/onpage/keyword-recherche", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/blog/canonical", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-optimierung/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/technical-seo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-optimierung/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-optimierung/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/technical*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-services/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/competitor-analysis", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/competitor-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/mitwettbewerber", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/competitor-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/localSEO", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/local-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/localSEO", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/local-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/backlink*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo-optimierung/backlink*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog*", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/pagespeed", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-page-speed",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/international", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-relaunch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/international", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-relaunch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/crawl", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/crawl", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/pagespeed", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-page-speed",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/images", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/images", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/de/seo-onpage",
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