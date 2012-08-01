$(document).ready(function(){ 
//Set opacity on each span to 0%
$(".img").css({'opacity':'10'});
  
$('#div1').hover(
    function() {
        $(this).find('.img').stop().fadeTo(500, 0);
    },
    function() {
        $(this).find('.img').stop().fadeTo(500, 1);
    }
)

$('#div2').hover(
    function() {
        $(this).find('.img').stop().fadeTo(500, 0);
    },
    function() {
        $(this).find('.img').stop().fadeTo(500, 1);
    }
)

$('#div3').hover(
    function() {
        $(this).find('.img').stop().fadeTo(500, 0);
    },
    function() {
        $(this).find('.img').stop().fadeTo(500, 1);
    }
)

$('#div4').hover(
    function() {
        $(this).find('.img').stop().fadeTo(500, 0);
    },
    function() {
        $(this).find('.img').stop().fadeTo(500, 1);
    }
)

$('#div5').hover(
    function() {
        $(this).find('.img').stop().fadeTo(500, 0);
    },
    function() {
        $(this).find('.img').stop().fadeTo(500, 1);
    }
)
});

