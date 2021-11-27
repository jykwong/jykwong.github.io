$(document).ready(function(){
    var url = "https://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";
    
    $.getJSON(url, function(data) {
        var html = "";
        var count = 1;
        $.each(data.items, function(i, item) {
           // html += "<h2>" + item.title + "</h2>";
            html += "<a href=" + item.media.m + ">" + "<img src=" + item.media.m  + "data-lightbox=flickr" + count + "\"" + "data-title=" + item.title + "></a>";
            //html += "<img src=" + item.media.m  + ">"; from book
            html += "<p></p>";
            count++;
        })//end .each
        $("#new_building").html(html);
    })//end getJSON
});//end doc ready