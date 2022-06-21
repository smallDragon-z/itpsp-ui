import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button, { ButtonType, ButtonSize } from './Button'
const defaultProps = {
  onClick: jest.fn(),
}
const PrimaryBtn = {
  size: ButtonSize.Large,
  btnType: ButtonType.Primary,
}
const LinkBtn = {
  href: 'https:www.baidu.com',
  btnType: ButtonType.Link,
}
describe('关于Button的相关测试', () => {
  test('测试默认Button组件是否存在于文档中，是否有class', () => {
    render(<Button {...defaultProps}>Nice</Button>)
    const element = screen.getByText('Nice') as HTMLButtonElement
    expect(element.disabled).toBeFalsy()
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  test('测试Button组件的className是否为primary，尺寸是否为Large', () => {
    render(<Button {...PrimaryBtn}>PrimaryBtn</Button>)
    const element = screen.getByText('PrimaryBtn')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-primary btn-lg')
  })
  test('测试Button组件的是否为Link', () => {
    render(<Button {...LinkBtn}>Link</Button>)
    const element = screen.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveProperty('href')
    expect(element).toHaveClass('btn btn-link')
  })
})
