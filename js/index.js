$(function () {
    // 显示弹窗
    function showModal(ele) {
        $('.mask').fadeIn();
        $(ele).fadeIn();
    }
    // 关闭弹窗
    function hideModal(ele) {
        $('.mask').fadeOut();
        $(ele).fadeOut();
    }

    // 点击关闭和确定按钮关闭弹窗
    $('.modal-close, .modal-enter').on('touchend', function () {
        var $modal = $(this).parents('.modal');
        hideModal($modal);
    });
    // 规则弹窗
    $('.rule-btn').on('touchend', function () {
        showModal('#modalRule');
    });
    // 点击提交关闭弹窗
    $('.sub-btn').on('touchend', function () {
        var $modal = $(this).parents('.modal');
        hideModal($modal);
    });
    // 点击我要写寄语
    $('.write-btn').on('touchend', function () {
        showModal('#modalTextarea');
    });
    $('.input-area').on('input', function () {
        
    });

    // 点击里屋中奖
    $('.gift_btn').on('touchend', function () {
        showModal('#modalPrize');
        
    });
});