import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerLogo: {
    width: '100%',
    paddingHorizontal: 32,
  },
  logo: {
    width: '100%',
    marginTop: 74,
    textAlign: 'left'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    marginVertical: 12
  },
  groupTitle :{
    paddingHorizontal: 32,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT
  },
  groupBox: {
    marginBottom: 40
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