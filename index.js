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


// app.use(function(req, res, next) {
//     res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com *.typekit.net unpkg.com *.jquery.com *.provenexpert.com *.google-analytics.com");
//     return next();
// });







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

var englishHP = function(req, res) {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainHP",
        title: "SEO Company Germany • SEO Freelance Services | SEO Berlino",
        description: "SEO Company for SEO Consultancy, with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de"
    });
};

app.get("/en", englishHP);

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainDEHP",
        title: "SEO Agentur Berlin • SEO Beratung | SEO Berlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Agentur Berlin - Freelance SEO. 10 Jahre Erfahrung Suchmaschinenoptimierung Berlin. Kunden: Montblanc, HelloFresh, Ricoh, Spreadshirt, Spartoo, BSH, etc",
        alt: "https://www.seoberlino.com/en"
    });
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/de/seo-freelancer",
        layout: "mainDE",
        title: "SEO Freelancer • Suchmaschinenoptimierung | SEO Berlino",
        description: "SEO Freelancer und Analytics Consultant: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "https://www.seoberlino.com/en/seo-freelancer"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/de/seo-freelancer",
        title: "Experienced SEO Freelancer in Germany | SEO Berlino",
        layout: "main",
        description: "SEO Freelancer in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-freelancer",
        alt: "https://www.seoberlino.com/de/seo-freelancer"
    });
});



app.get("/de/seo-pricing", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("pricing", {
        requrl: "https://www.seoberlino.com/de/seo-preise",
        layout: "mainDE",
        title: "SEO Budget • Suchmaschinenoptimierung bei SEO Berlino",
        description: "SEO Freelancer und Analytics Consultant: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "https://www.seoberlino.com/en/seo-consultant"
    });
});

app.get("/en/seo-pricing", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("pricing", {
        requrl: "https://www.seoberlino.com/de/seo-pricing",
        title: "SEO Cost and Budget • SEO Consultant in Germany | SEO Berlino",
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
        title: "Wie Sie Ihre Google-Rankings verbessern können | SEO Berlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/google-ranking-verbessern",
        alt: "https://www.seoberlino.com/en/google-ranking"
    });
});

app.get("/en/google-ranking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googleranking", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "How to improve your Google Rankings | SEO Berlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/google-ranking",
        alt: "https://www.seoberlino.com/de/google-ranking-verbessern"
    });
});



app.get("/de/produktbeschreibung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/product-description", {
        requrl: "https://www.seoberlino.com/en/google-ranking",
        layout: "mainDE",
        title: "Produktbeschreibung | SEO Berlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/produktbeschreibung",
        alt: "https://www.seoberlino.com/en/product-description"
    });
});

app.get("/en/product-description", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/product-description", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Product Description| SEO Berlino",
        layout: "main",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/product-description",
        alt: "https://www.seoberlino.com/de/produktbeschreibung"
    });
});



app.get("/en/seo-tools", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seotools", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Tools for an SEO Check | SEO Berlino",
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
        title: "SEO Tools für SEO Check | SEO Berlino",
        layout: "mainDE",
        description: "SEO Freelance Consultant in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-tools",
        alt: "https://www.seoberlino.com/en/seo-tools"
    });
});

app.get("/de/seo-beratung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("seoberatung", {
        requrl: "https://www.seoberlino.com/de/seo-beratung",
        layout: "mainDE",
        title: "SEO Beratung | SEO Berater in Berlin | SEO Berlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-beratung",
        alt: "https://www.seoberlino.com/en/seo-consultant"
    });
});

app.get("/en/seo-consultant", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("seoberatung", {
        requrl: "https://www.seoberlino.com/de/seo-beratung",
        layout: "main",
        title: "SEO Consultant in Berlin | SEO Berlino",
        description: "SEO Freelancer and Analytics Expert: SEO, Analytics, SEA and Scrum. Clients: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-consultant",
        alt: "https://www.seoberlino.com/de/seo-beratung"
    });
});

app.get("/en/seo-services/berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogberlin", {
        requrl: "https://www.seoberlino.com/en/seo-services/berlin",
        layout: "mainNoAlt",
        title: "SEO in Berlin, the place to be | SEO Berlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-services/berlin"
    });
});

