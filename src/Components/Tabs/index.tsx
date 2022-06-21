import { FC } from 'react'
import Tabs, { tabsProps } from './Tabs'
import TabsItem, { TabsItemProps } from './TabsItem'
type TabControlProps = FC<tabsProps> & {
  TabsItem: FC<TabsItemProps>
}
const TabControl = Tabs as TabControlProps
TabControl.TabsItem = TabsItem
export default TabControl
