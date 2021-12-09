$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/menu_drinks.json, json_files/menu_appetizers.json, json_files/menu_hibachi.json, json_files/menu_sushi.json",
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
            $("#appetizer,#noodles,#sushi,#drinks").html("");
            $.getJSON("json_files/menu_appetizers.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.name + " :: " + value.description + " :: "+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function
                });//end getJSON
            });
            $.getJSON("json_files/menu_noodles.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.name + " :: " + value.description + " :: "+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function
                });//end getJSON
            });
            $.getJSON("json_files/menu_hibachi.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.name + " :: " + value.description + " :: "+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function
                });//end getJSON
            });
            $.getJSON("json_files/menu_drinks.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.name + " :: " + value.description + " :: "+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function
                });//end getJSON
            });
            $.getJSON("json_files/menu_sushi.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            value.name + " :: " + value.description + " :: "+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function
                });//end getJSON
            });
        }//end success function
    }); //end ajax method
}); //end document ready


//"json_files/menu_drinks.json, json_files/menu_appetizers.josn, json_files/menu_hibachi.json, json_files/menu_sushi.json",