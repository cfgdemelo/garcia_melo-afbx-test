import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text } from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Button full={true}>
            <Text>Ir para o Feed</Text>
          </Button>
          <Button info full={true}>
            <Text>Informações</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}