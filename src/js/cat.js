$(function ($) {
    /*list_tab*/
    $('#uls li').bind('click', function () {
        let iIndex = $(this).index();
        $('#uls li').removeClass('hover').eq(iIndex).addClass('hover');
        $('.uls_right').css('display', 'none').eq(iIndex).css('display', 'block');
    });
});