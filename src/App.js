import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';

import TopHeader from './Components/Common/Header/TopHeader';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header>
          <TopHeader />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
