const {
    checkPassword,
    hashPass,
    capital
} = require("./Public/hash.js");
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

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainDEHP",
        title: "SEO-Agentur Berlin | SEO Consulancy Freelance | seoberlino",
        canonical: "https://www.seoberlino.com/de",
        description: "SEO Agentur Berlin - Freelancer SEO. 10 Jahre Erfahrung Suchmaschinenoptimierung Berlin. Kunden: Montblanc, HelloFresh, Ricoh, Spreadshirt, Spartoo, BSH, MSF, Red Cross, etc",
        alt: "https://www.seoberlino.com/en"
    });
});

app.get("/en", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("home", {
        requrl: "https://www.seoberlino.com/en",
        layout: "mainHP",
        title: "SEO Company in Germany | SEO Freelance Consultancy | seoberlino",
        description: "SEO Company in Berlin, SEO Consultancy with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/en",
        alt: "https://www.seoberlino.com/de"
    });
});


app.get("/en/jobs", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("jobs", {
        requrl: "https://www.seoberlino.com/en/jobs",
        layout: "main",
        title: "SEO Jobs in Berlin | seoberlino",
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
        title: "SEO Consultants und Outreach Specialists | SEO Jobs in Berlin | seoberlino",
        description: "SEO Jobs in Berlin for a SEO Consultancy Company with over 10 years experience €100m + multinationals:  Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: "https://www.seoberlino.com/de/jobs",
        alt: "https://www.seoberlino.com/en/jobs"
    });
});

app.get("/de/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en/seo-freelancer",
        layout: "mainDE",
        title: "SEO Freelancer Consultant in Berlin, SEO Beratung | seoberlino",
        description: "SEO Freelancer und Analytics Experte: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: "https://www.seoberlino.com/de/seo-freelancer",
        alt: "https://www.seoberlino.com/en/seo-freelancer"
    });
});

app.get("/en/seo-freelancer", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("beratung", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Consultant • Freelancer • Audits & Consulting | seoberlino",
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
        layout: "main",
        title: "SEO Blog - Search Engine Optimization Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog",
        alt: "https://www.seoberlino.com/de/blog"
    });
});





app.get("/en/blog/metas", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogmeta", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Metas and Titles for SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/metas",
        alt: "https://www.seoberlino.com/de/blog/metas"
    });
});


app.get("/de/blog/metas", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogmeta", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Metas & Titles für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/metas",
        alt: "https://www.seoberlino.com/en/blog/metas"
    });
});


app.get("/en/blog/crawl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcrawl", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Crawling SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/crawl",
        alt: "https://www.seoberlino.com/de/blog/crawl"
    });
});


app.get("/de/blog/crawl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogcrawl", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Crawl für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/crawl",
        alt: "https://www.seoberlino.com/en/blog/crawl"
    });
});



app.get("/en/blog/https", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("bloghttps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "https SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/https",
        alt: "https://www.seoberlino.com/de/blog/https"
    });
});


app.get("/de/blog/https", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("bloghttps", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "https für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/https",
        alt: "https://www.seoberlino.com/en/blog/https"
    });
});




app.get("/en/blog/international", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("bloginternational", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Internationalisation SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/international",
        alt: "https://www.seoberlino.com/de/blog/international"
    });
});


app.get("/de/blog/international", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("bloginternational", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Internationalisierung für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/international",
        alt: "https://www.seoberlino.com/en/blog/international"
    });
});


app.get("/en/blog/mobile", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogmobile", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "mobile SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/mobile",
        alt: "https://www.seoberlino.com/de/blog/mobile"
    });
});


app.get("/de/blog/mobile", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogmobile", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Mobile für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/mobile",
        alt: "https://www.seoberlino.com/en/blog/mobile"
    });
});





app.get("/en/blog/javascript", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogjava", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/javascript",
        alt: "https://www.seoberlino.com/de/blog/javascript"
    });
});


app.get("/de/blog/javascript", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogjava", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Javascript und SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/javascript",
        alt: "https://www.seoberlino.com/en/blog/javascript"
    });
});


app.get("/en/blog/pagespeed", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogpagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Javascript and SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/pagespeed",
        alt: "https://www.seoberlino.com/de/blog/pagespeed"
    });
});


