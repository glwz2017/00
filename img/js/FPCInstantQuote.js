$(function () {
    // 右侧点击下单按钮
    $('.js-calculate').click(function () {
        $(this).hide();//隐藏计算按钮
        $('.js-main-price').show();
        $('.js-price-ul').show();
        $('.js-proto').show();
    });
    //右侧下单物流选择
    $('.js-build-box div').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    //左侧各个计价参数
    //所有项选择
    $('.item-right .list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('active-list').siblings().removeClass('active-list');
    });

    function clearClass() {
        for (var j = 0; j < $('.js-fpc>.list').length; j++) {
            $('.js-fpc>.list').eq(j).removeClass('disabled');
            $('.js-fpc>.list').eq(j).removeClass('active-list');
        }
    }//还原选中样式
    //    第一项    layers
    $('.js-layers>.list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('active-list').siblings().removeClass('active-list');

        if ($(this).attr('data-value') == 1) {
            clearClass();//还原选中样式
            $('.js-fpc>.list').eq(0).addClass('active-list');
            $('.js-copper>.list').eq(1).addClass('active-list').siblings('.list').removeClass('active-list');
            $('.js-copper>.list').eq(2).addClass('disabled');
            $('.js-mask>.list').eq(1).removeClass('disabled');
            $('.js-silkscreen>.list').eq(1).removeClass('disabled');
            for (var i = 3; i < $('.js-fpc>.list').length; i++) {
                $('.js-fpc>.list').eq(i).addClass('disabled');
            }
        }

        if ($(this).attr('data-value') == 2) {
            clearClass();//还原选中样式
            $('.js-mask>.list').eq(1).addClass('disabled');
            $('.js-silkscreen>.list').eq(1).addClass('disabled');
            $('.js-copper>.list').eq(2).removeClass('disabled');
            $('.js-fpc>.list').eq(0).addClass('disabled');
            $('.js-fpc>.list').eq(1).addClass('disabled');
            $('.js-fpc>.list').eq(2).addClass('active-list');
            $('.js-fpc>.list').eq($('.js-fpc>.list').length - 1).addClass('disabled');
            $('.js-fpc>.list').eq($('.js-fpc>.list').length - 2).addClass('disabled');
        }

        if ($(this).attr('data-value') == 4) {
            $('.js-mask>.list').eq(1).removeClass('disabled');
            $('.js-silkscreen>.list').eq(1).removeClass('disabled');
            for (var k = 0; k < $('.js-fpc>.list').length; k++) {
                $('.js-fpc>.list').eq(k).addClass('disabled');
            }
            $('.js-fpc>.list').eq(7).removeClass('disabled');
            $('.js-fpc>.list').eq(7).addClass('active-list').siblings('.list').removeClass('active-list');
            $('.js-fpc>.list').eq(8).removeClass('disabled');
        }

        if ($(this).attr('data-value') == 6) {
            for (var k = 0; k < $('.js-fpc>.list').length; k++) {
                $('.js-fpc>.list').eq(k).addClass('disabled');
            }
            $('.js-fpc>.list').eq(9).removeClass('disabled');
            $('.js-fpc>.list').eq(9).addClass('active-list').siblings('.list').removeClass('active-list');
        }

    });


//    第二项Board type 列表
    $('.js-board .list').click(function () {
        $(this).addClass('active-list').parent().siblings().children('.list').removeClass('active-list');
        if ($(this).attr('data-value') == 1) {
            $('.js-pcs').show();
            $('.js-panel').hide();
        }
        if ($(this).attr('data-value') == 2) {
            $('.js-pcs').hide();
            $('.js-panel').show();
        }

    });
    //第六项  FPC Thickness列表
    $('.js-fpc>.list').click(function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        if ($.trim($(this).text()) == '0.13' || $.trim($(this).text()) == '0.15') {
            $('.js-mask>.list').eq(1).addClass('disabled');
            $('.js-silkscreen>.list').eq(1).addClass('disabled');
        } else {
            $('.js-mask>.list').eq(1).removeClass('disabled');
            $('.js-silkscreen>.list').eq(1).removeClass('disabled');
        }

    });


//    第五项Polyimide base material:列表
    $('.js-unit-item>li').click(function () {
        $('.js-unit-size').val($(this).html());
        $(this).parent().hide();
    });
    $('.js-unit-box').hover(function () {
        $(this).children('.js-unit-item').show();
    }, function () {
        $(this).children('.js-unit-item').hide();
    });

    //js-Stiffener 列表
    $('.js-stiffener>.list').click(function () {
        if ($(this).attr('data-value') == 0) {
            $('.js-border-size').hide();
        } else {
            $('.js-border-size').show();
        }
    });

//    3M tape

    $('.js-tape').hover(function () {
        $('.js-tape-menu').show();
    },function () {
        $('.js-tape-menu').hide();
    });
    $('.js-tape-menu>li').click(function () {
        var str=$.trim($(this).html());
        $(this).parent().siblings('input').val(str);
        $(this).parent().hide();
    });

});//end function