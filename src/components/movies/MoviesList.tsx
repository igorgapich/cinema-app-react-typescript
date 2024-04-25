import MovieCard from "./MovieCard";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {IMovie} from "./IMovie";

//http://www.omdbapi.com/?i=tt3896198&apikey=7d51ac11

const api: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=7d51ac11';
const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[] | undefined>();
    useEffect(() => {
        fetch(api)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMovies(data);
            })
    }, [])
    return (
        <>
            <h2>Movies List</h2>
            <div>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={3}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <MovieCard/>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <MovieCard/>
                    </Grid>
                </Grid>

            </div>
        </>
    );
}
export default MoviesList