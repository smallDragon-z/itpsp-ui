import React, { useState } from 'react'
import classNames from 'classnames'

// 定义Alert组件的形状
interface AlterProps {
  className: string
  type: string
  title: string
  description: string
  showIcon: boolean
  closable: boolean
  center: boolean
  closeText: string
  closeCallback: () => any
}

// Alert组件的类型
export enum AlertType {
  Default = 'default',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

type alertComponentAttribute = Partial<AlterProps>
const Alert: React.FC<alertComponentAttribute> = props => {
  const [showAlert, setShowAlert] = useState(true)
  const { type, title, description, showIcon, closeText, closable, closeCallback = () => {}, center, className } = props
  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
  })
  // showCloseText
  const showCloseIconOrText = () => {
    if (closable && !closeText) {
      return <div className='alert-close-icon'>×</div>
    }
    if (closable && closeText) {
      return <div className='alert-close-icon'>{closeText}</div>
    }
    if (!closable && !closeText) {
      return <div className='alert-close-icon'></div>
    }
  }
  // close alert compoent
  const closeOneself = (close: () => any) => {
    setShowAlert(false)
    close()
  }
  return showAlert ? (
    <div className={classes}>
      <div className='alert-left'>
        <div className='alert-title'>
          {showIcon ? <span className='alert-icon'></span> : null}
          <span>{title}</span>
        </div>
        <div className='alert-description'>{description}</div>
      </div>
      <div className='alert-right'>
        <span
          className='alert-close-icon'
          onClick={() => {
            closeOneself(closeCallback)
          }}
        >
          {showCloseIconOrText()}
        </span>
      </div>
    </div>
  ) : null
}
Alert.defaultProps = { closable: true }
export default Alert
