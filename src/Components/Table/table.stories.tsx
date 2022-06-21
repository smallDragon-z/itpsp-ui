import React from 'react'
import { storiesOf } from '@storybook/react'

import Table from './Table'
const columns = [
  { key: '111', title: '姓名', dataIndex: 'name', width: '20%' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '20%' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '20%' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '20%' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '20%' },
]
const data: object[] = [
  { name: '张三1', age: 10 },
  { name: '李四2', age: 11 },
  { name: '李四3', age: 11 },
  { name: '李四4', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
]
const tableRowClassName = (row: any, rowIndex: number) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
const baseTableComponent = () => (
  <Table
    border={true}
    columns={columns}
    dataSource={data}
    stripe={true}
    style={{ width: '300px' }}
    rowClassName={tableRowClassName}
    height={'100px'}
    headerFixed={true}
  />
)
storiesOf('Table', module).add('基础用法', baseTableComponent)
