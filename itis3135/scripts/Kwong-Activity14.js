
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
                $.getJSON("team.json", function(data) {
                    $.each(data, function() {
                        $.each(this, function(key, value) {
                            $("main > h1").html(
                                value.title
                            );
                            $("main > h2").html(
                                value.month
                            )
                            $("main > h3").html(
                                value.speaker
                            )
                            $("main > img").attr("src", value.image)
                            $("main > p").html(
                                value.text
                            )
                        });
                    });
                });
            }//end success function
        }); //end ajax method
    }); //end nav_list click
}); //end ready
