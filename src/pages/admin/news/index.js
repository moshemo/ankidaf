import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

import {
  Divider,
  Icon,
  Menu,
  Row,
  Col,
  Table as AntTable,
  Tabs,
  Tag,
} from 'antd'

import AdminLayout from 'Layouts/admin'

import 'antd/lib/style/themes/default.less'

const { Column } = AntTable
const { TabPane } = Tabs

const AdminNewsPage = props => {
  const sorter = (a, b) =>
    isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b

  return (
    <AdminLayout>
      <Tabs defaultActiveKey="1">
        <TabPane tab="One" key="1">
          <Table dataSource={data} rowSelection={rowSelection} rowKey="id">
            <Column
              title="First Name"
              align="center"
              dataIndex="firstName"
              key="firstName"
            />
            <Column
              title="Last Name"
              align="center"
              dataIndex="lastName"
              key="lastName"
            />
            <Column title="Age" align="center" dataIndex="age" key="age" />
            <Column
              title="Address"
              align="center"
              dataIndex="address"
              key="address"
            />
            <Column
              title="Tags"
              align="center"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </span>
              )}
            />

            <Column
              title="Action"
              align="center"
              key="action"
              width={150}
              render={(text, record) => (
                <span>
                  <a>Edit</a>
                  <Divider type="vertical" />
                  <a>Delete</a>
                </span>
              )}
            />
          </Table>
        </TabPane>
        <TabPane tab="Two" key="2">
          <Tabs defaultActiveKey="1" tabPosition="left">
            <TabPane tab="Two-A" key="1">
              Two A
            </TabPane>
            <TabPane tab="Two-B" key="2">
              Two B
            </TabPane>
            <TabPane tab="Two-C" key="3">
              Two C
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="Three" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </AdminLayout>
  )
}

export default AdminNewsPage

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
}

// --- SAMPLE DATA
const data = [
  {
    key: '1',
    firstName: 'Ploni',
    lastName: 'Almoni',
    age: 32,
    address: 'Old City, Jerusalem',
    tags: ['torah', 'mitvos'],
  },
  {
    key: '2',
    firstName: 'Plonit',
    lastName: 'Almoni',
    age: 28,
    address: 'Old City, Jerusalem',
    tags: ['chesed', 'morah'],
  },
  {
    key: '3',
    firstName: 'Reuven',
    lastName: 'Yisrael',
    age: 35,
    address: 'Beitar Ilit',
    tags: ['chesed', 'mitvos'],
  },
]

// --- STYLES
const Category = styled(Tag)`
  &.ant-tag {
    background-color: #eee;
    border-color: #ddd;
    border-radius: 8px;
    color: #454545;
    cursor: pointer;
    font-weight: 600;
    font-size: 13px;
    margin: 4px 3px;
    padding: 4px 12px;
  }
`

const Table = styled(AntTable)``
