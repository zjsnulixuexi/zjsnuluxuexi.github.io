// 初始化页面时设置默认显示个人资料
function setActiveSection(defaultSection) {
    const profileSection = document.getElementById('profileSection');
    const skillsSection = document.getElementById('skillsSection');
    const profileContent = document.getElementById('profileContent');
    const skillsContent = document.getElementById('skillsContent');

    if (defaultSection === 'profile') {
        profileSection.classList.add('active');
        profileContent.style.display = 'block';
        skillsContent.style.display = 'none';
    } else if (defaultSection === 'skills') {
        skillsSection.classList.add('active');
        skillsContent.style.display = 'block';
        profileContent.style.display = 'none';
    }
}

// 计算年龄
var currentYear = new Date().getFullYear();
var age = currentYear - 2005;
document.getElementById('age').textContent = age;

// 默认显示个人资料部分
setActiveSection('profile');
