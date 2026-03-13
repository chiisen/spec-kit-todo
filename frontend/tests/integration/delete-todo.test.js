import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';

describe('刪除待辦事項', () => {
  test('使用者可刪除待辦事項並從清單移除', async () => {
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
    // 點擊刪除按鈕
    const deleteButton = screen.getByText(/刪除/i);
    fireEvent.click(deleteButton);
    // 檢查清單是否已移除該項目
    await waitFor(() => {
      expect(screen.queryByText('買牛奶')).not.toBeInTheDocument();
    });
  });
});
