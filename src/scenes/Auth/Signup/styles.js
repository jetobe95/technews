import { Dimensions } from 'react-native';
const { width } = Dimensions.get('screen');

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width
  },
  TextInput: {
    width: '80%',

    backgroundColor: 'white',
    borderRadius: 6,

    padding: 10,
    marginLeft: 6,
    marginVertical: 10
  },

  botton: {
    margin: 5,
    width: width * 0.9
  }
};
export default styles;
