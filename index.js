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
    res.render("home", {
        requrl: localhost + "/en",
        layout: "mainHP",
        title: "SEO Agency - Consultant in Berlin, Germany| SEO Berlino",
        description: "SEO Agency, SEO Consultants in Berlin with over 12 years experience: €100m + multinationals. Clients: Montblanc, HelloFresh, Spreadshirt, Gropius Bau, Ricoh, Bosch & Siemens, etc",
        canonical: localhost + "/en",
        alt: localhost + "/de",
    });
});

app.get("/de", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("home", {
        requrl: localhost + "/en",
        layout: "mainDEHP",
        title: "SEO Beratung Freelance Agentur Berlin | SEO Berlino",
        canonical: localhost + "/de",
        description: "SEO Agentur Freelance Beratung in Berlin, Kleine SEO Agentur in Berlin • SEO Berater mit 10 Jahre Erfahrung. Kunden: Montblanc, HelloFresh, Ricoh, Spreadshirt, Spartoo, BSH etc",
        alt: localhost + "/en",
    });
});


app.get("/de/google-ranking-verbessern", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("googleranking", {
        requrl: localhost + "/en/google-ranking",
        layout: "mainDE",
        title: "Verbesserung Ihrer Google-Rankings | SEO Berlino",
        description: "Verbessern Sie Ihre SEO-Rankings mit der Unterstützung eines erfahrenen SEO-Beraters - Audits oder ad-hoc. Aktuelle und ehemalige Kunden: Montblanc, Ricoh.",
        canonical: localhost + "/de/google-ranking-verbessern",
        alt: localhost + "/en/google-ranking"
    });
});

app.get("/en/google-ranking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("googleranking", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        title: "How to improve your Google Rankings | SEO Berlino",
        layout: "main",
        description: "Improve your SEO Rankings with the support of an experienced and successful SEO Consultant - Audits or ad-hoc. Some current and former clients: Montblanc, Ricoh.",
        canonical: localhost + "/en/google-ranking",
        alt: localhost + "/de/google-ranking-verbessern"
    });
});


app.get("/en/seo-consultancy", function(req, res) {
    i18n.setLocale(req, "en");
    res.render("seoberatung/seoberatung", {
        requrl: localhost + "/de/seo-beratung",
        title: "SEO Consultancy in Berlin Germany | SEO Berlino",
        layout: "main",
        description: "SEO Consultancy in Berlin: onpage and offpage SEO as well as Technical SEO. Over 10 years experience with multinationals but also local businesses. Get in touch to arrange a call.",
        canonical: localhost + "/en/seo-consultancy",
        alt: localhost + "/de/seo-beratung"
    });
});


app.get("/de/seo-beratung", function(req, res) {
    i18n.setLocale(req, "de");
    res.render("seoberatung/seoberatung", {
        requrl: localhost + "/de/seo-beratung",
        layout: "mainDE",
        title: "SEO Beratung in Berlin | SEO Berlino",
        description: "SEO-Beratung in Berlin: Onpage- und Offpage-SEO sowie Technical SEO. Über 10 Jahre Erfahrung. Vereinbaren Sie jetzt ein Beratungsgespräch.",
        canonical: localhost + "/de/seo-beratung",
        alt: localhost + "/en/seo-consultancy"
    });
});




app.get("/en/online-marketing", function(req, res) {
    i18n.setLocale(req, "en");
    res.render("otherberatung/onlinemarketing", {
        requrl: localhost + "/en/online-marketing",
        title: "Online Marketing Consultancy Berlin | SEO Berlino",
        layout: "main",
        description: "Online Marketing Agentur in Berlin: SEO, Suchmaschinenwerbung (SEA) und Social Media Marketing. Kunden: Montblanc, Spreadshirt, HelloFresh, Ricoh etc.",
        canonical: localhost + "/en/online-marketing",
        alt: localhost + "/de/online-marketing"
    });
});

app.get("/de/online-marketing", function(req, res) {
    i18n.setLocale(req, "de");
    res.render("otherberatung/onlinemarketing", {
        requrl: localhost + "/en/online-marketing",
        layout: "mainDE",
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
        description: "SEO and Analytics Expert: SEO, Analytics, SEA und Scrum. Kunden: Montblanc, HelloFresh, Spreadshirt, Ricoh, etc.",
        canonical: localhost + "/en/seo-services/berlin"
    });
});

