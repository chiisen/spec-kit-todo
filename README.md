# spec-kit-todo
用 Spec Kit 做 todo list 網站
```bash
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
```

---

## 專案功能簡介

本專案是一個網頁版 Todo List，使用者可在網頁上新增、查看、編輯、刪除及標記完成待辦事項。所有資料儲存於瀏覽器記憶體資料庫，關閉或重新整理頁面後資料會遺失。支援分頁顯示，每頁最多 20 筆。

---

## 目錄結構說明

```
frontend/
	App.js                # 主應用程式入口
	index.js              # React 入口
	index.html            # 主 HTML 檔案
	style.css             # 樣式
	src/
		components/
			TodoEditor.js     # 編輯/新增待辦事項元件
			TodoList.js       # 待辦事項列表元件
		db/
			sqlite.js         # 前端 SQLite 資料管理
		models/
			todo.js           # Todo 資料模型
		utils/
			logger.js         # 簡易日誌工具
	tests/
		integration/        # 整合測試
		unit/               # 單元測試
	package.json          # 前端相依套件與指令
	README.md             # 前端說明文件
specs/
	001-todo-list/
		spec.md             # 功能規格
		plan.md             # 開發計畫
		tasks.md            # 任務狀態
prompts.md              # 提示語彙
README.md               # 專案總說明
```

---

## 主要技術棧

- React 19
- Vite
- sql.js (SQLite WebAssembly)
- Jest (測試)
- ESLint, Prettier (程式碼品質)

---

# spec
[spec.md](.\specs\001-todo-list\spec.md)

# plan
[plan.md](.\specs\001-todo-list\plan.md)

# 任務狀態
[tasks.md](.\specs\001-todo-list\tasks.md)

# frontend
[README.md](.\frontend\README.md)

# prompts
[prompts.md](.\prompts.md)

