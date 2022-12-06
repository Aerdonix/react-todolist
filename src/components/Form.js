import React from 'react'


function Form ({setInputText, inputText, todos, setTodos, setStatus}) {
    function inputTextHandler (e) {
        setInputText(e.target.value);
    };
    function submitTodoHandler (e) {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 10000}]);
        setInputText("");
    };
    function statusHandler (e) {
        setStatus(e.target.value);
    };
    return (
        <form>
        <input value={inputText}
         onChange={inputTextHandler} 
         type="text" 
         className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">Add</button>
        <div className="select">
            <select onChange={statusHandler} name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="unfinished">Unfinished</option>
            </select>
        </div>
        </form>
    );
};

export default Form;