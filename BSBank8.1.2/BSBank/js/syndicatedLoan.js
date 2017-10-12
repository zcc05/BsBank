/**
 * Created by Cheng on 2016/7/7.
 */
//资产交易和联合贷款点击分页效果
$(function () {

    //$('.loannews-page li').click(function () {
    //    $(this).addClass('only').siblings('.loannews-page li').removeClass('only');
    //    //$(this).addClass('only').parents('.loannews-page li').siblings('.loannews-page li').children('a').removeClass('only');
    //    var index = $(this).index();
    //    $(".loannews-content>div")
    //        .eq(index).show().
    //        siblings('.loannews-content>div').hide();
    //});
     $('.loannews-page li').click(function () {
        var index = $(this).index();
        $(".loannews-content>div")
            .eq(index).show().
            siblings('.loannews-content>div').hide();
    });
    $('.loannews-page li a').click(function () {
        $(this).addClass('only').parents('.loannews-page li').siblings('.loannews-page li').children('a').removeClass('only');
    });

});