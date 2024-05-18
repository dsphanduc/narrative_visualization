document.addEventListener("DOMContentLoaded", function() {
    // Ẩn nội dung ban đầu
    $('#intro').hide();
    $('#data-content').hide();
    $('#footer').hide();

    // Gắn sự kiện kết thúc video
    document.getElementsByTagName("video")[0].addEventListener('ended', function() {
        hideVideoDiv();
        showContent();
    });

    // Gắn sự kiện click cho nút chính
    document.getElementById('main-btn').addEventListener('click', showContent);

    // Hàm ẩn video và hiển thị nội dung
    function hideVideoDiv() {
        document.getElementById("intro-video").style.display = "none";
        $("#main").fadeIn(2000);
    }

    function showContent() {
        $('#intro').slideUp();
        $('#data-content').fadeIn();
        $('#footer').fadeIn();
        $('#netflix-logo').animate({
            width: '10%'
        }, 'slow');
        $('#title > h1').animate({
            fontSize: '50px'
        }, 'slow');
        $('#header').addClass('sticky-top');
    }

    // Hàm hiển thị trang ban đầu
    function showInitialPage() {
        window.scrollTo(0, 0);
        $('#intro').slideDown();
        $('#data-content').fadeOut();
        $('#footer').fadeOut();
        $('#netflix-logo').animate({
            width: '70%'
        }, 'slow');
        $('#title > h1').animate({
            fontSize: '80px'
        }, 'slow');
        $('#header').removeClass('sticky-top');
    }

    // Gọi hàm để hiển thị trang ban đầu
    showInitialPage();
});
