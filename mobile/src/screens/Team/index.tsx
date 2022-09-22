import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { Sticker } from '../../components/Sticker';
import { styles } from './styles';


export function Team() {
  return (
    <Background>
      <Heading showDescription={true} title="Brasil" subtitle="Brazil">
        <View style={styles.container}>
          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="BRA 1" />
            <Sticker code="BRA 2" />
          </View>

          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="BRA 1" />
            <Sticker code="BRA 2" />
          </View>

          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="BRA 1" />
            <Sticker code="BRA 2" />
          </View>

          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="BRA 1" />
            <Sticker code="BRA 2" />
          </View>

          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="BRA 1" />
            <Sticker code="BRA 2" />
          </View>
        </View>
      </Heading>
    </Background>
  );
}