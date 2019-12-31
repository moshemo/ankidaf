import React from 'react'
import styled from 'styled-components'

import { Icon } from 'react-icons-kit'
import { playCircle } from 'react-icons-kit/fa/playCircle'

import Text from 'Elements/Text'
import Button from 'Elements/Button'
import Heading from 'Elements/Heading'

import Container from 'Components/UI/Container'

import { VideoPlayer } from 'Components/VideoPlayer'

import VideoCoverImage from 'Images/laptop-desk--640x360.jpg'

import BannerWrapper, {
  BannerContent,
  VideoContent,
  ButtonGroup,
} from './banner.style'

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Heading as="h1" content="Take the Anki Challenge" />
          <Text
            content="Take your learning to a whole new level with a review program
tailored to your skill and schedule."
          />
          <ButtonGroup>
            <Button className="primary" title="Sign Up" />
            <Button className="text" variant="textButton" title="Learn More" />
          </ButtonGroup>
        </BannerContent>
        <VideoContent>
          <VideoPlayer
            controls
            light={VideoCoverImage}
            // light="https://elementor.thelandingfactory.com/wp-content/uploads/2018/01/videos-placeholder_0003_Layer-6.jpg"
            // playing={visible}
            url="https://player.vimeo.com/video/240066239"
          />
          {/* <Image src={bannerImg} alt="Banner" /> */}
        </VideoContent>
      </Container>
    </BannerWrapper>
  )
}

export default Banner
