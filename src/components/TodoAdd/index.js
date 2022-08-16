import React from 'react';

const TodoAdd = (props) => {
  const { todo, setTodo, handleSubmit } = props;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!todo.name || !todo.desc) {
  //     alert('Please fill all field');
  //     return;
  //   } else if (!todo.id) {
  //     addHandler(todo);
  //   } else {

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="form-field">
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Whats your plan?"
          value={todo.name}
          onChange={(e) => {
            setTodo({ ...todo, name: e.target.value });
          }}
        />
      </div>
      <div className="form-field">
        <label htmlFor="name">Description :</label>
        <input
          type="text"
          name="decription"
          placeholder="How it will going?"
          value={todo.desc}
          onChange={(e) => {
            setTodo({ ...todo, desc: e.target.value });
          }}
        />
      </div>
      <button type="submit" className="form-button">
        Add
      </button>
    </form>
  );
};

export default TodoAdd;
