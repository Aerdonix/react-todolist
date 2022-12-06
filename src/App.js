import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  function filterHandler () {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
    };
  };

  // Save to Local Storage, for some reason I couldn't get it to work, with it just ruining the page. However it is there commented out, showing an attempt to get it working.

  // function saveLocalTodos () {
  //   if (todos.length > 0) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   }else{
  //     let localTodo = JSON.parse(localStorage.getItem(todos));
  //     setTodos(localTodo);
  //   }
  // };

  // function getLocalTodos ()  {
  //   if (localStorage.getItem('todos') ===null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   }else{
  //     let localTodo = JSON.parse(localStorage.getItem(todos));
  //     setTodos(localTodo);
  //   }
  // };

  return (
    <div>
      <header>
        <h1>An Obligatory To-Do List</h1>
      </header>
      <Form inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}
      setStatus={setStatus} />
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      todos={todos} />
    </div>
  );
};

export default App;
