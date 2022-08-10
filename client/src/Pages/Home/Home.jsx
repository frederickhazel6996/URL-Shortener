import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  Code,
  Grid,
  Heading,
  Image,
  Button,
  Input,
} from '@chakra-ui/react';
import { Container, Row, Col, Alert, ListGroup } from 'react-bootstrap';
import { ColorModeSwitcher } from '../../Config/ColorModeSwitcher';
import { rocketImage as Rocket, notyf } from '../../Utils/values';
import {
  setToLocalStorage,
  getFromLocalStorage,
  setBlankLocalStorage,
  urlShorterner,
} from '../../Utils/methods';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faPaste } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialButtons from '../Components/Socials/Socials';

import './index.scss';

const Home = () => {
  const [copiedLink, setcopiedLink] = useState(null);
  const { register, handleSubmit } = useForm();
  const [urls, seturls] = useState([]);

  useEffect(() => {
    let tempUrls = getFromLocalStorage();
    if (tempUrls === null) {
      setBlankLocalStorage();
    } else {
      seturls(tempUrls);
    }
  }, []);

  const submitHandler = async data => {
    const shortUrl = await urlShorterner(data.url);
    if (shortUrl === 0) return;

    console.log(shortUrl);
    if (urls.length >= 5) {
      seturls([shortUrl]);
    } else {
      seturls([...urls, shortUrl]);
    }
    setcopiedLink(shortUrl);
    setToLocalStorage(shortUrl);
  };

  let recentURLList = urls
    .map((urls, index) => (
      <ListGroup.Item key={index} className="old__links__item">
        <Text fontSize="lg" color="gray.500" width="100">
          {urls}
          <CopyToClipboard
            text={urls}
            onCopy={() => {
              notyf.success('Copied To ClipBoard');
            }}
          >
            <span className="ml-5">
              <FontAwesomeIcon icon={faPaste} color="#ff6347" />
            </span>
          </CopyToClipboard>
        </Text>
      </ListGroup.Item>
    ))
    .reverse();
  return (
    <>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <Container fluid>
            <Row className="justify-content-between">
              <SocialButtons />
              <ColorModeSwitcher />
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
                  <Col xs={9} md={9} lg={10}>
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
                      <span className="display__mobile">Blaze Url</span>
                    </Button>
                  </Col>
                </Row>
              </form>
              {copiedLink !== null ? (
                <>
                  <br />
                  <Alert variant="danger custom__alert">
                    <span id="link__generated">{copiedLink}</span>

                    <CopyToClipboard
                      text={copiedLink}
                      onCopy={() => {
                        notyf.success('Copied To ClipBoard');
                      }}
                    >
                      <span className="ml-5">
                        <FontAwesomeIcon icon={faPaste} />
                      </span>
                    </CopyToClipboard>
                  </Alert>
                </>
              ) : null}
              <br />
              <Row>
                <Col xs={12}>
                  <div className="old__links__box" id="link__box__scroll">
                    {' '}
                    <Text fontSize="lg" color="gray.500" width="100">
                      Recent Links
                    </Text>
                    <ListGroup variant="flush">{recentURLList}</ListGroup>
                  </div>
                </Col>
              </Row>
            </Container>
          </VStack>

          <footer>
            <Text fontSize="sm" color="gray.500" width="100">
              &copy;{' '}
              <em id="date">
                2022 Meister Kwame{' '}
                <span className="ghana_flag">&#127468;&#127469;</span>
              </em>
            </Text>
          </footer>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
