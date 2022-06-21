import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
const styles: React.CSSProperties = {
  textAlign: 'left',
}
const ReactDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>
const defaultBtn = () => (
  <>
    <Button btnType='default'>默认按钮</Button>
    <Button>默认按钮</Button>
    <Button btnType='danger'>危险</Button>
    <Button btnType='info'>提示</Button>
    <Button btnType='primary'>主要</Button>
    <Button btnType='success'>成功</Button>
    <Button btnType='warning'>警告</Button>
    <Button btnType='link' href='https://www.baidu.com'>
      链接按钮
    </Button>
  </>
)
const btnWithSize = () => (
  <>
    <Button size='sm'>小按钮</Button>
    <Button>默认大小</Button>
    <Button size='lg'>大按钮</Button>
  </>
)
const btnWithClick = () => (
  <>
    <Button onClick={action('clicked by btn component')}>点击事件按钮</Button>
  </>
)
// storiesOf的内容是组件名
storiesOf('Button', module)
  .addDecorator(ReactDecorator)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('基础用法', defaultBtn)
  .add('不同尺寸的按钮', btnWithSize, { info: { inline: false } })
  .add('点击事件的按钮', btnWithClick)
