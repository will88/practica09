$(document).ready(function(){
    $(".cell").click(function(event) {
        var pathname = window.location.pathname;
        var ruta = pathname + event.target.id;

    });
});