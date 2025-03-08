$(document).ready(function() {
    // 创建页面标头和主容器
    createHeader('个人简介');
    var mainContainer = createMainContainer();

    // 创建左侧信息栏
    var mainIntroDiv = $('<div>', {
        id: 'mainIntro',
        css: {
            'width': 'calc(20% - 40px)',
            'height': 'calc(100vh - 180px)',
            'background': 'linear-gradient(to bottom, #e3fdfd, #cbf1f5)',
            'color': '#3f72af',
            'padding': '20px',
            'position': 'fixed',
            'top': '140px',
            'left': '20px',
            'border-radius': '15px',
            'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.05)',
            'overflow-y': 'auto',
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center'
        }
    });

    // 创建头像
    var profileImage = $('<img>', {
        src: 'images/person_lpz.jpg',
        css: {
            'width': '100px',
            'height': '100px',
            'border-radius': '50%',
            'margin-bottom': '20px',
            'transition': 'transform 1s ease',
            'object-fit': 'cover',
            'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.1)'
        }
    }).hover(
        function() {
            $(this).css('transform', 'rotate(360deg)');
        },
        function() {
            $(this).css('transform', 'rotate(0deg)');
        }
    );
    mainIntroDiv.prepend(profileImage);

    // 创建信息表格
    var infoTable = $('<table>', {
        css: {
            'width': '100%',
            'border-collapse': 'collapse',
            'margin-top': '20px'
        }
    });
    [
        ['姓名', '李沛泽'], ['年龄', '20'], ['学校', '中国地质大学'],
        ['专业', '地理信息科学'], ['年级', '2023级'], ['籍贯', '河北邯郸'],
        ['电话', '18632022208'], ['邮箱', '18632022208@163.com'],
        ['爱好', '编程'], ['特长', '运动']
    ].forEach(row => {
        infoTable.append($('<tr>').append(
            $('<td>', {
                text: row[0],
                css: {
                    'padding': '8px',
                    'border': 'none',
                    'color': '#3f72af',
                    'width': '30%',
                    'text-align': 'right',
                    'font-weight': 'bold'
                }
            }),
            $('<td>', {
                text: row[1],
                css: {
                    'padding': '8px',
                    'border': 'none',
                    'color': '#3f72af',
                    'text-align': 'left'
                }
            })
        ));
    });
    mainIntroDiv.append(infoTable);
    $('body').append(mainIntroDiv);

    // 新版右侧容器
    var rightContainer = $('<div>', {
        css: {
            'width': 'calc(75% - 60px - 3%)',
            'position': 'fixed',
            'top': '140px',
            'left': 'calc(20% + 3% + 40px)',
            'bottom': '20px',
            'overflow-y': 'auto',
            'padding-right': '10px'
        }
    });

    // 创建四个区块
    const blockConfig = [
        { 
            height: '50px', 
            content: '基本信息',
            background: 'linear-gradient(to right, #e3fdfd, #cbf1f5)'
        },
        { 
            height: '400px', 
            content: '<h3>个人简介</h3><p>我是李沛泽，现就读于中国地质大学地理与信息工程学院，2023级本科生，专业为地理信息科学。</p><p>我对GIS应用开发和空间数据分析有浓厚的兴趣，希望能在这个领域不断探索和成长。</p><h3>技能特长</h3><ul><li>编程语言：Python, JavaScript, HTML/CSS</li><li>GIS软件：ArcGIS, QGIS</li><li>数据分析：空间分析, 地图制图</li><li>Web开发：前端基础知识</li></ul>',
            background: 'linear-gradient(to right, #cbf1f5, #a6e3e9)'
        },
        { 
            height: '50px', 
            content: '教育背景',
            background: 'linear-gradient(to right, #e3fdfd, #cbf1f5)'
        },
        { 
            height: '400px', 
            content: '<h3>中国地质大学</h3><p><strong>专业：</strong>地理信息科学</p><p><strong>学历：</strong>本科</p><p><strong>时间：</strong>2023年至今</p><p><strong>主修课程：</strong></p><ul><li>地理信息系统原理</li><li>遥感原理与应用</li><li>空间数据库</li><li>地图学</li><li>计算机编程基础</li><li>空间分析</li></ul><p><strong>学习成果：</strong>在校期间积极参与各类GIS相关项目和比赛，努力提升专业技能。</p>',
            background: 'linear-gradient(to right, #cbf1f5, #a6e3e9)'
        }
    ];

    blockConfig.forEach((config, index) => {
        $('<div>', {
            html: config.content,
            css: {
                'width': '100%',
                'height': config.height,
                'background': config.background,
                'border-radius': '15px',
                'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.05)',
                'padding': '20px',
                'color': '#3f72af',
                'margin-bottom': '20px',
                'box-sizing': 'border-box',
                'transition': 'transform 0.3s ease, box-shadow 0.3s ease'
            }
        }).hover(
            function() {
                $(this).css({
                    'transform': 'translateY(-5px)',
                    'box-shadow': '0 8px 20px rgba(0, 0, 0, 0.1)'
                });
            },
            function() {
                $(this).css({
                    'transform': 'translateY(0)',
                    'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.05)'
                });
            }
        ).appendTo(rightContainer);
    });

    $('body').append(rightContainer);
}); 