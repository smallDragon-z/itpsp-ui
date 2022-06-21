import React, { FunctionComponentElement, useContext, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { menuContext } from './Menu'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'
import Icon from '../Icon/Icon'
import Transition from '../Transition/Transition'
// 约定下拉菜单的interFace
export interface SubMenuProps {
  index?: string
  title?: string
  className?: string
  children?: React.ReactNode
}
const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, children, className, title } = props
  const passedContext = useContext(menuContext)
  const openedSubMenus = passedContext.defaultOpenSubMenu as Array<string>
  const isSpreadSubMenu = openedSubMenus && index && openedSubMenus.includes(index)
  const [openState, setOpenState] = useState(isSpreadSubMenu)

  const calsses = classNames('menu-item submenu-item', className, {
    'is-active': passedContext.index === index,
    'is-opened': openState,
    'is-vertical': passedContext.mode === 'vertical',
  })

  // 根据mode值来判断调用点击事件还是鼠标进入事件
  const handleClick = (e: React.MouseEvent) => {
    setOpenState(!openState)
  }
  const handleHover = (e: React.MouseEvent, target: boolean) => {
    setOpenState(target)
  }
  const clickEvent = passedContext.mode !== 'horizontal' ? { onClick: handleClick } : {}
  const hoverEvent =
    passedContext.mode === 'horizontal'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleHover(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleHover(e, false)
          },
        }
      : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('itpsp-submenu', {
      'menu-opened': openState,
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` })
      }
    })
    return (
      <Transition in={Boolean(openState)} timeout={300} animation='zoom-in-top'>
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    )
  }
  return (
    <li key={index} className={calsses} {...hoverEvent}>
      <div className='sub-menu-title' {...clickEvent}>
        {title}
        <Icon icon='angle-down' className='arrow-icon' />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
