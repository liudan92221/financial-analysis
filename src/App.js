import React, { useState } from 'react';
import { Layout, Menu } from 'antd'
import { Route, Link, Redirect } from 'react-router-dom'
import Main from './main'
import Set from './set'
import './App.less';

const { Header, Content, Footer } = Layout

const routes = {
  path: '/',
  childRoutes: [
    {
      title: '财报分析',
      path: '/index',
      component: Main
    },
    {
      title: '设置',
      path: '/set',
      component: Set
    },
  ]
}

function App(props) {
  const { history } = props
  const [currentKey, setKey] = useState(() => {
    return null
  })
  const rList = routes.childRoutes
  const location = history.location || {}
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          onClick={(e) => {
            history && history.replace(e.key)
            setKey(e.key)
          }}
          selectedKeys={[currentKey || location.pathname]}
        >
          {rList.map((item) => {
            return <Menu.Item key={item.path}>{item.title}</Menu.Item>
          })}
        </Menu>
      </Header>
      <Content>
        {rList.map((item) => {
          return <Route path={item.path} key={item.path}>
            <item.component history={history} />
          </Route>
        })}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Util ©2020 Created by ZD</Footer>
    </Layout>
  )
}

export default App;
