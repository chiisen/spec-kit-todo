import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';

describe('標記完成待辦事項', () => {
  test('使用者可標記待辦事項為完成，並顯示已完成狀態', async () => {
    render(<App />);
    // 等待資料庫初始化完成
    await waitFor(() => {
      expect(screen.getByText('新增待辦事項')).toBeInTheDocument();
    });
    // 先點擊新增按鈕打開編輯器
    const addButton = screen.getByText('新增待辦事項');
    fireEvent.click(addButton);
    // 新增一個待辦事項
    const input = await screen.findByPlaceholderText(/請輸入待辦事項/i);
    fireEvent.change(input, { target: { value: '買牛奶' } });
    const form = input.closest('form');
    const submitButton = form.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);
    // 等待新增完成
    await waitFor(() => {
      expect(screen.getByText('買牛奶')).toBeInTheDocument();
    });
    // 點擊完成按鈕
    const completeButton = screen.getByText(/標記完成/i);
    fireEvent.click(completeButton);
    // 檢查是否顯示已完成狀態 - 按鈕文字變為 "已完成"，且 li 有 completed class
    await waitFor(() => {
      expect(screen.getByText('已完成')).toBeInTheDocument();
    });
  });
});
