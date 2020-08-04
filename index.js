const express = require("express");
const axios = require("axios");
const app = express();
const fetch = require("node-fetch");
const {
    stringify
} = require("querystring");
var i18n = require("i18n");

var hbs = require("hbs");
var hb = require("express-handlebars");
var bodyParser = require("body-parser");
var http = require("http");
var etag = require("etag");

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
app.use(i18n.init);

if (process.env.NODE_ENV === "production") {
    app.use(function(req, res, next) {
        if (req.headers["x-forwarded-proto"] == "https") {
            if (req.headers.host.slice(0, 3) != "www") {
                return res.redirect(
                    301,
                    "https://www.seoberlino.com" + req.url
                );
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


var englishHP = function(req, res) {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainHP",
        title: "SEO Company Germany • SEO Freelance Services | seoberlino",
        description: "SEO Company for SEO Consultancy, with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de"
    });
};


app.get("/en", englishHP)

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainDEHP",
        title: "SEO Optimierung | SEO Kleine Agentur Berlin | seoberlino",
        canonical: "https://www.seoberlino.com/de",
        description: "Kleine SEO Agentur Berlin - Freelancer SEO. 10 Jahre Erfahrung Suchmaschinenoptimierung Berlin. Kunden: Montblanc, HelloFresh, Ricoh, Spreadshirt, Spartoo, BSH, MSF, Red Cross, etc",
        alt: "https://www.seoberlino.com/en"
    });
});


app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en/seo-consultant",
        layout: "mainDE",
        title: "SEO Freelancer • SEO Beratung & Consulting | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "https://www.seoberlino.com/en/seo-consultant"
    });
});

app.get("/en/seo-consultant", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Experienced SEO Consultant in Germany | seoberlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-consultant",
        alt: "https://www.seoberlino.com/de/seo-freelancer"
    });
});


app.get("/de/google-ranking-verbessern", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googleranking", {
        requrl: "https://www.seoberlino.com/en/google-ranking",
        layout: "mainDE",
        title: "Google Ranking verbessern  • SEO Beratung & Consulting | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/google-ranking-verbessern",
        alt: "https://www.seoberlino.com/en/google-ranking"
    });
});

app.get("/en/google-ranking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googleranking", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "How to improve your Google Rankings • SEO Consultancy in Germany | seoberlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-ranking",
        alt: "https://www.seoberlino.com/de/google-ranking-verbessern"
    });
});


app.get("/en/seo-tools", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seotools", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Tools for an SEO Check • SEO Consultancy in Germany | seoberlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-tools",
        alt: "https://www.seoberlino.com/de/seo-tools"
    });
});

app.get("/de/seo-tools", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seotools", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Tools für SEO Check • SEO Consultancy in Germany | seoberlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-tools",
        alt: "https://www.seoberlino.com/en/seo-tools"
    });
});



app.get("/de/seo-beratung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung", {
        requrl: "https://www.seoberlino.com/en/seo-consultant",
        layout: "mainNoAltDE",
        title: "SEO Beratung • SEO Berater | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-beratung",
    });
});

app.get("/en/seo-services/berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogberlin", {
        requrl: "https://www.seoberlino.com/en/seo-services/berlin",
        layout: "mainNoAlt",
        title: "SEO in Berlin, the place to be | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-services/berlin"
    });
});

app.get("/en/jobs", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("jobs", {
        requrl: "https://www.seoberlino.com/en/jobs",
        layout: "main",
        title: "SEO Consultants Jobs in Berlin, Germany | seoberlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en/jobs",
        alt: "https://www.seoberlino.com/de/jobs"
    });
});

app.get("/de/jobs", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("jobs", {
        requrl: "https://www.seoberlino.com/en/jobs",
        layout: "mainDE",
        title: "SEO Consultants Jobs in Berlin | seoberlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/de/jobs",
        alt: "https://www.seoberlino.com/en/jobs"
    });
});


