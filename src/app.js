import Home from '../index.html';
import Styles from './styles/main.css';

console.log("working");

skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)"
});

skel.layout({
    reset: "normalize",
    containers: true,
    grid: true,
    breakpoints: {
        medium: {
            containers: "90%"
        },
        small: {
            containers: "95%",
            grid: { gutters: 20 }
        },
        xsmall: {
            grid: { gutters: 10 }
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Fade Checkers on load
    $('#checkers').animate({ 'opacity': '1' }, 1500);
    // On scroll
    $(window).scroll(function() {
        $('#logo').animate({ 'background-position-x': '0%' }, 500);
        // Select .fadeIn, calc 1/3 of view, fade it in.
        $('.fadeIn').each(function(i) {
            const bottom = ($(this).position().top + $(this).outerHeight() / 3);
            const windowBottom = $(window).scrollTop() + $(window).height();
            // If 1/3 of object is in the window, fade it in
            if (windowBottom > (bottom)) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }
        });
    });


    // init Slick Carousel

});


console.log("hi");