app.get("/en/jobs", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("jobs", {
        requrl: "https://www.seoberlino.com/en/jobs",
        layout: "main",
        title: "SEO Consultants Jobs in Berlin, Germany | SEO Berlino",
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
        title: "SEO Consultants Jobs in Berlin | SEO Berlino",
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
        title: "Clients References, SEO Consultant Berlin | SEO Berlino",
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
        title: "Clients References, SEO Freelancer Berlin | SEO Berlino",
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
        title: "SEO Services – Search Engine Optimization | SEO Berlino",
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
        title: "What is Meta Description and what are page titles | SEO Berlino",
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
        title: "Metas Tags, Meta Beschreibung & Titles für SEO | SEO Berlino",
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
        title: "What is Crawling in SEO and why it is important | SEO Berlino",
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
        title: "Was ist Crawling und wie funktioniert | SEO Berlino",
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
        title: "How Javascript affects SEO | SEO Berlino",
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
        title: "Wie Javascript SEO beeinflusst | SEO Berlino",
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
        title: "Image alt attributes (tags) and Image Optimization | SEO Berlino",
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
        title: "Image Alt Tag / Attribute • Bildoptimierung für SEO | SEO Berlino",
        description: "Bildoptimierung (image alt tag und mehr).",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/images",
        alt: "https://www.seoberlino.com/en/seo-services/images"
    });
});



app.get("/en/seo-services/structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: "https://www.seoberlino.com/en/seo-services/structured-data",
        layout: "main",
        title: "Structured Data for SEO | SEO Services | SEO Berlino",
        description: "Structured Data and Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/structured-data",
        alt: "https://www.seoberlino.com/de/seo-optimierung/structured-data"
    });
});

app.get("/de/seo-optimierung/structured-data", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: "https://www.seoberlino.com/en/seo-services/structured-data",
        layout: "mainDE",
        title: "Strukturierte Daten für SEO | SEO Berlino",
        description: "Structured Data für SEO",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/structured-data",
        alt: "https://www.seoberlino.com/en/seo-services/structured-data"
    });
});



app.get("/en/seo-services/internal-linking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/bloginternallinking", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Internal Linking and why it is important | SEO Berlino",
        description: "Internal Linking and Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/internal-linking",
        alt: "https://www.seoberlino.com/de/seo-optimierung/interne-verlinkung"
    });
});

app.get("/de/seo-optimierung/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/bloginternallinking", {
        requrl: "https://www.seoberlino.com/en/seo-services/internal-linking",
        layout: "mainDE",
        title: "Was ist Interne Verlinkung und warum ist sie wichtig | SEO Berlino",
        description: "Interne Verlinking.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/interne-verlinkung",
        alt: "https://www.seoberlino.com/en/seo-services/internal-linking"
    });
});



app.get("/en/seo-services/voice-search", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: "https://www.seoberlino.com/en/seo-services/voice-search",
        layout: "main",
        title: "What is Voice Search for SEO | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/voice-search",
        alt: "https://www.seoberlino.com/de/seo-optimierung/sprachsuche"
    });
});

app.get("/de/seo-optimierung/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: "https://www.seoberlino.com/en/seo-services/voice-search",
        layout: "mainDE",
        title: "Was ist Sprachsuche? | SEO Berlino",
        description: "Sprachsuche und SEO.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/sprachsuche",
        alt: "https://www.seoberlino.com/en/seo-services/voice-search"
    });
});



app.get("/en/seo-services/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Content, Duplicate Content & Landing pages | SEO Berlino",
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
        title: "Inhalt, Duplicate Content und Landing Pages | SEO Berlino",
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
        title: "What are Backlinks & what is Offpage SEO | SEO Services",
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
        title: "Was sind Backlinks & Offpage Optimierung | SEO Berlino",
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
        title: "Was ist Keyword Recherche | Keywords finden | SEO Berlino",
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
        title: "What is Keyword Research and why it is critical | SEO Berlino",
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
        title: "Was ist Indexierung und warum ist sie wichtig | SEO Optimierung",
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
        title: "What is Indexation and why it is important | SEO Berlino",
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
        title: "SEO Case Studies | SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Services | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/onpage-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogonpage", {
        requrl: "https://www.seoberlino.com/en/seo-services/onpage-seo",
        layout: "main",
        title: "What is Onpage SEO | SEO Berlino",
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
        title: "Was ist Onpage SEO ? | SEO Berlino",
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
        title: "What is Technical SEO? | SEO Berlino",
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
        title: "Was ist Technical SEO (Technisches SEO) ? | SEO Berlino",
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
        title: "Was is SEO 'Optimierung' - Optimierung für Suchmaschinen | SEO Berlino",
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
        title: "SEO Berlino Kontakt ",
        description: "SEO Consultant in Berlin, 10 Jahre Erfahrung | Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/de/contact",
        alt: "https://www.seoberlino.com/en/contact"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Consultant in Berlin • Get in Touch | SEO Berlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});

