import React from 'react'
import classNames from 'classnames'
// 引入icon图标库
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
// 在FontAwesome中图标可以按需导入，也可以一次性全部导入
// 使用FontAwesomeIcon的APIS导入全部图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
type themeType = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'warning' | 'danger' | 'light' | 'dark'

// 约定Icon图标库的属性
export interface IconProps extends FontAwesomeIconProps {
  theme?: themeType
}
const Icon: React.FC<IconProps> = props => {
  const { theme, ...restProps } = props
  const classes = classNames({ [`icon-${theme}`]: theme })
  return <FontAwesomeIcon className={classes} {...restProps} />
}
Icon.defaultProps = {
  theme: 'default',
}
export default Icon
