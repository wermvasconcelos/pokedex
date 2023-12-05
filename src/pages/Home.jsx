import React, { useEffect, useState } from "react";
import PokdeCard from "../components/PokeCard";
import NavBar from "../components/NavBar";
import { Container, Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {
    const [pokemons, setPokemons ] = useState([]);

    useEffect(() =>{
        getPokemons();
    }, [])
    
    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i < 50; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));

        // axios
        // .get("https://pokeapi.co/api/v2/pokemon?Limit=50")
        // .then((res) => setPokemons(res.data.results))
        // .catch((err) => console.log(err));
    };

    return (
        <div>
            <NavBar/>
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) =>
                        <Grid item xs={2} key={key}>
                            <PokdeCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
                        </Grid> 
                    )}
                </Grid>
                
            </Container>
        </div>
    )
}