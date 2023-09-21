/* eslint-disable react/prop-types */
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


const GenreList = ({OnSelectedGenre,SelectedGenre}) => {
  const { Data, isLoading } = useGenre('/genres');
  return (
    <>
    <Heading padding={4} fontSize={"2xl"}>Genres</Heading>
      {isLoading && <Spinner size="lg" />}
      <List padding={1.5} styleType="none">
        {Data.map((genre) => (
          <ListItem padding={1.5} key={genre.id}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"30px"}
                borderRadius={8}
                marginX={1}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button fontWeight={genre.id==SelectedGenre?.id ?'extrabold':'normal'} onClick={()=>OnSelectedGenre(genre)} variant={"link"}>
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
