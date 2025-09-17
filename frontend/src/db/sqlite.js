
import initSqlJs from 'sql.js';
import { TodoItem } from '../models/todo';

let db = null;

/**
 * 初始化 SQLite 資料庫
 * @returns {Promise<void>}
 */
export async function initDB() {
  if (db) return;
  const SQL = await initSqlJs({ locateFile: file => `https://sql.js.org/dist/${file}` });
  db = new SQL.Database();
  db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    completed INTEGER NOT NULL,
    createdAt TEXT,
    updatedAt TEXT
  );`);
}

/**
 * 新增待辦事項
 * @param {TodoItem} todo
 * @returns {number} 新增後的 id
 */
export function addTodo(todo) {
  db.run(
    `INSERT INTO todos (text, completed, createdAt, updatedAt) VALUES (?, ?, ?, ?);`,
    [todo.text, todo.completed ? 1 : 0, todo.createdAt, todo.updatedAt]
  );
  const res = db.exec('SELECT last_insert_rowid() as id;');
  return res[0].values[0][0];
}

/**
 * 取得所有待辦事項
 * @returns {TodoItem[]}
 */
export function getTodos() {
  const res = db.exec('SELECT * FROM todos ORDER BY id DESC;');
  if (!res[0]) return [];
  return res[0].values.map(row => new TodoItem({
    id: row[0],
    text: row[1],
    completed: !!row[2],
    createdAt: row[3],
    updatedAt: row[4],
  }));
}

/**
 * 更新待辦事項
 * @param {TodoItem} todo
 */
export function updateTodo(todo) {
  db.run(
    `UPDATE todos SET text = ?, completed = ?, updatedAt = ? WHERE id = ?;`,
    [todo.text, todo.completed ? 1 : 0, todo.updatedAt, todo.id]
  );
}

/**
 * 刪除待辦事項
 * @param {number} id
 */
export function deleteTodo(id) {
  db.run(`DELETE FROM todos WHERE id = ?;`, [id]);
}

/**
 * 取得單一待辦事項
 * @param {number} id
 * @returns {TodoItem|null}
 */
export function getTodoById(id) {
  const res = db.exec('SELECT * FROM todos WHERE id = ?;', [id]);
  if (!res[0] || res[0].values.length === 0) return null;
  const row = res[0].values[0];
  return new TodoItem({
    id: row[0],
    text: row[1],
    completed: !!row[2],
    createdAt: row[3],
    updatedAt: row[4],
  });
}

/**
 * 匯出資料庫內容
 * @returns {Uint8Array}
 */
export function exportDB() {
  return db.export();
}

/**
 * 匯入資料庫內容
 * @param {Uint8Array} data
 */
export function importDB(data) {
  db = new (db.constructor)(data);
}