app.get("/de/seo-experte", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("expert", {
        requrl: "https://www.seoberlino.com/en/seo-expert",
        layout: "mainDE",
        title: "SEO Experte Consultant in Berlin | SEO Berlino ",
        description: "SEO Experte in Berlin, 10 Jahre Erfahrung | Kontaktieren Sie uns jetzt für weitere Details.",
        canonical: "https://www.seoberlino.com/de/seo-experte",
        alt: "https://www.seoberlino.com/en/seo-expert"
    });
});

app.get("/en/seo-expert", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("expert", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Expert in Berlin | SEO Berlino ",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-experte"
    });
});

app.get("/en/seo-services/case-study-fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/casestudyfromatob", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HomeToGo SEO Berlin Case Study | SEO Berlino",
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
        title: "Competitor Analysis and why is it important | SEO Berlino",
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
        title: "Wettbewerbsanalyse | SEO Berlino",
        description: "Die Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/competitor-analysis"
    });
});

app.get("/en/seo-services/localSEO", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/localseo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Local SEO and Google MyBusiness | SEO Berlino",
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
        title: "Was sind Local SEO und Google MyBusiness | SEO Berlino",
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
        title: "Backlink Analysis and Offpage SEO | SEO Berlino",
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
        title: "Backlinks Check Analyse & Offpage SEO | SEO Berlino",
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
        title: "Impressum | SEO Berlino",
        description: "SEO Berlino Impressum. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/impressum",
        alt: "https://www.seoberlino.com/de/impressum"
    });
});

app.get("/de/impressum", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("impressum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Datenschutz | SEO Berlino",
        description: "SEO Berlino Datenschuzt. Audits können im Umfang je nach Bedarf und Reife der Webseite variieren .",
        canonical: "https://www.seoberlino.com/de/datenschutz",
        alt: "https://www.seoberlino.com/de/datenschutz"
    });
});

app.get("/de/sea", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungsea", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Online Marketing Freelancer | SEO Berlino",
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
        title: "Online Marketing Consultant Berlin | SEO Berlino",
        description: "SEA Expert for SEA Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/sea"
    });
});

app.get("/en/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Agile Coach Freelancer in Berlin | SEO Berlino",
        description: "Experienced Agile Coach for Agile implementation. Agile experience at HelloFresh and Spreadshirt. Scrum Certified Scrum Master and experienced as both Scrum Master and Product owner.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/agile-coach-berlin"
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratungscrum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Agile Coach / Scrum Master in Berlin | SEO Berlino",
        description: "Implementieren Sie Scrum für Ihre Projekte. 10 Jahre erfahrener Scrum-Master und Product Owner.",
        canonical: "https://www.seoberlino.com/de/agile-coach-berlin",
        alt: "https://www.seoberlino.com/en/agile-coach-berlin"
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Canonical Tag and how to use it | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/canonical"
    });
});

app.get("/de/seo-optimierung/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/canonical", {
        requrl: "https://www.seoberlino.com/en/seo-services/canonical",
        layout: "mainDE",
        title: "Was ist Canonical Tag und warum ist es wichtig? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/canonical"
    });
});

app.get("/en/seo-services/404", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/404", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What does 404 - Page Not Found mean| SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/404"
    });
});

app.get("/de/seo-optimierung/404", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/404", {
        requrl: "https://www.seoberlino.com/en/seo-services/404",
        layout: "mainDE",
        title: "Was bedeutet 'Fehler 404 - Not Found' | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/404"
    });
});

app.get("/en/seo-services/crawler", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/crawler", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What does status code 404 mean | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/crawler"
    });
});

app.get("/de/seo-optimierung/crawler", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/crawler", {
        requrl: "https://www.seoberlino.com/en/seo-services/crawler",
        layout: "mainDE",
        title: "Wie funktioniert ein Crawler? | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/crawler"
    });
});

app.get("/en/seo-services/googleanalytics", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googleanalytics", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Google Analytics  | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/googleanalytics"
    });
});

