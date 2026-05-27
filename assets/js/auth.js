document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 0. XÁC THỰC THỜI GIAN THỰC (REAL-TIME VALIDATION)
    // ==========================================
    const nameInput = document.getElementById('registerName');
    const nameIcon = document.getElementById('nameIcon');
    const nameError = document.getElementById('nameError');

    const phoneInput = document.getElementById('registerPhone');
    const phoneIcon = document.getElementById('phoneIcon');
    const phoneError = document.getElementById('phoneError');

    const emailInput = document.getElementById('registerEmail');
    const emailIcon = document.getElementById('emailIcon');
    const emailError = document.getElementById('emailError');

    const passwordInput = document.getElementById('registerPassword');
    const passwordIcon = document.getElementById('passwordIcon');
    const passwordError = document.getElementById('passwordError');

    const confirmInput = document.getElementById('registerConfirmPassword');
    const confirmIcon = document.getElementById('confirmIcon');
    const confirmError = document.getElementById('confirmError');

    // --- CÁC HÀM HỖ TRỢ XỬ LÝ GIAO DIỆN ---
    function resetValidation(icon, error, input) {
        icon.classList.remove('show-valid');
        error.classList.remove('show-error');
        input.classList.remove('input-error');
    }

    function setValid(icon, error, input) {
        icon.classList.add('show-valid');
        error.classList.remove('show-error');
        input.classList.remove('input-error');
    }

    function setError(icon, error, input, message) {
        icon.classList.remove('show-valid');
        error.classList.add('show-error');
        error.textContent = message;
        input.classList.add('input-error');
    }
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            const value = this.value.trim();
            if (!value) {
                resetValidation(nameIcon, nameError, this);
            } else if (value.length >= 2) {
                setValid(nameIcon, nameError, this);
            } else {
                setError(nameIcon, nameError, this, "Tên phải có ít nhất 2 ký tự");
            }
        });
    }

    // 1. Kiểm tra Số điện thoại
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            const value = this.value.trim();
            if (!value) {
                resetValidation(phoneIcon, phoneError, this);
            } else if (/^[0-9]{10}$/.test(value)) {
                setValid(phoneIcon, phoneError, this);
            } else {
                setError(phoneIcon, phoneError, this, "Số điện thoại phải gồm 10 chữ số");
            }
        });
    }

    // 2. Kiểm tra Email
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const value = this.value.trim();
            if (!value) {
                resetValidation(emailIcon, emailError, this);
            } else if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
                setValid(emailIcon, emailError, this);
            } else {
                setError(emailIcon, emailError, this, "Định dạng email chưa chính xác");
            }
        });
    }

    // 3. Kiểm tra Mật khẩu (Tối thiểu 6 ký tự)
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const value = this.value; // Mật khẩu không dùng trim() vì có thể chứa dấu cách
            if (!value) {
                resetValidation(passwordIcon, passwordError, this);
            } else if (value.length >= 6) {
                setValid(passwordIcon, passwordError, this);
            } else {
                setError(passwordIcon, passwordError, this, "Mật khẩu phải có ít nhất 6 ký tự");
            }

            // Mẹo: Tự động kiểm tra lại ô Xác nhận nếu nó đã có chữ
            if (confirmInput && confirmInput.value) {
                confirmInput.dispatchEvent(new Event('input'));
            }
        });
    }

    // 4. Kiểm tra Xác nhận mật khẩu (Phải khớp với ô trên)
    if (confirmInput) {
        confirmInput.addEventListener('input', function() {
            const value = this.value;
            if (!value) {
                resetValidation(confirmIcon, confirmError, this);
            } else if (value === passwordInput.value && passwordInput.value.length >= 6) {
                setValid(confirmIcon, confirmError, this);
            } else {
                setError(confirmIcon, confirmError, this, "Mật khẩu xác nhận chưa khớp");
            }
        });
    }

    // ==========================================
    // 1. XỬ LÝ NÚT TẠO TÀI KHOẢN (SUBMIT)
    // ==========================================
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('registerName').value.trim();
            const phone = document.getElementById('registerPhone').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (!/^[0-9]{10}$/.test(phone)) {
                alert("Số điện thoại không hợp lệ!"); return; 
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
                alert("Email không đúng định dạng!"); return;
            }
            if (password.length < 6) {
                alert("Mật khẩu phải có ít nhất 6 ký tự!"); return;
            }
            if (password !== confirmPassword) {
                alert('Mật khẩu xác nhận không khớp!'); return; 
            }

            const users = JSON.parse(localStorage.getItem('mocmien_users')) || [];
            if (users.some(user => user.email === email)) {
                alert('Email này đã được đăng ký. Vui lòng đăng nhập!');
                return;
            }

            const newUser = {
                id: 'USER_' + new Date().getTime(),
                name: name,
                phone: phone,
                email: email,
                password: password 
            };

            users.push(newUser);
            localStorage.setItem('mocmien_users', JSON.stringify(users));

            alert('Đăng ký tài khoản thành công! Vui lòng đăng nhập.');
            window.location.href = 'pages/auth/Login.html'; 
        });
    }

    // ==========================================
    // 2. XỬ LÝ ĐĂNG NHẬP (LOGIN)
    // ==========================================
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const users = JSON.parse(localStorage.getItem('mocmien_users')) || [];
            const validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                sessionStorage.setItem('currentUser', JSON.stringify({
                    id: validUser.id, name: validUser.name, email: validUser.email, phone: validUser.phone
                }));
                alert(`Chào mừng ${validUser.name} đã đến với Cây cảnh Mộc Miên!`);
                window.location.href = 'index.html'; 
            } else {
                alert('Email hoặc Mật khẩu không chính xác. Vui lòng thử lại!');
            }
        });
    }

    // ==========================================
    // 3. XỬ LÝ QUÊN MẬT KHẨU
    // ==========================================
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('forgotEmail').value.trim();
            const users = JSON.parse(localStorage.getItem('mocmien_users')) || [];
            if (users.find(user => user.email === email)) {
                alert(`Một liên kết khôi phục mật khẩu đã được gửi đến email: ${email}\n(Giả lập thành công)`);
                window.location.href = 'pages/auth/Login.html';
            } else {
                alert('Email này chưa được đăng ký trong hệ thống!');
            }
        });
    }
});