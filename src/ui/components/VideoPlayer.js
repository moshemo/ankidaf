import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

// --- COMPONENTS
export const VideoPlayer = props => (
  <VideoBase>
    <Video width="100%" height="100%" url={props.url} {...props} />
  </VideoBase>
)

// --- STYLES

const VideoBase = styled.div`
  position: relative;
  padding-top: 56.25%;
`

const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;

  .react-player__preview {
    border-radius: 15px;
    box-shadow: 15px 15px 30px 0 rgba(0, 0, 0, 0.15);

    @media only screen and (max-width: 768px) {
      box-shadow: 7px 7px 15px 0 rgba(0, 0, 0, 0.15);
    }
  }

  .react-player__shadow {
    border: 5px solid #fff !important;
    border-radius: 999em !important;

    height: 50px !important;
    width: 50px !important;
    padding: 50px !important;

    opacity: 0.8 !important;

    @media only screen and (max-width: 768px) {
      height: 28px !important;
      width: 28px !important;
      padding: 28px !important;
    }
  }

  .react-player__play-icon {
    border-width: 20px 0px 20px 32px !important;

    @media only screen and (max-width: 768px) {
      border-width: 9px 0 9px 16px !important;
    }
  }
`
