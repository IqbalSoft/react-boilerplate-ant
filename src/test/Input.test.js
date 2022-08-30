import React from "react";
import { render, fireEvent, screen} from '@testing-library/react';

import { Input } from '../components';

test("renders input correctly", () => {
  render(<Input />)

  const inputEl = screen.getByTestId("input-component")

  expect(inputEl).toBeTruthy();
});

describe("Input value", () => {
  test("updates on change", () => {
    render(<Input />)

    const inputEl = screen.getByTestId("input-component")

    fireEvent.change(inputEl, {target: {value: "test"}})

    expect(inputEl.value).toBe("test")
  })
});