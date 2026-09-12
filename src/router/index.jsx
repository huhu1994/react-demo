import Layout from '../components/Layout';
import Home from '../pages/home';
import Domestic from '../pages/domestic';
import International from '../pages/international';
import Tech from '../pages/tech';
import Esg from '../pages/esg';
import About from '../pages/about';
import News from '../pages/news';

// Layout 作为父路由，所有子页面自动共享 Header / Footer
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'domestic', element: <Domestic /> },
      { path: 'international', element: <International /> },
      { path: 'tech', element: <Tech /> },
      { path: 'esg', element: <Esg /> },
      { path: 'about', element: <About /> },
      { path: 'news', element: <News /> },
    ],
  },
];

export default routes;
