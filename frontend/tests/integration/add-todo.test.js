import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';

describe('新增待辦事項', () => {
  test('使用者可新增待辦事項並顯示於清單', async () => {
    render(<App />);
    // 等待資料庫初始化完成
    await waitFor(() => {
      expect(screen.getByText('新增待辦事項')).toBeInTheDocument();
    });
    // 先點擊新增按鈕打開編輯器
    const addButton = screen.getByText('新增待辦事項');
    fireEvent.click(addButton);
    // 現在應該顯示輸入框
    const input = await screen.findByPlaceholderText(/請輸入待辦事項/i);
    fireEvent.change(input, { target: { value: '買牛奶' } });
    // 找到表單中的新增按鈕
    const form = input.closest('form');
    const submitButton = form.querySelector('button[type="submit"]');
    fireEvent.click(submitButton);
    // 檢查清單是否出現新項目
    await waitFor(() => {
      expect(screen.getByText('買牛奶')).toBeInTheDocument();
    });
  });
});