app.get("/de/seo-optimierung/googleanalytics", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googleanalytics", {
        requrl: "https://www.seoberlino.com/en/seo-services/googleanalytics",
        layout: "mainDE",
        title: "Google Analytics einrichten | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/googleanalytics"
    });
});

app.get("/en/seo-services/googlesearchconsole", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googlesearchconsole", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Search Console | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/googlesearchconsole"
    });
});

app.get("/de/seo-optimierung/googlesearchconsole", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googlesearchconsole", {
        requrl: "https://www.seoberlino.com/en/seo-services/googlesearchconsole",
        layout: "mainDE",
        title: "Search Console einrichten | SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/googlesearchconsole"
    });
});

app.get("/en/seo-services/seoaudit", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seoaudit", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Audit | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/seoaudit"
    });
});

app.get("/de/seo-optimierung/seoaudit", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seoaudit", {
        requrl: "https://www.seoberlino.com/en/seo-services/seoaudit",
        layout: "mainDE",
        title: "SEO Audit| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/seoaudit"
    });
});

app.get("/en/seo-services/seobudget", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seobudget", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Budget | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/seobudget"
    });
});

app.get("/de/seo-optimierung/seobudget", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seobudget", {
        requrl: "https://www.seoberlino.com/en/seo-services/seobudget",
        layout: "mainDE",
        title: "SEO  Budget| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/seobudget"
    });
});

app.get("/en/seo-services/seospecialist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seospecialist", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Specialist | SEO Berlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/seospecialist"
    });
});

app.get("/de/seo-optimierung/seospecialist", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/seospecialist", {
        requrl: "https://www.seoberlino.com/en/seo-services/seospecialist",
        layout: "mainDE",
        title: "SEO Spezialist| SEO Berlino",
        description: "Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/seospecialist"
    });
});

app.get("/en/seo-services/disavowtool", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/disavow", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Disavow Tool | SEO Berlino",
        description: "Disavow Tool. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/disavowtool"
    });
});

app.get("/de/seo-optimierung/disavowtool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/disavow", {
        requrl: "https://www.seoberlino.com/en/seo-services/disavowtool",
        layout: "mainDE",
        title: "Was ist Disavow Tool | SEO Berlino",
        description: "Disavow Tool. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/disavowtool"
    });
});

app.get("/en/seo-services/longtail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/longtail", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Long Tail Keywords | SEO Berlino",
        description: "Long Tail Keywords. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/longtail"
    });
});

app.get("/de/seo-optimierung/longtail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/longtail", {
        requrl: "https://www.seoberlino.com/en/seo-services/longtail",
        layout: "mainDE",
        title: "Was sind Long Tail Keywords | SEO Berlino",
        description: "Long Tail Keywords. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/longtail"
    });
});

app.get("/en/seo-services/searchvolume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/searchvolume", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Keyword Search Volume and why it is important | SEO Berlino",
        description: "Search Volume. SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/searchvolume"
    });
});

app.get("/de/seo-optimierung/searchvolume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/searchvolume", {
        requrl: "https://www.seoberlino.com/en/seo-services/searchvolume",
        layout: "mainDE",
        title: "Was sind Keyword Suchvolumen  | SEO Berlino",
        description: "Suchvolumen, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/searchvolume"
    });
});

app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is AMP (Accelerated Mobile Pages) and how do they work | SEO Berlino",
        description: "AMP, Accelerated Mobile Pages, SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/amp"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: "https://www.seoberlino.com/en/seo-services/amp",
        layout: "mainDE",
        title: "Was sind AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "AMP (Accelerated Mobile Pages). Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/amp"
    });
});

app.get("/en/seo-services/removeurl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/removeurl", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove URL Tool and how does it work | SEO Berlino",
        description: "Remove URL Tool, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/removeurl"
    });
});

app.get("/de/seo-optimierung/removeurl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/removeurl", {
        requrl: "https://www.seoberlino.com/en/seo-services/removeurl",
        layout: "mainDE",
        title: "Was ist der Remove URL Tool  | SEO Berlino",
        description: "Remove URL Tool. Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/removeurl"
    });
});

app.get("/en/seo-services/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/rankbrain", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Rank Brain and how does it work | SEO Berlino",
        description: "Rank Brain, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/rankbrain"
    });
});

app.get("/de/seo-optimierung/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/rankbrain", {
        requrl: "https://www.seoberlino.com/en/seo-services/rankbrain",
        layout: "mainDE",
        title: "Was ist Rank Brain und wie funktioniert | SEO Berlino",
        description: "Rank Brain, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/rankbrain"
    });
});

