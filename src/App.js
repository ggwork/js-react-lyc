import './App.css';
import { ConfigProvider } from 'antd'
import { MyRouter }  from './router'
import zhCN from 'antd/es/locale-provider/zh_CN';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <MyRouter></MyRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