app.get("/en/jobs", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("jobs", {
        requrl: localhost + "/en/jobs",
        layout: "main",
        title: "SEO Consultants Jobs in Berlin, Germany | SEO Berlino",
        description: "SEO Jobs in Berlin for a SEO Consulting Company. Although these are remote roles, applicants need to be Berlin based and have an excellent level of German.",
        canonical: localhost + "/en/jobs",
        alt: localhost + "/de/jobs"
    });
});

app.get("/de/jobs", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("jobs", {
        requrl: localhost + "/en/jobs",
        layout: "mainDE",
        title: "SEO Consultants Jobs in Berlin | SEO Berlino",
        description: "SEO Jobs in Berlin für ein SEO Consulting Unternehmen. Remote-Jobs - Bewerber müssen aber in Berlin leben und über sehr gute Deutschkenntnisse verfügen.",
        canonical: localhost + "/de/jobs",
        alt: localhost + "/en/jobs"
    });
});

app.get("/en/references", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("references", {
        requrl: localhost + "/en/references",
        layout: "main",
        title: "SEO Consultant Berlin Clients References | SEO Berlino",
        description: "References SEO Consulting Company with over 10 years experience €100m + multinationals: Montblanc, HelloFresh, Spreadshirt, Spartoo, Ricoh, BSH, MSF, Red Cross, etc",
        canonical: localhost + "/en/references",
        alt: localhost + "/de/references"
    });
});

app.get("/de/references", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("references", {
        requrl: localhost + "/en/references",
        layout: "mainDE",
        title: "SEO Agentur Berlin Kundenbewertungen | SEO Berlino",
        description: "SEO Consulting Company mit über 10 Jahren Erfahrung. €100m + multinationale Unternehmen: Montblanc, HelloFresh, Spreadshirt, Spartoo, BSH, MSF, Rotes Kreuz, etc",
        canonical: localhost + "/de/references",
        alt: localhost + "/en/references"
    });
});

app.get("/en/seo-services", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blog", {
        requrl: localhost + "/en/seo-services",
        layout: "main",
        title: "SEO Services – Search Engine Optimization | SEO Berlino",
        description: "SEO Blog and SEO Resources provided by SEO Berlino: about SEO news and SEO Lexicon to help you understand some SEO basics such as canonicals and hreflang.",
        canonical: localhost + "/en/seo-services",
        alt: localhost + "/de/seo-optimierung"
    });
});




app.get("/en/seo-services/https", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/bloghttps", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
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
        layout: "mainDE",
        title: "Was macht https für SEO? | Von http zu https | SEO Berlino",
        description: "Hyper Text Transfer Protocol Secure (HTTPS) is the secure version of HTTP, the protocol over which data is sent between browser and the connected website.",
        canonical: localhost + "/de/seo-optimierung/https",
        alt: localhost + "/en/seo-services/https"
    });
});

app.get("/en/seo-services/mobile", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
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
        layout: "mainDE",
        title: " Mobile-Friendly Website | SEO Optimierung | SEO Berlino",
        description: "Your site must be mobile friendly. Google now uses the mobile version for indexation so called mobile first.",
        canonical: localhost + "/de/seo-optimierung/mobile",
        alt: localhost + "/en/seo-services/mobile"
    });
});

app.get("/en/seo-services/javascript", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogjava", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Dynamic Rendering and how it affects SEO | SEO Berlino",
        description: "For JavaScript apps such as React, Angular or View, search engines such as Google still struggle to properly crawl and index all pages.",
        canonical: localhost + "/en/seo-services/javascript",
        alt: localhost + "/de/seo-optimierung/javascript"
    });
});

app.get("/de/seo-optimierung/javascript", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogjava", {
        requrl: localhost + "/en/seo-services/javascript",
        layout: "mainDE",
        title: "Dynamic Rendreing • Wie Javascript SEO beeinflusst | SEO Berlino",
        description: "Bei JavaScript-Apps wie React, Angular oder View haben Suchmaschinen wie Google immer noch Schwierigkeiten, alle Seiten richtig zu crawlen und zu indizieren.",
        canonical: localhost + "/de/seo-optimierung/javascript",
        alt: localhost + "/en/seo-services/javascript"
    });
});


app.get("/en/seo-services/structured-data", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: localhost + "/en/seo-services/structured-data",
        layout: "main",
        title: "Structured Data for SEO | SEO Services | SEO Berlino",
        description: "Google, Bing and co agreed on a standardised format: schema.org for providing information about a page and to classify its content. Use it to improve the way your pages are displayed.",
        canonical: localhost + "/en/seo-services/structured-data",
        alt: localhost + "/de/seo-optimierung/structured-data"
    });
});

