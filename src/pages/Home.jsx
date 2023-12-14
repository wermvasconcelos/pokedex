import React, { useEffect, useState } from "react";
import PokdeCard from "../components/PokeCard";
import NavBar from "../components/NavBar";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";
import InputQtdPokemon from "../components/InputQtdPokemon";

export const Home = ({ setPokemonData }) => {
    const [pokemons, setPokemons] = useState([]);
    const [updPokemons, setUpdPokemons] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = () => {
        var endpoints = []
        
        for (var i = 1; i < 1011; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => { 
            setPokemons(res)
            setUpdPokemons([...res]);
        });
        
        
        // axios
        // .get("https://pokeapi.co/api/v2/pokemon?Limit=50")
        // .then((res) => setPokemons(res.data.results))
        // .catch((err) => console.log(err));
    };

    const pokemonFilter = (name) => {
        var filteredPokemons = []

        if (name === "") {
            getPokemons()
        }

        for (var i in pokemons) {
            if (pokemons[i].data.name.toLowerCase().includes(name.toLowerCase())) {
                filteredPokemons.push(pokemons[i])
            }
        }

        setPokemons(filteredPokemons)
    };

    const modifyPokemonQtd = (qtd) => {
        var filteredPokemons = []
    
        if (qtd == null || qtd == 0) {
            getPokemons()
        }

        for (var i = 0; i < qtd ; i++) {
            // Adiciona o pokemon atual ao array filteredPokemons
            filteredPokemons.push(updPokemons[i]);
        }
        
        setPokemons(filteredPokemons)

    }

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData)
        navigate("/profile")
    }
    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false" align="center">
                <InputQtdPokemon modifyPokemonQtd={modifyPokemonQtd}/>
                <Grid container spacing={2}>
                    {pokemons.length === 0 ? <Skeletons /> :
                        pokemons.map((pokemon, key) =>
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <Box onClick={() => pokemonPickHandler(pokemon.data)} sx={{cursor:"pointer"}}>
                                    <PokdeCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                                </Box>
                            </Grid>
                        )}
                </Grid>

            </Container>
        </div>
    )
}