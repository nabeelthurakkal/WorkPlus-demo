$(function () {
    var $animation_elements = $('.animation-element');
    var $window = $(window);
    var $section = $(".workPlus__section");

    function check_if_in_view() {
        var window_height = $window.height() / 2.5;
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        // debugger;

        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                   
                    $element.addClass('in-view');
                    
            }
            if($element.hasClass('workplus__hr') && $element.parent().hasClass('in-view')) {
                console.log($element.parent())
                $element.addClass('in-view');
            }
        });
        
        if ($(".workPlus__section").eq(0).outerHeight() + 126 < window_top_position) {
            $(".workPlus__banner").addClass('p-sticky in-view');
            $(".workPlus__banner").removeClass('p-relative slideInDown');
        } else {
            $(".workPlus__banner").addClass('p-relative slideInDown');
            $(".workPlus__banner").removeClass('p-sticky in-view');
        }


        $('.workPlus__section--bgImg').css('transform', 'translateY( ' + -(window_top_position / 8) + 'px)');
        // $('.workPlus__section--box').css('transform', 'translateY( ' + -(window_top_position / 8) + 'px)');
    }


    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
})