app.get("/de/seo-optimierung/structured-data", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogstrcutureddataENDE", {
        requrl: localhost + "/en/seo-services/structured-data",
        layout: "mainDE",
        title: "Strukturierte Daten für SEO | SEO Berlino",
        description: "Google, Bing und Co nutzen zur Angabe von Informationen und zur Klassifizierung des Seiteninhalts schema.org. Verbessern Sie die Darstellung Ihrer Seiten.",
        canonical: localhost + "/de/seo-optimierung/structured-data",
        alt: localhost + "/en/seo-services/structured-data"
    });
});

app.get("/en/seo-services/internal-linking", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/bloginternallinking", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Internal Linking and why it is important | SEO Berlino",
        description: "Internal Linking is core for on-page SEO, especially for big websites. Link juice redistribution, prioritization of key pages or site sections to name a few reasons.",
        canonical: localhost + "/en/seo-services/internal-linking",
        alt: localhost + "/de/seo-optimierung/interne-verlinkung"
    });
});

app.get("/de/seo-optimierung/interne-verlinkung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/bloginternallinking", {
        requrl: localhost + "/en/seo-services/internal-linking",
        layout: "mainDE",
        title: "Bedeutung von Interner Verlinkung | SEO Berlino",
        description: "Interne Verlinkung ist zentral für OnPage SEO, speziell für große Websites. Z.B. Link Juice Redistribution, Priorisierung von Schlüsselseiten oder Site-Abschnitten.",
        canonical: localhost + "/de/seo-optimierung/interne-verlinkung",
        alt: localhost + "/en/seo-services/internal-linking"
    });
});

app.get("/en/seo-services/voice-search", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: localhost + "/en/seo-services/voice-search",
        layout: "main",
        title: "What is Voice Search for SEO | SEO Berlino",
        description: "Voice search has disrupted Search Engine Optimization with longer search terms different than typed in queries. Learn more about how you should adapt to those searches.",
        canonical: localhost + "/en/seo-services/voice-search",
        alt: localhost + "/de/seo-optimierung/sprachsuche"
    });
});

app.get("/de/seo-optimierung/sprachsuche", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogonpage/blogvoiceDEEN", {
        requrl: localhost + "/en/seo-services/voice-search",
        layout: "mainDE",
        title: "Was ist Sprachsuche? | SEO Berlino",
        description: "Sprachsuche hat Suchmaschinenoptimierung mit längeren Suchbegriffen, die sich von den eingetippten Anfragen unterscheiden, durcheinander gebracht.",
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
        description: "SEO Case studies of various Berlin startups and other successful local companies: HelloFresh, N26, Zalando and more. Which Keywords bring most of their traffic and more.",
        canonical: localhost + "/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/seo-case-studies", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogcase/blogcasestudies", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Case Studies | SEO Services | SEO Berlino",
        description: "SEO Case studies of various Berlin startups and other successful local companies: HelloFresh, N26, Zalando and more. Which Keywords bring most of their traffic and more.",
        canonical: localhost + "/en/seo-services/seo-case-studies"
    });
});

app.get("/en/seo-services/technical-seo", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogtechnical", {
        requrl: localhost + "/en/seo-services/technical-seo",
        layout: "main",
        title: "What is Technical SEO? | SEO Berlino",
        description: "Technical SEO Services: Indexation, crawling, performance & code, canonicals etc. Get in touch with us to organise a call and discuss your needs.",
        canonical: localhost + "/en/seo-services/technical-seo",
        alt: localhost + "/de/seo-optimierung/technical-seo"
    });
});

app.get("/de/seo-optimierung/technical-seo", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/blogtechnical", {
        requrl: localhost + "/en/seo-services/technical-seo",
        layout: "mainDE",
        title: "Was ist Technical SEO (Technisches SEO) ? | SEO Berlino",
        description: "Technische SEO Dienstleistungen: Indexierung, Crawling, Performance & Code, Canonicals etc. Vereinbaren Sie einen individuellen Beratungstermin mit uns!",
        canonical: localhost + "/de/seo-optimierung/technical-seo",
        alt: localhost + "/en/seo-services/technical-seo"
    });
});

