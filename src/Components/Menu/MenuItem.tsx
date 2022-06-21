import React, { useContext } from 'react'
import classNames from 'classnames'
import { menuContext } from './Menu'
// 约定MenuItem的属性和方法
export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
const MenuItem: React.FC<MenuItemProps> = props => {
  const { index, disabled, className, style, children } = props
  const menuPassedContext = useContext(menuContext)
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': menuPassedContext.index === index,
  })
  const handleClick = () => {
    if (menuPassedContext.onSelect && !disabled && typeof index === 'string') {
      menuPassedContext.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem
