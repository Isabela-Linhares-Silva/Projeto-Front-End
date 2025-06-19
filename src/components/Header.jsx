import React, { useState } from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import styled from "styled-components";
import { Row, Col, Input, Button, Tabs, ConfigProvider, Badge, message, Typography } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './Styles.less'
import LogoHeader from '../assets/logo-header.svg'

import * as Colors from "../Utils/Constants";
import Logo from './Logo';

const Header = () => {
  const [countCart, setCountCart] = useState(3);
  const [messageApi, contextHolder] = message.useMessage();
  const Navigate = useNavigate();
  const location = useLocation();
  
  const pathToKey = {
    "/home": "1",
    "/produtos": "2",
    "/categorias": "3",
    // "/meus-pedidos": "4",
  };

  const keyToPath = {
    "1": "/home",
    "2": "/produtos",
    "3": "/categorias",
    // "4": "/meus-pedidos",
  };

  const currentKey = pathToKey[location.pathname] || "1"; // Default to '1' (home)

  const handleTabChange = (key) => {
    Navigate(keyToPath[key]);
  };

  const ItensNavigate = [
    { key: "1", label: <Typography.Text style={{ color: 'inherit'}} >Home</Typography.Text> },
    { key: "2", label: <Typography.Text style={{ color: 'inherit'}} >Produtos</Typography.Text> },
    { key: "3", label: <Typography.Text style={{ color: 'inherit'}} >Categorias</Typography.Text> },
    { key: "4", label: <Typography.Text style={{ color: 'inherit'}} >Meus Pedidos</Typography.Text> },
  ];

  const info = (message) => {
    messageApi.info(`Você clicou em: ${message}`);
  };

  return (
    <ContainerHeader>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Colors.primary,
            borderRadius: 2,
            colorBgContainer: Colors.white, 
          },
        }}
      >
        <Row justify="space-between" align="middle" style={{ padding: ' 30px 100px'}}>
          <Col span={5}>
            <Logo logoImage={LogoHeader} />
          </Col>

          <Col span={10}>
            <Input
              placeholder="Buscar produtos..."
              className="InputSearch"
              suffix={<SearchOutlined />}
            />
          </Col>

          <Col span={3}>
            <Button
              className="Button Register"
              type="icon"
              onClick={() => info('Cadastre-se')}
            >
              Cadastre-se
            </Button>
          </Col>

          <Col span={3}>
            <Button
              className="Button Login"
              onClick={() => info('Entrar')}
            >
              Entrar
            </Button>
          </Col>

          <Col span={3}>
            <Button
              type="icon"
              className="Button Cart"
              onClick={() => setCountCart((prev) => prev += 1)}
            >
              <Badge count={countCart} >
                <ShoppingCartOutlined style={{ fontSize: '36px', color: Colors.primary}} />
              </Badge>
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs
              type="line"
              activeKey={currentKey} // 🔑 Ativo conforme rota
              onChange={handleTabChange} // 🚀 Navega ao clicar
              style={{ marginTop: "40px" }}
              items={ItensNavigate}
            />
          </Col>
        </Row>
      </ConfigProvider>
    </ContainerHeader>



  )
}

export default Header;

const ContainerHeader = styled.div`
  width: 100%;
  height: 192px;
  padding: 0;
  box-sizing: border-box;

  .ant-tabs.nav, .ant-tabs-nav-wrap {
    padding: 0 100px;
  }
`