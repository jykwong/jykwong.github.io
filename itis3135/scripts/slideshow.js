$(document).ready(function() {

    //preload images
    var pics =
    [
        ["images/kangaroo2-pixabay-com.jpg"],
        ["images/kangaroo3-pixabay-com.jpg"],
        ["images/kangaroo4-pixabay-com.jpg"],
        ["images/kangaroo5-pixabay-com.jpg"],
        ["images/kangaroo6-pixabay-com.jpg"],
        ["images/kangaroo7-pixabay-com.jpg"]
    ]
    count = pics.length;
    var $imgs = new Array();
    for(var i=0; i<count-1; i++) 
    {
        var $image = $("<img>").attr("src", pics[i]);
        $imgs.push($('<img>').attr('src', pics[i]))
    }

    //event handler next image
    $('.next').on('click', function() 
    {
        console.log('clicked: next');
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length) 
        {
            currentImg.removeClass('active').css('z-index', -5);
            nextImg.addClass('active').css('z-index', 5);
        }
        else
        {
            $('.slider img').first().addClass('active');
        }
    });

    //event handler prev image
    $('.prev').on('click', function() 
    {
        console.log('clicked: prev');
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length) 
        {
            currentImg.removeClass('active').css('z-index', -5);
            prevImg.addClass('active').css('z-index', 5);
        }
        else
        {
            $('.slider img').last().addClass('active');
        }
    });
    

    //autoplay

    $('.autoplay').on('click', function() 
    {
        setInterval(function(){
            var currentImg = $('.active');
            var nextImg = currentImg.next();

            if(nextImg.length) 
            {
                currentImg.removeClass('active').css('z-index', -5);
                nextImg.addClass('active').css('z-index', 5);
            }
            else
            {
                $('.slider img').first().addClass('active');
            }
        }, 2500);
    })
        
})