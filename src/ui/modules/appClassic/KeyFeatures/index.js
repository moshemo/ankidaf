import React, { Fragment } from 'react'
import styled from 'styled-components'

import { useStaticQuery, graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { Icon as ReactIcon } from 'react-icons-kit'
import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline'
import { plus } from 'react-icons-kit/typicons/plus'
import { starOutline } from 'react-icons-kit/typicons/starOutline'
// import Text from 'Elements/Text'
import Heading from 'Elements/Heading'
import Image from 'Elements/Image'
import Container from 'Components/UI/Container'
import FeatureBlock from 'Components/FeatureBlock'
import { SectionHeader } from 'CSS/global'
import SectionWrapper, { FeatureWrapper } from './keyFeatures.style'

import { Icon as AntIcon, Row, Col, Typography } from 'antd'

import 'antd/dist/antd.css'

const { Text, Title } = Typography

const KeyFeatures = () => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        keyFeatures {
          slogan
          title
          features {
            id
            color
            icon {
              publicURL
            }
            title
          }
        }
      }
    }
  `)
  const { slogan, title, features } = data.appClassicJson.keyFeatures

  return (
    <SectionWrapper id="keyFeatures">
      <Container>
        <SectionHeader>
          <Fade up>
            <Heading as="h5" content={slogan} />
            <Heading content={title} />
          </Fade>
        </SectionHeader>
        <Row gutter={[48, 48]} justify="space-around" type="flex">
          <IconBox span={12}>
            <IconInner>
              <Icon type="bulb" theme="twoTone" twoToneColor="#73d13d" />
              <IconContent>
                <Title level={4}>Remember Anything</Title>
                <Description>
                  Est do do ea proident. Enim commodo consectetur anim pariatur
                  consequat exercitation.
                </Description>
              </IconContent>
            </IconInner>
          </IconBox>
          <IconBox span={12}>
            <IconInner>
              <Icon type="dashboard" theme="twoTone" twoToneColor="#ffa940" />
              <IconContent>
                <Title level={4}>Go at Your Own Pace</Title>
                <Description>
                  Est do do ea proident. Enim commodo consectetur anim pariatur
                  consequat exercitation.
                </Description>
              </IconContent>
            </IconInner>
          </IconBox>
        </Row>
        <Row gutter={[48, 48]} justify="space-around" type="flex">
          <IconBox span={12}>
            <IconInner>
              <Icon
                type="clock-circle"
                theme="twoTone"
                twoToneColor="#ffc53d"
              />
              <IconContent>
                <Title level={4}>Minimal Time Commitment</Title>
                <Description>
                  Est do do ea proident. Enim commodo consectetur anim pariatur
                  consequat exercitation.
                </Description>
              </IconContent>
            </IconInner>
          </IconBox>
          <IconBox span={12}>
            <IconInner>
              <Icon type="schedule" theme="twoTone" twoToneColor="#f759ab" />
              <IconContent>
                <Title level={4}>Review Anywhere</Title>
                <Description>
                  Est do do ea proident. Enim commodo consectetur anim pariatur
                  consequat exercitation.
                </Description>
              </IconContent>
            </IconInner>
          </IconBox>
        </Row>
        <Row gutter={[48, 48]} justify="space-around" type="flex">
          <IconBox span={12}>
            <IconInner>
              <Icon type="gold" theme="twoTone" twoToneColor="#ff4d4f" />
              <IconContent>
                <Title level={4}>Work at Your Level</Title>
                <Description>
                  Est do do ea proident. Enim commodo consectetur anim pariatur
                  consequat exercitation.
                </Description>
              </IconContent>
            </IconInner>
          </IconBox>
          <IconBox span={12}>
            <IconInner>
              <Icon type="smile" theme="twoTone" twoToneColor="#40a9ff" />
              <IconContent>
                <Title level={4}>100% Free</Title>
                <Description>
                  Est do do ea proident. Enim commodo consectetur anim pariatur
                  consequat exercitation.
                </Description>
              </IconContent>
            </IconInner>
          </IconBox>
        </Row>

        {/* <FeatureWrapper> */}

        {/* {features.map(item => (
            <Fade
              opposite
              delay={100 * item.id}
              key={`key-feature--key${item.id}`}
            >
              <FeatureBlock
                style={{ '--color': `${item.color}` }}
                icon={
                  <Fragment>
                    <Icon className="plus" icon={plus} />
                    <Icon className="circle" icon={mediaRecordOutline} />
                    <Image src={item.icon.publicURL} alt={item.title} />
                    <Icon className="star" icon={starOutline} />
                  </Fragment>
                }
                title={<Heading as="h3" content={item.title} />}
                // description={<Text content={item.description} />}
              />
            </Fade>
          ))} */}
        {/* </FeatureWrapper> */}
      </Container>
    </SectionWrapper>
  )
}

export default KeyFeatures

// --- STYLES

const IconBox = styled(Col)`
  &.ant-col {
    text-align: center;
  }
`

const Icon = styled(AntIcon)`
  &.anticon {
    border-radius: 9999px;
    /* box-shadow: 3px 4px 7px 0 rgba(0, 0, 0, 0.15); */
    font-size: 48px;
    padding: 24px;
  }
`

const IconInner = styled.div`
  background-color: #fff;
  box-shadow: 0 25px 70px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 24px;
`

const IconContent = styled.div`
  text-align: left;
  padding-left: 12px;
  padding-right: 18px;
`

const Description = styled(Text)`
  font-size: 16px;
`
