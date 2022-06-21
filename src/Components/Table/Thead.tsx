import React from 'react'
import { ColumnsProps, ColumnsItemProps } from './Table'
interface TheadProps {
  columns: ColumnsProps
}

const Thead: React.FC<TheadProps> = props => {
  const { columns } = props
  const getTh = (columns: ColumnsProps) =>
    columns.map((item: ColumnsItemProps, i) => (
      <th style={{ width: item.width ? item.width : '100px' }} key={i}>
        {item.title}
      </th>
    ))
  return (
    <thead className='table-thead'>
      <tr>{getTh(columns)}</tr>
    </thead>
  )
}
export default Thead
