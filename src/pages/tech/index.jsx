import PageBanner from '../../components/PageBanner';
import Reveal from '../../components/Reveal';
import { img } from '../../utils/image';

const BANNER = img(
  'futuristic logistics control tower with holographic data screens at night, blue tones, photorealistic',
  'landscape_16_9'
);

const SERVICES = [
  {
    title: '物流科技',
    desc: 'eHub 数字物流枢纽连接全球口岸，通过电子面单、智能分单与自动化设备重构物流全链路。',
    tags: ['eHub 枢纽', '电子面单', '自动化'],
    image: img(
      'automated guided robots sorting parcels in dark warehouse with blue lights, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '菜鸟App',
    desc: '一站式查件、寄件与国际转运平台，整合全网运力，为个人与商家提供便捷的寄件体验。',
    tags: ['一键寄件', '全球查件', '上门取货'],
    image: img(
      'person using mobile app to send parcel at self-service station, interface overlay, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '菜鸟驿站',
    desc: '170,000 多个社区驿站组成末端服务网络，提供代收保管、按需预约送货上门等服务。',
    tags: ['社区代收', '送货上门', '预约配送'],
    image: img(
      'community parcel pickup station with shelves of packages, staff helping customer, photorealistic',
      'landscape_4_3'
    ),
  },
];

const CAPABILITIES = [
  { strong: '日均处理包裹超千万件', rest: '，自动化系统稳定运行' },
  { strong: 'AI 预测算法', rest: '，应用于销量预测、库存分仓与路径规划' },
  { strong: '包裹全程数字化追踪', rest: '，从下单到签收可视可管' },
  { strong: '开放技术生态', rest: '，向商家与合作伙伴开放核心物流能力' },
];

export default function Tech() {
  return (
    <div>
      <PageBanner
        title="科技与其他"
        subtitle="用科技让物流更高效、更简单"
        image={BANNER}
      />

      <section className="section">
        <div className="section-head">
          <h2>科技与生态</h2>
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

      <section className="network">
        <div className="network-inner">
          <div className="network-text">
            <div className="section-head">
              <h2>核心能力</h2>
            </div>
            <ul className="network-stats">
              {CAPABILITIES.map((item) => (
                <li key={item.strong}>
                  <b>{item.strong}</b>
                  {item.rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
