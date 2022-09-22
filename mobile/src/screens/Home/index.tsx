import { useState } from 'react';
import { View, Image, FlatList, ScrollView, Text, Animated } from 'react-native';

import logoImg from '../../assets/logoCopa.png'
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { TeamCard } from '../../components/TeamCard';
import { EQUIPES } from '../../utils/equipes';
import { Background } from '../../components/Background';


export function Home() {

  const [scrollY, setScrollY] = useState(new Animated.Value(0))

  return (
    <Background>
      <Heading showDescription={true} title="Álbum de Figurinhas" subtitle="Grupos">
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
      </Heading>
      
      

    </Background>
  );
}