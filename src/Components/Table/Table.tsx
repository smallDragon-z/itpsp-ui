import React, { TableHTMLAttributes, useState } from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
import classNames from 'classnames'
// 定义 ColumnsItemProps
export type ColumnsItemProps = {
  /**
   * 列的唯一key
   */
  key: string | number
  /**
   * 表头名
   */
  title: string
  /**
   * 列宽
   */
  width?: number | string
  /**
   * 表头对应的数据
   */
  dataIndex: string
  /**
   * 列主题色
   */
  theme?: string
  /**
   * 表格内容点击后的回调函数
   */
  callBack?: () => any
  /**
   * 自定义列的内容，返回 function(text, record, index) {} React.ReactNode
   */
  render?: (text: string, index: number) => React.ReactNode
}
// 定义columns的类型
export type ColumnsProps = ColumnsItemProps[]
// 定义table的类型
export interface TableProps {
  /**
   * 表格表头内容
   */
  columns: ColumnsProps
  /**
   * 表格数据
   */
  dataSource: object[]
  /**
   * 表格的自定义类名
   */
  className?: string
  /**
   * 是否可以横向滚动
   */
  isScroll?: boolean
  /**
   * 自定义表格样式
   */
  style?: React.CSSProperties
  /**
   * 是否再有斑马纹
   */
  stripe?: boolean
  /**
   * 带有纵向边框
   */
  border?: boolean
  /**
   *行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
   */
  rowClassName?: (row: any, rowIndex: number) => string
  /**
   * 表格高度
   */
  height?: number | string
  /**
   * 固定表头
   */
  headerFixed?: boolean
}
type tableProps = TableProps & React.TableHTMLAttributes<HTMLElement>
const Table: React.FC<tableProps> = props => {
  const { className, columns, dataSource, isScroll, style, stripe, border, rowClassName, height, headerFixed } = props
  // 自定义添加每行的类名
  if (rowClassName) {
    // 获取所有的行
    const rows = document.querySelectorAll('.table-box tbody tr')
    const rowList = Array.from(rows)
    rowList.forEach((row: any, index: number) => {
      // 当前行的className就等于rowClassName的返回值
      row.className = rowClassName(row, index)
    })
  }
  const [data, setData] = useState(dataSource)
  const classes = classNames('table-compoenent', className, {
    stripe: stripe,
    'longitudinal-border': border,
  })
  return (
    <div className={isScroll ? 'table-scroll' : ''}>
      <div className={`table-box  ${headerFixed && height ? 'table-header-fixed' : ''}`} style={{ height: height && height }}>
        <table className={classes} style={style}>
          <Thead columns={columns} />
          <Tbody columns={columns} dataSource={data} />
        </table>
      </div>
    </div>
  )
}
Table.defaultProps = {
  isScroll: false,
  stripe: false,
  border: false,
}
export default Table
