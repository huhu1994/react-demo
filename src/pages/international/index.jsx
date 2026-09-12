import PageBanner from '../../components/PageBanner';
import Reveal from '../../components/Reveal';
import { img } from '../../utils/image';

const BANNER = img(
  'container port with cargo ships and cranes at sunset, global trade, aerial photography, photorealistic',
  'landscape_16_9'
);

const SERVICES = [
  {
    title: '国际快递',
    desc: '跨境小包裹优先揽收、快速清关，发往全球主要市场最快 5 日达，全程轨迹可视化。',
    tags: ['最快 5 日达', '优先清关', '全程追踪'],
    image: img(
      'international express parcels stacked on airport trolley near cargo plane, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '国际货运',
    desc: '海运整柜拼柜、空运包机与中欧班列多式联运，为大宗贸易提供稳定舱位保障。',
    tags: ['海运整柜', '空运包机', '多式联运'],
    image: img(
      'large container vessel loaded with colorful containers sailing on ocean, aerial view, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '海外仓储',
    desc: '海外仓全托管产品覆盖主要消费市场，商家备货入仓后由菜鸟完成本地履约与退换服务。',
    tags: ['全托管', '本地履约', '退换处理'],
    image: img(
      'overseas warehouse interior with forklift moving pallets, high racks, photorealistic',
      'landscape_4_3'
    ),
  },
];

const COVERAGE = [
  { strong: '服务 200 多个国家和地区', rest: '，连接全球主要消费市场' },
  { strong: '全球 15 个海外分拨中心', rest: '，枢纽联动提升干线效率' },
  { strong: '约 170 条海空运干线', rest: '，协同 2,700 多条陆运线路' },
  { strong: '与 100 多个口岸服务商合作', rest: '，智能清关秒级放行' },
];

export default function International() {
  return (
    <div>
      <PageBanner
        title="国际物流"
        subtitle="覆盖全球 200 多个国家和地区的智慧物流网络"
        image={BANNER}
      />

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

      <section className="network">
        <div className="network-inner">
          <div className="network-text">
            <div className="section-head">
              <h2>全球覆盖</h2>
            </div>
            <ul className="network-stats">
              {COVERAGE.map((item) => (
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
