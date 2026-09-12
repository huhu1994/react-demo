import { Link } from 'react-router-dom';
import './index.css';

const LINK_COLUMNS = [
  {
    title: '国内物流1',
    links: [{ label: '国内快递' }, { label: '国内货运' }, { label: '其他业务' }],
  },
  {
    title: '国际物流',
    links: [{ label: '国际快递' }, { label: '国际货运' }, { label: '海外本地' }],
  },
  {
    title: '科技与其他',
    links: [{ label: '物流科技' }, { label: '菜鸟App' }, { label: '菜鸟驿站' }],
  },
  {
    title: 'ESG',
    links: [{ label: 'ESG主页' }],
  },
  {
    title: '关于我们',
    links: [
      { label: '菜鸟简介', to: '/about' },
      { label: '新闻动态', to: '/news' },
      { label: '联系我们' },
    ],
  },
];

const LEGAL_LINKS = ['品牌资料', '合作申请', '廉正举报', '菜鸟合规', '法律声明', '隐私政策'];

function stop(e) {
  e.preventDefault();
}

function QrCode() {
  return (
    <svg viewBox="0 0 40 40" className="qr" aria-hidden="true">
      <rect width="40" height="40" rx="4" fill="#fff" />
      <rect x="4" y="4" width="10" height="10" fill="#0a1f44" />
      <rect x="26" y="4" width="10" height="10" fill="#0a1f44" />
      <rect x="4" y="26" width="10" height="10" fill="#0a1f44" />
      <rect x="18" y="18" width="4" height="4" fill="#0a1f44" />
      <rect x="26" y="26" width="4" height="4" fill="#0a1f44" />
      <rect x="32" y="20" width="4" height="4" fill="#0a1f44" />
      <rect x="20" y="32" width="4" height="4" fill="#0a1f44" />
      <rect x="7" y="7" width="4" height="4" fill="#fff" />
      <rect x="29" y="7" width="4" height="4" fill="#fff" />
      <rect x="7" y="29" width="4" height="4" fill="#fff" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <rect width="40" height="40" rx="10" fill="#2e6bef" />
                <path d="M9 27c8.5 1.2 15-3.8 16.4-13.2L31 20c-2 7.6-8.4 11.6-16.2 10.4L9 27z" fill="#fff" />
                <path d="M9 27c4.6-8.4 10-12.9 16.4-13.2l-4.8 9.6L9 27z" fill="#c3d7ff" />
              </svg>
              <div>
                <b>菜鸟</b>
                <i>CAINIAO NETWORK</i>
              </div>
            </div>
            <p className="footer-slogan">全球化物流产业互联网平台</p>
          </div>

          <div className="footer-social">
            <div className="social-block">
              <span className="social-label">下载菜鸟App</span>
              <QrCode />
            </div>
            <div className="social-block">
              <span className="social-label">社交媒体</span>
              <div className="social-row">
                <a href="#!" aria-label="微信" onClick={stop}>微</a>
                <a href="#!" aria-label="微博" onClick={stop}>博</a>
                <a href="#!" aria-label="抖音" onClick={stop}>抖</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-cols">
          {LINK_COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) =>
                  link.to ? (
                    <li key={link.label}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a href="#!" onClick={stop}>{link.label}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-legal">
        <div className="legal-inner">
          <div className="legal-links">
            {LEGAL_LINKS.map((label) => (
              <a key={label} href="#!" onClick={stop}>{label}</a>
            ))}
          </div>
          <p>
            浙ICP备2023009950号-1 · 浙公网安备 33010802013337号 · 本网站仅作学习演示用途
          </p>
          <p className="copyright">© 2013–2026 菜鸟网络技术有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  );
}
