document.addEventListener("DOMContentLoaded", function(event) {

	//Anclas
    $('a[href^="#"]').click(function(event){
        var id =$(this).attr("href");
        var target = $(id).offset().top;
        $('body').animate({scrollTop:target}, 1500);
        event.preventDefault();
    });
});
