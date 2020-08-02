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
        title: "SEO Company Germany • Local SEO Services | seoberlino",
        description: "SEO Consultancy with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
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
        requrl: "https://www.seoberlino.com/en/seo-freelancer",
        layout: "mainDE",
        title: "SEO Freelancer • SEO in Berlin | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "https://www.seoberlino.com/en/seo-freelancer"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Experienced Freelance SEO Consultant in Germany | seoberlino",
        layout: "main",
        description: "SEO Freelancer in Berlin, experienced in international SEO. Audits by Expert SEO Consultant with 10 years experience. Clients: Montblanc, Spreadshirt, Ricoh, HelloFresh, etc.",
        canonical: "https://www.seoberlino.com/en/seo-freelancer",
        alt: "https://www.seoberlino.com/de/seo-freelancer"
    });
});



// app.get("/de/seo-beratung", (req, res) => {
//     i18n.setLocale(req, "de");
//     res.render("seoberatung", {
//         requrl: "https://www.seoberlino.com/en/seo-freelancer",
//         layout: "mainDE",
//         title: "SEO Beratung • SEO Berater | seoberlino",
//         description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
//         canonical: "https://www.seoberlino.com/de/seo-beratung",
//         alt: "https://www.seoberlino.com/en/seo"
//     });
// });

app.get("/en/website-ranking/berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogberlin", {
        requrl: "https://www.seoberlino.com/en/website-ranking/berlin",
        layout: "mainNoAlt",
        title: "SEO in Berlin, the place to be | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/en/website-ranking/berlin"
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
        title: "Clients References, SEO Consultant Berlin | seoberlino",
        description: "SEO Consulant in Berlin • SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/de/references",
        alt: "https://www.seoberlino.com/en/references"
    });
});


app.get("/en/website-ranking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en/website-ranking",
        layout: "main",
        title: "SEO Website optimization - SEO Blog | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking",
        alt: "https://www.seoberlino.com/de/seo-optimierung"
    });
});

app.get("/en/website-ranking/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogmeta", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Metas and Titles for SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/metas",
        alt: "https://www.seoberlino.com/de/seo-optimierung/metas"
    });
});

app.get("/de/seo-optimierung/metas", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogmeta", {
        requrl: "https://www.seoberlino.com/en/website-ranking/metas",
        layout: "mainDE",
        title: "Metas & Titles für SEO | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/metas",
        alt: "https://www.seoberlino.com/en/website-ranking/metas"
    });
});

app.get("/en/website-ranking/crawl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogcrawl", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/crawl",
        alt: "https://www.seoberlino.com/de/seo-optimierung/crawl"
    });
});

app.get("/de/seo-optimierung/crawl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogcrawl", {
        requrl: "https://www.seoberlino.com/en/website-ranking/crawl",
        layout: "mainDE",
        title: "Crawl für SEO | Website optimization",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/crawl",
        alt: "https://www.seoberlino.com/en/website-ranking/crawl"
    });
});

app.get("/en/website-ranking/https", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloghttps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "https SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/https",
        alt: "https://www.seoberlino.com/de/seo-optimierung/https"
    });
});

app.get("/de/seo-optimierung/https", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/bloghttps", {
        requrl: "https://www.seoberlino.com/en/website-ranking/https",
        layout: "mainDE",
        title: "https für SEO | Website optimization",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/https",
        alt: "https://www.seoberlino.com/en/website-ranking/https"
    });
});

app.get("/en/website-ranking/international", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloginternational", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Internationalisation SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/international",
        alt: "https://www.seoberlino.com/de/seo-optimierung/international"
    });
});

app.get("/de/seo-optimierung/international", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/bloginternational", {
        requrl: "https://www.seoberlino.com/en/website-ranking/international",
        layout: "mainDE",
        title: "Internationalisierung für SEO | Website optimization",
        description: "Website optimieren, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/international",
        alt: "https://www.seoberlino.com/en/website-ranking/international"
    });
});

