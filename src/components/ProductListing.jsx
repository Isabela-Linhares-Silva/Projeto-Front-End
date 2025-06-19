import React from "react";
import styled from "styled-components";
import { Row, Col, List } from "antd";

import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {

  return (
    <Container>
      <List
        grid={{
          gutter: 80,
          column: 4,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <ProductCard
              image={item.image} 
              name={item.name} 
              price={item.price} 
              priceDiscount={item.priceDiscount}
            />
          </List.Item>
        )}
      />

    </Container>
  )
}

export default ProductListing;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
`