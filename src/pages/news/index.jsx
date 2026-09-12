import PageBanner from '../../components/PageBanner';
import Reveal from '../../components/Reveal';
import { img } from '../../utils/image';

const BANNER = img(
  'press conference hall with blue stage lighting and news cameras, corporate event, photorealistic',
  'landscape_16_9'
);

const NEWS_LIST = [
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

export default function News() {
  return (
    <div>
      <PageBanner
        title="新闻动态"
        subtitle="了解菜鸟的最新进展与业务动态"
        image={BANNER}
      />

      <section className="section news">
        <div className="news-grid">
          <Reveal>
            <div className="news-brand">
              <b>新闻</b>
              <i>News</i>
              <span>CAINIAO 菜鸟</span>
            </div>
          </Reveal>
          {NEWS_LIST.map((n, i) => (
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
        </div>
      </section>
    </div>
  );
}
