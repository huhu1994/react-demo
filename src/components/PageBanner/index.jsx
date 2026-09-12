import './index.css';

// 二级页面统一横幅：背景图 + 标题 + 副标题
export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="page-banner">
      {image && <img className="page-banner-bg" src={image} alt="" />}
      <div className="page-banner-overlay" />
      <div className="page-banner-inner">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
