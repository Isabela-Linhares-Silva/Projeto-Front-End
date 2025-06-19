import React from "react";
import styled from "styled-components";
import { Row, Typography, Checkbox, Radio, ConfigProvider } from "antd";

import * as Constants from '../Utils/Constants';

const FilterGroup = ({ title, inputType, ListOptions }) => {

  return (
    <Container>
      <Row>
        <Typography.Title level={5}>
          {title}
        </Typography.Title>
      </Row>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Constants.primary, // cor usada no preenchimento
          },
        }}
      >

        {inputType === 'checkbox' ? (
          <Checkbox.Group style={{ display: 'flex', flexDirection: 'column' }} options={ListOptions} onChange={null} />
        ) : (
          <Radio.Group style={{ display: 'flex', flexDirection: 'column' }} options={ListOptions} onChange={null} />
        )}
      </ConfigProvider>
    </Container>
  )
}

export default FilterGroup;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 25px;
  position: relative;
  box-sizing: border-box;

  .Title {
    font-size: 14px;
    color: ${Constants.dark_gray_2}
  }

  .ant-checkbox-input {
    background-color: ${Constants.primary};
  }
`