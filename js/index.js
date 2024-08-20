
let num = 0;
let password_true = 'aji';

// 获取密码输入框元素
var passwordInput = document.getElementById('password');

// 为密码输入框添加键盘事件监听器
passwordInput.addEventListener('keydown', function (event) {
    // 检查按下的键是否是回车键
    if (event.key === 'Enter' || event.keyCode === 13) {
        // 阻止默认的表单提交行为
        event.preventDefault();
        // 调用注册函数
        register();
    }
});

function register() {
    var visitorNameInput = document.getElementById('visitorName');
    var password = passwordInput.value;
    var visitorName = visitorNameInput.value;

    if (!password) {
        if (num === 0) {
            alert('填写密码，求求了');
            num++;
        } else if (num === 1) {
            alert('快快填写');
            num++;
        } else {
            alert('不填不给看!');
        }
    } else if (password === password_true) {
        console.log('访客名:', visitorName);
        console.log('密码:', password);
        window.location.href = 'https://zjsnulixuexi.github.io/zjsnuluxuexi.github.io/pages/Home.html';
    } else {
        alert('牢底，不知道密码看什么看');
    }
}
