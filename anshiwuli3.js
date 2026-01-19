```
// 全局变量
let allFiles = [...filesData];
let filteredFiles = [...filesData];
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initPage();
    setupEventListeners();
    renderFileGrid();
});

// 初始化页面
function initPage() {
    // 更新总下载量显示
    updateTotalDownloads();
    
    // 更新最后更新日期
    updateLastModified();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value.trim().toLowerCase();
        filterAndRender();
    });
    
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        currentSearch = '';
        filterAndRender();
    });
    
    // 筛选按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // 更新活动按钮
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            
            // 更新筛选条件
            currentFilter = this.dataset.filter;
            filterAndRender();
        });
    });
    
    // 排序功能
    document.getElementById('sortSelect').addEventListener('change', function(e) {
        currentSort = e.target.value;
        sortFiles();

```

