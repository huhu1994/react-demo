import PageBanner from '../../components/PageBanner';
import { img } from '../../utils/image';

const BANNER = img(
  'modern corporate headquarters glass tower with company flags, blue sky, architecture photography',
  'landscape_16_9'
);

const PROFILE = [
  { strong: '全球 1,100 多个仓库', rest: '，总仓储面积超 1,600 万平米' },
  { strong: '服务 200 多个国家和地区', rest: '，连接全球主要消费市场' },
  { strong: '170,000 多个菜鸟驿站', rest: '，覆盖全球主要社区与校园' },
  { strong: '全球 400+ 企业客户', rest: '，一站式智能物流合作伙伴' },
];

export default function About() {
  return (
    <div>
      <PageBanner
        title="关于我们"
        subtitle="全球化物流产业互联网平台"
        image={BANNER}
      />

      <section className="section">
        <div className="section-head">
          <h2>菜鸟简介</h2>
        </div>
        <p className="section-lead">
          菜鸟是全球领先的物流产业互联网平台，以数据驱动与协同共享为核心，联合全球合作伙伴建设智能化、开放化的物流网络。我们相信，通过技术与模式的持续创新，能让天下没有难做的物流，让中小企业也能平等地参与全球贸易。
        </p>
        <p className="section-lead">
          今天，菜鸟的物流能力覆盖国内快递、国际物流、供应链服务与物流科技等领域，为品牌商家、平台与消费者提供端到端的履约保障。
        </p>
      </section>

      <section className="network">
        <div className="network-inner">
          <div className="network-text">
            <div className="section-head">
              <h2>数读菜鸟</h2>
            </div>
            <ul className="network-stats">
              {PROFILE.map((item) => (
                <li key={item.strong}>
                  <b>{item.strong}</b>
                  {item.rest}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>联系我们</h2>
        </div>
        <p className="section-lead">
          商务合作与媒体垂询请通过官方渠道联系，我们将在 1–2 个工作日内回复。
        </p>
        <div className="service-tags" style={{ marginTop: 20 }}>
          <span>商务合作</span>
          <span>媒体垂询</span>
          <span>加入我们</span>
        </div>
      </section>
    </div>
  );
}
