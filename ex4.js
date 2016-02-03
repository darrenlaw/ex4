//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {
    console.log("ready");

    
    //preload
    //create array to hold images
    var gifimages = ["images/fish.gif", "images/charm1.gif", "images/keys1.gif", "images/ipod.gif", "images/pencil.gif"];

    //create empty array to hold images as objects
    var imgs = [];

    //traverse the array for preloadig images
    for (var i = 0; i < gifimages.length; i++) {
        //create a new image object at position of i in the array
        //this is the magic that makes the image download...putting it into an object
        imgs[i] = new Image();
        //assign the src for each new image
        imgs[i].src = gifimages[i];
    }

    $(window).ready(function () {
        $('header').animate({
            opacity: 1,
            top: 100

        }, 2000);

    });

    $(window).ready(function () {
        $('#background').delay(1000).animate({
            opacity: 1,
            top: 50
        }, 2000);

    });


    $('#fish').hover(function () {
            $('#fish').attr('src', 'images/fish.gif');
            $('#fishtxt').stop().animate({
                opacity: 1
            });
        }, //end mouse over
        function () {
            $('#fish').attr('src', 'images/fish.png');
            $('#fishtxt').stop().animate({
                opacity: 0
            });
        } //end mouse out
    ); //end hover

    $('#charm').hover(function () {
            $('#charm').attr('src', 'images/charm1.gif');
            $('#charmtxt').stop().animate({
                opacity: 1
            });
        }, //end mouse over
        function () {
            $('#charm').attr('src', 'images/charm1.png');
            $('#charmtxt').stop().animate({
                opacity: 0
            });
        } //end mouse out
    ); //end hover

    $('#rollover1').hover(function () {
            $('#keys').attr('src', 'images/keys1.gif');
            $('#keystxt').stop().animate({
                opacity: 1
            });
        }, //end mouse over
        function () {
            $('#keys').attr('src', 'images/keys1.png');
            $('#keystxt').stop().animate({
                opacity: 0
            });
        } //end mouse out
    ); //end hover

    $('#rollover2').hover(function () {
            $('#ipod').attr('src', 'images/ipod.gif');
            $('#ipodtxt').stop().animate({
                opacity: 1
            });
        }, //end mouse over
        function () {
            $('#ipod').attr('src', 'images/ipod.png');
            $('#ipodtxt').stop().animate({
                opacity: 0
            });
        } //end mouse out
    ); //end hover

    $('#rollover3').hover(function () {
            $('#pencil').attr('src', 'images/pencil.gif');
            $('#penciltxt').stop().animate({
                opacity: 1
            });
        }, //end mouse over
        function () {
            $('#pencil').attr('src', 'images/pencil.png');
            $('#penciltxt').stop().animate({
                opacity: 0
            });
        } //end mouse out
    ); //end hover
});