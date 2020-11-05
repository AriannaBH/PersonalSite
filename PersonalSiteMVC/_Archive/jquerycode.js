//jQuery for resume photo to be responsive
$(function () {

    //Lightbox code
    $(".resume").on("click", function () {
        var imgSrc = $(this).attr("src");

        //Plug an <img> tag into #lightbox-content using imgSrc as the src
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="resume" />');

        //Make the lightbox visible by fading it in
        $("#lightbox-container").fadeIn(500);

        //When the user clicks anywhere in the container fade the image out
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });
    });
    
});


