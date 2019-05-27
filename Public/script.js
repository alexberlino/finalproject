var scrollTimeOut = true,
    lastYPos = 0,
    yPos = 0,
    yPosDelta = 5,
    nav = $('header'),
    navHeight = nav.outerHeight(),
    setNavClass = function() {
        scrollTimeOut = false;
        yPos = $(window).scrollTop();

        if (Math.abs(lastYPos - yPos) >= yPosDelta) {
            if (yPos > lastYPos && yPos > navHeight) {
                nav.addClass('hide-nav');
            } else {
                nav.removeClass('hide-nav');
            }
            lastYPos = yPos;
        }
    };

$(window).scroll(function(e) {
    scrollTimeOut = true;
});

setInterval(function() {
    if (scrollTimeOut) {
        setNavClass();
    }

}, 250);