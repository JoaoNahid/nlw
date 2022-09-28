import { View, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export interface TeamCardProps {
  id: string,
  selecao: string,
  stickers: string,
  cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps{
  data: TeamCardProps,
}


export function TeamCard({data, ...rest }: Props) {
  
  const navigation = useNavigation();

  function toTeamScreen(){
    console.log(data);
    navigation.navigate('Team',{
      id: data.id,
      title: data.selecao
    })
    
  }


  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7}
      onPress={toTeamScreen}
    >
      <ImageBackground 
        style={styles.cover}
        source={data.cover}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.selecao}
          </Text>

          <Text style={styles.ads}>
            {data.stickers} figurinha(s)
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}