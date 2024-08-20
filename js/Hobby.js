const hobbies = [
    {
        id: 1,
        name: '运动',
        description: '享受跑步带来的每一次心跳加速和汗水淋漓，这是我与自己对话，挑战自我极限的方式',
        showDetails: true,
        imgurl: '../assets/run.jpg'
    },
    {
        id: 2,
        name: '旅行',
        description: '从雄伟的山脉到宁静的海滩，每个地方都有它独特的故事等待我去发现',
        showDetails: false,
        imgurl: '../assets/travel.jpg'
    },
    {
        id: 3,
        name: '吉他',
        description: '无论是弹奏经典的老歌还是流行的音乐，吉他都是我与世界沟通的桥梁',
        showDetails: false,
        imgurl: '../assets/guitar.png'
    },
    {
        id: 4,
        name: '游戏',
        description: '在虚拟世界中，我可以体验不同的角色和故事，享受探索未知的快感',
        showDetails: false,
        imgurl: '../assets/game.png'
    },
    {
        id: 5,
        name: '编程',
        description: '在编写代码的过程中，能将抽象的想法转化为具体的解决方案，创造出有用的软件和工具',
        showDetails: false,
        imgurl: '../assets/program.png'
    },
];

// 函数用于切换爱好详情的显示状态
function toggleHobby(hobbyId) {
    hobbies.forEach(hobby => {
        if (hobby.id === hobbyId) {
            hobby.showDetails = !hobby.showDetails;
        }
    });
    updateHobbiesDisplay();
}

// 函数用于更新页面上的爱好显示
function updateHobbiesDisplay() {
    const hobbiesContainer = document.querySelector('.hobbies-container');
    let htmlContent = ''; // 用于存储生成的HTML内容
    hobbies.forEach(hobby => {
        htmlContent += `
            <div class="hobby-item" style="margin-bottom: 10px; cursor: pointer;">
                <h3 onclick="toggleHobby(${hobby.id})" style="color: rgb(184, 188, 190); display: flex; align-items: center; justify-content: space-between;">
                    ${hobby.name}
                    ${hobby.showDetails ? '<i class="fas fa-chevron-down" style="color: rgb(184, 188, 190);"></i>' : '<i class="fas fa-chevron-right" style="color: rgb(184, 188, 190);"></i>'}
                </h3>
                ${hobby.showDetails ? `<div class="hobby-details" style="margin-top: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                    <p style="color: rgb(184, 188, 190);">${hobby.description}</p>
                    <img src="${hobby.imgurl}" alt="${hobby.name}" style="width: 100%; height: auto;">
                </div>` : ''}
            </div>
        `;
    });
    hobbiesContainer.innerHTML = htmlContent;
}

// 页面加载完成后，初始化爱好显示
document.addEventListener('DOMContentLoaded', updateHobbiesDisplay);