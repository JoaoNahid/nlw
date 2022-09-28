import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { Sticker } from '../../components/Sticker';
import { styles } from './styles';
import backgroundImg from '../../assets/bgWorldCup.png'
import { useRoute } from '@react-navigation/native';
import { TeamParams } from '../../@types/navigation';



export function Team() {

  const route = useRoute()
  const team = route.params as TeamParams

  console.log(team);
  

  return (
    <Background image={backgroundImg}>
      <Heading showDescription={true} title="Brasil" subtitle="Brazil">
        <View style={styles.container}>
          <View style={[styles.flexBetween, styles.stickerLine]}>
            <Sticker code="BRA 1" obtained={true} />
            <Sticker code="BRA 2" obtained={false} />
          </View>
        </View>
      </Heading>
    </Background>
  );
}