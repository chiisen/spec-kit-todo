import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';

describe('編輯待辦事項', () => {
  test('使用者可編輯待辦事項並正確更新內容', async () => {
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
    // 點擊編輯按鈕
    const editButton = screen.getByText(/編輯/i);
    fireEvent.click(editButton);
    // 編輯內容
    const editInput = screen.getByDisplayValue('買牛奶');
    fireEvent.change(editInput, { target: { value: '買麵包' } });
    const saveButton = screen.getByText(/儲存/i);
    fireEvent.click(saveButton);
    // 檢查內容是否更新
    await waitFor(() => {
      expect(screen.getByText('買麵包')).toBeInTheDocument();
    });
  });
});
