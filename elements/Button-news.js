import React from "react";
import { View, Text, StyleSheet ,Dimensions} from "react-native";
import { Button } from "react-native-elements";
const {width}=Dimensions.get('window');
const ButtonNews = ({ title, onPress,color }) => (
  <Button
  textStyle={{paddingBottom:'1%'}}
    fontSize={20}
    onPress={onPress}
    backgroundColor={color}
    borderRadius={6}
    style={styles.botton}
    buttonStyle={styles.botton}
    title={title}
  />
);
export default ButtonNews;

const styles = StyleSheet.create({
  
  botton: {
    margin: '2%',
    width: width * 0.6,

}
});
