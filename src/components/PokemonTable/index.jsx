import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandler } from '../../utils';

export default function PokemonTable({ pokemonData }) {
    const { height, weight, types } = pokemonData
    return (
        <TableContainer  component={Paper} sx={{height:"fit-content", maxWidth: "250", boxShadow: "none"}}>
            <Table aria-label="simple table">
                <TableBody>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>
                            Altura 
                        </TableCell>
                        <TableCell>
                            {height + "cm"}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>
                            Peso 
                        </TableCell>
                        <TableCell>
                            {weight + "g"}
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>
                            Tipos
                        </TableCell>
                        <TableCell>
                            {typeHandler(types)}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}