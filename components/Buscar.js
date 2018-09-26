import React, { Component } from "react";
import { 
    View,
    StyleSheet
} from "react-native";
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
class Buscar extends Component {
    render() {
        return (
            <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
              </Item>
              <Button transparent>
                <Text>Buscar</Text>
              </Button>
            </Header>
          </Container>
        );
    }
}
export default Buscar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});