<div className="intro3">
    <section className="green">
        <h2 className="txt2 txthead  ">
            {" "}
            <img alt="on-page SEO" src="/onpage.svg" className="icons" />{" "}
            onpage_audit>
        </h2>
        <div className="txt3">
            <Link
                to={"/" + this.props.lang + "/onpage"}
                onClick={() => this.props.pageChange("/onpage")}
            >
                <ul>
                    <li>{t("onpageHP1")}</li>
                    <li>{t("onpageHP2")}</li>
                    <li>{t("onpageHP3")}</li>
                    <li>{t("onpageHP4")}</li>
                    <li>{t("onpageHP5")}</li>
                    <li>{t("onpageHP6")}</li>
                    <li>{t("onpageHP7")}</li>
                    <li>{t("onpageHP8")}</li>
                    <li>{t("onpageHP9")}</li>
                    <li>{t("onpageHP10")}</li>
                </ul>
                <img
                    alt="more"
                    src="/more.svg"
                    className="iconsmore"
                    title="read more"
                />{" "}
            </Link>
        </div>{" "}
    </section>

    <section className="orange">
        {" "}
        <h2 className="txt2 txthead ">
            {" "}
            <img
                alt="off-page"
                src="/offpage.svg"
                className="icons"
            />offpage_audit>
        </h2>
        <div className="txt3">
            <Link
                to={"/" + this.props.lang + "/offpage"}
                onClick={() => this.props.pageChange("/offpage")}
            >
                {" "}
                <ul>
                    <li>{t("offpageHP1")}</li>
                    <li>{t("offpageHP2")}</li>
                    <li>{t("offpageHP3")}</li>
                    <li>{t("offpageHP4")}</li>
                    <li>{t("offpageHP5")}</li>
                </ul>
                <img
                    src="/more.svg"
                    className="iconsmore"
                    title="read more"
                    alt="more"
                />{" "}
            </Link>
        </div>
    </section>

    <section className="green">
        {" "}
        <h2 className="txt2 txthead  ">
            {" "}
            <img alt="technical" src="/technical.svg" className="icons" />{" "}
            technical_seo>
        </h2>
        <div className="txt3">
            <Link
                to={"/" + this.props.lang + "/technical"}
                onClick={() => this.props.pageChange("/technical")}
            >
                <ul>
                    <li>{t("technicalHP1")}</li>
                    <li>{t("technicalHP2")}</li>
                    <li>{t("technicalHP3")}</li>
                    <li>{t("technicalHP4")}</li>
                    <li>{t("technicalHP5")}</li>
                    <li>{t("technicalHP6")}</li>
                    <li>{t("technicalHP7")}</li>
                </ul>
                <img
                    src="/more.svg"
                    className="iconsmore"
                    title="read more"
                    alt="more"
                />{" "}
            </Link>{" "}
        </div>
    </section>

    <section className="orange ">
        <h2 className="txt2 txthead  ">
            <img alt="anayltics" src="/analytics.svg" className="icons" />{" "}
            analytics & research>
        </h2>

        <div className="txt3">
            <Link
                to={"/" + this.props.lang + "/research"}
                onClick={() => this.props.pageChange("/research")}
            >
                <ul>
                    <li>{t("analyticsHP1")}</li>
                    <li>{t("analyticsHP2")}</li>
                    <li>{t("analyticsHP3")}</li>
                    <li>{t("analyticsHP4")}</li>
                    <li>{t("analyticsHP6")}</li>
                </ul>
                <img
                    alt="more"
                    src="/more.svg"
                    className="iconsmore"
                    title="read more"
                />
            </Link>{" "}
        </div>
    </section>
</div>;
