const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
$navbarBurgers.length > 0 && $navbarBurgers.forEach(e => {
    e.addEventListener("click", () => {
        const t = e.dataset.target,
            i = document.getElementById(t);
        e.classList.toggle("is-active"), i.classList.toggle("is-active"), document.body.classList.toggle("frozen")
    })
});
var language_string = '{{{__ "consultant"}}}',
    minimized_elements = $(".minimize"),
    maxLines = 1;
minimized_elements.each(function() {
    var e = $(this).html().replace(/\n?<br>/gi, "<br>").split(/<br>/),
        t = e.length;
    t > maxLines && (text_less = e.slice(0, maxLines).join("<br>"), text_more = e.slice(maxLines, t).join("<br>"), $(this).html(text_less + '<div></div><a href="#" class="more">....+....</a><div style="display:none;"><br>' + text_more + ' <a href="#" class="less"><br>...-...</a></div>'))
}), $("a.more", minimized_elements).click(function(e) {
    e.preventDefault(), $(this).hide().prev().hide(), $(this).next().show()
}), $("a.less", minimized_elements).click(function(e) {
    e.preventDefault(), $(this).parent().hide().prev().show().prev().show()
});
const panels = document.querySelectorAll(".dropdown-arrow");

function toggleOpen() {
    this.classList.toggle("activate"), this.nextElementSibling.nextElementSibling.classList.toggle("activate"), this.parentElement.classList.toggle("activate")
}
panels.forEach(e => e.addEventListener("click", toggleOpen));