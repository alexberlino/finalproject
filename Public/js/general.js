// Navbar Toggle
AOS.init({
    offset: 20,
    duration: 200,
    easing: 'ease',
    delay: 100,
    disable: 'mobile'
})

const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

if (navbarBurgers.length > 0) {

    navbarBurgers.forEach(e => {
        el.addEventListener('click', () => {

            const target = dataset.target;
            const $target = document.getElementById(target);

            e.classList.toggle('is-active');
            $target.classList.toggle('is-active');
            document.body.classList.toggle("frozen");
        });
    });
}

// Mobile Menu Dropdown Activation
const panels = document.querySelectorAll('.dropdown-arrow');

function toggleOpen() {
    this.classList.toggle('activate');
    this.nextElementSibling.nextElementSibling.classList.toggle('activate');
    this.parentElement.classList.toggle('activate');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));


var minimized_elements = $('.minimize');
var maxLines = 1;

minimized_elements.each(function() {
    // var textArr = $(this).text().split(/\n/); // Not supported in IE < 9
    var textArr = $(this).html().replace(/\n?<br>/gi, "<br>").split(/<br>/);
    var countLines = textArr.length;

    if (countLines > maxLines) {
        text_less = textArr.slice(0, maxLines).join("<br>");
        text_more = textArr.slice(maxLines, countLines).join("<br>");
    } else return;

    $(this).html(
        text_less + '<div></div><a href="#" class="more">more</a>' +
        '<div style="display:none;"><br>' + text_more + ' <a href="#" class="less">hide</a></div>'
    );
});

$('a.more', minimized_elements).click(function(event) {
    event.preventDefault();
    $(this).hide().prev().hide();
    $(this).next().show();
});

$('a.less', minimized_elements).click(function(event) {
    event.preventDefault();
    $(this).parent().hide().prev().show().prev().show();
});