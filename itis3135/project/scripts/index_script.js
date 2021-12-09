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
            console.log("test 123"); //print data' to conso1e
            $("#about, #menu, #gallery, #order").html("");
            $.getJSON("json_files/index_img.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        console.log("test 12345");
                      /*  $("#about").append(
                            "<img src='" + value.images[0].image + "'>"
                        );//end each about
                        $("#menu").append(
                            "<img src='" + value.images[1].image + "'>"
                        );//end each menu
                        $("#gallery").append(
                            "<img src='" + value.images[2].image + "'>"
                        );//end each gallery
                        $("#order").append(
                            "<img src='" + value.images[3].image + "'>"
                        );//end each order */
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