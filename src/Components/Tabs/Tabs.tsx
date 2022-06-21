import React, { createContext, useState, FunctionComponentElement } from 'react'
import classnames from 'classnames'
import { TabsItemProps } from './TabsItem'
// 功能描述
// 提供平级的区域将大块内容进行收纳和展现，保持界面整洁
// type定义
// 1. 点击选项卡后的回调函数
type onChangeCallback = (index: number) => any
// 约定选项卡组件的属性和方法
export interface tabsProps {
  className?: string
  style?: React.CSSProperties
  defaultActiveKey?: number
  onChange?: onChangeCallback
  children: React.ReactNode
}
// 约定context的属性和方法
interface ContextProp {
  index: number
  onChange?: onChangeCallback
}
// 创建context
export const tabsContext = createContext<ContextProp>({ index: 0 })
// 传递给子组件的属性和方法
const Tabs: React.FC<tabsProps> = props => {
  const { className, style, defaultActiveKey, onChange, children } = props
  const [currentActive, setActive] = useState(defaultActiveKey)
  const handleClick = (index: number) => {
    setActive(index)
    if (onChange) {
      onChange(index)
    }
  }
  const passedContext: ContextProp = {
    index: currentActive ? currentActive : 0,
    onChange: handleClick,
  }
  const classes = classnames('itpsp-tabs', className)

  const renderChildren = () =>
    React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<TabsItemProps>
      if (childElement.type.displayName === 'TabsItem') {
        return React.cloneElement(childElement, { index: i })
      }
    })
  return (
    <div style={style} className={classes}>
      <tabsContext.Provider value={passedContext}>{renderChildren()}</tabsContext.Provider>
    </div>
  )
}
Tabs.defaultProps = {
  defaultActiveKey: 0,
}
export default Tabs
