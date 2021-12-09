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
                var imgArr =[];
                $.each(data, function(index, value) {
                    imgArr.push(value);
                });
                $("#about").append(
                    "<img src='" + imgArr[0].image + "'>"
                );
                $("#menu").append(
                    "<img src='" + imgArr[1].image + "'>"
                );
                $("#gallery").append(
                    "<img src='" + imgArr[2].image + "'>"
                );
                $("#order").append(
                    "<img src='" + imgArr[3].image + "'>"
                );
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