import React from 'react';

class LycContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    return (
      <div className='lyc-content'>
        <div className='lyc-item'>
          <div className='time'>时间</div>
          <div className='cont'>歌词</div>
        </div>
        {
          this.props.lycList.map(lycObj => {
            return (
              <div className='lyc-item'>
                <div className='time'>{lycObj.time}</div>
                <div className='cont'>{lycObj.cont}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default LycContent