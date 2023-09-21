/* eslint-disable no-unused-vars */
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/imageUrl";

const GenreList = () => {
  const { genres,isLoading} = useGenre();
  return (
    <>
    {isLoading && <Spinner size='lg'  />}
      <List padding={1.5} styleType="none">
        {genres.map((genre) => (
          <ListItem padding={1.5} key={genre.id}>
            <HStack>
              <Image
                boxSize={"30px"}
                borderRadius={8}
                marginX={1}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
