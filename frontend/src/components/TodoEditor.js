// Todo 編輯/新增/刪除元件
// frontend/src/components/TodoEditor.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props
 * @param {Object} [props.todo] - 編輯模式下的 TodoItem
 * @param {Function} props.onSave - 儲存事件 (text)
 * @param {Function} props.onCancel - 取消事件
 */
export default function TodoEditor({ todo, onSave, onCancel }) {
  const [text, setText] = useState(todo ? todo.text : '');

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      onSave(text.trim());
      setText('');
    }
  };

  return (
    <form className="todo-editor" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="請輸入待辦事項..."
        autoFocus
      />
      <button type="submit">{todo ? '儲存' : '新增'}</button>
      <button type="button" onClick={onCancel}>取消</button>
    </form>
  );
}

TodoEditor.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
