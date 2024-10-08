import { StyleSheet } from 'react-native';
import { height, width } from './dimensions';

const CommonStyles = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  margin_0: {
    margin: 0,
  },
  margin_1: {
    margin: height(1),
  },
  margin_2: {
    margin: height(2),
  },
  margin_3: {
    margin: height(3),
  },
  margin_4: {
    margin: height(4),
  },
  margin_5: {
    margin: height(5),
  },
  marginLeft_1: {
    marginLeft: width(1),
  },
  marginLeft_2: {
    marginLeft: width(2),
  },
  marginLeft_3: {
    marginLeft: width(3),
  },
  marginLeft_4: {
    marginLeft: width(4),
  },
  marginLeft_5: {
    marginLeft: width(5),
  },
  marginRight_1: {
    marginRight: width(1),
  },
  marginRight_2: {
    marginRight: width(2),
  },
  marginRight_3: {
    marginRight: width(3),
  },
  marginRight_4: {
    marginRight: width(4),
  },
  marginRight_5: {
    marginRight: width(5),
  },
  marginTop_1: {
    marginTop: height(1),
  },
  marginTop_2: {
    marginTop: height(2),
  },
  marginTop_3: {
    marginTop: height(3),
  },
  marginTop_4: {
    marginTop: height(4),
  },
  marginTop_5: {
    marginTop: height(5),
  },
  marginTop_7: {
    marginTop: height(7),
  },
  marginTop_9: {
    marginTop: height(9),
  },
  marginTop_10: {
    marginTop: height(10),
  },
  marginTop_12: {
    marginTop: height(12),
  },
  marginTop_15: {
    marginTop: height(15),
  },
  marginBottom_0: {
    marginBottom: height(0.5),
  },
  marginBottom_1: {
    marginBottom: height(1),
  },
  marginBottom_2: {
    marginBottom: height(2),
  },
  marginBottom_3: {
    marginBottom: height(3),
  },
  marginBottom_4: {
    marginBottom: height(4),
  },
  marginBottom_5: {
    marginBottom: height(5),
  },
  marginVertical_0: {
    marginVertical: height(0.5),
  },
  marginVertical_1: {
    marginVertical: height(1),
  },
  marginVertical_2: {
    marginVertical: height(2),
  },
  marginVertical_3: {
    marginVertical: height(3),
  },
  marginVertical_4: {
    marginVertical: height(4),
  },
  marginVertical_5: {
    marginVertical: height(5),
  },
  marginHorizontal_0: {
    marginHorizontal: height(0.5),
  },
  marginHorizontal_1: {
    marginHorizontal: height(1),
  },
  marginHorizontal_2: {
    marginHorizontal: height(2),
  },
  marginHorizontal_3: {
    marginHorizontal: height(3),
  },
  marginHorizontal_4: {
    marginHorizontal: height(4),
  },
  marginHorizontal_5: {
    marginHorizontal: height(5),
  },

  padding_0: {
    padding: 0,
  },
  padding_1: {
    padding: height(1),
  },
  padding_2: {
    padding: height(2),
  },
  padding_3: {
    padding: height(3),
  },
  padding_4: {
    padding: height(4),
  },
  padding_5: {
    padding: height(5),
  },
  paddingLeft_1: {
    paddingLeft: width(1),
  },
  paddingLeft_2: {
    paddingLeft: width(2),
  },
  paddingLeft_3: {
    paddingLeft: width(3),
  },
  paddingLeft_4: {
    paddingLeft: width(4),
  },
  paddingLeft_5: {
    paddingLeft: width(5),
  },
  paddingLeft_8: {
    paddingLeft: width(8),
  },
  paddingRight_1: {
    paddingRight: width(1),
  },
  paddingRight_2: {
    paddingRight: width(2),
  },
  paddingRight_3: {
    paddingRight: width(3),
  },
  paddingRight_4: {
    paddingRight: width(4),
  },
  paddingRight_5: {
    paddingRight: width(5),
  },
  paddingRight_8: {
    paddingRight: width(8),
  },
  paddingTop_1: {
    paddingTop: height(1),
  },
  paddingTop_2: {
    paddingTop: height(2),
  },
  paddingTop_3: {
    paddingTop: height(3),
  },
  paddingTop_4: {
    paddingTop: height(4),
  },
  paddingTop_5: {
    paddingTop: height(5),
  },
  paddingBottom_1: {
    paddingBottom: height(1),
  },
  paddingBottom_2: {
    paddingBottom: height(2),
  },
  paddingBottom_3: {
    paddingBottom: height(3),
  },
  paddingBottom_4: {
    paddingBottom: height(4),
  },
  paddingBottom_5: {
    paddingBottom: height(5),
  },
  paddingVertical_1: {
    paddingVertical: height(1),
  },
  paddingVertical_2: {
    paddingVertical: height(2),
  },
  paddingVertical_3: {
    paddingVertical: height(3),
  },
  paddingVertical_4: {
    paddingVertical: height(4),
  },
  paddingVertical_5: {
    paddingVertical: height(5),
  },
  paddingHorizontal_1: {
    paddingHorizontal: height(1),
  },
  paddingHorizontal_2: {
    paddingHorizontal: height(2),
  },
  paddingHorizontal_3: {
    paddingHorizontal: height(3),
  },
  paddingHorizontal_4: {
    paddingHorizontal: height(4),
  },
  paddingHorizontal_5: {
    paddingHorizontal: height(5),
  },
  row: {
    flexDirection: 'row',
  },
  rowJustify: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowAlignItemCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowAlignItemSelfCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rowJustifySpaceBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowJustifySpaceBtwCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xSmallIcon: {
    height: height(1.5),
    width: height(1.5),
    resizeMode: 'contain',
  },
  smallIcon: {
    height: height(2),
    width: height(2),
    resizeMode: 'contain',
  },
  mediumIcon: {
    height: height(3),
    width: height(3),
    resizeMode: 'contain',
  },
  largeIcon: {
    height: height(4),
    width: height(4),
    resizeMode: 'contain',
  },
  xLargeIcon: {
    height: height(6),
    width: height(6),
    resizeMode: 'contain',
  },
  xxLargeIcon: {
    height: height(7),
    width: height(7),
    resizeMode: 'contain',
  },
  columnAlignItemSelfCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  justifyAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
  },
});
export default CommonStyles;