app.get("/de/blog/pagespeed", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogpagespeed", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Javascript und SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/pagespeed",
        alt: "https://www.seoberlino.com/en/blog/pagespeed"
    });
});


app.get("/en/blog/images", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogimages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Image Optimization for SEO  | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/images",
        alt: "https://www.seoberlino.com/de/blog/images"
    });
});


app.get("/de/blog/images", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogimages", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Bildoptimierung für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/images",
        alt: "https://www.seoberlino.com/en/blog/images"
    });
});



app.get("/en/blog/content", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Content, Duplicate Content & Landing pages | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/content",
        alt: "https://www.seoberlino.com/de/blog/content"
    });
});


app.get("/de/blog/content", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogcontent", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Content, Landing Pages für SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/content",
        alt: "https://www.seoberlino.com/en/blog/content"
    });
});


app.get("/en/blog/backlinks", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogbacklinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlinks & Offpage SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/backlinks",
        alt: "https://www.seoberlino.com/de/blog/backlinks"
    });
});

app.get("/de/blog/backlinks", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogbacklinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlinks & Offpage SEO | SEO Blog  | seoberlino",
        description: "seoberlino Blog, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/blog/backlinks",
        alt: "https://www.seoberlino.com/en/blog/backlinks"
    });
});



app.get("/de/blog/keyword-research", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogKW", {
        requrl: "https://www.seoberlino.com/en/blog/keyword-research",
        layout: "mainDE",
        title: "Keyword Recherche | SEO Blog  | seoberlino",
        description: "seoberlino Blog, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/blog/keyword-research",
        alt: "https://www.seoberlino.com/en/blog/keyword-research"
    });
});


app.get("/en/blog/keyword-research", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogKW", {
        requrl: "https://www.seoberlino.com/en/blog/keyword-research",
        layout: "main",
        title: "Keyword Research | SEO Blog  | seoberlino",
        description: "seoberlino Blog, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/en/blog/keyword-research",
        alt: "https://www.seoberlino.com/de/blog/keyword-research"
    });
});






app.get("/de/blog/indexation", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogindexation", {
        requrl: "https://www.seoberlino.com/en/blog/indexation",
        layout: "mainDE",
        title: "Indexierung | SEO Blog  | seoberlino",
        description: "seoberlino Blog, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/de/blog/indexation",
        alt: "https://www.seoberlino.com/en/blog/indexation"
    });
});


app.get("/en/blog/indexation", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogindexation", {
        requrl: "https://www.seoberlino.com/en/blog/indexation",
        layout: "main",
        title: "Indexation | SEO Blog  | seoberlino",
        description: "seoberlino Blog, über SEO. SEO Berater in Berlin. 10 Jahre Erfahrung: SEO, Analytics und SEA.",
        canonical: "https://www.seoberlino.com/en/blog/indexation",
        alt: "https://www.seoberlino.com/de/blog/indexation"
    });
});




app.get("/en/blog/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/seo-case-studies",
        alt: "https://www.seoberlino.com/de/blog/seo-case-studies"
    });
});

app.get("/de/blog/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcasestudies", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/seo-case-studies",
        alt: "https://www.seoberlino.com/en/blog/seo-case-studies"
    });
});

app.get("/en/blog/onpage-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage", {
        requrl: "https://www.seoberlino.com/en/blog/onpage-seo",
        layout: "main",
        title: "Onpage SEO | SEO Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/onpage-seo",
        alt: "https://www.seoberlino.com/de/blog/onpage-seo"
    });
});

app.get("/de/blog/onpage-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage", {
        requrl: "https://www.seoberlino.com/en/blog/onpage-seo",
        layout: "mainDE",
        title: "Onpage SEO | SEO Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/onpage-seo",
        alt: "https://www.seoberlino.com/en/blog/onpage-seo"
    });
});

app.get("/en/blog/technical-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtechnical", {
        requrl: "https://www.seoberlino.com/en/blog/technical-seo",
        layout: "main",
        title: "Technical SEO | SEO Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/en/blog/technical-seo",
        alt: "https://www.seoberlino.com/de/blog/technical-seo"
    });
});


