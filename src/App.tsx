import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./components/Movies";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/*<h1>App React Typescript</h1>*/}
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/movies" element={<Movies/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;