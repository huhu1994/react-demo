import Reveal from '../../components/Reveal';
import { img } from '../../utils/image';
import './home.css';

const HERO_IMG = img(
  'vast automated logistics warehouse interior, endless blue plastic crates moving on conveyor lines, robotic arms, dramatic cool lighting, cinematic wide angle, photorealistic',
  'landscape_16_9'
);

const SERVICES = [
  {
    title: '国内物流',
    desc: '中国领先的数字化物流与供应链服务商，服务网络遍布全国 300 多个城市，以自建、合作与投资等方式深度协同产业供应链。',
    tags: ['国内快递', '国内货运', '其他业务'],
    image: img(
      'tall blue shelving racks inside modern e-commerce warehouse, forklift aisle, industrial photography, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '国际物流',
    desc: '全球化互联电商物流网络，服务覆盖全球 200 多个国家和地区，跨境包裹从中国发往全球主要市场最快可 5 日达。',
    tags: ['国际快递', '国际货运', '海外本地'],
    image: img(
      'cargo freight airplane being loaded with containers on tarmac at sunrise, aviation logistics, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '科技与其他',
    desc: '率先将云计算、物联网、人工智能等前沿技术应用于物流行业，日均处理包裹超千万件，持续引领行业数字化升级。',
    tags: ['物流科技', '菜鸟App', '菜鸟驿站'],
    image: img(
      'blue autonomous delivery robot with parcel driving on modern city street, product photography, photorealistic',
      'landscape_4_3'
    ),
  },
];

const MAP_IMG = img(
  'world map made of glowing blue dots with connecting flight arcs, minimalist data visualization on light background',
  'landscape_16_9'
);

const STATS = [
  { strong: '全球 1,100 多个仓库', rest: '，总仓储面积超 1,600 万平米' },
  { strong: '国内仓储面积超 300 万平米', rest: '，拥有全球领先的智能仓储网络' },
  { strong: '全球 300 多个分拨中心', rest: '，其中 15 个为海外分拨中心' },
  { strong: '全球约 170 条海运与空运干线', rest: '，协同超过 2,700 条陆运线路' },
  { strong: '与超过 100 个口岸服务商', rest: '合作建立智能物流枢纽' },
  { strong: '菜鸟驿站 170,000 多个', rest: '，覆盖全球主要社区与校园' },
];

const TECH = [
  {
    title: '智能硬件',
    desc: '融合多种物流硬件开发与复杂场景应用能力，覆盖仓储、分拨、配送全链路，持续提升物流效率与体验。',
    image: img(
      'close-up of robotic sorting arm with sensor in warehouse, blue accent light, industrial detail photography',
      'landscape_4_3'
    ),
  },
  {
    title: '人工智能',
    desc: '通过 AI 大模型优化运力调度与路径规划，将预测算法应用于销量预测、库存分仓与末端派送等核心场景。',
    image: img(
      'server racks in data center with glowing blue lights, technology visualization, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '软件应用',
    desc: '打造覆盖商家、平台与快递员的多端数字化产品，包括仓配管理系统、智能关务与全球轨迹追踪等应用。',
    image: img(
      'hand holding smartphone showing parcel tracking app, warehouse blurred background, photorealistic',
      'landscape_4_3'
    ),
  },
];

const ESG_IMG = img(
  'blue freight truck driving on highway through vast green wheat field, aerial view, sunny day, sustainability, photorealistic',
  'landscape_16_9'
);

const NEWS = [
  {
    title: '菜鸟推出海外仓全托管产品，使用 AI 为跨境商家降本，最高可降 40%',
    date: '2026-06-16',
    image: img(
      'workers scanning parcels in modern warehouse, corporate photography, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '菜鸟将在海外布局大规模机器人仓储网络，提升全球履约时效',
    date: '2026-03-12',
    image: img(
      'large automated warehouse with tall racks and stacked crates, industrial photography',
      'landscape_4_3'
    ),
  },
  {
    title: '菜鸟打造首个跨境出口前置仓监管仓，通关实现秒级放行',
    date: '2026-03-09',
    image: img(
      'customs inspection of export parcels in bright logistics facility, corporate photography',
      'landscape_4_3'
    ),
  },
  {
    title: '菜鸟海外仓开启全球联保配送，全国 200 城实现当日达',
    date: '2026-02-19',
    image: img(
      'business award ceremony on conference stage, audience, corporate event photography',
      'landscape_4_3'
    ),
  },
];

function stop(e) {
  e.preventDefault();
}

export default function Home() {
  return (
    <div className="home">
      {/* Hero 横幅 */}
      <section className="hero">
        <img className="hero-bg" src={HERO_IMG} alt="自动化仓储" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>自动化仓储选菜鸟</h1>
          <p>全球 400+ 企业的一站式智能物流伙伴选择</p>
          <a className="hero-cta" href="#!" onClick={stop}>立即咨询</a>
        </div>
      </section>

      {/* 公告条 */}
      <div className="notice-bar">
        <p>
          <span className="notice-tag">新闻</span>
          菜鸟推出海外仓全托管产品，使用 AI 为跨境商家降本增效，最高可降 40%
        </p>
        <a href="#!" onClick={stop}>了解更多 →</a>
      </div>

      {/* 我们的服务 */}
      <section className="section">
        <div className="section-head">
          <h2>我们的服务</h2>
        </div>
        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="service-card">
                <div className="service-media">
                  <img src={s.image} alt={s.title} loading="lazy" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 网络覆盖 */}
      <section className="network">
        <div className="network-inner">
          <div className="network-text">
            <div className="section-head">
              <h2>我们的网络覆盖</h2>
            </div>
            <p className="network-lead">
              菜鸟构建了具备智能化、开放性的全球物流产业互联网，连接
              <b> 200 多个国家和地区</b>，通过在全球布局 eHub
              数字物流枢纽，让更多中小企业享受全球化的物流服务。
            </p>
            <ul className="network-stats">
              {STATS.map((item) => (
                <li key={item.strong}>
                  <b>{item.strong}</b>
                  {item.rest}
                </li>
              ))}
            </ul>
          </div>
          <div className="network-map">
            <img src={MAP_IMG} alt="全球物流网络" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 技术能力 */}
      <section className="section">
        <div className="section-head">
          <h2>我们的技术能力</h2>
        </div>
        <p className="section-lead">
          科技是菜鸟优化效率、提升客户体验和促进创新的关键。通过一体化协同、自动化与数据技术，实现物流全链路的可视、可管、可控。
        </p>
        <div className="tech-grid">
          {TECH.map((t, i) => (
            <Reveal key={t.title} delay={i * 120}>
              <article className="tech-card">
                <div className="tech-media">
                  <img src={t.image} alt={t.title} loading="lazy" />
                </div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ESG 横幅 */}
      <section className="esg">
        <img className="esg-bg" src={ESG_IMG} alt="绿色物流" loading="lazy" />
        <div className="esg-content">
          <h2>ESG</h2>
          <p>不断完善 ESG 能力建设，致力于成为一家碳减排、保民生、促合作、有担当的全球化科技公司。</p>
          <a className="esg-cta" href="#!" onClick={stop}>了解更多</a>
        </div>
      </section>

      {/* 新闻中心 */}
      <section className="section news">
        <div className="section-head row">
          <h2>新闻中心</h2>
          <a className="more-link" href="#!" onClick={stop}>查看更多</a>
        </div>
        <div className="news-grid">
          <Reveal>
            <div className="news-brand">
              <b>新闻</b>
              <i>News</i>
              <span>CAINIAO 菜鸟</span>
            </div>
          </Reveal>
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={(i + 1) * 100}>
              <article className="news-card">
                <img src={n.image} alt="" loading="lazy" />
                <div className="news-body">
                  <h3>{n.title}</h3>
                  <div className="news-meta">
                    <time>{n.date}</time>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal delay={500}>
            <a className="news-more-tile" href="#!" onClick={stop}>
              <b>查看全部新闻</b>
              <span>共 128 条 →</span>
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
