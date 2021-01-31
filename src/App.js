import TodoList from './Todo/TodoList'
import React from 'react'
import Context from './context'
import AddTodo from './Todo/AddTodo';


function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: "Buy car"},
    {id: 2, completed: false, title: "Buy plane"},
    {id: 3, completed: false, title: "Buy home"}
  ])

  const [counter, setCounter] = React.useState(0);


  function toggleTodo(id){
    setTodos(
        todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  const a = 1 % 2

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper" >
        <h1>React tutorial</h1>  
        <AddTodo onCreate={addTodo}/>

        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo} />) : (<p>No todos</p>)}
        
        <p>{a}</p>
        <p>{counter}</p>
        <button onClick={()=>{
          setCounter(counter + 1)
        }}></button>
      </div>
    </Context.Provider>
  );
}

export default App;