app.get("/en/seo-services/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/redirect", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are 301 and 302 Redirects and what is the difference | SEO Berlino",
        description: "Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/redirects"
    });
});

app.get("/de/seo-optimierung/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/redirect", {
        requrl: "https://www.seoberlino.com/en/seo-services/redirects",
        layout: "mainDE",
        title: "Was sind 301 und 302 Redirects (Weiterleitungen) | SEO Berlino",
        description: "Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/redirects"
    });
});

app.get("/en/seo-services/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/noindex", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/noindex"
    });
});

app.get("/de/seo-optimierung/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/noindex", {
        requrl: "https://www.seoberlino.com/en/seo-services/noindex",
        layout: "mainDE",
        title: "Was ist noindex und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/noindex"
    });
});

app.get("/en/seo-services/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/nofollow", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is nofollow and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/nofollow"
    });
});

app.get("/de/seo-optimierung/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/nofollow", {
        requrl: "https://www.seoberlino.com/en/seo-services/nofollow",
        layout: "mainDE",
        title: "Was ist nofollow und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/nofollow"
    });
});

app.get("/en/seo-services/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/robots", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Robots.txt and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/robots"
    });
});

app.get("/de/seo-optimierung/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/robots", {
        requrl: "https://www.seoberlino.com/en/seo-services/robots",
        layout: "mainDE",
        title: "Was ist Robots.txt und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/robots"
    });
});

app.get("/en/seo-services/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/sitemaps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is an xml Sitemap and how does it work | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/sitemaps", {
        requrl: "https://www.seoberlino.com/en/seo-services/sitemaps",
        layout: "mainDE",
        title: "Was ist ein xml Sitemap und wie funktioniert | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/sitemaps"
    });
});

app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: "https://www.seoberlino.com/en/seo-services/amp",
        layout: "mainDE",
        title: "Was sind AMP (Accelerated Mobile Pages) | SEO Berlino",
        description: "Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/amp"
    });
});

app.get("/en/seo-services/searchengines", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/suchmaschinen", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Search Engines | SEO Berlino",
        description: "Search Enginles, Noindex, Redirects, Accelerated Mobile Pages: SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/searchengines"
    });
});

app.get("/de/seo-optimierung/searchengines", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/suchmaschinen", {
        requrl: "https://www.seoberlino.com/en/seo-services/amp",
        layout: "mainDE",
        title: "Suchmaschinen | SEO Berlino",
        description: "Suchmaschinen, Noindex, Redirects, Canonical und andere Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/seo-services/searchengines"
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
        title: "Link Building in 2020 | SEO Berlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/voice-search-challenges", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO | SEO Berlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});



app.get("/en/seo-services/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogclutch", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Company in Germany 2019 | SEO Berlino",
        description: "Clutch has selected SEO Berlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogasia", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | SEO Berlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile-first", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
            requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
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
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building to Brand Building | SEO Berlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogfirstlinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "How to get those first backlinks | SEO Berlino",
        description: "Read this article about SEO and Back linking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/seo-services/site-migration-seo-checklist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogsitemigration", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Site migration SEO Checklist | SEO Berlino",
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

app.get("/de/on-page*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/onpage-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/AccessAnalyticsandSearchConsole.pdf", function(request, response) {
    response.writeHead(301, {
        Location: "/images/AccessAnalyticsandSearchConsole.pdf",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/n26imageissue.png", function(request, response) {
    response.writeHead(301, {
        Location: "images/seo-images/en/seo-services/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/website-ranking*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});




app.get("/de/blog/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/keyword-research",
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
        Location: "/en/seo-services/canonical",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/blog", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/canonical",
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


app.get("/en/casestudy/n26", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-n26",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/zalando", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/casestudy/hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hometogo", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-zalando", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/case-study-hometogo", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});





app.get("/en/casestudy*", function(request, response) {
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
        Location: "/en/seo-services/voice-search",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/", function(request, response) {
    response.writeHead(301, {
        Location: "/de",
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

app.get("/en/seo-consultancy", function(request, response) {
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

app.get("/de/blog/canonical", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung/canonical",
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

app.get("/en/blog*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/analytics*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/seo-services",
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

app.get("/de/blog*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-optimierung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.all("*", function(req, res) {
    res.status(404).render("error");
});
// listening
app.listen(process.env.PORT || 8080, () => console.log("listening"));