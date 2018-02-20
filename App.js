import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text } from 'native-base';

import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Button full={true} onPress={this._handlePress}>
            <Text>Ir para o Feed</Text>
          </Button>
          <Button info full={true}>
            <Text>Informações</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
});