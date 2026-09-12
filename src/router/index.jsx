import Layout from '../components/Layout';
import Home from '../pages/home';
import Domestic from '../pages/domestic';
import International from '../pages/international';
import Tech from '../pages/tech';
import Esg from '../pages/esg';
import About from '../pages/about';
import News from '../pages/news';

// Layout 作为父路由，所有子页面自动共享 Header / Footer
const SITE_NAME = '菜鸟';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, handle: { title: `首页 | ${SITE_NAME} - 自动化仓储` } },
      { path: 'domestic', element: <Domestic />, handle: { title: `国内物流 | ${SITE_NAME}` } },
      { path: 'international', element: <International />, handle: { title: `国际物流 | ${SITE_NAME}` } },
      { path: 'tech', element: <Tech />, handle: { title: `科技与其他 | ${SITE_NAME}` } },
      { path: 'esg', element: <Esg />, handle: { title: `ESG | ${SITE_NAME}` } },
      { path: 'about', element: <About />, handle: { title: `关于我们 | ${SITE_NAME}` } },
      { path: 'news', element: <News />, handle: { title: `新闻动态 | ${SITE_NAME}` } },
    ],
  },
];

export { SITE_NAME };
export default routes;
