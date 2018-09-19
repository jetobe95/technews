import React from "react";
import { AppRegistry, Image, StatusBar,View } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Separator,
  Thumbnail
} from "native-base";
const routes = ["Home", "Technology", "Country"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
         <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:30}}>
          
              <Thumbnail
              source={require("../../assets/logo.png")}
              />
         <View>
             <Text style={{color:"white",marginBottom:6,fontWeight:'bold'}}>Donayd</Text>
             <Text style={{color:"white",fontSize:10}}>Donaydc@uninorte.edu.co</Text>
         </View>
         
       </View>
          
            <Separator bordered style={{marginTop: 0 }}>
              <Text>Technology</Text>
            </Separator>
            <ListItem button onPress={() => this.props.navigation.navigate("Home")}>
              <Text>Iphone</Text>
             
            </ListItem>
            <ListItem button onPress={() => this.props.navigation.navigate("Home")}>
              <Text>Android</Text>
             
            </ListItem>
            <Separator bordered>
              <Text>Country</Text>
            </Separator>
            <ListItem button onPress={() => this.props.navigation.navigate("HOME")}>
              <Text>Colombia</Text>
            </ListItem>
            <ListItem button onPress={() => this.props.navigation.navigate("HOME")}>
              <Text>Canadá</Text>
            </ListItem>
        </Content>
      </Container>
    );
  }
}
