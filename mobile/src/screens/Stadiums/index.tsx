import React from 'react';
import { Background } from '../../components/Background';
import backgroundImg from '../../assets/bgWorldCup.png'

import { styles } from './styles';
import { View } from 'react-native';
import { Sticker } from '../../components/Sticker';

export function Stadiums() {
  return (
    <Background image={backgroundImg}>
      <View style={styles.container}>
          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="FWC 1" obtained={true} />
            <Sticker code="FWC 2" obtained={true} />
            <Sticker code="FWC 3" obtained={false} />
            <Sticker code="FWC 4" obtained={false} />
            <Sticker code="FWC 5" obtained={true} />
            <Sticker code="FWC 6" obtained={false} />
            <Sticker code="FWC 7" obtained={false} />
            <Sticker code="FWC 8" obtained={false} />
            <Sticker code="FWC 9" obtained={false} />
            <Sticker code="FWC 10" obtained={false} />
          </View>
        </View>
    </Background>
  );
}