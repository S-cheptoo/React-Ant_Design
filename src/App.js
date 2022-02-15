import React from 'react';
import 'antd/dist/antd.css'

import AppHeader from './Components/commons/header';
import { Layout} from 'antd';

const { Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
        
      </Header>
  </Layout>
  );
}

export default App;
