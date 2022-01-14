import * as React from 'react'
import { Button } from 'antd'
import './header.scss'
class LycHeader extends React.Component {
  render() {
    return (
      <div className='lyc-header'>
        <div className='tools tools1'>
          <Button type='text'>播放</Button>
          <Button type='text'>打Tag</Button>
          <Button type='text'>撤回</Button>
        </div>
        <div className='tools tools2'>
          <Button type='text'>上传歌曲</Button>
          <Button type='text'>粘贴歌词</Button>
          <Button type='text'>导出歌词</Button>
        </div>
      </div>
    )
  }
}
export default LycHeader