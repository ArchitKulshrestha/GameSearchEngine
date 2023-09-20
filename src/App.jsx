import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Gamegrid from "./components/Gamegrid";

function App() {
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
          <GridItem gridArea="aside">
            aside
          </GridItem>
        </Show>
        <GridItem  gridArea="main">
          <Gamegrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