app.get("/de/seo-optimierung", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blog", {
        requrl: localhost + "/en/seo-services",
        layout: "mainDE",
        title: "Was ist SEO 'Optimierung' - Optimierung für Suchmaschinen | SEO Berlino",
        description: "SEO-Blog und SEO-Ressourcen von SEO Berlino: über SEO-Nachrichten und SEO-Lexikon, damit Sie ein paar SEO-Grundlagen wie canonicals und hreflang verstehen.",
        canonical: localhost + "/de/seo-optimierung",
        alt: localhost + "/en/seo-services"
    });
});

app.get("/de/contact", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("contact", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainDE",
        title: "SEO Berlino Kontakt | SEO Berater in Berlin",
        description: "Vereinbaren Sie einen Anruf um Ihre Anforderungen zu besprechen. Über 11 Jahre Erfahrung. Aktuelle und ehemalige Kunden: Montblanc, Spreadshirt und HelloFresh.",
        canonical: localhost + "/de/contact",
        alt: localhost + "/en/contact"
    });
});

app.get("/en/contact", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("contact", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Consultant in Berlin | Get in Touch | SEO Berlino",
        description: "Get in touch with SEO Berlino to arrange a call and discuss your needs. Over 11 years experience. Current and former clients: Montblanc, Spreadshirt and HelloFresh.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/contact"
    });
});

app.get("/de/seo-experte", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("expert", {
        requrl: localhost + "/en/seo-expert",
        layout: "mainDE",
        title: "SEO Berater und Experte Berlin | SEO Berlino",
        description: "SEO-Experte in Berlin, über 10 Jahre Erfahrung in SEO und Analytics. Erfahrung mit multinationalen, sowie kleineren lokalen Unternehmen. Kontaktieren Sie uns!",
        canonical: localhost + "/de/seo-experte",
        alt: localhost + "/en/seo-expert"
    });
});

app.get("/en/seo-expert", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("expert", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "SEO Consultant • SEO Expert in Berlin | SEO Berlino ",
        description: "SEO expert in Berlin, over 10 years experience in SEO and Analytics. Experience with multinationals as well as smaller local businesses. Get in touch to arrange a call.",
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
        layout: "mainDE",
        title: "Online Marketing Beratung | SEO Berlino",
        description: "SEA-Experte für Suchmaschinen-Werbeprojekte: Google Ads, Facebook Ads, Instagram. Setup, Testing, Analytics und Optimierung. Kunden: Montblanc, BSH, etc",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/sea"
    });
});

app.get("/en/sea", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/beratungsea", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "Online Marketing Consultant Berlin | SEO Berlino",
        description: "SEA Expert for Search Engine Advertising Projects: Google Ads, Facebook Ads, Instagram. Set-up, Testing, Analytics and Optimization. Clients: Montblanc, BSH, etc",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/sea"
    });
});

app.get("/en/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("otherberatung/beratungscrum", {
        requrl: localhost + "/en/agile-coach-berlin",
        layout: "mainNoAlt",
        title: "Agile Coach in Berlin | SEO Berlino",
        description: "Experienced Agile Coach for Agile implementation. Agile experience at HelloFresh and Spreadshirt. Scrum Certified Scrum Master as both Scrum Master and Product owner.",
        canonical: localhost + "/en/agile-coach-berlin",
        alt: localhost + "/de/agile-coach-berlin"
    });
});

app.get("/de/agile-coach-berlin", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("otherberatung/beratungscrum", {
        requrl: localhost + "/en/agile-coach-berlin",
        layout: "mainNoAltDE",
        title: "Agile Coach / Scrum Master in Berlin | SEO Berlino",
        description: "Experienced Agile Coach for Agile implementation. Agile experience at HelloFresh and Spreadshirt. Scrum Certified Scrum Master as both Scrum Master and Product owner.",
        canonical: localhost + "/en/agile-coach-berlin",
        alt: localhost + "/en/agile-coach-berlin"
    });
});


app.get("/en/seo-services/canonical", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/canonical", {
        requrl: localhost + "/en/seo-services/canonical",
        layout: "main",
        title: "What is Canonical Tag and how to use it | SEO Berlino",
        description: "If you have to publish different versions of very similar pages (for instance products in different colours) canonicals can solve the duplication indexation issues.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/canonical"
    });
});

