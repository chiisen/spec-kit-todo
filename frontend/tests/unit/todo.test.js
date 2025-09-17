// TodoItem 單元測試
// frontend/tests/unit/todo.test.js


import { describe, it, expect } from '@jest/globals';
import { TodoItem } from '../../src/models/todo';

describe('TodoItem', () => {
  it('should create a todo item with default values', () => {
    const todo = new TodoItem({ id: 1, text: 'Test', completed: false });
    expect(todo.id).toBe(1);
    expect(todo.text).toBe('Test');
    expect(todo.completed).toBe(false);
    expect(typeof todo.createdAt).toBe('string');
    expect(typeof todo.updatedAt).toBe('string');
  });

  it('should update text and updatedAt', () => {
    const todo = new TodoItem({ id: 2, text: 'Old', completed: false });
    const oldUpdatedAt = todo.updatedAt;
    todo.updateText('New');
    expect(todo.text).toBe('New');
    expect(todo.updatedAt).not.toBe(oldUpdatedAt);
  });

  it('should mark as complete and uncomplete', () => {
    const todo = new TodoItem({ id: 3, text: 'Test', completed: false });
    todo.complete();
    expect(todo.completed).toBe(true);
    todo.uncomplete();
    expect(todo.completed).toBe(false);
  });

  it('should convert to JSON', () => {
    const todo = new TodoItem({ id: 4, text: 'Test', completed: true });
    const json = todo.toJSON();
    expect(json).toMatchObject({
      id: 4,
      text: 'Test',
      completed: true,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
