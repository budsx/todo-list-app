import React from 'react';

const TodoCard = (props) => {
  const { id, name, desc } = props;
  return (
    <div className="card-container">
      <p>Name : {name}</p>
      <p>Description : {desc}</p>
      <button
        className="delete-button"
        onClick={() => {
          props.deleteHandler(id);
        }}
      >
        Delete
      </button>
      <button
        className="edit-button"
        onClick={() => {
          props.updateHandler(id);
        }}
      >
        Update
      </button>
    </div>
  );
};

export default TodoCard;
