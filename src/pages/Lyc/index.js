import React from 'react';
import LycHeader from './header';
import LycContent from './content';
import './index.scss'
class Lyc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lycList: [
        {
          time: '',
          cont: '1.上传歌曲'
        },
        {
          time: '',
          cont: '2.然后点击"粘贴歌词"，把歌词粘贴到弹出框'
        },
        {
          time: '',
          cont: '3.点击"播放"，播放歌曲后，点击"打TAG"可在红色底（选中状态）一栏打上时间点'
        },
        {
          time: '',
          cont: '4.点击"撤回"，可以撤销上一次打的tag，同时歌曲会被暂停，点击播放可继续'
        },
        {
          time: '',
          cont: '5.在时间上双击，可以编辑时间，对时间进行微调'
        },
        {
          time: '',
          cont: '6.在歌词上双击，可以编辑歌词。'
        },
        {
          time: '',
          cont: '7.带翻译歌词，译文跟原文在同一行，与原文用空格隔开，跟在原文后面'
        },
        {
          time: '',
          cont: '8.制作完成后，点击"导出歌词"可以将生成的歌词导出来。格式为lyc。'
        },


      ]
    }
  }

  render() {
    return (
      <div className='lyc'>
        <LycHeader></LycHeader>
        <LycContent></LycContent>
      </div>
    )
  }
}
export default Lyc