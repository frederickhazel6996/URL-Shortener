import React, { useState } from 'react';
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
  Container as ChakraContainer,
  Stack,
  Input,
  Divider,
} from '@chakra-ui/react';
import { Container, Row, Col, Alert, ListGroup } from 'react-bootstrap';
import { ColorModeSwitcher } from '../../Config/ColorModeSwitcher';
import { rocketImage as Rocket, womanImage as Woman } from '../../values';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faClipboard,
  faPaste,
} from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

import './index.scss';

const Home = () => {
  const [copiedLink, setcopiedLink] = useState('');
  const [isCopied, setisCopied] = useState(false);
  const { register, handleSubmit } = useForm();

  let notyf = new Notyf({
    types: [
      {
        type: 'success',
        className: 'notyf__toast--success',
        backgroundColor: '#ff6347',
        icon: {
          className: 'notyf__icon--success',
          tagName: 'i',
        },
      },
    ],
    position: {
      x: 'right',
      y: 'top',
    },
  });
  const submitHandler = data => {
    console.log(data);
  };

  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Container fluid>
            <Row className="justify-content-between">
              {' '}
              <div className="mt text-left">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-social  mx-1"
                  href="https://github.com/frederickhazel6996?tab=repositories "
                >
                  <i className="fab fa-fw fa-github doctor-icon"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-social  mx-1"
                  href="https://twitter.com/meister_kwame"
                >
                  <i className="fab fa-fw fa-twitter doctor-icon"></i>
                </a>
              </div>
              <ColorModeSwitcher justifySelf="flex-end" />
            </Row>
          </Container>

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
            <br />
            <Container>
              <form onSubmit={handleSubmit(submitHandler)}>
                <Row>
                  <Col xs={10} md={9} lg={10}>
                    <Input
                      placeholder="Paste URL"
                      name="url"
                      ref={register({
                        required: true,
                      })}
                    />
                  </Col>
                  <Col xs={1} md={2} lg={2}>
                    <Button
                      rightIcon={<FontAwesomeIcon icon={faRocket} />}
                      colorScheme="button_color"
                      variant="outline"
                      type="submit"
                    >
                      <span className="display__mobile">Munch Url</span>
                    </Button>
                  </Col>
                </Row>
              </form>
              <br />
              <Alert variant="danger custom__alert">
                <span id="link__generated">
                  http://localhost:3000/?url=asdasd
                </span>

                <CopyToClipboard
                  text="lol"
                  onCopy={() => {
                    setisCopied(true);
                    notyf.success('Copied To ClipBoard');
                  }}
                >
                  <span className="ml-5">
                    <FontAwesomeIcon icon={faPaste} />
                  </span>
                </CopyToClipboard>
              </Alert>
              <br />
              <Row>
                <Col xs={12}>
                  <div className="old__links__box" id="link__box__scroll">
                    {' '}
                    <Text fontSize="lg" color="gray.500" width="100">
                      Recent Links
                    </Text>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Text fontSize="lg" color="gray.500" width="100">
                          http://localhost:3000/?url=asdasd{' '}
                          <CopyToClipboard
                            text="lol"
                            onCopy={() => {
                              setisCopied(true);
                              notyf.success('Copied To ClipBoard');
                            }}
                          >
                            <span className="ml-5">
                              <FontAwesomeIcon icon={faPaste} color="#ff6347" />
                            </span>
                          </CopyToClipboard>
                        </Text>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Text fontSize="lg" color="gray.500" width="100">
                          http://localhost:3000/?url=asdasd{' '}
                          <CopyToClipboard
                            text="lol"
                            onCopy={() => {
                              setisCopied(true);
                              notyf.success('Copied To ClipBoard');
                            }}
                          >
                            <span className="ml-5">
                              <FontAwesomeIcon icon={faPaste} color="#ff6347" />
                            </span>
                          </CopyToClipboard>
                        </Text>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Text fontSize="lg" color="gray.500" width="100">
                          http://localhost:3000/?url=asdasd{' '}
                          <CopyToClipboard
                            text="lol"
                            onCopy={() => {
                              setisCopied(true);
                              notyf.success('Copied To ClipBoard');
                            }}
                          >
                            <span className="ml-5">
                              <FontAwesomeIcon icon={faPaste} color="#ff6347" />
                            </span>
                          </CopyToClipboard>
                        </Text>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </VStack>

          <footer>
            <Text fontSize="sm" color="gray.500" width="100">
              &copy; <em id="date"></em> Meister Kwame
            </Text>
          </footer>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
