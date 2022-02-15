import React from 'react';
import 'antd/dist/antd.min.css';
import './App.css';


import AppHome from './views/home/home';
import AppHeader from './Components/commons/header';
import { Layout} from 'antd';
const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
  </Layout>
  );
}

export default App;
