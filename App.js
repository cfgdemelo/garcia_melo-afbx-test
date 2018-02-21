import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Font } from 'expo';

class HomeScreen extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    await Font.loadAsync({
      'roboto': require('./assets/fonts/Roboto-Medium.ttf'),
    });

    this.setState({fontLoaded: true});
  }

  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Image source={{uri: 'https://affiniboxclub.com.br/wp-content/uploads/2018/01/logo_affinibox.png'}} style={{height: 100, width: null, flex: 1}}/>
          <Button full={true} onPress={this._handlePress}>
            {
              this.state.fontLoaded ? (
                <Text style={{fontFamoly: 'roboto', fontSize: 25}}>Ir para o Feed</Text>
              ) : null
            }
          </Button>
          <Button info full={true}>
          {
              this.state.fontLoaded ? (
            <Text style={{fontFamoly: 'roboto', fontSize: 25}}>Informações</Text>
              ) : null
          }
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