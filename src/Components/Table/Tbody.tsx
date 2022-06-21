import React from 'react'
import { ColumnsProps, ColumnsItemProps } from './Table'
interface TBodyProps {
  columns: ColumnsProps
  dataSource: object[]
}

const Tbody: React.FC<TBodyProps> = props => {
  const { columns, dataSource } = props
  const getTr = (columns: ColumnsProps, dataSource: Object[]) =>
    dataSource.map((item: any, i) => (
      <tr key={i}>
        {columns.map(({ key, title, width, dataIndex, theme, callBack, render }, subIndex) => {
          return <td key={subIndex}>{item[`${dataIndex}`]}</td>
        })}
      </tr>
    ))

  return <tbody className='tbody'>{getTr(columns, dataSource)}</tbody>
}
export default Tbody
