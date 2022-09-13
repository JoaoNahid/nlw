import { View, Image } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { styles } from './styles';
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

export function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title="Encontre seu duo!" 
        subtitle="Selecione o game que deseja jogar..." 
      />

      {
        GAMES.map((item) =>{
          return (
            <GameCard 
              data={{
                ads: item.ads,
                name: item.name,
                cover: item.cover,
                id: item.id
              }}
            />
          )
        })
      }
      

    </View>
  );
}