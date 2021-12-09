$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/index_img.json",
        beforeSend: function() {
            $("#about").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#about, #gallery, #order, #menu").html("");
            $.getJSON("json_files/index_img.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $(".image_grid").append(
                            "<div class='image_container'>" +
                            "<a href=" + value.link + ">" +
                                "<img src=" + value.image + " alt='" + value.alt + "'>" + "</a>" +
                            "</div>"
                        );//end each appetizer
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