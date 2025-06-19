import React, { useEffect } from "react";
import styled from "styled-components";
import { Row, Typography, Rate, Button, message } from "antd";
import * as Colors from "../Utils/Constants";

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const info = (message) => {
    messageApi.info(`Você clicou em: ${message}`);
  };
  
  useEffect(() => {
  }, [
    name, 
    reference, 
    stars, rating, 
    price, 
    priceDiscount, 
    description, 
    children
  ]);


  return (
    <Container $priceDiscount={priceDiscount}>
      {contextHolder}
      <Row className="Name">{name}</Row>
      <Row className="Reference">{reference}</Row>
      <Row className="Rating" align='middle'><Rate allowHalf disabled  defaultValue={stars} /> {rating}</Row>
      <Row style={{ gap: '15px' }}>
        {priceDiscount > 0 ? (
          <>
            <Row className="PriceDiscount">R${Number(priceDiscount).toFixed(2)}</Row>
            <Row 
              align='bottom'
              style={{
                fontSize: '16px',
                color: `${Colors.light_gray_2}`,
                textDecoration: 'line-through',
              }}
            >
              R${Number(price).toFixed(2)}
            </Row>
          </>
        ) : (
          <Row className="Price">R${Number(price).toFixed(2)}</Row>
        )}
      </Row>
      <Row className="Description">{description}</Row>
      <Row className="">{children}</Row>
      <Row>
        <Button
          className="BuyButton"
          onClick={() => info('Comprar')}
        >
          Comprar
        </Button>
      </Row>
    </Container>
  );
};

export default BuyBox;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* box-sizing: border-box; */

  .Name {
    font-size: 32px;
    color: ${Colors.dark_gray}
  }
  .Reference {
    font-size: 12px;
    color: ${Colors.dark_gray_3};
  }
  .Rating {
    font-size: 14px;
    color: ${Colors.light_gray};
    gap: 15px;
  }
  .Price {
    font-size: 32px;
    color: ${Colors.dark_gray_2};
  }
  .PriceDiscount {
    font-size: 32px;
    color: ${Colors.dark_gray_2};
  }
  .Description {
    font-size: 14px;
    color: ${Colors.dark_gray_2};
  }
  .BuyButton {
    background-color: ${Colors.warning};
    color: ${Colors.white};
    font-size: 16px;
  }
`;