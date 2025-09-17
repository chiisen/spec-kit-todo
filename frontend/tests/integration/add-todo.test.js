import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('新增待辦事項', () => {
  test('使用者可新增待辦事項並顯示於清單', () => {
    render(<App />);
    // 輸入待辦事項內容
    const input = screen.getByPlaceholderText(/新增待辦事項/i);
    fireEvent.change(input, { target: { value: '買牛奶' } });
    // 點擊新增按鈕
    const addButton = screen.getByText(/新增/i);
    fireEvent.click(addButton);
    // 檢查清單是否出現新項目
    expect(screen.getByText('買牛奶')).toBeInTheDocument();
  });
});
