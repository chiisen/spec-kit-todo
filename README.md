# spec-kit-todo
用 Spec Kit 做 todo list 網站

---

參考: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/

這篇文章介紹了 GitHub 最近推出的 Spec Kit 開源工具，並詳細闡述了「規格驅動開發」（Spec-driven Development）與 AI 工程協作的新流程。

### 規格驅動開發的核心理念

- 傳統 AI 編程通常只給 AI 一個模糊的目標，導致生成的程式碼容易偏離實際需求，例如只得到表面可運作，但設計不符、部分功能缺失或無法編譯的程式碼。
- 規格驅動的流程將「規格」放在中心，成為持續演化的「活文件」；每當發現不清楚或變更時，就直接修正並讓 AI 依據最新規格重新規劃和產出。

### Spec Kit 工作流程四階段

1. **Specify（規格）**：  
   - 先定義「要做什麼、為什麼做」與最終使用者的期望，而不是技術細節。
   - 由 AI 協助生成完善且可持續修改的規格說明，這是整個項目的核心文檔。

2. **Plan（規劃）**：  
   - 進入技術層面，告知 AI需求技術棧、架構、整合限制、合規規範、效能目標等。
   - AI 生成完整的技術規劃，包括集成現有系統或特殊標準。

3. **Tasks（任務拆解）**：  
   - AI 依據規格與技術規劃，分解出具體可檢查的小任務（如「用戶註冊端點電子郵件格式驗證」）。
   - 每個任務可獨立實作及測試，有利於透明、可控地進行複雜系統或新功能。

4. **Implement（實作）**：  
   - AI 逐步（或平行）完成任務，工程師負責檢查、驗證與調整結果。
   - 每階段都有明確檢查點，開發者可隨時修正規格、規劃、任務，確保最終成果高度貼合原始意圖。

### Spec Kit 工具運用方式

- 主要與 GitHub Copilot、Claude Code、Gemini CLI 等 AI 協作工具整合。
- 使用 `specify` 指令初始化專案，再用 `/specify` 提供高層需求、由 AI 生成規格。
- 使用 `/plan` 指令，引導 AI 根據技術需求做出架構規劃。
- 用 `/tasks` 指令請 AI 自動將規格和規劃拆為一系列可執行任務，方便你與 AI協作實作。

### 為何這種方式更可靠

- AI只擅長樣式補全，對曖昧需求只能「猜」。
- 明細分階段說明（意圖、技術、任務）可讓 AI免除過多假設，精準實現你的需求。
- 合規、安全、設計等要求都可直接寫進規格和計畫，成為源頭，避免事後交錯或缺漏。

### 適用場景

- 新專案起步（零到一）、既有系統新功能（N到N+1）、舊系統改造。
- 最大好處是將業務邏輯、技術規劃與任務分離，讓架構可快速調整，減少重工。

### 前景展望

- 不再以「程式碼」作為唯一依據，而是轉向「規格/意圖」為源頭，程式碼由 AI自動實現和跟隨規格演化。
- Spec Kit 會持續優化，探索 VS Code 整合、版本比較、規模管理等進階應用。

***

這篇文章強調「規格–規劃–任務–實作」四階段分明，每一階段明確驗證，確保 AI 工程師真正理解和完成你想要的目標，是現代 AI 協作編程流程的重要革新。

---

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
[spec.md](./specs/001-todo-list/spec.md)

# plan
[plan.md](./specs/001-todo-list/plan.md)

# 任務狀態
[tasks.md](./specs/001-todo-list/tasks.md)

# frontend
[README.md](./frontend/README.md)

# prompts
[prompts.md](./prompts.md)

