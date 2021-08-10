$(document).ready(
    function(){
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            }, {
                offset : '630px'
            }
        )
    }
)

$('.mobile-nav-icon').click(
    function(){
        $('.main-nav').slideToggle(200);

        if($('.mobile-nav-icon').hasClass('fa-bars')){
            $('.mobile-nav-icon').addClass('fa-angle-double-down');
            $('.mobile-nav-icon').removeClass('fa-bars')
        }
        else{
            $('.mobile-nav-icon').addClass('fa-bars');
            $('.mobile-nav-icon').removeClass('fa-angle-double-down')
        }
    }
)