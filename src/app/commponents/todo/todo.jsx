"use client";
import React, { useState } from "react";
import styles from "./todo.module.css";

function Todo() {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodo([...todo, newTodo]);
            setNewTodo("");
        }
    };
    const removeTodo = (index) => {
        const newTodos = [...todo];
        newTodos.splice(index, 1);
        setTodo(newTodos);
    };

    return (
        <div>
            <div className={styles.input}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Write text here.." />
                <button onClick={addTodo}>Add</button>

            </div>
            <br />
            <div className={styles.list}>
                {todo.map((todos, index) => (
                    <div className={styles.item} key={index}>
                        <p>{todos}</p>
                        <button onClick={() => removeTodo(index)}>X</button>
                    </div>
                ))}
            </div>
            <br />
            <div className={styles.total}>
                <h3>
                    <span>Total:</span>{todo.length}
                </h3>
            </div>
        </div>)
}
export default Todo;