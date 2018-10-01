function responsive() {
  $(".icon").click(function nav() {
    var x = $("#myTopnav")[0];
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });
}
