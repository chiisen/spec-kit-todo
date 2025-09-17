# 網頁版 Todo List 使用說明

## 1. 需求與架構
- **技術棧**：本專案採用 React 搭配 Vite 進行開發，並使用 `sql.js` (SQLite compiled to WebAssembly) 進行前端資料管理。
- **資料儲存**：所有待辦事項資料皆儲存於瀏覽器的記憶體資料庫中（in-memory database）。這意味著當你關閉或重新整理頁面時，所有資料將會**遺失**。

## 2. 安裝與啟動
1. **進入專案目錄**：
   ```
   cd frontend
   ```
2. **安裝相依套件**：
   ```
   npm install
   ```
3. **啟動開發伺服器**：
   ```
   npm run dev
   ```
4. **開啟瀏覽器**：於瀏覽器中開啟 Vite 在終端機所顯示的本地網址 (通常是 `http://localhost:5173`)。

## 3. 功能說明
- 新增待辦事項：點擊「新增待辦事項」按鈕，輸入內容後儲存。
- 編輯待辦事項：點擊「編輯」按鈕，修改內容後儲存。
- 刪除待辦事項：點擊「刪除」按鈕。
- 標記完成：點擊「標記完成」按鈕，已完成項目不可重複標記。
- **分頁顯示**：為了優化效能，待辦事項列表每頁最多顯示 20 筆，並提供「上一頁」與「下一頁」按鈕進行切換。

## 4. 測試
- 本專案使用 Jest 進行單元測試與整合測試。執行以下指令來運行所有測試：
   ```
   npm test
   ```
- 測試檔案路徑：
  - **整合測試**：`frontend/tests/integration/`
  - **單元測試**：`frontend/tests/unit/`

## 5. 開發規範
- 請依照 `specs/001-todo-list/plan.md` 與 `tasks.md` 進行任務。
- 每次任務完成請同步更新 `tasks.md` 狀態。
- 所有與 AI 助理的互動指令（Prompts）皆需記錄於根目錄的 `prompts.md`，以利追蹤開發歷程。

## 6. 常見問題
- **SQLite 初始化失敗**：`sql.js` 需要從網路下載一個 `.wasm` 檔案。若初始化失敗，請檢查你的網路連線，並確保瀏覽器的安全設定沒有阻擋 WebAssembly 的執行。
- **畫面空白，且瀏覽器主控台顯示 `Unexpected token '<'` 或 `Failed to parse source for import analysis` 錯誤**：
  - **根本原因**：這通常是因為使用了錯誤的開發伺服器，或是 Vite 設定未正確處理 JSX 語法所導致。本專案是基於 Vite 建構，必須使用 Vite 的開發伺服器 (`npm run dev`) 來啟動。
  - **解決方案**：請遵循以下的啟動前檢查清單。
- **Lint 或測試錯誤**：本專案已整合 ESLint 與 Prettier。若遇到相關錯誤，請依照終端機的錯誤訊息修正程式碼，或執行格式化指令。

## 7. 啟動前檢查清單

為避免環境設定錯誤導致應用程式無法啟動，請在執行 `npm run dev` 前確認以下事項：

1.  [x] **確認指令正確**：務必使用 `npm run dev` 啟動 Vite 開發伺服器，而非 `npm start` 或其他指令。
2.  [x] **確認所在目錄**：請確保你的終端機位於 `frontend` 目錄下。
3.  [x] **確認 Vite 設定檔**：檢查 `vite.config.js` 是否存在，並已正確設定 `@vitejs/plugin-react` 來處理 `.js` 檔案中的 JSX 語法。
4.  [x] **確認 HTML 入口**：`index.html` 中的 `<script>` 標籤應指向根目錄的 `index.js` (`<script type="module" src="/index.js">`)，Vite 會自動處理後續的模組載入。

## 8. 參考文件
- React 官方文件：https://react.dev/
- sql.js 官方文件：https://sql.js.org/
- Jest 測試框架：https://jestjs.io/

---

如有其他需求或問題，請於 `prompts.md` 記錄並通知 Copilot 協助！
