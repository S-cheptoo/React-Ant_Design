import { Menu } from "antd";
import React from 'react';

function AppHeader(){
    return (
        <div className="container-fluid">
            <div className="header-file">
                <div className="logo"><i class="fa-solid fa-bolt-lightning"></i> </div>
                 <i class="fa-solid fa-bolt-lightning"></i> 
                 
                <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>Home</Menu.Item>
                    <Menu.Item key='2'>About</Menu.Item>
                    <Menu.Item key='3'>Features</Menu.Item>
                    <Menu.Item key='4'>How it works</Menu.Item>
                    <Menu.Item key='5'>FAQ</Menu.Item>
                    <Menu.Item key='6'>Pricing</Menu.Item>
                    <Menu.Item key='7'>Contact</Menu.Item>
                </Menu>
            </div>
      </div>
    );
}

export default AppHeader;