import React, { Component } from 'react'

class Timer extends Component {
  constructor(props){
    this.state = {
      time: new Date()
    }
  }

  componentDidMount(){
    this.tick();
  }

  tick = () => {
    // setState 는 비동기 함수
    this.setState({
      time: new Date()
    }, () => {
      // state 가 update 된 상태로 출력 보장
      console.log(this.state)
    });
  }

  render() {
    const {time} = this.state;

    return (
      <div>
        {time.date.toLoacaleTimeString()}
      </div>
    )
  }
}

export default Timer;
