import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { usePokedex } from './hooks/usePokedex';
import Description from './components/Description/Description';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

function Main() {
    const {
        options, setSelected, isLoading, pokemon,
    } = usePokedex();

    const handleChange = (
        event: React.SyntheticEvent<Event | Element>,
        value: { name: string } | null,
    ) => {
        if (!value) {
            return null;
        }
        return setSelected(value.name);
    };

    return (
        <MainContainer data-testid="main">
            <Autocomplete
                renderInput={(params) => (
                    <TextField {...params} label="Highlights" margin="normal" />
                )}
                options={options}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                onChange={handleChange}
            />
            {isLoading ? 'Loading...'
                : <Description name={pokemon.name} imageUrl={pokemon?.sprites?.front_default} />}
        </MainContainer>
    );
}

export default Main;
