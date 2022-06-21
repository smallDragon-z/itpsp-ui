import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'
type modeType = 'horizontal' | 'vertical'
type openedSubMenu = Array<string>
type selectedCallback = (selectedIndex: string) => void
// 约定Menu组件的属性和方法
export interface MenuProps {
  defaultIndex: string
  mode?: modeType
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  defaultOpenSubMenu?: openedSubMenu
  onSelect?: selectedCallback
}
// 约定传给子组件的属性和方法有哪些
interface ContextProp {
  index: string
  onSelect?: selectedCallback
  mode?: modeType
  defaultOpenSubMenu?: openedSubMenu
}
export const menuContext = createContext<ContextProp>({ index: '0' })

const Menu: React.FC<MenuProps> = props => {
  const { defaultIndex, className, mode, defaultOpenSubMenu, children, onSelect, style } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: ContextProp = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  }
  const classes = classNames('itpsp-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  // 判断传入的children是否是MenuItem,并自动添加index属性
  const renderChildren = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: i.toString() })
      } else {
        console.warn('不能做为Menu组件的子元素')
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <menuContext.Provider value={passedContext}>{renderChildren()}</menuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
}
export default Menu
