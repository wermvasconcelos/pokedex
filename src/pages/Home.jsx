import React, { useEffect, useState } from "react";
import PokdeCard from "../components/PokeCard";
import NavBar from "../components/NavBar";
import { Box, Container, Grid, Pagination } from "@mui/material";
import axios from "axios";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";
import InputQtdPokemon from "../components/InputQtdPokemon";

export const Home = ({ setPokemonData }) => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const navigate = useNavigate();

    useEffect(() => {
        getPokemons();
    }, [currentPage]);

    const getPokemons = async () => {
        try {
            const startIndex = (currentPage - 1) * itemsPerPage + 1;
            const endIndex = Math.min(startIndex + itemsPerPage - 1, 1010);

            const responses = await axios.all(
                Array.from({ length: endIndex - startIndex + 1 }, (_, index) =>
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${startIndex + index}`)
                )
            );

            const data = responses.map((res) => res.data);
            setPokemons(data);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const renderPokemons = () => {
        return pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <Box
                    onClick={() => pokemonPickHandler(pokemon)}
                    sx={{ cursor: "pointer" }}
                >
                    <PokdeCard
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types={pokemon.types}
                    />
                </Box>
            </Grid>
        ));
    };

    const pokemonFilter = (name) => {
        if (name === "") {
            getPokemons();
        }

        const filteredPokemons = pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
        );

        setPokemons(filteredPokemons);
        setCurrentPage(1);
    };

    const modifyPokemonQtd = (qtd) => {

        if (qtd == null || qtd === "") {
            getPokemons();
        }

        const filteredPokemons = pokemons.slice(0, qtd);
        setPokemons(filteredPokemons);
        setCurrentPage(1);
    };

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");
    };

    const totalPageCount = Math.ceil(1010 / itemsPerPage);

    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false" align="center">
                <InputQtdPokemon modifyPokemonQtd={modifyPokemonQtd} />
                <Box display="flex" justifyContent="center"  mb={4}>
                    <Pagination
                        count={totalPageCount}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        style={{ marginTop: "20px" }}
                    />
                </Box>
                <Grid container spacing={2}>
                    {pokemons.length === 0 ? <Skeletons /> : renderPokemons()}
                </Grid>
            </Container>
        </div>
    );
};