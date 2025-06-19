import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Row, Typography } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';


const SectionDiv = ({ title, titleAlign, link, children }) => {
  const Navigate = useNavigate();

  const goLink = (href) => {
    Navigate(`${href}`);
  };

  return (
    <Container>
      <Row 
        justify='space-between' 
        align='middle'
        style={{ paddingLeft: titleAlign === 'center' ? '35%' : '0'}}
      >
        <Typography.Title>{title}</Typography.Title>
        {link?.text &&
          <Typography.Link onClick={() => goLink(link?.href)} >
            {link?.text} <ArrowRightOutlined />
          </Typography.Link>
        }
      </Row>
      {children && (
        <Row justify={'space-between'}>
          {children}
        </Row>
      )}
    </Container>
  )
}

export default SectionDiv;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  box-sizing: border-box;
`