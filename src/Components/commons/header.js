import { Menu } from 'antd';
import React from 'react';

function AppHeader(){
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i class="fa-solid fa-bolt-lightning"></i> 
                    <a href="https://www.yourplanner.com">Your Planner</a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key='home'>Home</Menu.Item>
                    <Menu.Item key='about'>About</Menu.Item>
                    <Menu.Item key='features'>Features</Menu.Item>
                    <Menu.Item key='works'>How it works</Menu.Item>
                    <Menu.Item key='faq'>FAQ</Menu.Item>
                    <Menu.Item key='pricing'>Pricing</Menu.Item>
                    <Menu.Item key='contact'>Contact</Menu.Item>
                </Menu>
            </div>
      </div>
    );
}

export default AppHeader;