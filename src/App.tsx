import React from 'react'
import './styles/index.scss'
import Table from './Components/Table/Table'
const columns = [
  { key: '111', title: '姓名', dataIndex: 'name', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
  { key: '111', title: '年龄', dataIndex: 'age', width: '80px' },
]
const data: object[] = [
  { name: '张三', age: 10 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
  { name: '李四', age: 11 },
]
const App: React.FC = () => {
  return <Table columns={columns} dataSource={data} isScroll={true} />
}

export default App
