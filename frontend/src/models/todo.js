// TodoItem 資料模型
// frontend/src/models/todo.js

export class TodoItem {
  /**
   * @param {Object} params
   * @param {number} params.id - 唯一識別碼
   * @param {string} params.text - 待辦事項內容
   * @param {boolean} params.completed - 是否已完成
   * @param {string} [params.createdAt] - 建立時間 (ISO 格式)
   * @param {string} [params.updatedAt] - 更新時間 (ISO 格式)
   */
  constructor({ id, text, completed = false, createdAt, updatedAt }) {
    this.id = id;
    this.text = text;
    this.completed = completed;
    this.createdAt = createdAt || new Date().toISOString();
    this.updatedAt = updatedAt || new Date().toISOString();
  }

  /**
   * 更新內容
   * @param {string} newText
   */
  updateText(newText) {
    this.text = newText;
    this.updatedAt = new Date().toISOString();
  }

  /**
   * 標記完成
   */
  complete() {
    this.completed = true;
    this.updatedAt = new Date().toISOString();
  }

  /**
   * 取消完成
   */
  uncomplete() {
    this.completed = false;
    this.updatedAt = new Date().toISOString();
  }

  /**
   * 轉為純物件
   */
  toJSON() {
    return {
      id: this.id,
      text: this.text,
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
