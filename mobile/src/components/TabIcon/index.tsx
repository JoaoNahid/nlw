import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props {
  label: string,
  image: ImageSourcePropType,
  focused: boolean
}

export function TabIcon({label, image, focused}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        resizeMode="contain"
        style={[styles.icon, focused? {backgroundColor: THEME.COLORS.SHAPE} : null]}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}