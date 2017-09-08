// Monkey Patch jQuery prototype
$.fn.isInViewport = function() {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return (elementBottom > viewportTop && elementTop < viewportBottom);
};


// Animate Percents
const animatePercent = function(id, num) {
    let i = 0;
    let interval = (num > 200) ? 10 : 20;

    let counter = setInterval(() => {
        document.getElementById(`${id}`).innerHTML = i;

        if (i > num) {
            document.getElementById(`${id}`).innerHTML = num;
            clearInterval(counter);
        }

        i += 3;
    }, interval);

};

let flag = true;

// Doc ready
document.addEventListener("DOMContentLoaded", () => {
    // Fade Checkers on load
    $('#checkers').animate({ 'opacity': '1' }, 1500);

    // Modal Envelope
    $('#mail').on('click', () => {
        $('#overlay').show();
        $('body').css({
            "overflow": "hidden"
        });
    });

    $('#overlay').on('click', () => {
        $('#overlay').hide();
        $('body').css({
            "overflow": "auto"
        });
    });

    // On scroll
    $(window).scroll(function() {
        $('#logo').animate({ 'background-position-x': '0%' }, 500);
        // Select .fadeIn, calc 1/3 of view, fade it in.
        $('.fadeIn').each(function(i) {
            const bottom = ($(this).position().top + $(this).outerHeight() / 3);
            const windowBottom = $(window).scrollTop() + $(window).height();
            const windowTop = $(window).scrollTop();
            // If 1/3 of object is in the window, fade it in
            if (windowBottom > (bottom)) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }

            if ($('#percents').isInViewport()) {
                if (flag) {
                    animatePercent('stat-one', 240);
                    animatePercent('stat-two', 105);
                    animatePercent('stat-three', 159);
                    flag = false;
                }
            }

            // Sticky Envelope
            if (windowTop >= 275) {
                $('#mail').css({
                    "position": "fixed",
                    "top": "145px"
                });
            } else if (windowTop < 275) {
                $('#mail').css({
                    "position": "absolute",
                    "top": "70%"
                });
            }


        });
    });

});