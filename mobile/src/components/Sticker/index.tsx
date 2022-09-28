import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface Props{
  code: string,
  obtained: boolean
}

export function Sticker({code, obtained}: Props) {
  return (
    <TouchableOpacity
      style={[styles.stickerArea, obtained? {backgroundColor: '#52c2b0'}:null]}
      activeOpacity={0.8}
    >
      <Text style={[styles.stickerCode, obtained? {backgroundColor: '#52c2b0'}:null]}>{code}</Text>
      {obtained? <Text style={styles.stickerCode}>Obtida!</Text> : null}
    </TouchableOpacity>
  );
}