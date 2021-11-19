$(document).ready(function() {
    $("#nav_list li").click(function() {
        let title = $(this).children('a').attr("title");
        var filePath = "json_files/" + title + ".json";
        console.log(filePath);

        $.getJSON(filePath, function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#team").append(
                        "Month: " + value.month + "<br>" +
                        "Title: " + value.title + "<br>" +
                        "Speaker: " + value.speaker + "<br>" +
                        "Image: " + value.image + "<br>" +
                        "Text: " + value.text + "<br><br>"
                    ); //end append
                }); //end each inner
            }); //end each outer
        }); //end getJSON
    }); //end ready
});
