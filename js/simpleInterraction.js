function toogleTodoList() {
    var element = $(".spoiler");
    if(element.hasClass("hidden")){
        element.removeClass("hidden")
    }else{
     element.addClass("hidden");    
    }
}

function changeLanguage(bool){
    if(bool){
        $("#englishSection").removeClass("hidden");
        $("#frenchSection").addClass("hidden");
    }else{
        $("#englishSection").addClass("hidden");
        $("#frenchSection").removeClass("hidden");
    }
}