app.get("/en/website-ranking/mobile", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Importance of a Mobile Friendly Website  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/mobile",
        alt: "https://www.seoberlino.com/de/seo-optimierung/mobile"
    });
});

app.get("/de/seo-optimierung/mobile", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogmobile", {
        requrl: "https://www.seoberlino.com/en/website-ranking/mobile",
        layout: "mainDE",
        title: " Mobile-Friendly Website | Website optimization",
        description: "Website optimieren, SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/mobile",
        alt: "https://www.seoberlino.com/en/website-ranking/mobile"
    });
});

app.get("/en/website-ranking/javascript", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogjava", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/javascript",
        alt: "https://www.seoberlino.com/de/seo-optimierung/javascript"
    });
});

app.get("/de/seo-optimierung/javascript", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogjava", {
        requrl: "https://www.seoberlino.com/en/website-ranking/javascript",
        layout: "mainDE",
        title: "Javascript und SEO | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/javascript",
        alt: "https://www.seoberlino.com/en/website-ranking/javascript"
    });
});

app.get("/en/website-ranking/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogpagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Page Speed and SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/pagespeed",
        alt: "https://www.seoberlino.com/de/seo-optimierung/pagespeed"
    });
});

app.get("/de/seo-optimierung/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogpagespeed", {
        requrl: "https://www.seoberlino.com/en/website-ranking/pagespeed",
        layout: "mainDE",
        title: "Pagespeed und SEO | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/pagespeed",
        alt: "https://www.seoberlino.com/en/website-ranking/pagespeed"
    });
});

app.get("/en/website-ranking/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogimages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Image Optimization for SEO  | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/images",
        alt: "https://www.seoberlino.com/de/seo-optimierung/images"
    });
});

app.get("/de/seo-optimierung/images", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogimages", {
        requrl: "https://www.seoberlino.com/en/website-ranking/images",
        layout: "mainDE",
        title: "Bildoptimierung für SEO | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/images",
        alt: "https://www.seoberlino.com/en/website-ranking/images"
    });
});

app.get("/en/website-ranking/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Content, Duplicate Content & Landing pages | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/content",
        alt: "https://www.seoberlino.com/de/seo-optimierung/content"
    });
});

app.get("/de/seo-optimierung/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogcontent", {
        requrl: "https://www.seoberlino.com/en/website-ranking/content",
        layout: "mainDE",
        title: "Unhalt und Landing Pages | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/content",
        alt: "https://www.seoberlino.com/en/website-ranking/content"
    });
});

app.get("/en/website-ranking/backlinks", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbacklinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlinks & Offpage SEO | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/backlinks",
        alt: "https://www.seoberlino.com/de/seo-optimierung/backlinks"
    });
});

app.get("/de/seo-optimierung/backlinks", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogoffpage/blogbacklinks", {
        requrl: "https://www.seoberlino.com/en/website-ranking/backlinks",
        layout: "mainDE",
        title: "Backlinks & Offpage SEO | Website optimization",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/backlinks",
        alt: "https://www.seoberlino.com/en/website-ranking/backlinks"
    });
});

app.get("/de/seo-optimierung/keyword-research", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogKW", {
        requrl: "https://www.seoberlino.com/en/website-ranking/keyword-research",
        layout: "mainDE",
        title: "Keyword Recherche | Website optimization",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/keyword-research",
        alt: "https://www.seoberlino.com/en/website-ranking/keyword-research"
    });
});

app.get("/en/website-ranking/keyword-research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogKW", {
        requrl: "https://www.seoberlino.com/en/website-ranking/keyword-research",
        layout: "main",
        title: "Keyword Research | Website optimization",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/keyword-research",
        alt: "https://www.seoberlino.com/de/seo-optimierung/keyword-research"
    });
});

