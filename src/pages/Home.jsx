import React, { useEffect } from "react";
import PokdeCard from "../components/PokeCard";
import NavBar from "../components/NavBar";
import { Container, Grid } from "@mui/material";
import axios from "axios";

export const Home = () => {
    useEffect(() =>{
        getPokemons();
    })
    
    constG
    axios.get("https://p  okeapi.com/api/v2/pokemon?limit=50").then(() => )
    return (
        <div>
            <NavBar/>
            <Container maxWidth="false">
                <Grid container>
                    <Grid item xs={3}>
                        <PokdeCard/>
                    </Grid>
                    <Grid item xs={3}>
                        <PokdeCard/>
                    </Grid>
                    <Grid item xs={3}>
                        <PokdeCard/>
                    </Grid>
                    <Grid item xs={3}>
                        <PokdeCard/>
                    </Grid>
                </Grid>
                
            </Container>
        </div>
    )
}