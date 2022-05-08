import { fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from "./Main";
import { renderWithQueryClient } from "../../test-utils";
import React from 'react';


test('expects autocomplete gets data', async () => {
    renderWithQueryClient(<Main />)

    const button = screen.getByRole("button");
    fireEvent.click(button)
    const optionElements = await waitFor(() => screen.findAllByRole(/option/i))
    expect(optionElements.length).toBe(2)
})

test('expect description to match mock', async () => {
    renderWithQueryClient(<Main />)

    const titleText = await waitFor(() => screen.findByText(/bulbasaur/i))
    expect(titleText).toBeInTheDocument()
})


