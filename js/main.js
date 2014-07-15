$(document).ready(function(){
    $('#box').click(function(){
        if($(this).attr('class') == 'bodyBlack'){
            $(this).removeClass('bodyBlack');
            $(this).addClass('bodyWhite');
        }
        else{
            $(this).removeClass('bodyWhite');
            $(this).addClass('bodyBlack');
        }
    });
});