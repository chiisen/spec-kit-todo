// logger.js 錯誤提示與日誌工具
// frontend/src/utils/logger.js

/**
 * 顯示錯誤訊息
 * @param {string|Error} error
 */
export function logError(error) {
  const msg = error instanceof Error ? error.message : error;
  // 可擴充：顯示於 UI 或彈窗
  console.error(`[錯誤] ${msg}`);
}

/**
 * 顯示一般日誌
 * @param {string} message
 */
export function logInfo(message) {
  console.log(`[日誌] ${message}`);
}

/**
 * 顯示警告訊息
 * @param {string} message
 */
export function logWarning(message) {
  console.warn(`[警告] ${message}`);
}
