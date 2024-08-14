import {Dimensions} from 'react-native';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');
const handleSize = (num: number) => {
  if (num <= 0) {
    return 0;
  }
  if (num > 100) {
    return 1;
  }

  return num / 100;
};

export const width = (num: number) => screenWidth * handleSize(num);
export const height = (num: number) => screenHeight * handleSize(num);
