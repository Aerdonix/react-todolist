import React from 'react'

function Todo({ text, todo, todos, setTodos }) {
    function deleteHandler () {
        setTodos(todos.filter(el => el.id !== todo.id));
    };
    function completeHandler () {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        }));
    };
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className='complete-btn'>
            <i className='checkmark'>✓</i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
            <i className="trash">✗</i>
        </button>
    </div>
  );
};

export default Todo;