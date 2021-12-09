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
            $("#about").html("");
            $.getJSON("json_files/index_img.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#about").append(
                            value.alt + "test"
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