import { resetDB } from '../src/db/sqlite';

beforeEach(() => {
  // 重置資料庫狀態，確保每個測試都是獨立的
  resetDB();
});

afterEach(() => {
  // 測試結束後也重置，確保清理
  resetDB();
});
