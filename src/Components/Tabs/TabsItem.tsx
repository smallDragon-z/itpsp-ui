import React, { useContext } from 'react'
import { tabsContext } from './Tabs'
import classnames from 'classnames'
// 约定tabsItem的属性和方法
export interface TabsItemProps {
  index?: number
  labe: string | React.ReactNode
  disabled?: boolean
  children?: React.ReactNode
}
const TabsItem: React.FC<TabsItemProps> = props => {
  const { index, labe, disabled, children } = props
  const passedContext = useContext(tabsContext)
  const classes = classnames('tabs-item', { 'is-active': passedContext.index === index, disabled: disabled })
  const tabsContentClass = classnames('tabs-content', { 'is-show': passedContext.index === index })
  // 点击事件
  const handleClick = () => {
    console.log(1)

    if (passedContext.onChange && !disabled && typeof index === 'number') {
      passedContext.onChange(index)
    }
  }
  return (
    <div className={classes} key={index} onClick={handleClick}>
      <div>{labe}</div>
      <div className={tabsContentClass}>{children}</div>
    </div>
  )
}
TabsItem.displayName = 'TabsItem'
export default TabsItem
