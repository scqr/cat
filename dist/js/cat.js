$(function ($) {
    /*list_tab*/
    $('#uls li').bind('click', function () {
        let iIndex = $(this).index();
        $('#uls li').removeClass('hover').eq(iIndex).addClass('hover');
        $('.uls_right').css('display', 'none').eq(iIndex).css('display', 'block');
    });
    /*classify*/
    $('.one li').bind('click', function () {
        let aIndex = $(this).index();
        $('.one li').removeClass('green').eq(aIndex).addClass('green');
        $('.two').css('display', 'none').eq(aIndex).css('display', 'block');
    });
    $('.a li').bind('click', function () {
        let aIndex = $(this).index();
        $('.a li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_a').css('display', 'none').eq(aIndex).css('display', 'block');
    });
    $('.b li').bind('click', function () {
        let aIndex = $(this).index();
        $('.b li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_b').css('display', 'none').eq(aIndex).css('display', 'block');
    });
    $('.c li').bind('click', function () {
        let aIndex = $(this).index();
        $('.c li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_c').css('display', 'none').eq(aIndex).css('display', 'block');
    });
});