import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './router';
import './App.css';

// useRoutes 必须在 <BrowserRouter> 内部调用，因此拆成子组件
function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
