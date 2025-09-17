import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('編輯待辦事項', () => {
  test('使用者可編輯待辦事項並正確更新內容', () => {
    render(<App />);
    // 新增一個待辦事項
    const input = screen.getByPlaceholderText(/新增待辦事項/i);
    fireEvent.change(input, { target: { value: '買牛奶' } });
    const addButton = screen.getByText(/新增/i);
    fireEvent.click(addButton);
    // 點擊編輯按鈕（假設 UI 有編輯按鈕）
    const editButton = screen.getByText(/編輯/i);
    fireEvent.click(editButton);
    // 編輯內容
    const editInput = screen.getByDisplayValue('買牛奶');
    fireEvent.change(editInput, { target: { value: '買麵包' } });
    const saveButton = screen.getByText(/儲存/i);
    fireEvent.click(saveButton);
    // 檢查內容是否更新
    expect(screen.getByText('買麵包')).toBeInTheDocument();
  });
});
