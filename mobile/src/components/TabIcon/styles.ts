import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    width: 35,
    height: 40,
    borderRadius: 50
  },
  label: {
    color: THEME.COLORS.PRIMARY,
    fontSize: THEME.FONT_SIZE.SM
  }
});