app.get("/de/seo-optimierung/canonical", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/canonical", {
        requrl: localhost + "/en/seo-services/canonical",
        layout: "mainDE",
        title: "Was ist ein Canonical Tag und warum ist es wichtig? | SEO Berlino",
        description: "Wenn Sie verschiedene Versionen ähnlicher Seiten veröffentlichen (z.B. Produkte in mehreren Farben), können Canonicals Probleme der doppelten Indexierung lösen.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/canonical"
    });
});

app.get("/en/seo-services/hreflang", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/hreflang", {
        requrl: localhost + "/en/seo-services/hreflang",
        layout: "main",
        title: "What is Hreflang and how to use it | SEO Berlino",
        description: "If you have a multi-language site, especially if you have the pages in the same language but for different countries (US vs UK), you need to use hreflang.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/hreflang"
    });
});

app.get("/de/seo-optimierung/hreflang", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/hreflang", {
        requrl: localhost + "/en/seo-services/hreflang",
        layout: "mainDE",
        title: "Was ist Hreflang und warum ist es wichtig? | SEO Berlino",
        description: "Bei einer mehrsprachigen Website, insbesondere bei Seiten in der gleichen Sprache für verschiedene Länder (USA vs. UK) haben, müssen Sie hreflang verwenden.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/hreflang"
    });
});





app.get("/en/seo-services/404", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/404", {
        requrl: localhost + "/en/seo-services/404",
        layout: "main",
        title: "What does 404 - Page Not Found mean| SEO Berlino",
        description: "A 404 Error - Page not found shows when the page requested does not exist.It is a client-side error : the server receives a request, but cannot carry it out.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/404"
    });
});

app.get("/de/seo-optimierung/404", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/404", {
        requrl: localhost + "/en/seo-services/404",
        layout: "mainDE",
        title: "Was bedeutet 'Fehler 404 - Not Found'? | SEO Berlino",
        description: "A 404 Fehler - Seite nicht gefunden zeigt, wenn die gewünschte Seite nicht exist. Es ist ein clientseitige Fehler: der Server eine Anfrage erhält, kann es aber nicht durchführen.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/404"
    });
});


app.get("/en/seo-services/seobudget", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/seobudget", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
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
        layout: "mainDE",
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
        layout: "main",
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
        layout: "mainDE",
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
        layout: "main",
        title: "Disavow Tool | SEO Berlino",
        description: "Use the Disavow Tool when you want to tell Google that you do not want a link / links to be taken into account. A complete guide on the Disavow Tool.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/disavowtool"
    });
});

app.get("/de/seo-optimierung/disavowtool", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/disavow", {
        requrl: localhost + "/en/seo-services/disavowtool",
        layout: "mainDE",
        title: "Was ist das Disavow Tool? | SEO Berlino",
        description: "Verwenden Sie das Disavow-Tool, um Google mitzuteilen, dass ein Link / Links nicht berücksichtigt werden soll. Eine vollständige Anleitung zum Disavow-Tool.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/disavowtool"
    });
});

app.get("/en/seo-services/serp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/serp", {
        requrl: localhost + "/en/seo-services/serp",
        layout: "main",
        title: "What does SERP stand for| SEO Berlino",
        description: "SERP is the abbreviation for Search Engine Result Pages. The search results of a search query (by searching for a keyword) are listed in the SERPs of search engines.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/serp"
    });
});

app.get("/de/seo-optimierung/serp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/serp", {
        requrl: localhost + "/en/seo-services/serp",
        layout: "mainDE",
        title: "What does SERP stand for| SEO Berlino",
        description: "In den SERPs (Search Engine Result Pages) von Suchmaschinen werden die Suchergebnisse einer Suchanfrage (bei der Suche nach einem Keyword) aufgelistet.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/serp"
    });
});

app.get("/en/seo-services/googleupdate", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/googleupdate", {
        requrl: localhost + "/en/seo-services/googleupdate",
        layout: "main",
        title: "SEO Google Updates, what it means to you | SEO Berlino",
        description: "Learn about the latest Google Updates. Google has been warning webmasters about the new update which will focus on better experience especially page speed.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/googleupdate"
    });
});

app.get("/de/seo-optimierung/googleupdate", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/googleupdate", {
        requrl: localhost + "/en/seo-services/googleupdate",
        layout: "mainDE",
        title: "Google SEO Updates | SEO Berlino",
        description: "Infos zu den neuesten Google Updates. Google warnte Webmaster vor neuem Update, in Bezug auf eine bessere Erfahrung, insbesondere die Seitengeschwindigkeit.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/googleupdate"
    });
});





