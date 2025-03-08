$(document).ready(function() {
    // 创建页面标头和主容器
    createHeader('第二次实习');
    var mainContainer = createMainContainer();
    
    // 创建轮播图容器
    var carouselContainer = $('<div>', {
        id: 'carousel',
        css: {
            'width': '100%',
            'height': '400px',
            'position': 'relative',
            'overflow': 'hidden',
            'border-radius': '15px',
            'margin-bottom': '30px',
            'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.05)'
        }
    });
    
    // 创建轮播图片
    var images = [
        { src: 'images/1_lpz.JPG', alt: '项目图片1' },
        { src: 'images/2_lpz.JPG', alt: '项目图片2' },
        { src: 'images/3_lpz.JPG', alt: '项目图片3' }
    ];
    
    var currentSlide = 0;
    
    // 创建轮播图片容器
    var slideContainer = $('<div>', {
        css: {
            'display': 'flex',
            'width': (images.length * 100) + '%',
            'transition': 'transform 0.5s ease',
            'height': '100%'
        }
    });
    
    // 添加图片到轮播
    images.forEach(function(image, index) {
        var slide = $('<div>', {
            css: {
                'width': (100 / images.length) + '%',
                'height': '100%'
            }
        });
        
        var img = $('<img>', {
            src: image.src,
            alt: image.alt,
            css: {
                'width': '100%',
                'height': '100%',
                'object-fit': 'cover'
            }
        });
        
        slide.append(img);
        slideContainer.append(slide);
    });
    
    carouselContainer.append(slideContainer);
    
    // 添加轮播控制按钮
    var prevButton = $('<div>', {
        text: '❮',
        css: {
            'position': 'absolute',
            'top': '50%',
            'left': '20px',
            'transform': 'translateY(-50%)',
            'background': 'rgba(255, 255, 255, 0.7)',
            'color': '#3f72af',
            'width': '40px',
            'height': '40px',
            'border-radius': '50%',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'cursor': 'pointer',
            'font-size': '20px',
            'z-index': '2',
            'transition': 'all 0.3s ease'
        }
    }).hover(
        function() { $(this).css('background', 'rgba(255, 255, 255, 0.9)'); },
        function() { $(this).css('background', 'rgba(255, 255, 255, 0.7)'); }
    ).click(function() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        updateSlide();
        resetAutoSlide();
    });
    
    var nextButton = $('<div>', {
        text: '❯',
        css: {
            'position': 'absolute',
            'top': '50%',
            'right': '20px',
            'transform': 'translateY(-50%)',
            'background': 'rgba(255, 255, 255, 0.7)',
            'color': '#3f72af',
            'width': '40px',
            'height': '40px',
            'border-radius': '50%',
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'cursor': 'pointer',
            'font-size': '20px',
            'z-index': '2',
            'transition': 'all 0.3s ease'
        }
    }).hover(
        function() { $(this).css('background', 'rgba(255, 255, 255, 0.9)'); },
        function() { $(this).css('background', 'rgba(255, 255, 255, 0.7)'); }
    ).click(function() {
        currentSlide = (currentSlide + 1) % images.length;
        updateSlide();
        resetAutoSlide();
    });
    
    carouselContainer.append(prevButton, nextButton);
    
    // 添加指示器
    var indicators = $('<div>', {
        css: {
            'position': 'absolute',
            'bottom': '20px',
            'left': '50%',
            'transform': 'translateX(-50%)',
            'display': 'flex',
            'gap': '10px',
            'z-index': '2'
        }
    });
    
    images.forEach(function(_, index) {
        var dot = $('<div>', {
            css: {
                'width': '12px',
                'height': '12px',
                'border-radius': '50%',
                'background': index === 0 ? '#3f72af' : 'rgba(255, 255, 255, 0.7)',
                'cursor': 'pointer',
                'transition': 'all 0.3s ease'
            }
        }).click(function() {
            currentSlide = index;
            updateSlide();
            resetAutoSlide();
        });
        indicators.append(dot);
    });
    
    carouselContainer.append(indicators);
    
    // 更新轮播图片位置
    function updateSlide() {
        slideContainer.css('transform', 'translateX(-' + (currentSlide * (100 / images.length)) + '%)');
        indicators.children().each(function(index) {
            $(this).css('background', index === currentSlide ? '#3f72af' : 'rgba(255, 255, 255, 0.7)');
        });
    }
    
    // 自动轮播
    var autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            currentSlide = (currentSlide + 1) % images.length;
            updateSlide();
        }, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    startAutoSlide();
    
    // 创建Canvas画板
    var canvasContainer = $('<div>', {
        css: {
            'width': '100%',
            'height': '400px',
            'position': 'relative',
            'border-radius': '15px',
            'overflow': 'hidden',
            'background': 'white',
            'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.05)',
            'border': '3px solid rgba(63, 114, 175, 0.3)',
            'padding': '10px',
            'box-sizing': 'border-box'
        }
    });
    
    // 创建Canvas元素
    var canvas = $('<canvas id="drawingCanvas"></canvas>').css({
        'width': '100%',
        'height': '100%',
        'cursor': 'crosshair',
        'background': '#fff',
        'border-radius': '10px'
    });
    
    canvasContainer.append(canvas);
    
    // 添加控制面板
    var controlPanel = $('<div>', {
        css: {
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'gap': '20px',
            'margin-top': '20px',
            'background': 'rgba(255, 255, 255, 0.7)',
            'padding': '15px',
            'border-radius': '10px',
            'box-shadow': '0 3px 10px rgba(0, 0, 0, 0.05)'
        }
    });
    
    // 添加颜色选择器容器
    var colorPickerContainer = $('<div>', {
        css: {
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'gap': '5px'
        }
    });
    
    var colorPickerLabel = $('<span>', {
        text: '颜色',
        css: {
            'color': '#3f72af',
            'font-size': '14px',
            'font-weight': 'bold'
        }
    });
    
    // 添加颜色选择器
    var colorPicker = $('<input>', {
        type: 'color',
        value: '#3f72af',
        css: {
            'width': '40px',
            'height': '40px',
            'border': 'none',
            'border-radius': '8px',
            'cursor': 'pointer',
            'padding': '0',
            'background': 'none',
            'box-shadow': '0 2px 5px rgba(0, 0, 0, 0.1)'
        }
    });
    
    colorPickerContainer.append(colorPickerLabel, colorPicker);
    
    // 添加线宽选择器容器
    var lineWidthContainer = $('<div>', {
        css: {
            'display': 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'gap': '5px',
            'min-width': '120px'
        }
    });
    
    var lineWidthLabel = $('<span>', {
        text: '线宽',
        css: {
            'color': '#3f72af',
            'font-size': '14px',
            'font-weight': 'bold'
        }
    });
    
    var lineWidthInput = $('<input>', {
        type: 'range',
        min: '1',
        max: '20',
        value: '5',
        css: {
            'width': '100%'
        }
    });
    
    // 添加线宽数值显示
    var lineWidthValue = $('<span>', {
        text: '5',
        css: {
            'color': '#3f72af',
            'font-size': '12px'
        }
    });
    
    // 更新线宽数值显示
    lineWidthInput.on('input', function() {
        lineWidthValue.text($(this).val());
    });
    
    lineWidthContainer.append(lineWidthLabel, lineWidthInput, lineWidthValue);
    
    // 添加清除按钮
    var clearButton = $('<button>', {
        text: '清除画板',
        css: {
            'padding': '10px 20px',
            'background': 'linear-gradient(to right, #5e60ce, #6930c3)',
            'color': 'white',
            'border': 'none',
            'border-radius': '8px',
            'cursor': 'pointer',
            'transition': 'all 0.3s ease',
            'font-size': '14px',
            'font-weight': 'bold',
            'box-shadow': '0 3px 6px rgba(0, 0, 0, 0.1)'
        }
    }).hover(
        function() { 
            $(this).css({
                'transform': 'translateY(-2px)',
                'box-shadow': '0 5px 10px rgba(0, 0, 0, 0.15)'
            }); 
        },
        function() { 
            $(this).css({
                'transform': 'translateY(0)',
                'box-shadow': '0 3px 6px rgba(0, 0, 0, 0.1)'
            }); 
        }
    );
    
    controlPanel.append(colorPickerContainer, lineWidthContainer, clearButton);
    
    // 将所有元素添加到主容器
    mainContainer.append(carouselContainer, canvasContainer, controlPanel);
    
    // Canvas绘画逻辑
    setTimeout(function() {
        // 确保canvas元素已添加到DOM
        var canvasElement = document.getElementById('drawingCanvas');
        if (!canvasElement) {
            console.error('Canvas element not found!');
            return;
        }
        
        var ctx = canvasElement.getContext('2d');
        
        // 设置Canvas尺寸
        function resizeCanvas() {
            canvasElement.width = canvasElement.offsetWidth;
            canvasElement.height = canvasElement.offsetHeight;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        }
        
        resizeCanvas();
        $(window).resize(resizeCanvas);
        
        // 绘画状态
        var isDrawing = false;
        var lastX = 0;
        var lastY = 0;
        
        // 监听鼠标事件
        $(canvasElement).mousedown(function(e) {
            isDrawing = true;
            var rect = canvasElement.getBoundingClientRect();
            lastX = e.clientX - rect.left;
            lastY = e.clientY - rect.top;
        });
        
        $(canvasElement).mousemove(function(e) {
            if (!isDrawing) return;
            
            var rect = canvasElement.getBoundingClientRect();
            var currentX = e.clientX - rect.left;
            var currentY = e.clientY - rect.top;
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(currentX, currentY);
            ctx.strokeStyle = colorPicker.val();
            ctx.lineWidth = lineWidthInput.val();
            ctx.lineCap = 'round';
            ctx.stroke();
            
            lastX = currentX;
            lastY = currentY;
        });
        
        $(canvasElement).mouseup(function() {
            isDrawing = false;
        });
        
        $(canvasElement).mouseleave(function() {
            isDrawing = false;
        });
        
        // 清除画板
        clearButton.click(function() {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);
        });
    }, 100); // 添加100毫秒延迟，确保DOM元素已完全加载
}); 