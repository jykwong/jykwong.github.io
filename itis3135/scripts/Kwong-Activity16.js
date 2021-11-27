$(document).ready(function(){
    var url = "https://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
    
    $.getJSON(url, function(data) {
        var html = "";
        $.each(data.items, function(i, item) {
            html += "<h2>" + item.title + "</h2>";
            html += "<a href=\"" + "<img src=" + item.media.m  + ">" + "\"" + "data-lightbox=\"flickr\"" + "data-title=\"" + item.description + "\"" + "</a>";
            //html += "<img src=" + item.media.m  + ">"; from book
            html += "<p></p>";
        })//end .each
        $("#new_building").html(html);
    })//end getJSON
});//end doc ready