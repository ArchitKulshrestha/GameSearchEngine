/* eslint-disable no-unused-vars */
import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortList from "./components/SortList";

function App() {
  // const [SelectedGenre, setSelectedGenre] = useState(null);
  // const [SelectedPlatform, setSelectedPlatform] = useState(null);
  const [gameQuery, setGameQuery] = useState({
    genre: null,
    platform: null,
    sortOrder: "",
  });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" " main"`,
          lg: `"nav nav" "aside  main"`,
        }}>
        <GridItem gridArea="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" paddingLeft={3}>
            <GenreList
              SelectedGenre={gameQuery.genre}
              OnSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <HStack>
            <PlatformSelector
              OnSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              SelectedPlatform={gameQuery.platform}
            />
            <SortList />
          </HStack>
          <Gamegrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
