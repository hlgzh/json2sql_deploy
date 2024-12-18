// 处理垂直分隔条拖动
function initVerticalResizer() {
    const resizer = document.querySelector('.editor-vertical-resizer');
    const configSection = document.querySelector('.config-section');
    const sqlOutput = document.querySelector('.sql-output');
    let startY;
    let startHeight;
    let containerHeight;
    let animationFrameId;

    function onMouseDown(e) {
        startY = e.clientY;
        startHeight = configSection.getBoundingClientRect().height;
        containerHeight = configSection.parentElement.clientHeight;
        resizer.classList.add('dragging');
        
        document.addEventListener('mousemove', onMouseMove, { passive: true });
        document.addEventListener('mouseup', onMouseUp);
        
        // 防止文本选择
        e.preventDefault();
    }

    function updateHeight(newHeight) {
        // 限制最小和最大高度（20% - 80%）
        const minHeight = containerHeight * 0.2;
        const maxHeight = containerHeight * 0.8;
        newHeight = Math.min(Math.max(newHeight, minHeight), maxHeight);
        
        configSection.style.height = `${newHeight}px`;
        
        // 如果有CodeMirror实例，刷新它
        if (window.sqlEditor) window.sqlEditor.refresh();
    }

    function onMouseMove(e) {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
            const deltaY = e.clientY - startY;
            const newHeight = startHeight + deltaY;
            updateHeight(newHeight);
        });
    }

    function onMouseUp() {
        resizer.classList.remove('dragging');
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
    initVerticalResizer();
});