app.get("/en/references", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("references", {
        requrl: "https://www.seoberlino.com/en/references",
        layout: "main",
        title: "Clients References, SEO Consultant Berlin | seoberlino",
        description: "SEO Consulant in Berlin • SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en/references",
        alt: "https://www.seoberlino.com/de/references"
    });
});

app.get("/de/references", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("references", {
        requrl: "https://www.seoberlino.com/en/references",
        layout: "mainDE",
        title: "Clients References, SEO Freelancer Berlin | seoberlino",
        description: "SEO Consulant in Berlin • SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/de/references",
        alt: "https://www.seoberlino.com/en/references"
    });
});


app.get("/en/seo-services", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en/seo-services",
        layout: "main",
        title: "SEO Services – Search Engine Optimization | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services",
        alt: "https://www.seoberlino.com/de/seo-optimierung"
    });
});

app.get("/en/seo-services/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogmeta", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Metas and Titles for SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/metas",
        alt: "https://www.seoberlino.com/de/seo-optimierung/metas"
    });
});

app.get("/de/seo-optimierung/metas", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogmeta", {
        requrl: "https://www.seoberlino.com/en/seo-services/metas",
        layout: "mainDE",
        title: "Metas Tags, Meta Beschreibung & Titles für SEO | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/metas",
        alt: "https://www.seoberlino.com/en/seo-services/metas"
    });
});

app.get("/en/seo-services/crawl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogcrawl", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/crawl",
        alt: "https://www.seoberlino.com/de/seo-optimierung/crawl"
    });
});

app.get("/de/seo-optimierung/crawl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogcrawl", {
        requrl: "https://www.seoberlino.com/en/seo-services/crawl",
        layout: "mainDE",
        title: "Crawl für SEO |SEO Optimierung | SEO Berlino",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/crawl",
        alt: "https://www.seoberlino.com/en/seo-services/crawl"
    });
});

app.get("/en/seo-services/https", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloghttps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What https means for SEO | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/https",
        alt: "https://www.seoberlino.com/de/seo-optimierung/https"
    });
});

app.get("/de/seo-optimierung/https", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/bloghttps", {
        requrl: "https://www.seoberlino.com/en/seo-services/https",
        layout: "mainDE",
        title: "Was macht https für SEO | Redirect http to https | SEO Berlino",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/https",
        alt: "https://www.seoberlino.com/en/seo-services/https"
    });
});

app.get("/en/seo-services/international", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloginternational", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "hreflang and Internationalisation SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/international",
        alt: "https://www.seoberlino.com/de/seo-optimierung/international"
    });
});

app.get("/de/seo-optimierung/international", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/bloginternational", {
        requrl: "https://www.seoberlino.com/en/seo-services/international",
        layout: "mainDE",
        title: "hreflang und SEO Internationalisierung | SEO Optimierung | SEO Berlino",
        description: "Website optimieren: hreflang und SEO Internationalisierung. ",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/international",
        alt: "https://www.seoberlino.com/en/seo-services/international"
    });
});

app.get("/en/seo-services/mobile", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Importance of a Mobile Friendly Website  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/mobile",
        alt: "https://www.seoberlino.com/de/seo-optimierung/mobile"
    });
});

app.get("/de/seo-optimierung/mobile", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogmobile", {
        requrl: "https://www.seoberlino.com/en/seo-services/mobile",
        layout: "mainDE",
        title: " Mobile-Friendly Website | SEO Optimierung | SEO Berlino",
        description: "Website optimieren, SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/mobile",
        alt: "https://www.seoberlino.com/en/seo-services/mobile"
    });
});

app.get("/en/seo-services/javascript", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogjava", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/javascript",
        alt: "https://www.seoberlino.com/de/seo-optimierung/javascript"
    });
});

app.get("/de/seo-optimierung/javascript", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogjava", {
        requrl: "https://www.seoberlino.com/en/seo-services/javascript",
        layout: "mainDE",
        title: "Javascript und SEO | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/javascript",
        alt: "https://www.seoberlino.com/en/seo-services/javascript"
    });
});

