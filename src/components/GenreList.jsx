/* eslint-disable no-unused-vars */
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { genres, isLoading } = useGenre();
  return (
    <>
    <Heading padding={4} fontSize={"2xl"}>Genres</Heading>
      {isLoading && <Spinner size="lg" />}
      <List padding={1.5} styleType="none">
        {genres.map((genre) => (
          <ListItem padding={1.5} key={genre.id}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"30px"}
                borderRadius={8}
                marginX={1}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button onClick={() => console.log(genre)} variant={"link"}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
