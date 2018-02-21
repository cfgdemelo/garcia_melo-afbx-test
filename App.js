import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text } from 'native-base';

import {
  StackNavigator,
} from 'react-navigation';
import { Image } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  static navigationOptions = {
    title: 'Home'
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Image source={{uri: 'https://affiniboxclub.com.br/wp-content/uploads/2018/01/logo_affinibox.png'}} style={{height: 100, width: null, flex: 1}}/>
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