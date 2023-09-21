/* eslint-disable no-unused-vars */
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

function App() {
  const [SelectedGenre,setSelectedGenre]=useState(null )
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside main"`,
        }}>
        <GridItem  gridArea="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" paddingLeft={3}>
            <GenreList SelectedGenre={SelectedGenre} OnSelectedGenre={(genre)=>setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem  gridArea="main">
          <Gamegrid SelectedGenre={SelectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
