import { ImageBackground, ImageSourcePropType } from 'react-native';

import { styles } from './styles';
import backgroundImg from '../../assets/bgWorldCup.png'

interface Props {
  children: React.ReactNode,
  image: ImageSourcePropType
}

export function Background({ children, image }: Props) {
  return (
    <ImageBackground 
      source={image}
      style={styles.container}
      defaultSource={backgroundImg} 
    >
      {children}
    </ImageBackground>
  );
}