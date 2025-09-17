# 網頁版 Todo List 使用說明

## 1. 需求與架構
- 本專案採用 React + SQLite (sql.js) 實作，支援待辦事項新增、編輯、刪除、標記完成。
- 所有資料皆儲存於瀏覽器記憶體（SQLite in-memory），不會寫入本地硬碟。

## 2. 安裝與啟動
1. 進入 frontend 目錄：
   ```
   cd frontend
   ```
2. 安裝依賴：
   ```
   npm install
   ```
3. 啟動本地伺服器：
   ```
   npm start
   ```
   或
   ```
   npx serve .
   ```
4. 於瀏覽器開啟 http://localhost:3000 或 http://localhost:5000

## 3. 功能說明
- 新增待辦事項：點擊「新增待辦事項」按鈕，輸入內容後儲存。
- 編輯待辦事項：點擊「編輯」按鈕，修改內容後儲存。
- 刪除待辦事項：點擊「刪除」按鈕。
- 標記完成：點擊「標記完成」按鈕，已完成項目不可重複標記。
- 分頁顯示：每頁顯示 20 筆，支援上一頁/下一頁切換。

## 4. 測試
- 整合測試與單元測試皆可用 Jest 執行：
   ```
   npm test
   ```
- 測試檔案路徑：
  - 整合測試：`frontend/tests/integration/`
  - 單元測試：`frontend/tests/unit/`

## 5. 開發規範
- 請依照 `specs/001-todo-list/plan.md` 與 `tasks.md` 進行任務。
- 每次任務完成請同步更新 `tasks.md` 狀態。
- 所有 prompt 請記錄於 `prompts.md`，方便追蹤。

## 6. 常見問題
- 若遇到 SQLite 無法初始化，請確認網路可存取 sql.js CDN。
- 若有 lint 或測試錯誤，請依照錯誤訊息修正程式碼。

## 7. 參考文件
- React 官方文件：https://react.dev/
- sql.js 官方文件：https://sql.js.org/
- Jest 測試框架：https://jestjs.io/

---

如有其他需求或問題，請於 `prompts.md` 記錄並通知 Copilot 協助！
