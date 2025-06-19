import React, { useState } from "react";
import styled from "styled-components";
import { Row, Tag } from "antd";
import * as Colors from "../Utils/Constants";

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
  };

  const renderSquareOptions = () => (
    <Row>
      {options.map((item, index) => (
        <Tag
          key={index}
          style={{
            display: type === "text" ? "flex" : "block",
            width: "auto",
            minWidth: "46px",
            height: "46px",
            fontSize: type === "text" ? "24px" : undefined,
            color: type === "text" ? `${Colors.dark_gray_2}` : undefined,
            border: selected === item
              ? `2px solid ${Colors.primary}`
              : `1px solid ${Colors.light_gray_2}`,
            borderRadius: radius,
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
          color={type === "color" ? item : undefined}
          onClick={() => handleSelect(item)}
        >
          {type === "text" ? item : null}
        </Tag>
      ))}
    </Row>
  );

  const renderCircleOptions = () => (
    <Row>
      {options.map((item, index) => (
        <Tag
          key={index}
          style={{
            display: type === "text" ? "flex" : "block",
            width: "31px",
            height: "31px",
            fontSize: type === "text" ? "20px" : undefined,
            color: type === "text" ? `${Colors.dark_gray_2}` : undefined,
            border: selected === item
              ? `2px solid ${Colors.primary}`
              : `1px solid ${Colors.light_gray_2}`,
            borderRadius: "50%",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxSizing: "border-box",
          }}
          color={type === "color" ? item : undefined}
          onClick={() => handleSelect(item)}
        >
          {type === "text" ? item : null}
        </Tag>
      ))}
    </Row>
  );

  return (
    <Container>
      {shape === "square" ? renderSquareOptions() : renderCircleOptions()}
    </Container>
  );
};

export default ProductOptions;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0;
  box-sizing: border-box;
`;