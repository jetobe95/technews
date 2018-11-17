import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const BookLoading = ({size=64}) => (
    <Image
    style={{ height:size, width: size }}
    source={require('../../../assets/loading-book.gif')}
  />
    )
export default BookLoading;
