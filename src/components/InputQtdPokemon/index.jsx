import * as React from 'react';
import { Box, TextField } from "@mui/material";

export default function InputQtdPokemon ( { modifyPokemonQtd} ) {
    return (
        <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
            <TextField type="number"id="outlined-basic" label="Qtd. de Pokemons" variant="outlined"  onChange={(e) => modifyPokemonQtd(e.target.value)}/>
        </Box>
    )
}