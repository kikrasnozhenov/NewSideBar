var open = document.getElementById('open');
var close = document.getElementById('close');

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    $('#sidebarCollapse').on({
        'click': function(){
            $('#sidebarCollapse').attr('src','menu-open.ico');
        }
    });
});