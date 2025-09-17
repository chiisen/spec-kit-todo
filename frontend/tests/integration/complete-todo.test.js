import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('標記完成待辦事項', () => {
  test('使用者可標記待辦事項為完成，並顯示已完成狀態', () => {
    render(<App />);
    // 新增一個待辦事項
    const input = screen.getByPlaceholderText(/新增待辦事項/i);
    fireEvent.change(input, { target: { value: '買牛奶' } });
    const addButton = screen.getByText(/新增/i);
    fireEvent.click(addButton);
    // 點擊完成按鈕（假設 UI 有完成按鈕）
    const completeButton = screen.getByText(/完成/i);
    fireEvent.click(completeButton);
    // 檢查是否顯示已完成狀態
    expect(screen.getByText('買牛奶 (已完成)')).toBeInTheDocument();
  });
});
