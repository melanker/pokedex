import React from 'react';
import {usePokedex} from "./hooks/usePokedex";
import {Autocomplete, TextField} from "@mui/material";
import Description from "./components/Description/Description";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

function Main() {
    const {options, setSelected, isLoading, pokemon} = usePokedex()

    const handleChange = (event, value) => {
        if (!value) {
            return null
        }
        setSelected(value.name)
    }

    return (
        <MainContainer data-testid='main'>
            <Autocomplete
                renderInput={(params) => (
                    <TextField {...params} label="Highlights" margin="normal"/>
                )}
                options={options}
                getOptionLabel={(option) => option.name}
                style={{width: 300}}
                onChange={handleChange}
            />
            {isLoading ? "Loading..." :
                <Description name={pokemon.name} imageUrl={pokemon?.sprites?.front_default}/>}
        </MainContainer>
    );
}

export default Main;