app.get("/en/seo-services/longtail", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/longtail", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are Long Tail Keywords | SEO Berlino",
        description: "Long tail when talking about Keywords regroups all the keywords which bring a big amount of the traffic but each have very little Search Volume.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/longtail"
    });
});

app.get("/de/seo-optimierung/longtail", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/longtail", {
        requrl: localhost + "/en/seo-services/longtail",
        layout: "mainDE",
        title: "Was sind Long Tail Keywords? | SEO Berlino",
        description: "Long Tail, wenn es um Keywords geht, gruppiert alle Keywords, die einen großen Teil des Traffics bringen, aber jeweils sehr wenig Suchvolumen haben.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/longtail"
    });
});

app.get("/en/seo-services/searchvolume", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/searchvolume", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Keyword Search Volume and why it is important | SEO Berlino",
        description: "Search Volume is a metric to understand demand for a given Keyword. A high search volume is not always the most important; other metrics need to be taken into account.",
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
        description: "Once you are ready for mobile first, the next step is to prepare your website for Voice Search. Everything you need to know about challenges with Voice Search Optimization.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/de/seo-optimierung/searchvolume", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/searchvolume", {
        requrl: localhost + "/en/seo-services/searchvolume",
        layout: "mainDE",
        title: "Was sind Keyword Suchvolumen  | SEO Berlino",
        description: "Das Suchvolumen ist eine Metrik, die die Nachfrage nach einem bestimmten Keyword anzeigt. Zusätzlich müssen aber auch andere Metriken berücksichtigt werden.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/searchvolume"
    });
});



app.get("/en/seo-services/removeurl", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/removeurl", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is the Remove URL Tool and how does it work | SEO Berlino",
        description: "On top of using noindex, you can ask Google to temporarily deindex pages. This feature helps to quickly remove a page or multiple pages from the index.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/removeurl"
    });
});

app.get("/de/seo-optimierung/removeurl", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/removeurl", {
        requrl: localhost + "/en/seo-services/removeurl",
        layout: "mainDE",
        title: "Was ist der Remove URL Tool  | SEO Berlino",
        description: "Sie können Google bitten, Seiten vorübergehend zu deindexieren. Diese Funktion hilft dabei, eine oder mehrere Seiten schnell aus dem Index zu entfernen.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/removeurl"
    });
});

app.get("/en/seo-services/rankbrain", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/rankbrain", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Rank Brain and how does it work | SEO Berlino",
        description: "Rankbrain is a Google algorithm used to understand search queries and sort search results using machine learning. ",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/rankbrain"
    });
});

app.get("/de/seo-optimierung/rankbrain", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/rankbrain", {
        requrl: localhost + "/en/seo-services/rankbrain",
        layout: "mainDE",
        title: "Was ist Rank Brain und wie funktioniert | SEO Berlino",
        description: "Rankbrain ist ein Google-Algorithmus, der dazu dient, Suchanfragen zu verstehen und Suchergebnisse mithilfe von maschinellem Lernen zu sortieren.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/rankbrain"
    });
});

app.get("/en/seo-services/redirects", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/redirect", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What are 301 and 302 Redirects and what is the difference | SEO Berlino",
        description: "Correctly redirecting pages is important in SEO. The two main redirect status codes are 301 and 302: respectively permanent and temporary redirects.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/redirects"
    });
});

app.get("/de/seo-optimierung/redirects", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/redirect", {
        requrl: localhost + "/en/seo-services/redirects",
        layout: "mainDE",
        title: "Was sind 301 und 302 Redirects (Weiterleitungen) | SEO Berlino",
        description: "Die korrekte Weiterleitung von Seiten ist wichtig für SEO. Die beiden wichtigsten Umleitungsstatuscodes sind 301 und 302: permanente bzw. temporäre Umleitungen.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/redirects"
    });
});

app.get("/en/seo-services/noindex", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/noindex", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is noindex and how does it work | SEO Berlino",
        description: "If you identify pages that are not to be indexed, you should use `noindex`. This tells Search engine to exclude them from their index.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/noindex"
    });
});

app.get("/de/seo-optimierung/noindex", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/noindex", {
        requrl: localhost + "/en/seo-services/noindex",
        layout: "mainDE",
        title: "Was ist noindex und wie funktioniert | SEO Berlino",
        description: "Wenn Sie Seiten identifizieren, die nicht indiziert werden sollen, sollten Sie `noindex` verwenden. Dies weist die Suchmaschine an, sie aus ihrem Index zu nehmen.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/noindex"
    });
});

