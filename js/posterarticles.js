var posterTitle = $(".poster-title");
for (var i = 0; i<= posterTitle.length; i++){
    if(posterTitle[i].innerHTML.length > 50){
        var shortendTitle =posterTitle[i].innerHTML.slice(0, 50);
        posterTitle[i].innerHTML = shortendTitle.concat("...");
    }

}
