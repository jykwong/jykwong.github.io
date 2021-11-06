$(document).ready(function() {
        console.log("document ready function started");
        $("#image_list a").each(function() {
                // preload the image for each link
                var galleryImage = new Image();
                galleryImage.src = imagesURL;
                
                var imagesURL = $(this).attr("href");
                var caption = $(this).attr("title");

                // set up the event handlers for each link
                $(this).click(function(evt) {
                        $("#caption, #image").fadeOut(3000, //fade out over 3 seconds
                                function() { //callback
                                        // get the image URL and caption for each image and animate the caption
                                        $("#image").attr("src",imagesURL);
                                        $("#caption").text(caption);
                                        $("#caption, #image").fadeIn(1000);
                                        $("#caption").animate({fontSize: "2em"}, 3000);  //resize font size to 2em after 3 seconds
                                });
                // cancel the default action of each link
                evt.preventDefault();
                }); // end click event
        }); // end image_list preload
        // move the focus to the first link
        $("li:first-child a").focus();
}); // end ready