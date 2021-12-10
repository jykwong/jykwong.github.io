$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/menu_appetizers.json",
        beforeSend: function() {
            $("#appetizer").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#appetizer").html("");
            $.getJSON("json_files/menu_appetizers.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#appetizer").append(
                            "<strong>" + value.name + "</strong>" + " :: " + value.description + " :: $"+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
        }//end success function
    }); //end ajax method for appetizer

    $.ajax({
        type: "get",
        url: "json_files/menu_noodles.json",
        beforeSend: function() {
            $("#noodles").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#noodles").html("");
            $.getJSON("json_files/menu_noodles.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#noodles").append(
                            "<strong>" + value.name + "</strong>" + " :: " + value.description + " :: $"+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
        }//end success function
    }); //end ajax method for noodles

    $.ajax({
        type: "get",
        url: "json_files/menu_sushi.json",
        beforeSend: function() {
            $("#sushi").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#sushi").html("");
            $.getJSON("json_files/menu_sushi.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#sushi").append(
                            "<strong>" + value.name + "</strong>" + " :: " + value.description + " :: $"+ value.price + "<br>"
                        );//end each appetizer
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
        }//end success function
    }); //end ajax method for sushi

    $.ajax({
        type: "get",
        url: "json_files/menu_hibachi.json",
        beforeSend: function() {
            $("#hibachi").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#hibachi").html("Hibachi meal comes with two complimentary Jumbo Shrimp, zucchini, onion, mushroom and broccoli. Shrimp sauce included. <br><br> ");
            $.getJSON("json_files/menu_hibachi.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#hibachi").append(
                            "<strong>" + value.name + "</strong>" + " :: $" + value.price + "<br>"
                        );//end each appetizer
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
        }//end success function
    }); //end ajax method for hibachi

    $.ajax({
        type: "get",
        url: "json_files/menu_drinks.json",
        beforeSend: function() {
            $("#drinks").html("Loading...");},
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);},
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#drinks").html("");
            $.getJSON("json_files/menu_drinks.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#drinks").append(
                            "<strong>" + value.name + "</strong>" + " :: $" + value.price + "<br>"
                        );//end each appetizer
                    });//end each data function(key,value)
                }); //end each(data,function())
            });// end getJSON
        }//end success function
    }); //end ajax method for sushi


}); //end document ready