app.get("/de/seo-optimierung/indexation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogindexation", {
        requrl: "https://www.seoberlino.com/en/website-ranking/indexation",
        layout: "mainDE",
        title: "Indexierung | Website optimization",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/indexation",
        alt: "https://www.seoberlino.com/en/website-ranking/indexation"
    });
});

app.get("/en/website-ranking/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogindexation", {
        requrl: "https://www.seoberlino.com/en/website-ranking/indexation",
        layout: "main",
        title: "Indexation | Website optimization",
        description: "Website optimization, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/indexation",
        alt: "https://www.seoberlino.com/de/seo-optimierung/indexation"
    });
});

app.get("/de/seo-optimierung/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Blog | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/seo-optimierung/seo-case-studies"
    });
});

app.get("/en/website-ranking/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Blog | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/seo-case-studies"
    });
});

app.get("/en/website-ranking/onpage-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogonpage", {
        requrl: "https://www.seoberlino.com/en/website-ranking/onpage-seo",
        layout: "main",
        title: "Onpage SEO | Website optimization | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/onpage-seo",
        alt: "https://www.seoberlino.com/de/seo-optimierung/onpage-seo"
    });
});

app.get("/de/seo-optimierung/onpage-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogonpage", {
        requrl: "https://www.seoberlino.com/en/website-ranking/onpage-seo",
        layout: "mainDE",
        title: "Onpage SEO | Website optimization | seoberlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/onpage-seo",
        alt: "https://www.seoberlino.com/en/website-ranking/onpage-seo"
    });
});

app.get("/en/website-ranking/technical-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogtechnical", {
        requrl: "https://www.seoberlino.com/en/website-ranking/technical-seo",
        layout: "main",
        title: "Technical SEO | Website optimization",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/website-ranking/technical-seo",
        alt: "https://www.seoberlino.com/de/seo-optimierung/technical-seo"
    });
});

app.get("/de/seo-optimierung/technical-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogtechnical", {
        requrl: "https://www.seoberlino.com/en/website-ranking/technical-seo",
        layout: "mainDE",
        title: "Technical SEO |SEO Optimierung | SEO Berlino",
        description: "Website optimization, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung/technical-seo",
        alt: "https://www.seoberlino.com/en/website-ranking/technical-seo"
    });
});

