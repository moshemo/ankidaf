import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 602px;
  background-color: ${themeGet('colors.light', '#FAFBFF')};
  overflow: hidden;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(552px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
    }
    @media only screen and (max-width: 991px) {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      padding-top: 40px;
      padding-bottom: 60px;

      p {
        margin: 0 auto;
      }
    }
  }
`

export const BannerContent = styled.div`
  max-width: 500px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 100%;
  }

  h1 {
    font-size: 46px;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    color: #6d7279;
    font-size: 18px;
    line-height: 29px;
    max-width: 450px;
  }
`

export const VideoContent = styled.div`
  flex-shrink: 0;
  flex-basis: 46%;
  margin-top: 40px;

  @media only screen and (max-width: 991px) {
    flex-basis: 62.5%;
    margin-top: 50px;
  }

  @media only screen and (max-width: 480px) {
    flex-basis: 75%;
  }
`

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      &:hover {
        background-color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }

    &.text {
      .btn-icon {
        svg {
          width: auto;
          height: 25px;
        }
      }
      &:hover {
        color: ${themeGet('colors.primaryHover', '#3C74FF')};
      }
    }
  }
`

export default BannerWrapper
