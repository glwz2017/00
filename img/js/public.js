$(function () {
    //顶部右侧切换图片
    var getHintsLi=$('.js-hints li');
    getHintsLi.mouseenter(function () {
        var index=$(this).index();
        switch (index){
            case 0:
                resetIcon();
                $(this).children('a').children('img').attr('src','../img/images/messaged.png');
                break;
            case 1:
                resetIcon();
                $(this).children('a').children('img').attr('src','../img/images/couponed.png');
                break;
            case 2:
                resetIcon();
                $(this).children('a').children('img').attr('src','../img/images/no-for-payment.png');
                break;
            case 3:
                resetIcon();
                $(this).children('a').children('img').attr('src','../img/images/shopping-cared.png');
                break;
        }
    });
    getHintsLi.mouseleave(function () {
        resetIcon();
    });
    //初始化图标
    function resetIcon() {
        getHintsLi.eq(0).children('a').children('img').attr('src','../img/images/message.png');
        getHintsLi.eq(1).children('a').children('img').attr('src','../img/images/coupon.png');
        getHintsLi.eq(2).children('a').children('img').attr('src','../img/images/for-the-payment.png');
        getHintsLi.eq(3).children('a').children('img').attr('src','../img/images/shopping-car.png');
    }
//   返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({ scrollTop: 0 });
    });
    //左右保持一致
    function changeHeight() {
        var getWindowHeight = $(window).height();
        if ($('.box-lines').height() < getWindowHeight) {
            $('.box-r').css({ minHeight: getWindowHeight });
            $('.box-l').height($('.box-lines').height());
        } else {
            $('.box-l').height($('.box-lines').height());
        }

    }
    changeHeight();
    $(window).resize(function () {
        changeHeight();
    });
    // //会与中心左侧导航切换
    // $('.js-category-index >li').click(function () {
    //     var index = $(this).index();
    //     if (index === 5) {
    //         $(this).addClass('active');
    //         $(this).removeClass('more-list').siblings().removeClass('active');
    //         $('.second-item').show();
    //     } else {
    //         $(this).addClass('active').siblings().removeClass('active');
    //         $('.second-item').hide();
    //         $('.js-category-index>li').eq(5).addClass('more-list');
    //     }
    // });
    // $('.second-item li').click(function () {
    //     $(this).addClass('second-active').siblings().removeClass('second-active');
    // });

});//end function