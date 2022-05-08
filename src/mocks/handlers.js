import { rest } from 'msw';

import {
  pokedexJson
} from './mockData';

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(ctx.json(pokedexJson))
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/bulbasaur', (req, res, ctx) => {
    return res(ctx.json({name: 'bulbasaur'}))
  })
];
