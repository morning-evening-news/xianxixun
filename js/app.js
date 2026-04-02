/**
 * 前端交互脚本
 */

document.addEventListener('DOMContentLoaded', function() {
  // 添加页面加载动画
  document.querySelectorAll('.news-item').forEach((item, index) => {
    item.style.opacity = '0';
    setTimeout(() => {
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      item.style.opacity = '1';
    }, index * 100);
  });

  // 自动刷新提示
  const lastUpdate = localStorage.getItem('lastUpdate');
  const now = Date.now();
  
  if (lastUpdate && now - parseInt(lastUpdate) > 3600000) {
    // 超过 1 小时未刷新，显示提示
    showRefreshNotice();
  }
  
  localStorage.setItem('lastUpdate', now.toString());

  // 添加外部链接图标
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.innerHTML += ' <span style="font-size: 0.8em;">↗</span>';
  });
});

function showRefreshNotice() {
  const notice = document.createElement('div');
  notice.className = 'refresh-notice';
  notice.innerHTML = `
    <div style="position: fixed; top: 20px; right: 20px; background: #3498db; color: white; padding: 15px 25px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 1000; cursor: pointer;">
      📢 有新新闻可用，点击刷新
    </div>
  `;
  
  notice.querySelector('div').addEventListener('click', () => {
    window.location.reload();
  });
  
  document.body.appendChild(notice);
  
  // 5 秒后自动消失
  setTimeout(() => {
    notice.style.transition = 'opacity 0.5s ease';
    notice.style.opacity = '0';
    setTimeout(() => notice.remove(), 500);
  }, 5000);
}

// 添加快捷键支持
document.addEventListener('keydown', function(e) {
  // R 键刷新
  if (e.key === 'r' && !e.ctrlKey && !e.metaKey) {
    window.location.reload();
  }
  
  // H 键返回首页
  if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
    window.location.href = '/';
  }
});
