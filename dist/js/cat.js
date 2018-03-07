$(function ($) {
    /*bookcity_header_tab*/
    $('#index li').bind('click', function () {
        let iIndex = $(this).index();
        $('#index li').removeClass('click').eq(iIndex).addClass('click');
        $('.panel').css('display', 'none').eq(iIndex).css('display', 'block');
    });

    /*bookcity_list_tab*/
    $('#uls li').bind('click', function () {
        let iIndex = $(this).index();
        $('#uls li').removeClass('long').eq(iIndex).addClass('long');
        $('.a1').css('display', 'none').eq(iIndex).css('display', 'block');
    });
    $('#ulss li').bind('click', function () {
        let iIndex = $(this).index();
        $('#ulss li').removeClass('hover').eq(iIndex).addClass('hover');
        $('.uls_right').css('display', 'none').eq(iIndex).css('display', 'block');
    });
    /*bookcity_classify_tab*/
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
    $('.d li').bind('click', function () {
        let aIndex = $(this).index();
        $('.d li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_d').css('display', 'none').eq(aIndex).css('display', 'block');
    });
    $('.e li').bind('click', function () {
        let aIndex = $(this).index();
        $('.e li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_e').css('display', 'none').eq(aIndex).css('display', 'block');
    });
    $('.f li').bind('click', function () {
        let aIndex = $(this).index();
        $('.f li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_f').css('display', 'none').eq(aIndex).css('display', 'block');
    });
    $('.g li').bind('click', function () {
        let aIndex = $(this).index();
        $('.g li').removeClass('green').eq(aIndex).addClass('green');
        $('.two_g').css('display', 'none').eq(aIndex).css('display', 'block');
    });

    /*my_btn*/
    $('#late').bind('click', function () {
        $('.late').css({"background":"url(../img/my_section_btn_color.png) no-repeat 3.05rem 0.10rem","background-size":"0.51rem 0.31rem"});
        $('#big').css('display','block');
    });
    $('#big').bind('click', function () {
        $('.late').css({"background":"url(../img/my_section_btn.png) no-repeat 3.05rem 0.10rem","background-size":"0.51rem 0.31rem"});
        $('#big').css('display','none');
    });

    /*bookshelf_header_tab*/
    $('#header li').bind('click', function () {
        let iIndex = $(this).index();
        $('#header li').removeClass('click').eq(iIndex).addClass('click');
        $('.none').css('display', 'none').eq(iIndex).css('display', 'block');
    });
});