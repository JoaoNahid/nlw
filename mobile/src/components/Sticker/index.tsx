import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface Props{
  code: string
}

export function Sticker({code}: Props) {
  return (
    <TouchableOpacity
      style={styles.stickerArea}
      activeOpacity={0.8}
    >
      <Text style={styles.stickerCode}>{code}</Text>
    </TouchableOpacity>
  );
}