document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. XỬ LÝ ĐĂNG KÝ (REGISTER)
    // ==========================================
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn hành vi reload mặc định của form

            // Lấy dữ liệu từ các input
            const name = document.getElementById('registerName').value.trim();
            const phone = document.getElementById('registerPhone').value.trim();
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;

            // Validate 1: Kiểm tra khớp mật khẩu
            if (password !== confirmPassword) {
                alert('Mật khẩu xác nhận không khớp. Vui lòng kiểm tra lại!');
                return; // Dừng hàm ngay lập tức
            }

            // Lấy danh sách user hiện tại từ Local Storage (nếu chưa có thì tạo mảng rỗng)
            const users = JSON.parse(localStorage.getItem('mocmien_users')) || [];

            // Validate 2: Kiểm tra email đã tồn tại chưa
            const isEmailExist = users.some(user => user.email === email);
            if (isEmailExist) {
                alert('Email này đã được đăng ký. Vui lòng sử dụng email khác hoặc Đăng nhập!');
                return;
            }

            // Tạo object user mới
            const newUser = {
                id: 'USER_' + new Date().getTime(), // Tạo mã ID ngẫu nhiên dựa trên thời gian
                name: name,
                phone: phone,
                email: email,
                password: password 
            };

            // Push vào mảng và lưu ngược lại lên Local Storage
            users.push(newUser);
            localStorage.setItem('mocmien_users', JSON.stringify(users));

            // Thông báo và chuyển hướng
            alert('Đăng ký tài khoản thành công! Vui lòng đăng nhập.');
            window.location.href = 'pages/auth/Login.html'; // Điều chỉnh đường dẫn nếu cần
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

            // Lấy database users từ Local Storage
            const users = JSON.parse(localStorage.getItem('mocmien_users')) || [];

            // Tìm kiếm user có email và mật khẩu khớp nhau
            const validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                // Đăng nhập thành công -> Lưu thông tin vào Session Storage (currentUser)
                const sessionUser = {
                    id: validUser.id,
                    name: validUser.name,
                    email: validUser.email,
                    phone: validUser.phone
                };
                sessionStorage.setItem('currentUser', JSON.stringify(sessionUser));

                
                window.location.href = 'index.html'; 
            } else {
                // Sai thông tin
                alert('Email hoặc Mật khẩu không chính xác. Vui lòng thử lại!');
            }
        });
    }


    // ==========================================
    // 3. XỬ LÝ QUÊN MẬT KHẨU (FORGOT PASSWORD)
    // ==========================================
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('forgotEmail').value.trim();
            const users = JSON.parse(localStorage.getItem('mocmien_users')) || [];

            // Kiểm tra xem email có trong mảng users không
            const validUser = users.find(user => user.email === email);

            if (validUser) {
                // Do không có backend thực tế để gửi mail, ta dùng thông báo giả lập
                alert(`Một liên kết khôi phục mật khẩu đã được gửi đến email: ${email}\n(Giả lập thành công)`);
                window.location.href = 'pages/auth/Login.html';
            } else {
                alert('Email này chưa được đăng ký trong hệ thống. Vui lòng kiểm tra lại!');
            }
        });
    }
});