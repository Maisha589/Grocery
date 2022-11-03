import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import './App.css';

import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes
} from "react-router-dom";

import TopHeader from './Components/Common/Header/TopHeader';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Shop from './Components/Pages/Shop/Shop';
import Contact from './Components/Pages/Contact/Contact';
import Faq from './Components/Pages/Faq/Faq';
import FooterWidget from './Components/Common/FooterWidget/FooterWidget';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <BrowserRouter>
          <Header>
            <TopHeader />
          </Header>
          <Content>
            <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/shop' element={<Shop></Shop>}></Route>
              <Route path='/faq' element={<Faq></Faq>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
          </Content>
        </BrowserRouter>

        <Footer>
          <FooterWidget></FooterWidget>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
