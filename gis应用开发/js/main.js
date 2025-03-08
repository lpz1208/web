// 创建浮动标头
function createHeader(title) {
    var headerDiv = $('<div>', {
        id: 'header',
        css: {
            'width': 'calc(100% - 40px)',
            'height': '100px',
            'background': 'linear-gradient(to right, #5e60ce, #6930c3)',
            'color': '#ffffff',
            'text-align': 'center',
            'line-height': '100px',
            'font-size': '30px',
            'border-radius': '15px',
            'margin': '20px',
            'position': 'fixed',
            'top': '0',
            'left': '20px',
            'z-index': '1000',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        }
    });
    
    // 添加标题文本
    var headerTitle = $('<div>', {
        text: title,
        css: {
            'flex': '1'
        }
    });
    headerDiv.append(headerTitle);
    
    // 添加导航菜单
    var navMenu = $('<div>', {
        id: 'navMenu',
        css: {
            'position': 'relative',
            'margin-right': '50px',
            'cursor': 'pointer',
            'display': 'flex',
            'align-items': 'center'
        }
    });
    
    var navButton = $('<div>', {
        text: '导航菜单',
        css: {
            'padding': '8px 15px',
            'background': 'rgba(255, 255, 255, 0.2)',
            'border-radius': '8px',
            'transition': 'all 0.3s ease',
            'font-size': '16px'
        }
    });
    
    var dropdownMenu = $('<div>', {
        css: {
            'position': 'absolute',
            'top': '100%',
            'right': '0',
            'background': 'white',
            'border-radius': '8px',
            'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.1)',
            'display': 'none',
            'width': '150px',
            'z-index': '1001'
        }
    });
    
    var option1 = $('<a>', {
        text: '个人简介',
        href: 'lll.html',
        css: {
            'padding': '12px',
            'color': '#3f72af',
            'transition': 'background 0.3s ease',
            'border-radius': '8px 8px 0 0',
            'font-size': '14px',
            'display': 'block',
            'text-decoration': 'none'
        }
    }).hover(
        function() { $(this).css('background', '#f0f5f9'); },
        function() { $(this).css('background', 'white'); }
    );
    
    var option2 = $('<a>', {
        text: '第二次实习',
        href: 'second.html',
        css: {
            'padding': '12px',
            'color': '#3f72af',
            'transition': 'background 0.3s ease',
            'border-radius': '0 0 8px 8px',
            'font-size': '14px',
            'display': 'block',
            'text-decoration': 'none'
        }
    }).hover(
        function() { $(this).css('background', '#f0f5f9'); },
        function() { $(this).css('background', 'white'); }
    );
    
    // 根据当前页面设置选中状态
    var currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'lll.html') {
        option1.css({
            'font-weight': 'bold',
            'background': '#f0f5f9'
        });
    } else if (currentPage === 'second.html') {
        option2.css({
            'font-weight': 'bold',
            'background': '#f0f5f9'
        });
    }
    
    dropdownMenu.append(option1, option2);
    navMenu.append(navButton, dropdownMenu);
    
    navMenu.hover(
        function() { dropdownMenu.fadeIn(200); },
        function() { dropdownMenu.fadeOut(200); }
    );
    
    headerDiv.append(navMenu);
    $('body').prepend(headerDiv);
    
    return headerDiv;
}

// 创建主容器
function createMainContainer() {
    var mainContainer = $('<div>', {
        css: {
            'width': 'calc(100% - 80px)',
            'margin': '140px auto 40px',
            'display': 'flex',
            'flex-direction': 'column',
            'gap': '30px'
        }
    });
    
    $('body').append(mainContainer);
    
    return mainContainer;
} 