app.get("/en/seo-services/nofollow", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/nofollow", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is a nofollow link and how does it work | SEO Berlino",
        description: "Nofollow is a value that can be assigned to a link to instruct search engines that it should not affect the ranking of the link target of the search engine’s index.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/nofollow"
    });
});

app.get("/de/seo-optimierung/nofollow", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/nofollow", {
        requrl: localhost + "/en/seo-services/nofollow",
        layout: "mainDE",
        title: "Was ist ein nofollow link und wie funktioniert es? | SEO Berlino",
        description: "Nofollow ist ein dem Link zuweisbarer Wert, der Suchmaschinen anweist, dass er das Ranking des Linkziels im Index der Suchmaschine nicht beeinflussen soll.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/nofollow"
    });
});

app.get("/en/seo-services/robots", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/robots", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is Robots.txt and how does it work | SEO Berlino",
        description: "The Robots file (robots.txt) controls what crawlers can access or not.You can for instance disallow access login pages which you do not want Search engines to crawl,",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/robots"
    });
});

app.get("/de/seo-optimierung/robots", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/robots", {
        requrl: localhost + "/en/seo-services/robots",
        layout: "mainDE",
        title: "Was ist Robots.txt und wie funktioniert | SEO Berlino",
        description: "Die Robots-Datei (robots.txt) steuert den Zugriff von Crawlern, wie z.B. den Zugriff auf Login-Seiten, die von Suchmaschinen nicht gecrawlt werden sollen.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/robots"
    });
});

app.get("/en/seo-services/sitemaps", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/sitemaps", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is an xml Sitemap and how does it work | SEO Berlino",
        description: "Sitemaps are used to help Google understand which pages should be crawled. Learn about Sitemaps and how they can improve your site's crawlability.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/sitemaps"
    });
});

app.get("/de/seo-optimierung/sitemaps", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/sitemaps", {
        requrl: localhost + "/en/seo-services/sitemaps",
        layout: "mainDE",
        title: "Was ist ein xml Sitemap und wie funktioniert | SEO Berlino",
        description: "Durch Sitemaps versteht Google, welche Seiten gecrawlt werden sollen. Erfahren Sie mehr über Sitemaps und wie sie die Crawlability Ihrer Website verbessern.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/sitemaps"
    });
});



app.get("/en/seo-services/amp", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/amp", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "main",
        title: "What is AMP (Accelerated Mobile Pages) and how do they work | SEO Berlino",
        description: "AMP stands for 'Accelerated Mobile Pages'. Developed by Google it intends to reduce load time and improve user experience. Learn more about AMP and how to implement them.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/de/seo-optimierung/amp"
    });
});

app.get("/de/seo-optimierung/amp", (req, res) => {
    i18n.setLocale(req, "de");
    res.render("blogtech/amp", {
        requrl: localhost + "/en/seo-services/amp",
        layout: "mainDE",
        title: "Was sind AMP (Accelerated Mobile Pages)? | SEO Berlino",
        description: "Von Google entwickelte AMP (Accelerated Mobile Pages) sollen durch verkürzte Ladezeit das Nutzererlebnis verbessern. Über AMP und wie man sie implementiert.",
        canonical: localhost + "" + req.originalUrl,
        alt: localhost + "/en/seo-services/amp"
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
        description: "Article about SEO and Search Engines in Asia. How to approach SEO for the Asian market. SEO Berlino is an SEO Consultant located in Berlin.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/beyond-mobile-first", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogmobile-first", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "SEO Beyond Mobile First | SEO Blog | SEO Berlino",
        description: "More people now surf the net on mobile than on Desktop and Google now uses mobile indexation as the norm ahead of Desktop. Learn more about Mobile first and how it impacts SEO.",
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
            description: "SEO Blog article about Structured Data and why you need to implement them to improve your SEO. Everything you need to know about Structured Data.",
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
        description: "Read this article about SEO and Link building and how to get your first backlinks in a simple way: clients, sponsoring, specialised websites, etc.",
        canonical: localhost + "" + req.originalUrl
    });
});

app.get("/en/seo-services/site-migration-seo-checklist", (req, res) => {
    i18n.setLocale(req, "en");
    res.render("blogtech/blogsitemigration", {
        requrl: localhost + "/en" + req.originalUrl.substring(3),
        layout: "mainNoAlt",
        title: "The SEO Website Migration Checklist for 2023 | SEO Berlino",
        description: "Site migration can be very risky for your SEO traffic if you do not follow a checklist: from redirects to creation of new sitemaps, reporting and controlling.",
        canonical: localhost + "" + req.originalUrl
    });
});

