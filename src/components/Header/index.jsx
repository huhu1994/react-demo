import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

const NAV_ITEMS = [
  { label: '首页', to: '/' },
  { label: '国内物流', to: '/domestic' },
  { label: '国际物流', to: '/international' },
  { label: '科技与其他', to: '/tech' },
  { label: 'ESG', to: '/esg' },
  { label: '关于我们', to: '/about' },
];

function LogoMark() {
  return (
    <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#2e6bef" />
      <path d="M9 27c8.5 1.2 15-3.8 16.4-13.2L31 20c-2 7.6-8.4 11.6-16.2 10.4L9 27z" fill="#fff" />
      <path d="M9 27c4.6-8.4 10-12.9 16.4-13.2l-4.8 9.6L9 27z" fill="#c3d7ff" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="菜鸟 CAINIAO">
          <LogoMark />
          <span className="logo-text">
            <b>菜鸟</b>
            <i>CAINIAO NETWORK</i>
          </span>
        </Link>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-utils">
          <a className="util-link" href="#!" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1v-7H6v-1a6 6 0 1 1 12 0v1h-2v7h1a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8z" />
            </svg>
            菜鸟供应链服务
          </a>
          <span className="util-divider" />
          <a className="util-link" href="#!" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7z" />
            </svg>
            注册登录
          </a>
          <span className="util-divider" />
          <a className="util-link" href="#!" onClick={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2c1.6 0 3 2.7 3.4 6H8.6C9 6.7 10.4 4 12 4zM6.2 10H4.3a8 8 0 0 1 3.2-5 13 13 0 0 0-1.3 5zm0 4c.2 1.9.7 3.6 1.3 5a8 8 0 0 1-3.2-5h1.9zm2 0h7.6c-.4 3.3-1.8 6-3.8 6s-3.4-2.7-3.8-6zm9.6-4c-.2-1.9-.7-3.6-1.3-5a8 8 0 0 1 3.2 5h-1.9zm2 4a8 8 0 0 1-3.2 5c.6-1.4 1.1-3.1 1.3-5h1.9z" />
            </svg>
            简体中文
          </a>
        </div>

        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="打开导航"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
