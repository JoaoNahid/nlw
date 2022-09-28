import React from 'react';
import { Background } from '../../components/Background';

import { styles } from './styles';
import backgroundImg from '../../assets/bgCoca.jpg'
import { View } from 'react-native';
import { Sticker } from '../../components/Sticker';

export function Coca() {
  return (
    <Background image={backgroundImg}>
      <View style={styles.container}>
          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="Cola 1" obtained={true} />
            <Sticker code="Cola 2" obtained={true} />
            <Sticker code="Cola 3" obtained={false} />
            <Sticker code="Cola 4" obtained={false} />
            <Sticker code="Cola 5" obtained={true} />
            <Sticker code="Cola 6" obtained={false} />
            <Sticker code="Cola 7" obtained={false} />
            <Sticker code="Cola 8" obtained={false} />
          </View>
        </View>
    </Background>
  );
}