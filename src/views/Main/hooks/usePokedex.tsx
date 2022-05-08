import axios from 'axios';
import { useQuery } from 'react-query';
import { useState } from 'react';

async function getPokemons() {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=-1');

    return response?.data?.results ?? [];
}

export async function getPokemonDescription(name: string) {
    if (!name) return null;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response?.data;
}

export function usePokedex() {
    const [selected, setSelected] = useState('bulbasaur');
    const { data: options = [] } = useQuery('pokemons', () => getPokemons());
    const { data: pokemon, isLoading } = useQuery(['pokemon', selected], () => getPokemonDescription(selected));

    return {
        options, setSelected, isLoading, pokemon,
    };
}