app.get("/en/seo-services/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogpagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "PageSpeed Insights • Page speed and SEO  |seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/pagespeed",
        alt: "https://www.seoberlino.com/de/seo-optimierung/pagespeed"
    });
});

app.get("/de/seo-optimierung/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogpagespeed", {
        requrl: "https://www.seoberlino.com/en/seo-services/pagespeed",
        layout: "mainDE",
        title: "Pagespeed Insights • Page speed und SEO | SEO Berlino",
        description: "Page speed, PageSpeed Insights und SEO.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/pagespeed",
        alt: "https://www.seoberlino.com/en/seo-services/pagespeed"
    });
});

app.get("/en/seo-services/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogimages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Image Optimization for SEO | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/images",
        alt: "https://www.seoberlino.com/de/seo-optimierung/images"
    });
});

app.get("/de/seo-optimierung/images", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogimages", {
        requrl: "https://www.seoberlino.com/en/seo-services/images",
        layout: "mainDE",
        title: "Image Alt Tag • Bildoptimierung für SEO | SEO Berlino",
        description: "Bildoptimierung (image alt tag und mehr).",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/images",
        alt: "https://www.seoberlino.com/en/seo-services/images"
    });
});

app.get("/en/seo-services/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Content, Duplicate Content & Landing pages | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/content",
        alt: "https://www.seoberlino.com/de/seo-optimierung/content"
    });
});

app.get("/de/seo-optimierung/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogcontent", {
        requrl: "https://www.seoberlino.com/en/seo-services/content",
        layout: "mainDE",
        title: "Unhalt und Landing Pages | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/content",
        alt: "https://www.seoberlino.com/en/seo-services/content"
    });
});

app.get("/en/seo-services/backlinks", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbacklinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlinks & Offpage SEO | SEO Services",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/backlinks",
        alt: "https://www.seoberlino.com/de/seo-optimierung/backlinks"
    });
});

app.get("/de/seo-optimierung/backlinks", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogoffpage/blogbacklinks", {
        requrl: "https://www.seoberlino.com/en/seo-services/backlinks",
        layout: "mainDE",
        title: "Backlinks & Offpage Optimierung | SEO Berlino",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/backlinks",
        alt: "https://www.seoberlino.com/en/seo-services/backlinks"
    });
});

app.get("/de/seo-optimierung/keyword-research", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogKW", {
        requrl: "https://www.seoberlino.com/en/seo-services/keyword-research",
        layout: "mainDE",
        title: "Keyword Recherche | SEO Optimierung | SEO Berlino",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/keyword-research",
        alt: "https://www.seoberlino.com/en/seo-services/keyword-research"
    });
});

app.get("/en/seo-services/keyword-research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogKW", {
        requrl: "https://www.seoberlino.com/en/seo-services/keyword-research",
        layout: "main",
        title: "Keyword Research | SEO Services | SEO Berlino",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/keyword-research",
        alt: "https://www.seoberlino.com/de/seo-optimierung/keyword-research"
    });
});

app.get("/de/seo-optimierung/indexation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogindexation", {
        requrl: "https://www.seoberlino.com/en/seo-services/indexation",
        layout: "mainDE",
        title: "Indexierung und Google Indexierung | SEO Optimierung",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/indexation",
        alt: "https://www.seoberlino.com/en/seo-services/indexation"
    });
});

app.get("/en/seo-services/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogindexation", {
        requrl: "https://www.seoberlino.com/en/seo-services/indexation",
        layout: "main",
        title: "Indexation | SEO Services | SEO Berlino",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/indexation",
        alt: "https://www.seoberlino.com/de/seo-optimierung/indexation"
    });
});

