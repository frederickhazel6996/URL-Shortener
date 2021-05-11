import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Image,
  HStack,
  SimpleGrid,
  Button,
  Container,
  Stack,
  Input,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../Config/ColorModeSwitcher';
import { rocketImage as Rocket, womanImage as Woman } from '../../values';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import './index.scss';

const Home = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = data => {
    console.log(data);
  };
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />

          <VStack spacing={0}>
            <Image
              src={Rocket}
              alt="Rocket Image"
              h="40vmin"
              pointerEvents="none"
            />
            <Heading fontSize="5xl" color="tomato">
              Shorten Any Links
            </Heading>
            <Text fontSize="lg" color="gray.500" width="100">
              Build and protect your brand using powerful and recognizable{' '}
              <Code className="inline__text" color="tomato">
                Short links
              </Code>
            </Text>

            <Container>
              <form onSubmit={handleSubmit}>
                <Stack direction="row" spacing={4}>
                  {' '}
                  <Input
                    placeholder="Paste URL"
                    name="url"
                    ref={register({
                      required: true,
                    })}
                  />
                  <Button
                    rightIcon={<FontAwesomeIcon icon={faRocket} />}
                    colorScheme="button_color"
                    variant="outline"
                    type="submit"
                  >
                    Munch Url
                  </Button>
                </Stack>
              </form>
            </Container>
          </VStack>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
