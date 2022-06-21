import React, { useEffect } from 'react'
import classNames from 'classnames'

// 创建枚举类型，用于定义按钮的size、类型
export enum ButtonSize {
  Small = 'sm',
  Large = 'lg',
}
export enum ButtonType {
  Primary = 'primary',
  Danger = 'danger',
  Success = 'success',
  Warning = 'warning',
  Information = 'info',
  Default = 'default',
  Link = 'link',
}
// Button组件的形状
interface BaseButtonProp {
  /**
   * 设置按钮的大小
   */
  size?: string
  /**
   * 设置按钮的类型
   */
  btnType?: 'primary' | 'danger' | 'success' | 'warning' | 'info' | 'default' | 'link'
  /**
   * 设置按钮的类名
   */
  className?: string
  /**
   * 设置按钮的禁用状态
   */
  disabled?: boolean
  /**
   * 设置link按钮的链接
   */
  href?: string
  children: React.ReactNode
}
// 在实际的使用过程中，用户在创建Button组件时，想要为组件添加DOM原生属性如：onclick事件，但是在设置Button组件时我们没有定义
type NativeButtonAttribute = BaseButtonProp & React.ButtonHTMLAttributes<HTMLElement>
type NativeAnchorAttribute = BaseButtonProp & React.AnchorHTMLAttributes<HTMLElement>
type ButtonComponentAttribute = Partial<NativeButtonAttribute & NativeAnchorAttribute> //Partial将指定类型映射为可选属性
/**
 * 这是我的第一个按钮组件
 */
export const Button: React.FC<ButtonComponentAttribute> = props => {
  const noDefault = (e: Event) => e.preventDefault()
  useEffect(() => {
    const disabledLinks = document.querySelectorAll('a.btn-link.disabled')
    disabledLinks.forEach(item => {
      item.addEventListener('click', noDefault)
    })
    return () => {
      disabledLinks.forEach(item => {
        item.removeEventListener('click', noDefault)
      })
    }
  })
  const { btnType, disabled, size, children, href, className, ...restProps } = props

  // 按钮的className
  const Classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })

  // 判断用户想要创建的是a标签还是按钮
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={Classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button disabled={disabled} className={Classes} {...restProps}>
        {children}
      </button>
    )
  }
}
Button.defaultProps = { btnType: 'default', disabled: false }
export default Button
