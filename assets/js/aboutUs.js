/* ===== HIỆU ỨNG LƯỚT ĐẾN ĐÂU HIỆN ĐẾN ĐÓ (SCROLL REVEAL) ===== */
function revealOnScroll() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; 
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Gắn sự kiện lắng nghe thao tác cuộn chuột
window.addEventListener('scroll', revealOnScroll);
// Gọi hàm 1 lần ngay khi load trang
revealOnScroll();