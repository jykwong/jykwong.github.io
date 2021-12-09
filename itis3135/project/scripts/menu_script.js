$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/menu.json",
        beforeSend: function() {
            $("#appetizer,#noodles,#sushi,#drinks").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            console.log(data.noodle.name[1]);
            $("#appetizer,#noodles,#sushi,#drinks").html("");
            $.getJSON("json_files/menu.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.appetizer.name + " :: " + value.appetizer.price +"<br>"
                        );//end each appetizer
                    });//end each data function
                    $.each(this, function(key, value) {
                        $("#noodles").append(
                            value.noodles.name + " :: " + value.noodles.price + "<br>"
                        )
                    });
                    $.each(this, function(key, value) {
                        $("#hibachi").append(
                            value.hibachi.name + " :: " + value.hibachi.price + "<br>"
                        )
                    })
                });//end getJSON
            });
        }//end success function
    }); //end ajax method
});