import PageBanner from '../../components/PageBanner';
import Reveal from '../../components/Reveal';
import { img } from '../../utils/image';

const BANNER = img(
  'wind turbines and solar panels next to green logistics park, clear sky, aerial photography, photorealistic',
  'landscape_16_9'
);

const PILLARS = [
  {
    title: '绿色物流',
    desc: '推广电子面单、装箱算法与新能源运力，从包裹全生命周期降低碳排放。',
    tags: ['电子面单', '装箱算法', '新能源车'],
    image: img(
      'electric delivery van charging at green warehouse with solar panels on roof, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '社会责任',
    desc: '以物流网络支撑乡村快递进村与应急救灾运输，创造高质量就业岗位。',
    tags: ['快递进村', '应急救灾', '就业岗位'],
    image: img(
      'volunteers loading relief supply boxes onto truck in rural village, warm light, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '公司治理',
    desc: '建立完善的合规与廉正体系，坚持数据安全与用户隐私保护，稳健经营。',
    tags: ['合规经营', '廉正举报', '数据安全'],
    image: img(
      'modern corporate office glass building exterior with blue sky, architecture photography',
      'landscape_4_3'
    ),
  },
];

const COMMITMENTS = [
  { strong: '电子面单覆盖率超 95%', rest: '，年减少纸张消耗数万吨' },
  { strong: '装箱算法优化包裹', rest: '，单包裹平均减塑 15% 以上' },
  { strong: '新能源运力规模化投放', rest: '，覆盖核心城市末端配送' },
  { strong: '快递进村持续下沉', rest: '，服务网络覆盖更多乡村地区' },
];

export default function Esg() {
  return (
    <div>
      <PageBanner
        title="ESG"
        subtitle="不断完善 ESG 能力建设，做有担当的全球化科技公司"
        image={BANNER}
      />

      <section className="section">
        <div className="section-head">
          <h2>三大支柱</h2>
        </div>
        <div className="service-grid">
          {PILLARS.map((s, i) => (
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
              <h2>我们的承诺</h2>
            </div>
            <ul className="network-stats">
              {COMMITMENTS.map((item) => (
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
