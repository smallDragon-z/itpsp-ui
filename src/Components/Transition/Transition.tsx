import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
type Animation = 'zoom-in-top' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-right'
// 定义动画组件的属性
type TransitionProps = CSSTransitionProps & {
  animation?: Animation
}

const Transition: React.FC<TransitionProps> = props => {
  const { animation, classNames, children, ...restProps } = props

  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {children}
    </CSSTransition>
  )
}
Transition.defaultProps = {
  // 在in为true是默认打开
  appear: true,
}
export default Transition
