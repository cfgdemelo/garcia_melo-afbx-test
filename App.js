import React, { Component } from 'react';
import { ActivityIndicator, View, ListView } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Body, Title, Text, Card, CardItem, Thumbnail, Left, Right } from 'native-base';
import { StackNavigator } from 'react-navigation';
import { Image, Dimensions, Linking } from 'react-native';
import { Font } from 'expo';

const windowWidth = Dimensions.get('window').width;
const windowWidthHalf = Dimensions.get('window').width / 2;
var offers = [];
var offersCatched = false;

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
          <Image source={{uri: 'https://affiniboxclub.com.br/wp-content/uploads/2018/01/logo_affinibox.png'}} style={{height: 100, width: windowWidth, flex: 1, justifyContent: "center"}}/>
          <Button full={true} onPress={() => this.props.navigation.navigate('Feed')}>
            <Text>Ir para o Feed</Text>
          </Button>
          <Button info full={true} onPress={() => this.props.navigation.navigate('Info')}>
            <Text>Informações</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

class InfoScreen extends Component {
  static navigationOptions = {
    title: 'Info'
  };

  render() {
    return (
      <Container>
          <Content>
            <Card>
              <CardItem cardBody>
                <Image source={{uri: "http://cfgdemelo.com.br/img/profile.jpg"}} style={{height: 300, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Feito por Caio Felipe Garcia de Melo</Text>
                </Left>
              </CardItem>
              <CardItem>
                <Left>
                  <Icon active name="logo-github" />
                </Left>
                <Body>
                  <Button onPress={() => {Linking.openURL('https://github.com/cfgdemelo/garcia_melo-afbx-test')}}>
                    <Text>Abrir projeto</Text>
                  </Button>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Icon active name="logo-linkedin"/>
                </Left>
                <Body>
                  <Button onPress={() => {Linking.openURL('https://linkedin.com/in/cfgdemelo')}}>
                    <Text>Contratar</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
    );
  }
}

export class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    return fetch('https://sandbox-api.lomadee.com/v2/15072100846841ecfe32c/offer/_bestsellers?sourceId=35850224')
    .then((response) => response.json())
    .then((responseJson) => {
      for (item in responseJson) {
        var offerItem = responseJson.offers;
        var offerItemLength = offerItem.length;
        if (!offersCatched) {
          for (var i = 0; i < offerItemLength; i++) {
            offers.push(offerItem[i]);
          }
          offersCatched = true;
        }
      }
      this.setState({
        isLoading: false
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderCards() {
    return offers.map((item) => {
      return {
        
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Image source={{uri: 'http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif'}} style={{height: 100, width: windowWidth, flex: 1, justifyContent: "center"}}/>
      );
    }
    return (
      <Container>
        <Content>
          <Card dataArray={offers}
                renderRow={(offer) =>
                  <Card>
                    <CardItem cardBody>
                      <Image source={{uri: offer.thumbnail}} style={{height: 100, width: 100, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Icon active name="phone-portrait" />
                      </Left>
                      <Body>
                        <Text>{offer.product.shortName}</Text>
                      </Body>
                      <Right>
                      </Right>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Icon active name="pricetag" />
                      </Left>
                      <Body>
                        <Text>R${offer.price}</Text>
                      </Body>
                      <Right>
                      </Right>
                    </CardItem>
                  </Card>
              }>
          </Card>
        </Content>
      </Container>
    );
  }
}

const RootStack =  StackNavigator(
  {
  Home: {
    screen: HomeScreen,
  },
  Feed: {
    screen: FeedScreen,
  },
  Info: {
    screen: InfoScreen,
  }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}