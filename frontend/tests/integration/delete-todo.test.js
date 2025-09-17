import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('刪除待辦事項', () => {
  test('使用者可刪除待辦事項並從清單移除', () => {
    render(<App />);
    // 新增一個待辦事項
    const input = screen.getByPlaceholderText(/新增待辦事項/i);
    fireEvent.change(input, { target: { value: '買牛奶' } });
    const addButton = screen.getByText(/新增/i);
    fireEvent.click(addButton);
    // 點擊刪除按鈕（假設 UI 有刪除按鈕）
    const deleteButton = screen.getByText(/刪除/i);
    fireEvent.click(deleteButton);
    // 檢查清單是否已移除該項目
    expect(screen.queryByText('買牛奶')).not.toBeInTheDocument();
  });
});
