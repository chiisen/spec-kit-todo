// Todo List UI 元件
// frontend/src/components/TodoList.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {Array} props.todos - TodoItem 陣列
 * @param {Function} props.onEdit - 編輯事件 (id)
 * @param {Function} props.onDelete - 刪除事件 (id)
 * @param {Function} props.onComplete - 標記完成事件 (id)
 */
export default function TodoList({ todos, onEdit, onDelete, onComplete }) {
  if (!todos || todos.length === 0) {
    return <div className="todo-list-empty">目前沒有待辦事項</div>;
  }
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <span>{todo.text}</span>
          <button onClick={() => onEdit(todo.id)}>編輯</button>
          <button onClick={() => onDelete(todo.id)}>刪除</button>
          <button onClick={() => onComplete(todo.id)} disabled={todo.completed}>
            {todo.completed ? '已完成' : '標記完成'}
          </button>
        </li>
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  })).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};
