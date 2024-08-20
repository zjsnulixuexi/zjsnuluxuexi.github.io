const app = Vue.createApp({
    data() {
        return {
            selectedCategory: 'python',
            selectedWorkId: 1,
            pythonWorks: [
                { id: 1, name: '经典贪吃蛇', description: '贪吃蛇是一款经典的电子游戏，其基本规则是玩家控制一条蛇在屏幕上移动，吃下随机出现的食物来增长蛇的身体。当蛇头撞到自己的身体或屏幕边缘时，游戏结束。', imgurl: '../assets/snack.png' },
                { id: 2, name: '模型预测、可视化及打包', description: '建模预测，dash可视化，pyinstaller打包成独立exe', imgurl: '../assets/dash.png' },
                { id: 3, name: '建模', description: '基于 ARIMA 模型和模拟退火算法的货量预测与人员排班策略', imgurl: '../assets/model.png' },
            ],
            frontendWorks: [
                { id: 1, name: '织网筑梦-构建高校中外学子交流新经纬', description: '页面搭建-小挑', imgurl: '../assets/global.png' },
                { id: 2, name: '数据分析应用系统', description: '页面搭建-数据库', imgurl: '../assets/sql.png' },
                { id: 3, name: 'idea_flow', description: '在大佬指导下做的半成品，遇到一个解决不了的东西（可惜，一开始大佬计划搞专利的，呜呜,好像涉及到版权，这个就不展示图片了', imgurl: '' },
            ],
        };
    },
    methods: {
        toggleCategory(category) {
            this.selectedCategory = category;
        },
        isCategoryExpanded(category) {
            return this.selectedCategory === category;
        },
        selectWork(workId) {
            this.selectedWorkId = workId;
        }
    },
    computed: {
        selectedWork() {
            const works = this.selectedCategory === 'python' ? this.pythonWorks : this.frontendWorks;
            return works.find(work => work.id === this.selectedWorkId) || {};
        }
    }
});

app.mount('#app');  