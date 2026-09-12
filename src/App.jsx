import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './router';
import './App.css';

// Data Router：支持 useMatches、handle 等数据路由 API
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
