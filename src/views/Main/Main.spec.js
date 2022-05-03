import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Main from "./Main";
import {QueryClientProvider, QueryClient} from "react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: 1,
            retry: 0,
        },
    },
})

const pokedexJson = {
    results: [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
    ]
}


const server = setupServer(
    rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
        return res(ctx.json(pokedexJson))
    }),
    rest.get('https://pokeapi.co/api/v2/pokemon/bulbasaur', (req, res, ctx) => {
        return res(ctx.json({name: 'bulbasaur'}))
    })
)

server.printHandlers();



const Wrapper = ({children}) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('Main', () => {
    beforeAll(() => server.listen())
    afterEach(() => {
        server.resetHandlers();
        queryClient.clear();
    })
    afterAll(() => server.close())

    test('expects autocomplete gets data', async () => {
        render(<Wrapper><Main/>)</Wrapper>);

        const button = screen.getByRole("button");
        fireEvent.click(button)
        const optionElements = await waitFor(() => screen.findAllByRole(/option/i))
        expect(optionElements.length).toBe(2)
    })

    test('expect description to match mock', async () => {

        render(<Wrapper><Main/>)</Wrapper>);

        const titleText = await waitFor(() => screen.findByText(/bulbasaur/i))
        expect(titleText).toBeInTheDocument()
    })
})


