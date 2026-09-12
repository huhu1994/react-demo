import PageBanner from '../../components/PageBanner';
import Reveal from '../../components/Reveal';
import { img } from '../../utils/image';

const BANNER = img(
  'parcel sorting center with conveyor belts and delivery vans outside, morning light, corporate photography, photorealistic',
  'landscape_16_9'
);

const SERVICES = [
  {
    title: '国内快递',
    desc: '覆盖全国 300 多个城市的快递网络，提供半日达、次日达等多种时效产品，大件小件均可高效履约。',
    tags: ['半日达', '次日达', '大件快递'],
    image: img(
      'courier in blue uniform delivering parcel to residential door, bright daylight, corporate photography',
      'landscape_4_3'
    ),
  },
  {
    title: '国内货运',
    desc: '全网干线运力与数字化调度系统协同，提供整车、零担与仓配一体化的货物运输服务。',
    tags: ['整车运输', '零担专线', '仓配一体'],
    image: img(
      'blue freight trucks parked at modern logistics depot at dawn, fleet, photorealistic',
      'landscape_4_3'
    ),
  },
  {
    title: '供应链服务',
    desc: '面向品牌商家的一站式供应链解决方案，从入仓、分仓到末端配送全链路托管。',
    tags: ['全托管', '分仓备货', '全链路'],
    image: img(
      'supply chain control room with large screens showing logistics data, operators, photorealistic',
      'landscape_4_3'
    ),
  },
];

const ADVANTAGES = [
  { strong: '覆盖 300 多个城市', rest: '，区县配送网络深入下沉市场' },
  { strong: '半日达时效产品', rest: '，核心城市群当日 20:00 前送达' },
  { strong: '数字化分单系统', rest: '，分拨中心自动化分拣效率提升 50%' },
  { strong: '大件快递专属网络', rest: '，上楼入户安装一体化服务' },
];

export default function Domestic() {
  return (
    <div>
      <PageBanner
        title="国内物流"
        subtitle="中国领先的数字化物流与供应链服务"
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
              <h2>服务优势</h2>
            </div>
            <ul className="network-stats">
              {ADVANTAGES.map((item) => (
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