app.get("/de/seo-optimierung/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Optimierung | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Services | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/onpage-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogonpage", {
        requrl: "https://www.seoberlino.com/en/seo-services/onpage-seo",
        layout: "main",
        title: "Onpage SEO | SEO Services | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/onpage-seo",
        alt: "https://www.seoberlino.com/de/seo-optimierung/onpage-seo"
    });
});

app.get("/de/seo-optimierung/onpage-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogonpage", {
        requrl: "https://www.seoberlino.com/en/seo-services/onpage-seo",
        layout: "mainDE",
        title: "Onpage SEO | SEO Optimierung | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/onpage-seo",
        alt: "https://www.seoberlino.com/en/seo-services/onpage-seo"
    });
});

app.get("/en/seo-services/technical-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogtechnical", {
        requrl: "https://www.seoberlino.com/en/seo-services/technical-seo",
        layout: "main",
        title: "Technical SEO | Website Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/technical-seo",
        alt: "https://www.seoberlino.com/de/seo-optimierung/technical-seo"
    });
});

app.get("/de/seo-optimierung/technical-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogtechnical", {
        requrl: "https://www.seoberlino.com/en/seo-services/technical-seo",
        layout: "mainDE",
        title: "Technical SEO | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/technical-seo",
        alt: "https://www.seoberlino.com/en/seo-services/technical-seo"
    });
});

app.get("/de/seo-optimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en/seo-services",
        layout: "mainDE",
        title: "SEO Optimierung für Suchmaschinen | seoberlino",
        description: "Optimierung für Suchmaschinen, SEO Optimierung, SEO Experte in Berlin. SEO und Webanalyse Blog.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung",
        alt: "https://www.seoberlino.com/en/seo-services"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Experte in Berlin | seoberlino ",
        description: "SEO Consultant in Berlin, 10 Jahre Erfahrung | Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/de/contact",
        alt: "https://www.seoberlino.com/en/contact"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "SEO Expert • SEO Services in Berlin | seoberlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});

app.get("/en/seo-services/case-study-fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyfromatob", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyzalando", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudywooga", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyjuniqe", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe Berlin SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudymodomoto", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyn26", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyhellofresh", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HelloFresh SEO Case Study | seoberlino",
        description: "Mini SEO Berlin Case Study about Berlin's HelloFresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/case-study-hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyhometogo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HomeToGo SEO Berlin Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's HomeToGo: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/competitor", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis | SEO Services | seoberlino",
        description: "SEO Competitor Analysis is important to gather information from the industry leaders: keywords, site structure, backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/mitwettbewerber"
    });
});

app.get("/de/seo-optimierung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogcase/competitor", {
        requrl: "https://www.seoberlino.com/en/seo-services/competitor-analysis",
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | SEO Optimierung | seoberlino",
        description: "Die SEO-Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/competitor-analysis"
    });
});

app.get("/en/seo-services/localSEO", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/localseo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Local SEO | SEO Services | seoberlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/localSEO"
    });
});

app.get("/de/seo-optimierung/localSEO", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/localseo", {
        requrl: "https://www.seoberlino.com/en/seo-services/localSEO",
        layout: "mainDE",
        title: "Local SEO Optimierung | seoberlino",
        description: "Insbesondere für lokale Unternehmen ist es von größter Bedeutung, Ihre SEO-Gesamtstrategie auf lokale SEO auszurichten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/localSEO"
    });
});

app.get("/en/seo-services/backlink-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbacklinkanalysis", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlink Analysis and Offpage SEO | seoberlino",
        description: "Backlinks and Offpage SEO represent a key part of SEO and include in particular Link Building and Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/backlink-analysis"
    });
});