app.get("/de/seo-optimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en/website-ranking",
        layout: "mainDE",
        title: "SEO Optimierung für Suchmaschinen | seoberlino",
        description: "Optimierung für Suchmaschinen, SEO Optimierung, SEO Experte in Berlin. SEO und Webanalyse Blog.",
        canonical: "https://www.seoberlino.com/de/seo-optimierung",
        alt: "https://www.seoberlino.com/en/website-ranking"
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
        title: "SEO Expert • SEO Con und Berater in Berlin | seoberlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});

app.get("/en/website-ranking/case-study-fromatob", (req, res) => {
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

app.get("/en/website-ranking/case-study-zalando", (req, res) => {
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

app.get("/en/website-ranking/case-study-wooga", (req, res) => {
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

app.get("/en/website-ranking/case-study-juniqe", (req, res) => {
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

app.get("/en/website-ranking/case-study-modomoto", (req, res) => {
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

app.get("/en/website-ranking/case-study-n26", (req, res) => {
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

app.get("/en/website-ranking/case-study-hellofresh", (req, res) => {
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

app.get("/en/website-ranking/case-study-hometogo", (req, res) => {
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

app.get("/en/website-ranking/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/competitor", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis | Website optimization | seoberlino",
        description: "SEO Competitor Analysis is important to gather information from the industry leaders: keywords, site structure, backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/mitwettbewerber"
    });
});

app.get("/de/seo-optimierung/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogcase/competitor", {
        requrl: "https://www.seoberlino.com/en/website-ranking/competitor-analysis",
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | Website optimization | seoberlino",
        description: "Die SEO-Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/website-ranking/competitor-analysis"
    });
});

app.get("/en/website-ranking/localSEO", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/localseo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How to deal with Local SEO | Website optimization | seoberlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/localSEO"
    });
});

app.get("/de/seo-optimierung/localSEO", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/localseo", {
        requrl: "https://www.seoberlino.com/en/website-ranking/localSEO",
        layout: "mainDE",
        title: "Local SEO Optimierung | SEO Berlin | seoberlino",
        description: "Insbesondere für lokale Unternehmen ist es von größter Bedeutung, Ihre SEO-Gesamtstrategie auf lokale SEO auszurichten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/website-ranking/localSEO"
    });
});

app.get("/en/website-ranking/backlink-analysis", (req, res) => {
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
        requrl: "https://www.seoberlino.com/en/website-ranking/backlink-analysis",
        layout: "mainDE",
        title: "Backlinks & Offpage SEO | SEO Berlin | seoberlino",
        description: "Backlinks sind ein wichtiger Bestandteil von SEO und umfassen insbesondere Link Building und Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/website-ranking/backlink-analysis"
    });
});

app.get("/en/impressum", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("impressum", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAltNoIndex",
        title: "Impressum | Website optimization | seoberlino",
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
        title: "Impressum | Website optimization | seoberlino",
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

app.get("/en/website-ranking/seo-glossary", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/lexical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Glossary: Keyword Planner, Insights, Canonicals | seoberlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/seo-optimierung/seo-glossary"
    });
});

app.get("/de/seo-optimierung/seo-glossary", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/lexical", {
        requrl: "https://www.seoberlino.com/en/website-ranking/seo-glossary",
        layout: "mainDEHP",
        title: "Top 10 Suchmaschinenoptimierung Begriffe | seoberlino",
        description: "Top 10 Suchmaschinenoptimierung Begriffe. SEO Glossar: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/website-ranking/seo-glossary"
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

app.get("/en/website-ranking/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/bloglinksgettingitright", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | seoberlino",
        description: "Link Building in one of the most difficult but important aspects of SEO. Read these tips to start your Backlinking tasks.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/website-ranking/voicesearch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoice", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Voice Search and how it challenges SEO |seoberlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/website-ranking/google-keyword-planner-guide", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogkeywordplanner", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Google Keyword Planner Tool Guide | seoberlino",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/website-ranking/clutch", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogclutch", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Top SEO Services Company in Germany | seoberlino",
        description: "Clutch has selected seoberlino as one of the top SEO companies in Germany for 2019. Read the Press Release from Clutch.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});



app.get("/en/website-ranking/seo-in-asia-korea-china-japan-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogasia", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO in Asia: China, Japan and Korea | seoberlino",
        description: "Blog article about SEO in Asia and Search Engines in Asia. How to approach SEO for the Asian market.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});


app.get("/en/website-ranking/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile-first", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Beyond Mobile First | Website optimization | seoberlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop.",
        canonical: "https://www.seoberlino.com/en/website-ranking/beyond-mobile-first"
    });
});


app.get("/en/website-ranking/why-you-need-implement-structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogstructureddata", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Why you need to implement Structured Data | seoberlino",
        description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/website-ranking/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogbrandbuilding", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building to Brand Building | seoberlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/website-ranking/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogoffpage/blogfirstlinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "How to get those first links | seoberlino",
        description: "Read this article about SEO and Backlinking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/website-ranking/site-migration-seo-checklist", (req, res) => {
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
        Location: "/en/website-ranking/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/article/clutch", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/clutch",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/seo-glossary",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/seo-glossary",
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
        Location: "/en/website-ranking/seo-case-studies",
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
        Location: "/en/website-ranking/seo-in-asia-korea-china-japan-2020",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/article/voicesearch", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/voicesearch",
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
        Location: "/en/website-ranking/voice-search-challenges",
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

app.get("/de/onpage/keyword-recherche", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/keyword-research",
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

app.get("/en/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/website-ranking/onpage-seo",
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
        Location: "/en/website-ranking/backlinks",
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
        Location: "/en/website-ranking/technical-seo",
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