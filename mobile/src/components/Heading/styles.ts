import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32,
  },
  containerLogo: {
    width: '100%',
    paddingHorizontal: 32,
  },
  logo: {
    width: '100%',
    // alignItems: 'flex-start',
    marginTop: 74,
    marginLeft: -150
  },
  groupTitle :{
    paddingHorizontal: 32,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT
  },
  groupBox: {
    // marginBottom: 40
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK
  },
  subtitle: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});