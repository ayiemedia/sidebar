$(document).ready(function(){
    $('.sidebar a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        // Check if the clicked menu is "Calendar"
        if ($(this).text().trim() === 'Calendar') {
            displayCalendarImages();
        } else {
            $('.content').empty(); // Clear the content area if the clicked menu is not "Calendar"
        }
    });
});
