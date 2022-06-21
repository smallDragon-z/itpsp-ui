import { FC } from 'react'
import Menu, { MenuProps } from './Menu'
import MenuItem, { MenuItemProps } from './MenuItem'
import SubMenu, { SubMenuProps } from './SubMenu'
export type IMenuCompionent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SubMenuProps>
}
const TransMenu = Menu as IMenuCompionent
TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu
export default TransMenu
