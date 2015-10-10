



$(document).ready(function(){
    //pass the id of a view as a string, in format "#yourview"
    alert("fired ready")
    if(window.localStorage.phoneNumber === undefined)
        switchView("#initialize").delay(1500);
    else switchView("#destination").delay(1500);
});



function switchView(viewID){
    alert("fired switch")
    $(".view active").fadeOut(300, function(){
        $(viewID).fadeIn(300)
    });
}
