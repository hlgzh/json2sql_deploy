const translations = {
    zh: {
        title: 'JSON to SQL Tool',
        jsonInput: 'JSON Input',
        sqlOutput: 'SQL Output',
        format: 'Format',
        expand: 'Expand',
        collapse: 'Collapse',
        clear: 'Clear',
        copy: 'Copy',
        convert: 'Convert',
        tableName: 'Table name (default: my_table)',
        help: 'Help',
        validJson: '✓ Valid JSON',
        invalidJson: '✗ Invalid JSON',
        copied: 'Copied!',
        basicOperations: 'Basic Operations:',
        shortcuts: 'Shortcuts:',
        dataTypes: 'Supported Data Types:',
        operationSteps: [
            'Enter JSON data in the left editor',
            'Select target SQL type (MySQL/PostgreSQL/SQLite)',
            'Enter table name (optional)',
            'Click "Convert" to generate SQL'
        ],
        jsonType: 'JSON Type',
        string: 'String',
        numberInt: 'Number (Integer)',
        numberFloat: 'Number (Float)',
        boolean: 'Boolean',
        arrayObject: 'Array/Object',
        dateString: 'Date String'
    },
    en: {
        title: 'JSON to SQL Converter',
        jsonInput: 'JSON Input',
        sqlOutput: 'SQL Output',
        format: 'Format',
        expand: 'Expand',
        collapse: 'Collapse',
        clear: 'Clear',
        copy: 'Copy',
        convert: 'Convert',
        tableName: 'Table name (default: my_table)',
        help: 'Help',
        validJson: '✓ Valid JSON',
        invalidJson: '✗ Invalid JSON',
        copied: 'Copied!',
        basicOperations: 'Basic Operations:',
        shortcuts: 'Shortcuts:',
        dataTypes: 'Supported Data Types:',
        operationSteps: [
            'Enter JSON data in the left editor',
            'Select target SQL type (MySQL/PostgreSQL/SQLite)',
            'Enter table name (optional)',
            'Click "Convert" to generate SQL'
        ],
        jsonType: 'JSON Type',
        string: 'String',
        numberInt: 'Number (Integer)',
        numberFloat: 'Number (Float)',
        boolean: 'Boolean',
        arrayObject: 'Array/Object',
        dateString: 'Date String'
    }
};

// 语言切换函数
function setLanguage(lang) {
    const t = translations[lang];
    document.title = t.title;
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });

    // 更新按钮标题
    document.getElementById('formatJson').title = t.format;
    document.getElementById('expandJson').title = t.expand;
    document.getElementById('collapseJson').title = t.collapse;
    document.getElementById('clearJson').title = t.clear;
    
    // 更新其他动态内容
    document.getElementById('tableName').placeholder = t.tableName;
    document.querySelector('#convertBtn').innerHTML = `<i class="bi bi-arrow-right-circle"></i> ${t.convert}`;
    document.querySelector('#copySql').innerHTML = `<i class="bi bi-clipboard"></i> ${t.copy}`;
}

// 导出函数和翻译
window.i18n = {
    setLanguage,
    translations
};
