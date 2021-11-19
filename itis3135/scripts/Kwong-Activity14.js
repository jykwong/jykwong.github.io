
$(document).ready(function() {
    $("#nav_list li").click(function() {
        let title = $(this).children('a').attr("title");
        var filePath = "json_files/" + title + ".json";
        console.log(filePath);

        $.ajax({
            type: "get",
            url: filePath,
            beforeSend: function() {
                $("main").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                console.log(data); //print data' to conso1e
                $("main").html("");
                $.getJSON(filePath, function(data) {
                    $.each(data, function() {
                        $.each(this, function(key, value) {
                            $("main").append(
                                "<h1>" + value.title + "</h1>" +
                                "<h2>" + value.month + "</h2>" +
                                "<h3>" + value.speaker + "</h3>" +
                                "<img src=" + value.image + ">" +
                                "<p>" + value.text + "</p>"
                            )
                        });
                    });
                });
            }//end success function
        }); //end ajax method
    }); //end nav_1ist c1ick
}); //end ready