app.get("/de/blog/technical-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtechnical", {
        requrl: "https://www.seoberlino.com/en/blog/technical-seo",
        layout: "mainDE",
        title: "Technisches SEO | SEO Blog | seoberlino",
        description: "seoberlino Blog, about SEO and its most important challenges. SEO Consultant in Berlin. Close to 10 years experience in SEO, Analytics and SEA.",
        canonical: "https://www.seoberlino.com/de/blog/technical-seo",
        alt: "https://www.seoberlino.com/en/blog/technical-seo"
    });
});

app.get("/de/blog", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: "https://www.seoberlino.com/en/blog",
        layout: "mainDE",
        title: "Suchmaschinenoptimierung Blog | seoberlino",
        description: "SEO Blog von seoberlino, SEO Experte in Berlin. SEO Berater, Experte in Webanalyse, SEA und SEO.",
        canonical: "https://www.seoberlino.com/de/blog",
        alt: "https://www.seoberlino.com/en/blog"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainHP",
        title: "SEO Freelancer Berlin • Profile | seoberlino",
        description: "Get in touch to get a quote.  SEO expert with over 10 years experience: Montblanc, Spreadshirt, Ricoh, BSH, MSF, Red Cross, KeepTool, etc",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/contact"
    });
});

app.get("/en/blog/case-study-fromatob", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyfromatob", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "fromAtoB SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's fromAtoB: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-zalando", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyzalando", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Zalando SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Zalando: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-wooga", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudywooga", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Wooga SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Wooga: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-juniqe", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyjuniqe", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Juniqe SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Juniqe: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-modomoto", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudymodomoto", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Modomoto: SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's Modomoto: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-n26", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyn26", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "N26 SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's N26: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-hellofresh", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhellofresh", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HelloFresh SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's HelloFresh: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/case-study-hometogo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("casestudyhometogo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "HomeToGo SEO Case Study | seoberlino",
        description: "Mini SEO Case Study about Berlin's HomeToGo: Main keywords, Backlinks, Trend, Brand and other main SEO factors.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com" + req.originalUrl
    });
});



app.get("/en/blog/competitor-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("competitor", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Competitor Analysis for SEO | seoberlino",
        description: "SEO Competitor Analysis is important to gather information from the industry leaders: keywords, site structure, backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/blog/mitwettbewerber"
    });
});

app.get("/de/blog/mitwettbewerber", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("competitor", {
        requrl: "https://www.seoberlino.com/en/blog/competitor-analysis",
        layout: "mainDE",
        title: "SEO-Wettbewerbsanalyse | seoberlino",
        description: "Die SEO-Wettbewerberanalyse ist wichtig, um Informationen von den Branchenführern zu sammeln: Keywords, Seitenstruktur, Backlinks, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/blog/competitor-analysis"
    });
});

app.get("/en/blog/localSEO", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("localseo", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "How to deal with Local SEO | seoberlino",
        description: "Especially for local business, it is paramount to align your SEO  overall strategy to local SEO.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/blog/localSEO"
    });
});

app.get("/de/blog/localSEO", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("localseo", {
        requrl: "https://www.seoberlino.com/en/blog/localSEO",
        layout: "mainDE",
        title: "Local SEO Optimierung | seoberlino",
        description: "Insbesondere für lokale Unternehmen ist es von größter Bedeutung, Ihre SEO-Gesamtstrategie auf lokale SEO auszurichten.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/blog/localSEO"
    });
});





app.get("/en/blog/backlink-analysis", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogbacklinkanalysis", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Backlink Analysis and Offpage SEO | seoberlino",
        description: "Backlinks and Offpage SEO represent a key part of SEO and include in particular Link Building and Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/blog/backlink-analysis"
    });
});

app.get("/de/blog/backlink-analysis", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogbacklinkanalysis", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "Backlinks & Offpage SEO | seoberlino",
        description: "Backlinks sind ein wichtiger Bestandteil von SEO und umfassen insbesondere Link Building und Brand Building.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/blog/backlink-analysis"
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

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Freelancer in Berlin | Kontakt | seoberlino ",
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
        description: "This page should not be indexed so please ignore it."
    });
});

