## react-redux


### setState 실무 테크닉

setState 의 비동기적 특성에 대한 callbakc function 사용

```js
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
```

### state hook

react component 의 단점

재사용성 상의 문제점

```js
import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return(
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App;
```

### effect hook