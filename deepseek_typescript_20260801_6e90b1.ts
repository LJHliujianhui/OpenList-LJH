/**
 * OpenList-Moe 核心逻辑
 * 自定义版本：LJH-OpenList-v1.0
 * 配色：绿色系 (#006d34)
 */

// ... 原有 import 和工具函数（保持不变） ...

// ==================== 控制台输出 ====================
// 修改版本标识和配色
console.log(
  "\n %c LJH-OpenList %c v1.0 ",
  "padding: 5px 0; border-radius: 3px 0 0 3px; color: #fff; background: #006d34; font-weight: bold;",
  "padding: 5px 0; border-radius: 0 3px 3px 0; color: #fff; background: #004d23; font-weight: bold;"
);

// ==================== 主题色设置 ====================
// 将主题色（绿色）注入 CSS 变量，供其他组件使用
document.documentElement.style.setProperty('--moe-theme-color', '#006d34');

// ==================== 页面加载完成处理 ====================
function OpenList_Loaded() {
  document.body.classList.add("loaded");
  // 原有其他加载逻辑（保持）
  
  // ===== 删除备案自动插入 =====
  // 原 insertBeian() 函数调用已被移除，不再自动添加备案信息
  // 如需保留，可取消注释以下代码（但按需求已删除）
  /*
  const footer = document.querySelector('.footer');
  if (footer) {
    const beianDiv = document.createElement('div');
    beianDiv.style.textAlign = 'center';
    beianDiv.innerHTML = `<a href="https://beian.miit.gov.cn">豫ICP备xxxx号</a>`;
    footer.appendChild(beianDiv);
  }
  */
}

// ==================== 其他辅助函数（保持不变） ====================
// 例如 hexToRgb、DOM 监听等

// 触发加载完成（原有逻辑）
if (document.readyState === 'complete') {
  OpenList_Loaded();
} else {
  window.addEventListener('load', OpenList_Loaded);
}