// app.get("/en/success", (req, res) => {
//     i18n.setLocale(req, "en");
//     res.render("success", {
//         layout: "mainHPNoIndex",
//         title: "Success, thank you for your message!",
//         description: "Thank you for your message."
//     });
// });
// app.get("/de/success", (req, res) => {
//     i18n.setLocale(req, "de");
//     res.render("success", {
//         layout: "mainHPNoIndex",
//         title: "Danke für Ihre Nachricht!",
//         description: "Danke für Ihre Nachricht"
//     });
// });
///LEXICON PAGES

app.get("/en/blog/seo-glossary", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("lexical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Glossary: Keyword Planner, Insights, Canonicals | seoberlino",
        description: "SEO Glossary for SEO. Learn about SEO Jargon and what some terms mean: Canonicals, hreflangs, noindex, nofollow, etc. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/de/blog/seo-glossary"
    });
});

app.get("/de/blog/seo-glossary", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("lexical", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainDEHP",
        title: "SEO Glossary: Keyword Planner, Insights, Canonicals | seoberlino",
        description: "SEO Lexikon für SEO: canonicals, noindex, nofollow, search console, Google Keyword Finder, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl,
        alt: "https://www.seoberlino.com/en/blog/seo-glossary"
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

////blog pages/////////
app.get("/en/blog/linkbuilding-in-2020", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("bloglinksgettingitright", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Link Building in 2020 | seoberlino",
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

app.get("/en/seo", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/technical/indexation", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/indexation",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage/backlinkanalysis", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/backlink-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage/backlinkanalysis", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/backlink-analysis",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/onpage/sprachsuche", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/onpage-seo#voicesearch",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/zalando", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/case-study-zalando",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/n26", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/case-study-n26",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hometogo", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/case-study-hometogo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/hellofresh", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/case-study-hellofresh",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/casestudy/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/seo-case-studies",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/research/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/forschung/*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog",
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
        title: "Voice Search and how it challenges SEO |seoberlino ",
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about Voice Search.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/google-keyword-planner-guide", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogkeywordplanner", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "Google Keyword Planner Tool Guide | seoberlino",
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
    res.render("blogmobile-first", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "SEO Beyond Mobile First | seoberlino",
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
    res.render("blogstructureddata", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Why you need to implement Structured Data | seoberlino",
        description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO.  Everything you need to know about Strucutured Data. ",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/why-you-need-implement-structured-data", function(
    request,
    response
) {
    response.writeHead(301, {
        Location: "/en/blog/why-you-need-implement-structured-data",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/link-building-to-brandbuilding", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogbrandbuilding", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Link Building to Brand Building | seoberlino",
        description: "Link Bulding is now very connected to PR and how to spread visibility online. Read about how you need to adapt your PR online strategy.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/link-building-to-brandbuilding", function(
    request,
    response
) {
    response.writeHead(301, {
        Location: "/en/blog/link-building-to-brandbuilding",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/blog/how-to-get-those-first-links", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogfirstlinks", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "How to get those first links | seoberlino",
        description: "Read this article about SEO and Backlinking and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/blog/site-migration-seo-checklist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogsitemigration", {
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        requrl: "https://www.seoberlino.com/en" + req.originalUrl.substring(3),
        title: "Site migration SEO Checklist | seoberlino",
        description: "Read this article about site migration and what to do before you start migration.",
        canonical: "https://www.seoberlino.com" + req.originalUrl
    });
});

app.get("/en/article/how-to-get-those-first-links", function(
    request,
    response
) {
    response.writeHead(301, {
        Location: "/en/blog/how-to-get-those-first-links",
        Expires: new Date().toGMTString()
    });
    response.end();
});



//////////////// Redirects////////////////

app.get("/en/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/seo-glossary",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/lexical*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/seo-glossary",
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
        Location: "/en/blog/seo-case-studies",
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



app.get("/de/consultant", function(request, response) {
    response.writeHead(301, {
        Location: "/de/seo-freelancer",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/de/onpage/keyword-recherche", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/keyword-research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/keyword-research",
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

var nodemailer = require("nodemailer");

app.post("/email", function(req, res) {
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
        }); //transporter
    });
});

app.get("/en/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/onpage-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/onpage-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/backlinks",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/technical*", function(request, response) {
    response.writeHead(301, {
        Location: "/de/blog/technical-seo",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/technical*", function(request, response) {
    response.writeHead(301, {
        Location: "/en/blog/technical-seo",
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