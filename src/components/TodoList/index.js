import React from 'react';
import TodoCard from '../TodoCard';

const TodoList = (props) => {
  // console.log('from TodoList  ', props);
  const _deleteHandler = (id) => {
    props.deleteHandler(id);
  };
  const _updateHandler = (id) => {
    props.updateHandler(id);
  };
  return (
    <div>
      <h1 className="form-head">List</h1>
      {props.todos.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            name={todo.name}
            desc={todo.desc}
            deleteHandler={() => {
              _deleteHandler(todo.id);
            }}
            updateHandler={() => {
              _updateHandler(todo.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
