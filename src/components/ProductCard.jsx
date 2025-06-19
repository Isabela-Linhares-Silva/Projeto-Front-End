import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Typography } from "antd";
import * as Colors from '../Utils/Constants';

const ProductCard = ({image, name, price, priceDiscount}) => {

  return (
    <Container>
      <Row>
        <Col span={24}>
          <Image
            src={image}
            preview={false}
            width='100%'
            height={321}
          />
        </Col>
      </Row>
      <Row>
        <Typography.Text style={{ fontSize: 24}}>
          {name}
        </Typography.Text>
      </Row>
      <Row justify="space-between">
        <Typography.Text
          className="Price"
          style={{
            color: priceDiscount ? Colors.light_gray : Colors.dark_gray,
            textDecoration: priceDiscount ? 'line-through' : 'none',
          }}
        >
          R${Number(price).toFixed(2)}
        </Typography.Text>
        {priceDiscount && (
          <Typography.Text className="PriceDiscount">
          R${Number(priceDiscount).toFixed(2)}
        </Typography.Text>
        )}
      </Row>
    
    </Container>
  )
}

export default ProductCard;

const Container = styled.div`
  width: 292px;
  height: auto;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
`