import React from "react";



href={"/" + this.state.lang + "/onpage"}

<p onClick={() => this.changePageState("/onpage")}>ON-PAGE</p>

href={"/" + this.state.lang + "/offpage"}
>
<p onClick={() => this.changePageState("/offpage")}>
  OFFPAGE
</p>

href={"/" + this.state.lang + "/technical"}
>
<p onClick={() => this.changePageState("/technical")}>
  {t("technical")}
</p>



href={"/" + this.state.lang + "/audit"}
>

<p onClick={() => this.changePageState("/audit")}>AUDIT</p>
