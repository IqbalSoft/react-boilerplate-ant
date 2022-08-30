import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from '../components';

test("renders button correctly", () => {
  render(<Button />)

  const buttonEl = screen.getByTestId("button-component");

  expect(buttonEl).toBeTruthy();
});


describe("Trigger Button Clicked", () => {
  test("renders button correctly", () => {
    const handlerMock = jest.fn()
    render(<Button onClick={() => handlerMock()} />)

    const buttonEl = screen.getByTestId("button-component");
    
    fireEvent.click(buttonEl)
    expect(handlerMock).toHaveBeenCalledTimes(1)
  });
})