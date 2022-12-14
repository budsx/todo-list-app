import React, { useState, useEffect } from 'react';
import TodoAdd from '../components/TodoAdd';
import TodoList from '../components/TodoList';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const LOCAL_STORAGE_KEY = 'list-todos';
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        id: '',
        name: '',
        desc: '',
    });

    const addTodoHandler = (todo) => {
        const newTodo = [{ id: uuidv4(), name: todo.name, desc: todo.desc }];
        setTodos([...todos, ...newTodo]);
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...todos, ...newTodo])
        );
    };

    const deleteTodoHandler = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(newTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
    };

    const updateTodoHandler = (id) => {
        const getTodo = todos.find((todo) => {
            return todo.id === id;
        });

        setTodo({
            id,
            name: getTodo.name,
            desc: getTodo.desc,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.name || !todo.desc) {
            alert('Please fill all field');
            return;
        } else if (!todo.id) {
            addTodoHandler(todo);
        } else {
            const updateTodoById = todos.map((t) =>
                t.id === todo.id
                    ? { ...t, name: todo.name, desc: todo.desc }
                    : t
            );
            setTodos(updateTodoById);
            localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify(updateTodoById)
            );
        }

        setTodo({
            id: '',
            name: '',
            desc: '',
        });
    };

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        list && setTodos(list);
    }, [setTodos]);

    return (
        <div>
            <h1 className="form-head">Hello, Create Your Activity</h1>
            <TodoAdd
                addHandler={addTodoHandler}
                todo={todo}
                todos={todos}
                setTodo={setTodo}
                handleSubmit={handleSubmit}
            />
            <TodoList
                todos={todos}
                deleteHandler={deleteTodoHandler}
                updateHandler={updateTodoHandler}
            />
        </div>
    );
};

export default Main;
