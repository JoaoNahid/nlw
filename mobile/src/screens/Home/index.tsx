import { useCallback, useState } from 'react';
import {useFocusEffect, useIsFocused} from '@react-navigation/native'
import { View, Image, FlatList, ScrollView, Text, Animated } from 'react-native';

import logoImg from '../../assets/logoCopa.png'
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { TeamCard } from '../../components/TeamCard';
import { EQUIPES } from '../../utils/equipes';
import { Background } from '../../components/Background';
import backgroundImg from '../../assets/bgWorldCup.png'
import { getRealm } from '../../database/realm';
import { Loading } from '../../components/Loading';


export function Home() {
  const [stickersAmount, setStickersAmount] = useState<any>()
  const isFocused = useIsFocused();

  useFocusEffect(useCallback(() => {
    
    fetchStickersAmount();
  }, []))

  async function fetchStickersAmount(){
    
    const realm = await getRealm()

    try {
      const stickers = realm.objects("Stickers")
      setStickersAmount(stickers.length)      
    } catch (error) {
      console.log(error)
    } finally{
      realm.close()      
    }
  }

  return (
    <Background image={backgroundImg}>
      { isFocused?
        <Heading showDescription={true} title="Álbum de Figurinhas" subtitle={`${stickersAmount} de 670 figurinahs`}>
          <View
            style={styles.container}
          >
          { 
              EQUIPES.map((grupo, index: number) => {
                return(
                  <View key={index} style={styles.groupBox}>
                    <Text style={styles.groupTitle}>{grupo.grupo}</Text>
                    <FlatList
                    key={index}
                    data={grupo.equipes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TeamCard 
                        data={item}
                      />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                  />
                  </View>
                )
              })          
          }
          </View>
        </Heading>
          : <Loading />
        }
      
      

    </Background>
  );
}