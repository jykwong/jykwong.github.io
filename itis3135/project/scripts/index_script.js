$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/index_img.json",
        beforeSend: function() {
            $("#about, #menu, #gallery, #order").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#about, #menu, #gallery, #order").html("");
            $.getJSON("json_files/index_img.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $(#about).append(
                            "<a href=\"about.html\"><img src=" + value.image[0] +" alt=\"about\" ></a>"
                        );
                        $(#menu).append(
                            "<a href=\"menu.html\"><img src=" + value.image[1] +" alt=\"menu\" ></a>"
                        );
                        $(#gallery).append(
                            "<a href=\"gallery.html\"><img src=" + value.image[2] +" alt=\"gallery\" ></a>"
                        );
                        $(#order).append(
                            "<a href=\"order.html\"><img src=" + value.image[3] +" alt=\"order\" ></a>"
                        );
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
        }//end success function
    }); //end ajax method for appetizer
})

/*
$.getJSON("json_files/index_img.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#about").append(
                            "
                        );//end each appetizer
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
*/