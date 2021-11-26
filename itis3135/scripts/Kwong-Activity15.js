$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json_files/facultyList.json",
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            console.log(data); //print data' to conso1e
            $("#faculty").html("");
            $.getJSON("json_files/facultyList.json", function(data) {
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#team").append(
                            "<img src=" + value.image + ">" +
                            "<h2>" + value.full_name + "</h2>" +
                            "<h3>" + value.department + "</h3>" +
                            "<p>" + value.bio + "</p>"
                        );
                    });
                });
            });
        }//end success function
    }); //end ajax method
}); //end doc ready
