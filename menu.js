(function () {
  const style = document.createElement('style');
  style.textContent = `
    #sidebar {
      width: 18rem;
      overflow: hidden;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-width 0.3s ease;
    }
    @media (min-width: 1024px) {
      #sidebar.desktop-collapsed {
        width: 0 !important;
        border-right-width: 0 !important;
      }
    }
    @media (max-width: 1023px) {
      #sidebar { transform: translateX(-100%) !important; }
      #sidebar.mobile-open { transform: translateX(0) !important; }
    }
    .sidebar-scroll::-webkit-scrollbar { width: 4px; }
    .sidebar-scroll::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 9999px; }
  `;
  document.head.appendChild(style);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const sidebarHTML = `
    <div id="mobile-backdrop" onclick="toggleSidebar()" class="fixed inset-0 bg-slate-900/50 z-30 hidden lg:hidden backdrop-blur-xs"></div>
    <aside id="sidebar" class="fixed lg:sticky top-0 left-0 z-40 h-screen shrink-0 bg-slate-900 text-slate-300 border-r border-slate-800">
      <div class="w-72 h-full flex flex-col">
        <div class="flex-1 overflow-y-auto sidebar-scroll p-6 space-y-8">
          
          <!-- 品牌標誌 -->
          <div class="flex items-center justify-between pb-5 border-b border-slate-800">
            <a href="index.html" class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-500 text-slate-950 flex items-center justify-center shadow-sm">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="text-sm font-bold text-white tracking-wide">AI 教學應用指南</div>
                <div class="text-[11px] text-slate-400">Teaching &amp; Learning</div>
              </div>
            </a>
            <button onclick="toggleSidebar()" class="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white" aria-label="關閉選單">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <!-- 導覽選單 -->
          <nav>
            <div class="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-3">Navigation</div>
            <ul class="space-y-1 text-sm">
              <li>
                <a href="index.html" data-page="index.html" class="menu-link flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors">
                  <i data-lucide="shield-check" class="w-4 h-4 text-teal-400"></i>
                  <span>AI 使用倫理與總覽</span>
                </a>
              </li>

              <!-- 手風琴分類：提示詞實戰庫 -->
              <li class="pt-1">
                <button onclick="toggleAccordion('acc-prompts', this)" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-300 hover:bg-slate-800/80 hover:text-white transition-colors">
                  <span class="flex items-center gap-2.5">
                    <i data-lucide="terminal" class="w-4 h-4 text-indigo-400"></i>
                    <span>提示詞實戰庫</span>
                  </span>
                  <i data-lucide="chevron-down" class="acc-icon w-4 h-4 text-slate-500 transition-transform duration-200 rotate-180"></i>
                </button>
                <ul id="acc-prompts" class="mt-1 ml-4 pl-3 border-l border-slate-800 space-y-1">
                  <li>
                    <a href="teacher-prompts.html" data-page="teacher-prompts.html" class="menu-link block px-3 py-2 rounded-lg text-xs sm:text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
                      教師常用 Prompt
                    </a>
                  </li>
                  <li>
                    <a href="student-prompts.html" data-page="student-prompts.html" class="menu-link block px-3 py-2 rounded-lg text-xs sm:text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
                      學生自主學習 Prompt
                    </a>
                  </li>
                </ul>
              </li>

              <li class="pt-2 border-t border-slate-800/80 mt-2">
                <a href="https://www.zhengyiwang.com/" class="flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800/80 hover:text-white transition-colors">
                  <span class="flex items-center gap-2.5">
                    <i data-lucide="home" class="w-4 h-4"></i>
                    <span>返回個人主站</span>
                  </span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-500"></i>
                </a>
              </li>
            </ul>
          </nav>

          <!-- 聯絡區塊 -->
          <section class="pt-5 border-t border-slate-800">
            <div class="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-3">Contact</div>
            <ul class="space-y-2.5 text-xs text-slate-400">
              <li class="flex items-center gap-2.5">
                <i data-lucide="mail" class="w-3.5 h-3.5 text-teal-400 shrink-0"></i>
                <a href="mailto:zhengyi1020@ntnu.edu.tw" class="hover:text-white break-all">zhengyi1020@ntnu.edu.tw</a>
              </li>
              <li class="flex items-center gap-2.5">
                <i data-lucide="globe" class="w-3.5 h-3.5 text-teal-400 shrink-0"></i>
                <a href="https://www.zhengyiwang.com/" class="hover:text-white">zhengyiwang.com</a>
              </li>
            </ul>
          </section>
        </div>

        <div class="px-6 py-4 border-t border-slate-800 text-[11px] text-slate-500">
          © 2026 Zheng-Yi Wang.
        </div>
      </div>
    </aside>
  `;

  const layout = document.getElementById('app-layout');
  if (layout) layout.insertAdjacentHTML('afterbegin', sidebarHTML);

  document.querySelectorAll('.menu-link').forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.remove('text-slate-300', 'text-slate-400');
      link.classList.add('bg-slate-800', 'text-white', 'font-semibold');
    }
  });

  window.toggleSidebar = function () {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('mobile-backdrop');
    if (window.innerWidth >= 1024) {
      sidebar.classList.toggle('desktop-collapsed');
    } else {
      sidebar.classList.toggle('mobile-open');
      backdrop.classList.toggle('hidden');
    }
  };

  window.toggleAccordion = function (id, btn) {
    const submenu = document.getElementById(id);
    const icon = btn.querySelector('.acc-icon');
    submenu.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  };

  if (window.lucide) lucide.createIcons();
})();
