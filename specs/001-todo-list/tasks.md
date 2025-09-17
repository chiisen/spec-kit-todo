# Tasks: 網頁版 Todo List

**Input**: Design documents from `/specs/001-todo-list/`
**Prerequisites**: plan.md (required)

## Execution Flow (main)
```
1. Load plan.md from feature directory
2. Load optional design documents (none available)
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: integration tests (user stories)
   → Core: models, services
   → Integration: DB (SQLite), logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness
9. Return: SUCCESS (tasks ready for execution)
```

## Phase 3.1: Setup
 - [x] T001 建立 React 專案結構於 `frontend/`，初始化 HTML/CSS/JS
 - [x] T002 安裝 React 與 SQLite 相關依賴於 `frontend/`
 - [x] T003 [P] 設定 ESLint、Prettier 於 `frontend/`

## Phase 3.2: Tests First (TDD)
 - [x] T004 [P] 撰寫「新增待辦事項」整合測試於 `frontend/tests/integration/add-todo.test.js`
 - [x] T005 [P] 撰寫「編輯待辦事項」整合測試於 `frontend/tests/integration/edit-todo.test.js`
 - [x] T006 [P] 撰寫「刪除待辦事項」整合測試於 `frontend/tests/integration/delete-todo.test.js`
 - [x] T007 [P] 撰寫「標記完成」整合測試於 `frontend/tests/integration/complete-todo.test.js`

## Phase 3.3: Core Implementation
- [x] T008 [P] 實作 TodoItem 資料模型於 `frontend/src/models/todo.js`
- [x] T009 [P] 實作 SQLite 資料存取層於 `frontend/src/db/sqlite.js`
- [x] T010 [P] 實作 Todo List UI 元件於 `frontend/src/components/TodoList.js`
- [x] T011 [P] 實作 Todo 編輯/新增/刪除元件於 `frontend/src/components/TodoEditor.js`

## Phase 3.4: Integration

## Phase 3.5: Polish
## Phase 3.5: Polish
   [x] T014 [P] 撰寫單元測試於 `frontend/tests/unit/`
   [x] T015 [P] 優化效能（大量待辦事項）於 `frontend/src/`
   [x] T016 [P] 撰寫使用說明文件於 `frontend/README.md`

- 可同時執行 [T003, T004, T005, T006, T007]（不同檔案，無依賴）
- 可同時執行 [T008, T009, T010, T011]（不同檔案，無依賴）
- 可同時執行 [T014, T015, T016]（不同檔案，無依賴）

### Task agent commands 範例：
```
task run T003 T004 T005 T006 T007
```

---

## Dependency Notes
- T001, T002 完成後才能進行 T003-T007
- T004-T007 測試需先撰寫並失敗，才能進行 T008-T011 實作
- T012, T013 依賴核心元件完成
- T014-T016 為最後優化與文件
