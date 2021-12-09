$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/menu.json",
        beforeSend: function() {
            $("#appetizer,#noodle,#sushi,#drinks").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#appetizer,#noodle,#sushi,#drinks").html("");
            $.getJSON("json_files/menu.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.appetizer.name + " :: " + value.appetizer.price
                        );
                    });
                });
            });
        }//end success function
    }); //end ajax method
});