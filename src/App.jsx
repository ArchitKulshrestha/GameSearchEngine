import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
          <GridItem bg="papayawhip" gridArea="aside">
            aside
          </GridItem>
        </Show>
        <GridItem bg="coral" gridArea="main">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