app.get("/de/seo-optimierung/backlink-analysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogoffpage/blogbacklinkanalysis", {
        requrl: "https://www.seoberlino.com/en/seo-services/backlink-analysis",
        layout: "mainDE",
        title: "Backlinks & Offpage SEO | SEO Optimierung | seoberlino",
        description: "Backlinks sind ein wichtiger Bestandteil von SEO und umfassen insbesondere Link Building und Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/backlink-analysis"
    });
});

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | seoberlino",
        description: "SEOBerlino Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
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
        description: "seoberlino Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: "https://www.seoberlino.com/de/datenschutz",
        alt: "https://www.seoberlino.com/de/datenschutz"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungsea", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Online Marketing Freelancer Berlin | seoberlino",
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
        title: "Online Marketing Consultant Berlin | seoberlino",
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
        description: "Experienced Agile Coach for Agile implementation. Agile experience at HelloFresh and Spreadshirt. Scrum Certified Scrum Master and experienced as both Scrum Master and Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Agile Coach / Scrum Master in Berlin | seoberlino",
        description: "Implementieren Sie Scrum für Ihre Projekte. 10 Jahre erfahrener Scrum-Master und Product Owner.",
        canonical: "https://www.seoberlino.com/en/agile-coach-berlin"
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

app.get("/en/seo-services/seo-glossary", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/lexical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Canonicals and other SEO Terms | seoberlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/seo-glossary"
    });
});

app.get("/de/seo-optimierung/seo-glossary", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/lexical", {
        requrl: "https://www.seoberlino.com/en/seo-services/seo-glossary",
        layout: "mainDE",
        title: "Canonicals und andere SEO Begriffe | seoberlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/seo-glossary"
    });
});

app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap", {});
});

app.get("/setcookiesession", (req, res) => {
    req.session.checked = true;

    res.json({
        success: true
    });
});

app.get("/en/seo-services/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/bloglinksgettingitright", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | seoberlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | seoberlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/google-keyword-planner-guide", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogkeywordplanner", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Google Keyword Planner Tool Guide | seoberlino",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogclutch", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Company in Germany 2019 | seoberlino",
        description: "Clutch has selected seoberlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});



app.get("/en/seo-services/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogasia", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | seoberlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/seo-services/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile-first", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Beyond Mobile First | SEO Blog | seoberlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: "https://www.seoberlino.com/en/seo-services/beyond-mobile-first"
    });
});


app.get("/en/seo-services/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogstructureddata", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Structured Data SEO | seoberlino",
        description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbrandbuilding", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building to Brand Building | seoberlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogfirstlinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "How to get those first backlinks | seoberlino",
        description: "Read this article about SEO and Back linking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/site-migration-seo-checklist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogsitemigration", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Site migration SEO Checklist | seoberlino",
        description: "Read this article about site migration and what to do before you start migration.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


var nodemailer = require("nodemailer");

app.post("/email", function(req, res) {
    // if (req.body.budget !== "€2k+ monthly" || "One time €2k+ " || "€1-2k monthly" || "One time €1-2k " || "€1k monthly" || "One time under €1k") {
    //     res.writeHead(301, {
    //         Location: "/error"
    //     });
    //     res.end();
    // }
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
                    Location: "/error"
                });
                res.end();
            } else {
                res.writeHead(301, {
                    Location: "/en/success"
                });
                res.end();
            }
        });
    });
});

//////////////// Redirects////////////////
app.get("/en/article/beyond-mobile-first", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/seo", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/article/clutch", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/clutch",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/seo-glossary",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/seo-glossary",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/audit", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-beratung",
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
        Location: "/en/seo-services/seo-case-studies",
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


app.get("/en/article/seo-in-asia-korea-china-japan-2019", function(
    request,
    response
) {
    response.writeHead(301, {
        Location: "/en/seo-services/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voicesearch", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/voicesearch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/", function(request, response) {
    response.writeHead(301, {
        Location: "/en",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voice-search-challenges", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/voice-search-challenges",
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


app.get("/en/seo-freelancer", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-consultant",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/onpage/keyword-recherche", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/onpage-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/onpage-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/backlinks", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/backlink-analysis", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/backlink-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/blog/seo-glossary", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/seo-glossary",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/blog/technical-seo", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/onpage-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/technical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.all("*", function(req, res) {
    res.writeHead(404);
    res.end();
});
// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));