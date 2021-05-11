import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  SimpleGrid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../Config/ColorModeSwitcher';
import { Logo } from '../../Logo';
import './index.scss';
const Home = () => {
  return (
    <>
      <div class="rocket">
        <div class="rocket-body">
          <div class="body"></div>
          <div class="fin fin-left"></div>
          <div class="fin fin-right"></div>
          <div class="window"></div>
        </div>
        <div class="exhaust-flame"></div>
        <ul class="exhaust-fumes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="star">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
