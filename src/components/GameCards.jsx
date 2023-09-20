/* eslint-disable react/prop-types */
import {
  Badge,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaAndroid,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import getCroppedImageUrl  from "../services/imageUrl";

const GameCards = ({ game }) => {
  const platformsIcons = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  const color = game.metacritic > 80 ? "green" : game.metacritic > 60 ? "yellow" : "red";     

  return (
    <Card borderRadius={15} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <Container padding={0} margin={0}>
            {game.parent_platforms.map((platform) => (
              <Icon
                key={platform.platform.id}
                as={platformsIcons[platform.platform.slug]}
                marginY={2}
                marginX={1}
                color={"gray.400"}
                fontSize={"1.1rem"}
              />
            ))}
          </Container>
          <Badge fontSize={'14px'} paddingX={2} borderRadius={'5px'} colorScheme={color}>{game.metacritic}</Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCards;
