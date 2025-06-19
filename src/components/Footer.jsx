import React from "react";
import styled from "styled-components";
import { Row, Col, Divider, Typography } from "antd";
import { CopyrightOutlined } from '@ant-design/icons';
import * as Constants from '../Utils/Constants';

import LogoFooter from '../assets/logo-footer.svg';
import FacebookLogo from '../assets/facebook.svg';
import InstagramLogo from '../assets/instagram.svg';
import TwitterLogo from '../assets/twitter.svg';

import Logo from "./Logo";
import Informations from "./Informations";


const Footer = () => {

  return (
    <ContainerFooter className="Footer">
      <Row style={{ marginTop: '50px' }}>
        <Col span={5} offset={0} style={{ gap: '20px' }}>
          <Row>
            <Logo logoImage={LogoFooter} />
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <Typography.Paragraph style={{ color: "#FFF", fontFamily: 'Inter' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </Typography.Paragraph>
          </Row>
          <Row style={{ marginTop: '50px' }}>
            <SocialMediaLogo src={FacebookLogo} style={{ marginRight: '50px' }} />
            <SocialMediaLogo src={InstagramLogo} style={{ marginRight: '50px' }} />
            <SocialMediaLogo src={TwitterLogo} style={{ marginRight: '50px' }} />
          </Row>
        </Col>
        <Col span={3} offset={4}>
          <Informations data={Constants?.Information} />
        </Col>
        <Col span={3} offset={2}>
          <Informations data={Constants?.Categories} />
        </Col>
        <Col span={3} offset={2}>
          <Informations data={Constants?.Contact} />
        </Col>
      </Row>
      <Divider style={{ borderColor: "#FFF", marginTop: '75px' }}></Divider>
      <Row align='center' style={{ fontSize: '12px' }}>
        <CopyrightOutlined />
        2024 Digital College
      </Row>
    </ContainerFooter>
  )
}

export default Footer;

const ContainerFooter = styled.div`
  width: 100%;
  height: 454px;
  position: static;
  bottom: 0;
  left: 0;
  padding: 1% 3% 0 3%;
  box-sizing: border-box;
  background-color: ${Constants.dark_gray};
`
const SocialMediaLogo = styled.img`
    width: fit-content;
    height: 25px;
`