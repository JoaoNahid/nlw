import { useState } from 'react';
import { View, Image, FlatList, ScrollView, Text, Animated } from 'react-native';

import logoImg from '../../assets/logoCopa.png'
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { TeamCard } from '../../components/TeamCard';
import { EQUIPES } from '../../utils/equipes';
import { Background } from '../../components/Background';
import backgroundImg from '../../assets/bgWorldCup.png'


export function Home() {

  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  return (
    <Background image={backgroundImg}>
      <Heading showDescription={true} title="Álbum de Figurinhas" subtitle="Grupos">
        <View
          style={styles.container}
        >
        {
          EQUIPES.map(grupo => {
            return(
              <View style={styles.groupBox}>
                <Text style={styles.groupTitle}>{grupo.grupo}</Text>
                <FlatList
                key={grupo.id}
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
      
      

    </Background>
  );
}