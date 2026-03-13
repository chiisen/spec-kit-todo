# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 專案初始化，完成 Todo List 基本功能（新增、編輯、刪除、標記完成）
- 整合測試與單元測試框架

### Changed
- 修正 ESLint React 版本設定
- 修正 tasks.md 重複標題格式問題

### Fixed
- sql.js 測試環境問題（本地化 WASM 檔案）
- 整合測試中 db 初始化問題
- 更新測試以正確處理 UI 元素選擇

### Dependencies
- 下載 sql-wasm.wasm 到本地以支援 Node.js 測試環境
- 執行 npm audit fix 修復安全漏洞
- 更新 baseline-browser-mapping 至最新版本

### Documentation
- 修正 tasks.md 缺失的 T012, T013 任務定義
- 填補 Phase 3.4: Integration 任務列表
