// 处理水平分隔条拖动
function initHorizontalResizer() {
    const container = document.querySelector('.editor-container');
    const leftEditor = document.getElementById('left-editor');
    const rightEditor = document.getElementById('right-editor');
    const resizer = document.createElement('div');
    
    // 创建分隔条元素
    resizer.className = 'editor-horizontal-resizer';
    container.insertBefore(resizer, rightEditor);

    // 初始宽度设置
    leftEditor.style.width = '50%';
    rightEditor.style.width = '50%';

    let isResizing = false;
    let startX;
    let startLeftWidth;
    let containerWidth;
    let animationFrameId;

    function onMouseDown(e) {
        isResizing = true;
        startX = e.clientX;
        startLeftWidth = leftEditor.getBoundingClientRect().width;
        containerWidth = container.getBoundingClientRect().width;
        
        // 添加拖动状态类
        document.body.classList.add('resizing');
        
        document.addEventListener('mousemove', onMouseMove, { passive: true });
        document.addEventListener('mouseup', onMouseUp);
        
        // 防止文本选择
        e.preventDefault();
    }

    function updateWidths(newLeftWidthPercent) {
        // 限制最小和最大宽度（20% - 80%）
        newLeftWidthPercent = Math.min(Math.max(newLeftWidthPercent, 20), 80);
        
        // 使用 transform 而不是直接改变宽度，性能更好
        leftEditor.style.width = `${newLeftWidthPercent}%`;
        rightEditor.style.width = `${100 - newLeftWidthPercent}%`;
    }

    function onMouseMove(e) {
        if (!isResizing) return;

        // 取消之前的动画帧
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        // 使用 requestAnimationFrame 来优化性能
        animationFrameId = requestAnimationFrame(() => {
            const deltaX = e.clientX - startX;
            const newLeftWidthPercent = ((startLeftWidth + deltaX) / containerWidth) * 100;
            updateWidths(newLeftWidthPercent);

            // 延迟刷新 CodeMirror，避免频繁刷新
            if (window.jsonEditor) window.jsonEditor.refresh();
            if (window.sqlEditor) window.sqlEditor.refresh();
        });
    }

    function onMouseUp() {
        isResizing = false;
        document.body.classList.remove('resizing');
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    }

    resizer.addEventListener('mousedown', onMouseDown);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initHorizontalResizer();
});
