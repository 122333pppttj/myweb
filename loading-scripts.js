document.getElementById('switch-to-register').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('register').addEventListener('submit', function(e) {
    e.preventDefault();
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('密码和确认密码不匹配！');
    } else {
        // 这里可以添加注册逻辑，比如发送数据到服务器
        alert('注册成功！');
    }
});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    // 这里可以添加登录逻辑，比如验证用户名和密码
    alert('登录成功！');
});