// This function will execute when the document is ready
$(document).ready(function(){

    // Define breakpoint values for responsive design
    var $sm = 480; // Small screen
    var $md = 768; // Medium screen

    // Function to handle resizing of elements
    function resizeThis() {
        // Get the width of the image inside the .middle container
        $imgH = $('.middle img').width();
        // Check if the window width is greater than or equal to the small screen breakpoint
        if ($(window).width() >= $sm) {
            // Set the height of elements with class .left, .right, and .section to match the image width
            $('.left,.right,.section').css('height', $imgH);
        } else {
            // If the window width is less than the small screen breakpoint, set height to auto
            $('.left,.right,.section').css('height', 'auto');
        }
    }

    // Call resizeThis function
    resizeThis();

    // Event listener for window resizing
    $(window).resize(function(){
        resizeThis(); // Call resizeThis function on window resize
    });

    // Event listener for window scrolling
    $(window).scroll(function() {
        $('.section').each(function(){
            var $elementPos = $(this).offset().top; // Get the top position of the current section
            var $scrollPos = $(window).scrollTop(); // Get the current scroll position of the window

            var $sectionH = $(this).height(); // Get the height of the current section
            var $h = $(window).height(); // Get the height of the window
            var $sectionVert = (($h/2)-($sectionH/4)); // Calculate the vertical position of the section relative to the window height

            // Check if the section is in the viewport
            if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
                $(this).addClass('animate'); // Add 'animate' class to the section if it's in the viewport
            } else {
                $(this).removeClass('animate'); // Remove 'animate' class if the section is not in the viewport
            }
        });
    });

    // Event listener for button click
    $('.btn-primary').click(function(){
        alert('I lied'); // Show an alert when the button is clicked
    });
   
    // Smooth scrolling to anchor links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash); // Get the target element based on the href attribute
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                // Animate scrolling to the target element's top position
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false; // Prevent default anchor link behavior
            }
        }
    });
});
