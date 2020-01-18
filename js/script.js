$(document).ready(function()   {

    $('.js-section-features').waypoint(function(direction)  {

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else  {
            $('nav').removeClass('sticky');
        }

    }, { 

        offset: '60px;'


    });

    
    

        $('#slide1').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide1').addClass('animated fadeInLeft');
        } 
    }, { 
        offset: '50%'
    });
    
    
    
        $('#slide2').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide2').addClass('animated fadeInRight');
        } 
    }, { 
        offset: '70%'
    });

     $('#slide3').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide3').addClass('animated fadeInLeft');
        } 
    }, { 
        offset: '40%'
    });
    
    $('#slide99').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide99').addClass('animated fadeInRight');
        } 
    }, { 
        offset: '70%'
    });

    
            $('#slide100').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide100').addClass('animated fadeInLeft');
        } 
    }, { 
        offset: '50%'
    });
    
    
    
        $('#slide101').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide101').addClass('animated fadeInRight');
        } 
    }, { 
        offset: '70%'
    });

     $('#slide102').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide102').addClass('animated fadeInLeft');
        } 
    }, { 
        offset: '80%'
    });
    
    $('#slide103').waypoint(function(direction)  {
        if (direction == "down") {
            $('#slide103').addClass('animated fadeInRight');
        } 
    }, { 
        offset: '70%'
    });
 
    
 
    
    
    
        
   



    /* $('h1').click(function()    {
        console.log('hola');
        $(this).css('background-color', '#ff0000')

    }) */
    });