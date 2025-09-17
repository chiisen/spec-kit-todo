// SQLite 資料存取層單元測試
// frontend/tests/unit/sqlite.test.js

import { describe, it, expect } from '@jest/globals';
import * as sqlite from '../../src/db/sqlite';
import { TodoItem } from '../../src/models/todo';

describe('SQLite', () => {
  it('should init DB and add/get todo', async () => {
    await sqlite.initDB();
    const todo = new TodoItem({ id: undefined, text: 'DB Test', completed: false });
  sqlite.addTodo(todo);
  const todos = sqlite.getTodos();
    expect(todos.length).toBeGreaterThan(0);
    expect(todos[0].text).toBe('DB Test');
  });

  it('should update and delete todo', async () => {
    await sqlite.initDB();
    const todo = new TodoItem({ id: undefined, text: 'To Update', completed: false });
  const todoId = sqlite.addTodo(todo);
  const added = sqlite.getTodoById(todoId);
  added.updateText('Updated');
  sqlite.updateTodo(added);
  const updated = sqlite.getTodoById(todoId);
  expect(updated.text).toBe('Updated');
  sqlite.deleteTodo(todoId);
  const afterDelete = sqlite.getTodoById(todoId);
  expect(afterDelete).toBeNull();
  });
});
