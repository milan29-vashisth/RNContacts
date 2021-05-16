import {StyleSheet} from 'react-native';
import color from '../../../assets/theme/color';

export default StyleSheet.create({
  wrapper: {
    height: 42,

    paddingHorizontal: 5,

    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: color.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
