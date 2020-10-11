$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

var d = new Date()
document.getElementById("date").innerHTML = d.getFullYear();



/* Popover*/
$(function () {
    $('[data-toggle="popover"]').popover( {
        trigger: 'focus'
    })
  })
