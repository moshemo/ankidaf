import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import BaseLayout from "Layouts/base"

import { Icon, Layout, Menu as AntMenu } from "antd"
const { Header: AntHeader, Sider: AntSider, Content } = Layout

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <BaseLayout>
      <Base>
        <Sider collapsible collapsed={collapsed} trigger={null} width="280">
          <Logo />
          <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Trigger
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={() => setCollapsed(state => !state)}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Base>
    </BaseLayout>
  )
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AdminLayout

const Base = styled(Layout)`
  min-height: 100vh;
`

const Header = styled(AntHeader)`
  background-color: #fff;
  padding: 0 24px;
`

const Logo = styled.div`
  height: 32px;
  background: rebeccapurple;
  margin: 16px;
`

const Menu = styled(AntMenu)`
  background-color: inherit;
`

const Sider = styled(AntSider)`
  background-color: #212121;
`

const Trigger = styled(Icon)`
  cursor: pointer;
  font-size: 20px;
  line-height: 64px;
  padding: 0 16px;
  transition: color 0.3s;

  :hover {
    color: #1890ff;
  }
`
