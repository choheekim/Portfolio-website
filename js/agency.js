/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
//javsscript to change text in home.
var text = ["SOFTWARE DEVELOPMENT", "WEB DEVELOPMENT", "ANDROID"];
var counter = 0;
var elem = document.getElementById("change-Text");
elem.innerHTML = text[counter];
counter++;
setInterval(change, 1300);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { counter = 0; }
}

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});