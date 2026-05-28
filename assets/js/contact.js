window.addEventListener('DOMContentLoaded', () => {
    // 1. Load thông tin nếu đã đăng nhập
    loadThongTinLienHe();

    // 2. Bắt sự kiện cho nút Gửi
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.addEventListener('click', validateContactForm);
    }

    // 3. Lấy các ô nhập liệu
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');

    // Khai báo Regex dùng chung
    const phoneRegex = /^(0|\+84)[0-9]{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // =====================================
    // KIỂM TRA REAL-TIME: GÕ ĐẾN ĐÂU CHECK ĐẾN ĐÓ
    // =====================================
    
    // Check Số điện thoại
    if (phoneInput) {
        phoneInput.addEventListener('input', () => {
            const val = phoneInput.value.trim();
            if (val === '') {
                clearError(phoneInput, 'phone-error'); // Rỗng thì không báo lỗi
            } else if (!phoneRegex.test(val)) {
                showError(phoneInput, 'phone-error', 'Định dạng số điện thoại chưa chính xác');
            } else {
                clearError(phoneInput, 'phone-error'); // Đúng format thì xóa đỏ ngay
            }
        });
    }

    // Check Email
    if (emailInput) {
        emailInput.addEventListener('input', () => {
            const val = emailInput.value.trim();
            if (val === '') {
                clearError(emailInput, 'email-error'); // Rỗng thì không báo lỗi
            } else if (!emailRegex.test(val)) {
                showError(emailInput, 'email-error', 'Định dạng email chưa chính xác');
            } else {
                clearError(emailInput, 'email-error'); // Đúng format thì xóa đỏ ngay
            }
        });
    }
});

function loadThongTinLienHe() {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    const nameInput = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');

    if (user) {
        if (nameInput && user.name) nameInput.value = user.name;
        if (phoneInput && user.phone) phoneInput.value = user.phone;
        if (emailInput && user.email) emailInput.value = user.email;
    }
}

// Hàm BẬT thông báo lỗi
function showError(inputEl, errorId, message) {
    inputEl.classList.add('input-invalid');
    const errorSpan = document.getElementById(errorId);
    if (errorSpan) {
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }
}

// Hàm TẮT thông báo lỗi
function clearError(inputEl, errorId) {
    inputEl.classList.remove('input-invalid');
    const errorSpan = document.getElementById(errorId);
    if (errorSpan) {
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
    }
}

function validateContactForm(e) {
    e.preventDefault(); 

    const nameInput = document.getElementById('contactName');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    const messageInput = document.getElementById('contactMessage');

    const phone = phoneInput ? phoneInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';
    const phoneRegex = /^(0|\+84)[0-9]{9}$/;    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if(phoneInput) clearError(phoneInput, 'phone-error');
    if(emailInput) clearError(emailInput, 'email-error');

    if (!phoneRegex.test(phone)) {
        showError(phoneInput, 'phone-error', 'Định dạng số điện thoại chưa chính xác');
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        showError(emailInput, 'email-error', 'Định dạng email chưa chính xác');
        isValid = false;
    }

    if (!isValid) return;

    if (!nameInput.value.trim() || !message) {
        alert('Vui lòng điền đầy đủ thông tin để Mộc Miên hỗ trợ bạn nhé! 🌱');
        return;
    }

    alert('Mộc Miên đã nhận được lời nhắn của bạn. Cảm ơn bạn rất nhiều! 🌿');
    if (messageInput) messageInput.value = '';
}