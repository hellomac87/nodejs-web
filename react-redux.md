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

### Flux Architecture

개념적 이해

- data 의 `단방향 흐름`제어
- action => store ( <==> reducer) => react 한 방향으로 일관된 데이터의 흐름
- side-effect: 단방향성 흐름에 변화를 주는 것
- `단방향으로 흐르는 것이 무엇이 좋은가?` => `데이터의 흐름이 꼬이게 되면 유지보수가 힘들어진다`
- reduce 함수를 통해서 새로운 데이터를 생성함 (불변성)
- data의 불변성을 유지하기 위해
- `왜 data의 불변성을 유지해야 하는가?`
- `flux` 아키텍쳐 또한 데이터의 `불변성`을 유지하기 위해 `reducer`를 홣용한다.
- 불변성을 유지하기 위해 reducer pattern 을 사용
- 기존의 데이터의 변화 없이 새로운 데이터 반환

redux 특징

- One immutable store (한가지의 불변의 저장소)
- Actions trigger changes (Action이 상태 변화를 유도한다)
- Reducers update state (Reducer 가 상태를 업데이트 한다)

Redux Action

```js
export const RATE_COURSE = 'RATE_COURSE';

rateCourse(rating){
  return{
    type: RATE_COURSE,
    rating: rating
  }
}
```

Redux Reducer

- state is read-only
- return new state

```js
function myReducer(state, action){
  switch(action.type{
    case INCREMENT_CONTER:
      // return new state based on action passed
  })
}
```
