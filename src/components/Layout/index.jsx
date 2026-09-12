import { useEffect } from 'react';
import { Outlet, useLocation, useMatches } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './index.css';

const DEFAULT_TITLE = '菜鸟 - 自动化仓储选菜鸟';

export default function Layout() {
  const { pathname } = useLocation();
  const matches = useMatches();

  // 路由切换时回到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 根据当前路由的 handle.title 统一设置浏览器标签页标题
  const currentTitle = matches[matches.length - 1]?.handle?.title;
  useEffect(() => {
    document.title = currentTitle || DEFAULT_TITLE;
  }, [currentTitle]);

  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
