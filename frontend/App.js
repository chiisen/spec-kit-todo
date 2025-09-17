
import React, { useState, useEffect } from "react";
import { TodoItem } from "./src/models/todo";
import {
  initDB,
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./src/db/sqlite";
import TodoList from "./src/components/TodoList";
import TodoEditor from "./src/components/TodoEditor";


function App() {
  console.log('[INFO] App.js 已被呼叫，React App 開始渲染');
  const [todos, setTodos] = useState([]);
  // 已移除 editingId 狀態（未使用）
  const [showEditor, setShowEditor] = useState(false);
  const [editorTodo, setEditorTodo] = useState(null);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;

  useEffect(() => {
    (async () => {
      await initDB();
      setTodos(getTodos());
    })();
  }, []);

  const handleAdd = () => {
    setEditorTodo(null);
    setShowEditor(true);
  };

  const handleEdit = id => {
    const todo = todos.find(t => t.id === id);
    setEditorTodo(todo);
  // setEditingId(id); // 不再需要
    setShowEditor(true);
  };

  const handleDelete = id => {
    deleteTodo(id);
    setTodos(getTodos());
    setShowEditor(false);
  // setEditingId(null); // 不再需要
  };

  const handleComplete = id => {
    const todo = todos.find(t => t.id === id);
    if (todo && !todo.completed) {
      todo.complete();
      updateTodo(todo);
      setTodos(getTodos());
    }
  };

  const handleSave = text => {
    if (editorTodo) {
      // 編輯
      editorTodo.updateText(text);
      updateTodo(editorTodo);
    } else {
      // 新增
      const newTodo = new TodoItem({
        id: undefined,
        text,
        completed: false,
      });
      addTodo(newTodo);
    }
    setTodos(getTodos());
    setShowEditor(false);
  // setEditingId(null); // 不再需要
  };

  const handleCancel = () => {
    setShowEditor(false);
  // setEditingId(null); // 已移除
  };

  // 分頁資料
  const totalPages = Math.ceil(todos.length / PAGE_SIZE);
  const pagedTodos = todos.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePrevPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  const handleNextPage = () => {
    setPage(page < totalPages ? page + 1 : totalPages);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAdd}>新增待辦事項</button>
      <TodoList
        todos={pagedTodos}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />
      {totalPages > 1 && (
        <div style={{ margin: '16px 0' }}>
          <button onClick={handlePrevPage} disabled={page === 1}>上一頁</button>
          <span style={{ margin: '0 8px' }}>第 {page} / {totalPages} 頁</span>
          <button onClick={handleNextPage} disabled={page === totalPages}>下一頁</button>
        </div>
      )}
      {showEditor && (
        <TodoEditor
          todo={editorTodo}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default App;
