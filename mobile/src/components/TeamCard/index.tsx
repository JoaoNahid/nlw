import { View, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { getRealm } from '../../database/realm';

export interface TeamCardProps {
  id: string,
  selecao: string,
  prefix: string,
  stickers: string,
  cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps{
  data: TeamCardProps,
}


export function TeamCard({data, ...rest }: Props) {
  const [stickersAmount, setStickersAmount] = useState<any>(0)

  useEffect(() => {
    fetchStickersAmount();
  }, [])

  async function fetchStickersAmount(){
    const realm = await getRealm()
    try {
      const stickers = realm.objects("Stickers").filtered(`prefix = '${data.prefix}'`)
      setStickersAmount(stickers.length)      
    } catch (error) {
      // console.log(error)
    } finally{
      // realm.close()      
    }
  }
  
  const navigation = useNavigation();

  function toTeamScreen(){
    navigation.navigate('Team',{
      id: data.id,
      prefix: data.prefix,
      country: data.selecao
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
            {stickersAmount} figurinha(s)
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}