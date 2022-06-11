$(function() {
    /* 按下topbtn按鈕時的事件 */
    $('.topbtn').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過200px就讓topbtn按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 200){
            $('.topbtn').fadeIn();
        } else {
            $('.topbtn').fadeOut();
        }
    });
});