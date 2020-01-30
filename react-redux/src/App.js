import React, {useState} from 'react'
// react 는 재사용 가능한 component 기반의 UI liberary다

const Todo = ({todo, index, completeTodo, removeTodo}) => {
  return(
  <div key={index}>{todo}</div>
  )
}

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;

    addTodo(value);
    
    setValue('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

const App = () => {
  const [todo, setTodo] = useState([]);

  return(
    <div className="app">
      <div className="todo-list">
        {
          todo.map((item, index) => (
            <Todo
              key={item}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
  
}

export default App;