var nodemailer = require("nodemailer");




// /**
//  * This snippet has been automatically generated and should be regarded as a code template only.
//  * It will require modifications to work.
//  * It may require correct/in-range values for request initialization.
//  * TODO(developer): Uncomment these variables before running the sample.
//  */
// /**
//  *  Required. The name of the project that contains the keys that will be
//  *  listed, in the format "projects/{project}".
//  */
// const parent = 'abc123'
// /**
//  *  Optional. The maximum number of keys to return. Default is 10. Max limit is
//  *  1000.
//  */
// const pageSize = 1234
// /**
//  *  Optional. The next_page_token value returned from a previous.
//  *  ListKeysRequest, if any.
//  */
// const pageToken = 'abc123'

// // Imports the Recaptchaenterprise library
// import { RecaptchaEnterpriseServiceClient }  from '@google-cloud/recaptcha-enterprise';
//     // eslint-disable-next-line node/no-missing-require


// // Instantiates a client
// const recaptchaenterpriseClient = new RecaptchaEnterpriseServiceClient();

// async function callListKeys() {
//     // Construct request
//     const request = {
//         parent,
//     };

//     // Run request
//     const iterable = await recaptchaenterpriseClient.listKeysAsync(request);
//     for await (const response of iterable) {
//         console.log(response);
//     }
// }

// callListKeys();



app.post("/en/email", function (req, res) {
    if (req.body.address
        .length != 0 | req.body.name === "Richarnet") {
        res.writeHead(301, {
            Location: localhost + "/error"
        });
        res.end()

    } else {


            const htmlEmail = `
                    <h3> Contact Details </h3>
                    <ul>
                        <li>Name: ${req.body.name}</li>
                        <li>Email: ${req.body.email}</li>
                        <li>Website: ${req.body.website}</li>
                        <li>Beratung: ${req.body.beratung}</li>
                        <li>Consultancy: ${req.body.budget}</li>
                            <li>spam:${req.body.address}</li>
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
        
    }
});


app.post("/de/email", function(req, res) {
    if (req.body.address
        .length != 0 | req.body.name === "Richarnet") {
        res.writeHead(301, {
            Location: localhost + "/error"
        });
        res.end()

    } else {


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
        
    }
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


//////////////// Redirects////////////////
app.get("/de/seo-freelancer", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-audit", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-check", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-page-speed", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/local-seo", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo-onpage", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo-indexation", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-wordpress", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/backlinks", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/keyword-research", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-relaunch", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/de/reporting-analytics", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/smm", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/competitor-analysis", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-copywriting", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});




app.get("/en/seo-freelancer", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-audit", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/keyword-research", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/backlinks", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/local-seo", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-wordpress", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/seo-indexation", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/seo-page-speed", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/seo-onpage", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/seo-check", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-relaunch", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-copywriting", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/smm", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/competitor-analysis", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/reporting-analytics", function (request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});




app.get("/en/seo-services/metas", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-freelancer", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/de/seo-pricing", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-pricing", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/en/article/beyond-mobile-first", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-services/beyond-mobile-first",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/content", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/content", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/metas", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/indexation", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/indexation", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/onpage-seo", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/seoaudit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/seoaudit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/on-page*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
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
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/en/audit", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
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
        Location: localhost + "/en",
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
        Location: localhost + "/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/onpage/keyword-recherche", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage/keyword-research", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/de/onpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
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
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/offpage*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
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
        Location: localhost + "/en/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/competitor-analysis", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/localSEO", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/localSEO", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-services/backlink*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo-optimierung/backlink*", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beatung",
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
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-optimierung/pagespeed", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-relaunch", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-relaunch", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/crawl", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/international", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/en/seo-consultant", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-consultancy",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-consultant", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de",
        Expires: new Date().toGMTString()
    });
    response.end();
});


app.get("/de/seo-optimierung/crawl", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/international", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/mitwettbewerber", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/online-marketing",
        Expires: new Date().toGMTString()
    });
    response.end();
});



app.get("/de/seo-page-speed", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/en/seo-services/images", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/en/seo-beratung",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/de/seo-optimierung/images", function(request, response) {
    response.writeHead(301, {
        Location: localhost + "/de/seo-beratung",
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