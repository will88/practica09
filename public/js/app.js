$(document).ready(function(){
    $(".cell").click(function(event) {
        var pathname = window.location.pathname;
        var ruta = pathname + event.target.id;
        $.get(ruta, function(data) {
            if (data == 'illegal'){
                alert("Illegal move!");
                } 
            else if (data.length < 3)  {
                if (data.length > 0){
                    $("#"+event.target.id).addClass("circle");
                    $("#"+data).addClass( "cross" );
                }
                else{
                    alert("La casilla está ocupada, por favor escoja otra");
                }
            }
            else{ 
                setTimeout(function(){
                url = data;
                $(location).attr('href',url);
                },200);
            }
        });
    });
});